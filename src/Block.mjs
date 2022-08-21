export class Block {
  shape;
  color;
  falling;

  constructor(shape ="X", color="white") {
    this.color = color;
    this.shape = shape;
    this.falling = true; // tracks if the block is falling
    this.floorCount = 0;
  }
}
