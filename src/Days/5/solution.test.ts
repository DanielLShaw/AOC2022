import { processCrateInput } from "./solution";

const exampleCrates = ["    [D]    ", "[N] [C]    ", "[Z] [M] [P]"];

test("processCrateInput", () => {
  expect(processCrateInput(exampleCrates)).toEqual([
    ["N", "Z"],
    ["D", "C", "M"],
    ["P"],
  ]);
});
