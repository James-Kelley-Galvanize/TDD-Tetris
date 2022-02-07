import { RotatingShape } from "./RotatingShape.mjs";

class T_SHAPE extends RotatingShape {
  constructor() {
    super(`.T.
    TTT
    ...`);
  }
}
class I_Shape extends RotatingShape {
  constructor(vertical) {
    super(
      vertical
        ? `..I..
    ..I..
    ..I..
    ..I..
    .....`
        : `.....
        .....
        IIII.
        .....
        .....`
    );
    this.vertical = vertical;
    this.rotateLeft = this.rotate;
    this.rotateRight = this.rotate;
  }
  rotate() {
    return new I_Shape(!this.vertical);
  }
}
class O_Shape extends RotatingShape {
  constructor() {
    super(`.OO
    .OO
    ...`);
    this.rotateLeft = this.rotate;
    this.rotateRight = this.rotate;
  }
  rotate() {
    return this;
  }
}

export const Tetromino = {
  get T_SHAPE() {
    return new T_SHAPE();
  },
  get I_SHAPE() {
    return new I_Shape();
  },
  get O_SHAPE() {
    return new O_Shape();
  },
};
