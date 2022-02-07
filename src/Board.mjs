import { Block } from "./Block.mjs";
import { makeMatrixTable } from "./util.mjs";
export class Board {
  width;
  height;

  constructor(width, height) {
    this.width = width;
    this.height = height;
    this.rows = makeMatrixTable(width, height);
    this.droppedDirtyFlag = false;
  }
  // ADDITIONAL STUFF THAT IS HELPFUL
  // VVVVVVVVVVVVVVVVVVVVVVVVVVVVVV

  static rowHasBlock(row) {
    // good for DRY principles, as this logic is repeated
    return row.some((item) => item instanceof Block);
  }
  static rowHasFallingBlock(row) {
    return row.some((item) => item.isFalling);
  }

  static getRowString(row) {
    return `${row
      .map((item) => (item instanceof Block ? item.color : item))
      .join("")}\n`;
  }

  get nonBottomRows() {
    return this.rows.filter((row, ind) => ind !== this.height - 1);
  }

  get bottomRow() {
    return this.rows[this.height - 1];
  }

  toggleDroppedDirtyFlag() {
    // utility to ensure the dirty flag can be set 'safely' - i.e. it will never not be a boolean
    this.droppedDirtyFlag = !this.droppedDirtyFlag;
  }

  // STUFF THAT'S LITERALLY PART OF THE TESTS
  // VVVVVVVVVVVVVVVVVVVVVVVVVVVVVV

  toString() {
    return this.rows.map(Board.getRowString).join("");
  }
  drop(block) {
    // the test for this doesn't test what's RETURNED from this method - it tests the board state via toString
    // should only allow a block to drop if the dirtyFlag is set to 'false'

    if (!this.droppedDirtyFlag) {
      let centerIndex = Math.floor(this.width / 2);
      this.rows[0][centerIndex] = block;
      this.toggleDroppedDirtyFlag();
    } else {
      throw `already falling`;
    }
  }
  tick() {
    // represents one unit of time passing
    // the test for this uses the toString method, too
    let bottomRowHasBlock = Board.rowHasBlock(this.bottomRow);
    this.bottomRow.forEach((item) => {
      // stop any blocks on the bottom row
      if (item instanceof Block) item.isFalling = false;
    });

    if (!bottomRowHasBlock) {
      // if there is a block in the bottom row, don't make a new row
      let newRow = Array(this.width).fill(`.`);
      let topRows = this.nonBottomRows;
      this.rows = [newRow, ...topRows];
    }

    this.toggleDroppedDirtyFlag(); // this happens, regardless of if a row decrements.
  }
  hasFalling() {
    return this.rows.some(Board.rowHasFallingBlock);
  }
}
