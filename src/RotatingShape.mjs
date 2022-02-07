export class RotatingShape {
  constructor(shapeString) {
    //
    this.rows = shapeString
      .split(`\n`)
      .map((rowString) => rowString.trim().split(``));
  }
  toString() {
    return this.rows.map((row) => `${row.join("")}\n`).join("");
  }
}
