import { RotatingShape } from "../src/RotatingShape.mjs";

describe("Rotating 3x3 shape", () => {
  const shape = new RotatingShape(
    `ABC
     DEF
     GHI`
  );

  it("initial orientation", () => {
    expect(shape.toString()).toEqualShape(
      `ABC
       DEF
       GHI`
    );
  });

  it("can be rotated right/clockwise", () => {
    expect(shape.rotateRight().toString()).toEqualShape(
      `GDA
       HEB
       IFC`
    );
  });

  it("can be rotated left/counter-clockwise", () => {
    expect(shape.rotateLeft().toString()).toEqualShape(
      `CFI
       BEH
       ADG`
    );
  });
});

xdescribe("Rotating 5x5 shape", () => {
  const shape = new RotatingShape(
    `ABCDE
     FGHIJ
     KLMNO
     PQRST
     UVWXY`
  );

  xit("initial orientation", () => {
    expect(shape.toString()).toEqualShape(
      `ABCDE
       FGHIJ
       KLMNO
       PQRST
       UVWXY`
    );
  });

  xit("can be rotated right/clockwise", () => {
    expect(shape.rotateRight().toString()).toEqualShape(
      `UPKFA
       VQLGB
       WRMHC
       XSNID
       YTOJE`
    );
  });

  xit("can be rotated left/counter-clockwise", () => {
    expect(shape.rotateLeft().toString()).toEqualShape(
      `EJOTY
       DINSX
       CHMRW
       BGLQV
       AFKPU`
    );
  });
});
