export default class Person {
  id: number;
  position: {x: number, y: number};
  size: number = 0;
  constructor(id: number, position: {x: number, y: number}) {
    this.id = id;
    this.position = position;
  }
}
