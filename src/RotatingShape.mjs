function splitShapeString(shapeString) {
  return shapeString.split(`\n`).map((rowString) => rowString.trim().split(``));
}
function makeShapeString(shapeMatrix) {
  return shapeMatrix.map((row) => `${row.join("")}`).join("\n");
}
export class RotatingShape {
  constructor(shapeString) {
    //
    this.rows = splitShapeString(shapeString);
  }
  toString() {
    return makeShapeString(this.rows) + `\n`;
  }
  rotateRight() {
    // the tests chains a method off of what this returns - this suggests that this returns a RotatingShape
    let shapeMatrix = splitShapeString(this.toString());

    let rotatedMatrix = Array(shapeMatrix[0].length)
      .fill()
      .map(() => Array(shapeMatrix.length).fill(""));

    shapeMatrix.forEach((row, rowIndex, rowList) => {
      row.forEach((entry, colIndex, entries) => {
        rotatedMatrix[colIndex][rowList.length - 1 - rowIndex] = entry;
      });
    });

    let outString = makeShapeString(rotatedMatrix);

    return new RotatingShape(outString);
  }
  rotateLeft() {
    let shapeMatrix = splitShapeString(this.toString());

    let rotatedMatrix = Array(shapeMatrix[0].length)
      .fill()
      .map(() => Array(shapeMatrix.length).fill(""));

    shapeMatrix.forEach((row, rowIndex, rowList) => {
      row.forEach((entry, colIndex, entries) => {
        rotatedMatrix[entries.length - 1 - colIndex][rowIndex] = entry;
      });
    });

    let outString = makeShapeString(rotatedMatrix);

    return new RotatingShape(outString);
  }
}
