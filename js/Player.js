import Villager from "./Villager.js";
import Soldier from "./Villager.js";
import * as GameConstants from "./GameConstants.js";

const TH_LENGHT = GameConstants.TOWNHALL_LENGHT;
const SPAWN_FACTOR_X = 500;
const SPAWN_FACTOR_Y = 250;

const PLAYER_ONE_COLOR = GameConstants.PLAYER_ONE_COLOR;

const PERSON_COST = GameConstants.PERSON_COST;


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
    for (let i = 0; i < population; i++) {
      let position = this.findPosition();
      this.registry.push(new Villager(this.registry.length, position));
    }
    this.foodAmount = food;
    this.goldAmount = gold;
    this.movesLeft = this.registry.length;
  }

  createVillager() {
    if (this.movesLeft) {
      if (this.foodAmount >= PERSON_COST) {
        this.movesLeft--;
        this.foodAmount -= PERSON_COST;
        let position = this.findPosition();
        this.registry.push(new Villager(this.registry.length, position));
      } else {
        alert("Insufficient Food");
      }
    } else {
      alert("You have no moves remaining please End Turn");
    }
  }

  createSoldier() {
    if (this.movesLeft) {
      if (this.foodAmount >= PERSON_COST) {
        if (this.goldAmount >= PERSON_COST) {
          this.movesLeft--;
          this.foodAmount -= PERSON_COST;
          this.goldAmount -= PERSON_COST;
          let position = this.findPosition();
          this.registry.push(new Soldier(this.registry.length,position));
        } else {
          alert("Insufficient Gold");
          return;
        }
      } else {
        alert("Insufficient Food");
      }
    } else {
      alert("You have no moves remaining please End Turn");
    }
  }

  findPosition() {
    let x, y;
    if (this.color === PLAYER_ONE_COLOR) {
      x = Math.floor(Math.random() * SPAWN_FACTOR_X + TH_LENGHT);
      y = Math.floor(Math.random() * SPAWN_FACTOR_Y + TH_LENGHT);
    } else {
      x = P2_TH_POS.x - Math.floor(Math.random() * SPAWN_FACTOR_X + TH_LENGHT);
      y = P2_TH_POS.y - Math.floor(Math.random() * SPAWN_FACTOR_Y + TH_LENGHT);
    }
    return { x, y };
  }
}
