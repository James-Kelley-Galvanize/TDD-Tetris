import { RotatingShape } from "./RotatingShape.mjs";

export const Tetromino = {
  get T_SHAPE() {
    let stringVersion = `.T.
    TTT
    ...`;
    return new RotatingShape(stringVersion);
  },
};
