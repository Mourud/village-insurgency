import Villager from "./Villager.js";
import Soldier from "./Villager.js";
import * as GameConstants from "./GameConstants.js";

const TH_LENGHT = GameConstants.TOWNHALL_LENGHT;
const SPAWN_FACTOR_X = 500;
const SPAWN_FACTOR_Y = 250;

const PLAYER_ONE_COLOR = GameConstants.PLAYER_ONE_COLOR;

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
    //---------------------------
    this.movesLeft = 100000;
    this.foodAmount = 100000;
    //------------------------------
    //TODO: SIMPLE PATCH. FIX TO BETTER SOLUTION
    for (let i = 0; i < population; i++) {
      this.createVillager();
    }
    this.foodAmount = food;
    this.goldAmount = gold;
    this.movesLeft = this.registry.length;
  }

  createVillager() {
    if (this.movesLeft) {
      if (this.foodAmount >= 10) {
        // TODO: Change costs to constants in game. (MAKE CONSTANTS FILE)
        this.movesLeft--;
        this.foodAmount -= 10;
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
      if (this.foodAmount >= 10) {
        if (this.goldAmount >= 10) {
          this.movesLeft--;
          this.foodAmount -= 10;
          this.goldAmount -= 10;
          this.registry.push(new Soldier(this.registry.length));
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
