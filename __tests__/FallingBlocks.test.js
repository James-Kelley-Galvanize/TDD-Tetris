import { Board } from "../src/Board.mjs";
import { Block } from "../src/Block.mjs";

describe("Falling blocks", () => {
  let board;
  beforeEach(() => {
    board = new Board(3, 3);
  });

  it("The board starts empty", () => {
    expect(board.toString()).toEqualShape(
      `...
       ...
       ...`
    );
  });

  describe("When a block is dropped", () => {
    beforeEach(() => {
      board.drop(new Block("X"));
    });

    it("it starts from the top middle", () => {
      expect(board.toString()).toEqualShape(
        `.X.
         ...
         ...`
      );
    });

    it("it moves down one row per tick", () => {
      board.tick();

      expect(board.toString()).toEqualShape(
        `...
         .X.
         ...`
      );
    });

    it("at most one block may be falling at a time", () => {
      const before = board.toString();
      expect(() => board.drop(new Block("Y"))).toThrow("already falling");
      const after = board.toString();
      expect(after).toEqual(before);
    });
  });

  describe("When a block reaches the bottom", () => {
    beforeEach(() => {
      board.drop(new Block("X"));
      board.tick();
      board.tick();
    });

    it("it is still moving on the last row", () => {
      expect(board.toString()).toEqualShape(
        `...
         ...
         .X.`
      );
      expect(board.hasFalling()).toBe(true);
    });

    it("it stops when it hits the bottom", () => {
      board.tick();

      expect(board.toString()).toEqualShape(
        `...
         ...
         .X.`
      );
      expect(board.hasFalling()).toBe(false);
    });
  });

  describe("When a block lands on another block", () => {
    beforeEach(() => {
      board.drop(new Block("X"));
      board.tick();
      board.tick();
      board.tick();
      board.drop(new Block("Y"));
      board.tick();
    });

    it("it is still moving on the row above the other block", () => {
      expect(board.toString()).toEqualShape(
        `...
         .Y.
         .X.`
      );
      expect(board.hasFalling()).toBe(true);
    });

    it("it stops when it hits the other block", () => {
      board.tick();

      expect(board.toString()).toEqualShape(
        `...
         .Y.
         .X.`
      );
      expect(board.hasFalling()).toBe(false);
    });
  });
});
