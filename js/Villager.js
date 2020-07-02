import * as GameConstants from "./GameConstants.js";
import Person from "./Person.js";

const VILLAGER_SIZE = GameConstants.VILLAGER_SIZE;
/*
  This is a Villager class which represents an in-game villager and encapsulates all its functionality
*/
export default class Villager extends Person{
  constructor(id, position) {
    super(id, position);
    this.size = VILLAGER_SIZE;
  }
}
