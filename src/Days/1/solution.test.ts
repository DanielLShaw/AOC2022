import {
  convertToArray,
  convertToElfList,
  day1part1Solution,
  day1part2Solution,
  getSortedCalories,
  getTotalCalorieList,
} from "./solution";

const input = `1
  1

3

2`;

const elfList = [
  `1
  1`,
  "3",
  "2",
];

const elfItemList = [[1, 1], [3], [2]];

const elfTotalCalorieList = [2, 3, 2];

test("convertToArray", () => {
  expect(convertToArray(input)).toEqual(elfList);
});

test("convertToElfList", () => {
  expect(convertToElfList(elfList)).toEqual(elfItemList);
});

test("getElfTotalCalories", () => {
  expect(getTotalCalorieList(elfItemList)).toEqual(elfTotalCalorieList);
});

test("getSortedCalories", () => {
  expect(getSortedCalories(elfTotalCalorieList)).toEqual([3, 2, 2]);
});

test("day1Part1", () => {
  expect(day1part1Solution(input)).toEqual(3);
});

test("day1Part2", () => {
  expect(day1part2Solution(input)).toEqual(7);
});
