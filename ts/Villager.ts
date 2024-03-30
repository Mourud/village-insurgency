import * as GameConstants from "./GameConstants.js";
import Person from "./Person.js";

const VILLAGER_SIZE = GameConstants.VILLAGER_SIZE;
/*
  This is a Villager class which represents an in-game villager and encapsulates all its functionality
*/
export default class Villager extends Person {
  size: number;
  constructor(id: number, position: {x: number, y: number}) {
    super(id, position); // Convert id to number
    this.size = VILLAGER_SIZE;
  }
}
