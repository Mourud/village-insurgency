export default class Person {
  constructor(id, position, size) {
    this.id = id;
    this.position = position;
    this.size = size;
  }

  findPerson(mouse) {
    if (this.selection(mouse)) return this;
  }

  selection(mouse) {
    //collision detection in x axis
    console.log(this.position,mouse)
    return (
      this.position.x <= mouse.x &&
      this.position.x + this.size >= mouse.x &&
      //collision detection in y axis
      this.position.y <= mouse.y &&
      this.position.y + this.size >= mouse.y
    );
  }
}
