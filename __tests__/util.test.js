import { makeMatrixTable, normalize } from "../src/util.mjs";

describe(`Utility Functions`, () => {
  // Adjusted tests from the original `testing.test.js` file
  describe("normalize function for testing", () => {
    test(`normalizes strings`, () => {
      expect(normalize("")).toEqual("\n");
      expect(normalize("  x  ")).toEqual("x\n");
      expect(normalize("   x\n   x")).toEqual("x\nx\n");
      expect(normalize("   x\n   x\n")).toEqual("x\nx\n");
      expect(normalize("\n   x\n   x")).toEqual("x\nx\n");
    });
  });

  describe(`Matrix Table`, () => {
    let testTable;
    beforeAll(() => {
      testTable = makeMatrixTable(5, 5);
    });

    test(`should have correct rows`, () => {
      expect(testTable).toEqual([
        [`.`, `.`, `.`, `.`, `.`],
        [`.`, `.`, `.`, `.`, `.`],
        [`.`, `.`, `.`, `.`, `.`],
        [`.`, `.`, `.`, `.`, `.`],
        [`.`, `.`, `.`, `.`, `.`],
      ]);
    });
  });
});
