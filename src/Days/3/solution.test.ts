import {
  findDuplicate,
  getCompartments,
  getElfGroups,
  getPriority,
} from "./solution";

test("getCompartments", () => {
  expect(getCompartments("aa")).toEqual(["a", "a"]);
  expect(getCompartments("vJrwpWtwJgWrhcsFMMfFFhFp")).toEqual([
    "vJrwpWtwJgWr",
    "hcsFMMfFFhFp",
  ]);
});

test("findDuplicate", () => {
  expect(findDuplicate("abc", "AbC")).toBe("b");
  expect(findDuplicate("vJrwpWtwJgWr", "hcsFMMfFFhFp")).toBe("p");
});

test("getPriority", () => {
  expect(getPriority("a")).toBe(1);
  expect(getPriority("z")).toBe(26);
  expect(getPriority("A")).toBe(27);
  expect(getPriority("Z")).toBe(52);
});

test("getElfGroups", () => {
  expect(getElfGroups(["a", "a", "a", "b", "b", "b"])).toEqual([
    ["a", "a", "a"],
    ["b", "b", "b"],
  ]);
});
