import { Block } from "./Block.mjs";
import { makeMatrixTable } from "./util.mjs";
export class Board {
  width;
  height;

  constructor(width, height) {
    this.width = width;
    this.height = height;
    this.blocks = [];
    // this.rows =
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

  get rows() {
    let table = makeMatrixTable(this.width, this.height);
    this.blocks.forEach((block) => {
      let { row, col } = block.location;
      table[row][col] = block;
    });
    return table;
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
      // this.rows[0][centerIndex] = block;
      this.toggleDroppedDirtyFlag();
      block.location = {
        row: 0,
        col: centerIndex,
      };
      this.blocks.push(block);
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

    this.blocks.forEach((block, index, blockList) => {
      if (block.isOnBottom) {
        block.stop();
      } else {
        block.location.row++;
        if (
          blockList
            .slice(0, index)
            .some((block2) => block2.location.row === block.location.row)
        ) {
          block.location.row--;
          block.stop();
        } else if (block.location.row === this.height - 1) {
          block.reachBottom();
        }
      }
    });

    this.toggleDroppedDirtyFlag(); // this happens, regardless of if a row decrements.
  }
  hasFalling() {
    return this.rows.some(Board.rowHasFallingBlock);
  }
}
