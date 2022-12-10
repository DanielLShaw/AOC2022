import {
  findAllContains,
  findAllOverlaps,
  getSectionPairs,
  testContains,
  testOverlaps,
} from "./solution";

test("getSectionPairs", () => {
  expect(getSectionPairs(["21-82,22-81"])).toEqual([[21, 82, 22, 81]]);
});

test("testContains", () => {
  expect(testContains([1, 10, 4, 6])).toBe(true);
  expect(testContains([1, 10, 1, 20])).toBe(true);
  expect(testContains([4, 6, 1, 10])).toBe(true);
  expect(testContains([1, 20, 1, 10])).toBe(true);
  expect(testContains([1, 10, 1, 10])).toBe(true);
  expect(testContains([1, 10, 2, 11])).toBe(false);
});

test("findAllContains", () => {
  expect(
    findAllContains([
      [1, 10, 4, 6],
      [1, 10, 1, 20],
      [4, 6, 1, 10],
      [1, 20, 1, 10],
      [1, 10, 2, 11],
    ])
  ).toHaveLength(4);
});

test("testOverlaps", () => {
  expect(testOverlaps([1, 10, 4, 6])).toBe(true);
  expect(testOverlaps([1, 10, 1, 20])).toBe(true);
  expect(testOverlaps([4, 6, 1, 10])).toBe(true);
  expect(testOverlaps([1, 20, 1, 10])).toBe(true);
  expect(testOverlaps([1, 10, 1, 10])).toBe(true);
  expect(testOverlaps([1, 10, 2, 11])).toBe(true);
  expect(testOverlaps([1, 2, 2, 3])).toBe(true);
  expect(testOverlaps([1, 2, 3, 4])).toBe(false);
});

test("findAllContains", () => {
  expect(
    findAllOverlaps([
      [1, 10, 4, 6],
      [1, 10, 1, 20],
      [4, 6, 1, 10],
      [1, 20, 1, 10],
      [1, 10, 2, 11],
      [1, 2, 3, 4],
    ])
  ).toHaveLength(5);
});
