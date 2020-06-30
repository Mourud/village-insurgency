import Villager from './Villager.js'
/*
  This is a Villager class which represents an in-game villager and encapsulates all its functionality
*/
export default class Player{

  constructor(color, population, food, gold) {
    this.color = color;
    this.foodAmount = food;
    this.goldAmount = gold;
    this.registry = [];
    for (let i = 0; i < population; i++) {
      this.createVillager();
    }
  }

  createVillager() {
    this.registry.push(new Villager(this.registry.length))
  }
}