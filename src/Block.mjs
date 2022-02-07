export class Block {
  color;

  constructor(color) {
    this.color = color;
    this.isFalling = true;
    this.isOnBottom = false;
  }
  stop() {
    this.isFalling = false;
  }
  start() {
    this.isFalling = true;
  }
  reachBottom() {
    this.isOnBottom = true;
  }
}
