import { makeMatrixTable } from "./util.mjs";
export class Board {
  width;
  height;

  constructor(width, height) {
    this.width = width;
    this.height = height;
    this.rows = makeMatrixTable(width, height);
  }

  toString() {
    return this.rows.map((row) => `${row.join(``)}\n`).join("");
  }
  drop(block) {
    let centerIndex = Math.floor(this.width / 2);
    let { color } = block;
    this.rows[0][centerIndex] = color;
  }
}
