import { Tetromino } from "../src/Tetromino.mjs";

function distinctOrientations(shape) {
  const distinct = new Set();
  let goingRight = shape;
  let goingLeft = shape;
  for (let i = 0; i < 10; i++) {
    distinct.add(goingRight.toString());
    goingRight = goingRight.rotateRight();
    distinct.add(goingLeft.toString());
    goingLeft = goingLeft.rotateLeft();
  }
  return distinct;
}

describe("The T shape", () => {
  const shape = Tetromino.T_SHAPE;

  it("initial orientation", () => {
    expect(shape.toString()).toEqualShape(
      `.T.
       TTT
       ...`
    );
  });

  it("can be rotated right/clockwise", () => {
    expect(shape.rotateRight().toString()).toEqualShape(
      `.T.
       .TT
       .T.`
    );
  });

  it("can be rotated left/counter-clockwise", () => {
    expect(shape.rotateLeft().toString()).toEqualShape(
      `.T.
       TT.
       .T.`
    );
  });

  it("has 4 distinct orientations", () => {
    expect(distinctOrientations(shape).size).toEqual(4);
  });
});

xdescribe("The I shape", () => {
  const shape = Tetromino.I_SHAPE;

  xit("initial orientation", () => {
    expect(shape.toString()).toEqualShape(
      `.....
       .....
       IIII.
       .....
       .....`
    );
  });

  xit("can be rotated right/clockwise", () => {
    expect(shape.rotateRight().toString()).toEqualShape(
      `..I..
       ..I..
       ..I..
       ..I..
       .....`
    );
  });

  xit("can be rotated left/counter-clockwise", () => {
    expect(shape.rotateLeft().toString()).toEqualShape(
      `..I..
       ..I..
       ..I..
       ..I..
       .....`
    );
  });

  xit("has 2 distinct orientations", () => {
    expect(distinctOrientations(shape).size).toEqual(2);
  });
});

xdescribe("The O shape", () => {
  const shape = Tetromino.O_SHAPE;

  xit("initial orientation", () => {
    expect(shape.toString()).toEqualShape(
      `.OO
       .OO
       ...`
    );
  });

  xit("cannot be rotated right/clockwise", () => {
    expect(shape.rotateRight().toString()).toEqualShape(
      `.OO
       .OO
       ...`
    );
  });

  xit("cannot be rotated left/counter-clockwise", () => {
    expect(shape.rotateLeft().toString()).toEqualShape(
      `.OO
       .OO
       ...`
    );
  });

  xit("has 1 distinct orientations", () => {
    expect(distinctOrientations(shape).size).toEqual(1);
  });
});
