export function makeMatrixTable(width, height) {
  return Array(height)
    .fill()
    .map(() => Array(width).fill(`.`));
}
// the normalize function used in testing, moved from `normalize.mjs` for organizational purposes
export function normalize(s) {
  return s.replaceAll(" ", "").trim() + "\n";
}
