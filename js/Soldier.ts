import * as GameConstants from "./GameConstants.js";
import Person from "./Person.js";

const SOLDIER_SIZE = GameConstants.SOLDIER_SIZE;
/*
  This is a Soldier class which represents an in-game soldier and encapsulates all its functionality
*/
export default class Soldier extends Person {
  constructor(id, position) {
    super(id, position);
    this.size = SOLDIER_SIZE;
  }
}
