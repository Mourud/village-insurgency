import Villager from "./Villager.js";
import Soldier from "./Villager.js";

/*
  This is a Villager class which represents an in-game villager and encapsulates all its functionality
*/
export default class Player {
  constructor(color, population, food, gold) {
    this.color = color;
    this.registry = [];
    this.foodAmount = 100000; //TODO: SIMPLE PATCH. FIX TO BETTER SOLUTION
    for (let i = 0; i < population; i++) {
      this.createVillager();
    }
    this.foodAmount = food;
    this.goldAmount = gold;
    this.movesLeft = this.registry.length;
  }

  createVillager() {
    if (this.foodAmount >= 10) {
      // TODO: Change costs to constants in game. (MAKE CONSTANTS FILE)
      this.movesLeft--;
      this.foodAmount -= 10;
      this.registry.push(new Villager(this.registry.length));
    } else {
      alert("Insufficient Food");
    }
  }

  createSoldier() {
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
  }
}
