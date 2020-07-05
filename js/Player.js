import Villager from "./Villager.js";
import Soldier from "./Soldier.js";
import * as GameConstants from "./GameConstants.js";
import { g_MAP } from "./Game.js";

const GAME_WIDTH = GameConstants.GAMEBOX_WIDTH;
const GAME_HEIGHT = GameConstants.GAMEBOX_HEIGHT;

const TH_LENGHT = GameConstants.TOWNHALL_LENGHT;
const SPAWN_FACTOR_X = 600;
const SPAWN_FACTOR_Y = 600;

const PLAYER_ONE_COLOR = GameConstants.PLAYER_ONE_COLOR;

const PERSON_COST = GameConstants.PERSON_COST;
const POPULATION_CAP = GameConstants.POPULATION_CAP;

const P2_TH_POS = {
  x: GameConstants.P2_TOWNHALL_POSITION_X,
  y: GameConstants.P2_TOWNHALL_POSITION_Y,
};
/*
  This is a Villager class which represents an in-game villager and encapsulates all its functionality
*/
export default class Player {
  constructor(color, population, food, gold) {
    this.color = color;
    this.registry = [];
    for (let i = 0; i < 64; i++) {
      let position = this.findPosition();
      this.registry.push(new Villager(this.registry.length, position));
    }
    this.foodAmount = food;
    this.goldAmount = gold;
    this.movesLeft = this.registry.length;
  }

  createVillager() {
    if (g_MAP.length <= POPULATION_CAP) {
      if (this.movesLeft) {
        if (this.foodAmount >= PERSON_COST) {
          this.movesLeft--;
          this.foodAmount -= PERSON_COST;
          let position = this.findPosition();
          this.registry.push(new Villager(this.registry.length, position));
        } else {
          alert(
            "Insufficient Food. Gather some more food, send a villager to the farm."
          );
        }
      } else {
        alert("You have no moves remaining. Press End Turn.");
      }
    } else {
      alert("No more people can be made");
    }
  }

  createSoldier() {
    if (g_MAP.length >= POPULATION_CAP) {
      if (this.movesLeft) {
        if (this.foodAmount >= PERSON_COST) {
          if (this.goldAmount >= PERSON_COST) {
            this.movesLeft--;
            this.foodAmount -= PERSON_COST;
            this.goldAmount -= PERSON_COST;
            let position = this.findPosition();
            this.registry.push(new Soldier(this.registry.length, position));
          } else {
            alert(
              "Insufficient Gold. Gather some more food, send a villager to the gold mine."
            );
            return;
          }
        } else {
          alert(
            "Insufficient Food. Gather some more food, send a villager to the farm."
          );
        }
      } else {
        alert("You have no moves remaining. Press End Turn.");
      }
    } else {
      alert("No more people can be made");
    }
  }

  findPosition() {
    let position = this.randomPositionGenerator();
    // TODO: IMPLEMENT HASH TABLES?
    while (this.checkClash(position)) {
      position = this.randomPositionGenerator();
    }

    g_MAP.push(position);
    return position;
  }

  randomPositionGenerator() {
    let x, y;
    if (this.color === PLAYER_ONE_COLOR) {
      x = Math.floor(Math.random() * SPAWN_FACTOR_X + TH_LENGHT);
      y = Math.floor(Math.random() * SPAWN_FACTOR_Y);
    } else {
      x = P2_TH_POS.x - Math.floor(Math.random() * SPAWN_FACTOR_X + TH_LENGHT);
      y = P2_TH_POS.y - Math.floor(Math.random() * SPAWN_FACTOR_Y);
    }
    let position = { x, y };
    return position;
  }

  checkClash(position) {
    for (let i = 0; i < g_MAP.length; i++) {
      const pos = g_MAP[i];
      if (this.collidesPosition(position, pos)) {
        return true;
      }
    }
    return false;
  }

  collidesPosition(pos1, pos2) {
    //collision detection in x axis
    return (
      this.collidesXY(pos1.x, pos2.x) &&
      //collision detection in y axis
      this.collidesXY(pos1.y, pos2.y)
    );
  }

  collidesXY(x1, x2) {
    return x1 + 40 >= x2 && x1 < x2 + 40;
  }
}
