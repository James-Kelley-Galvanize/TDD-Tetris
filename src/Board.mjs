import { makeMatrixTable } from "./util.mjs";
export class Board {
  width;
  height;

  constructor(width, height) {
    this.width = width;
    this.height = height;
    this.rows = makeMatrixTable(width, height);
    this.dirtyFlag = false;
  }
  toggleDirtyFlag() {
    // utility to ensure the dirty flag can be set 'safely' - i.e. it will never not be a boolean
    this.dirtyFlag = !this.dirtyFlag;
  }
  toString() {
    return this.rows.map((row) => `${row.join(``)}\n`).join("");
  }
  drop(block) {
    // the test for this doesn't test what's RETURNED from this method - it tests the board state via toString
    // should only allow a block to drop if the dirtyFlag is set to 'false'

    if (!this.dirtyFlag) {
      let centerIndex = Math.floor(this.width / 2);
      let { color } = block;
      this.rows[0][centerIndex] = color;
      this.toggleDirtyFlag();
    } else {
      throw `already falling`;
    }
  }
  tick() {
    // represents one unit of time passing
    // the test for this uses the toString method, too
    let newRow = Array(this.width).fill(`.`);
    let topRows = this.rows.filter((row, ind) => ind !== this.height - 1);
    this.rows = [newRow, ...topRows];
    this.toggleDirtyFlag();
  }
  hasFalling() {
    return this.rows.some((row) => row.some((character) => character !== "."));
  }
}
