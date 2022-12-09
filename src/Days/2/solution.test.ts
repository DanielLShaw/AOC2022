import {
  cheatAtRPS,
  cheatAtRPSTournement,
  playRPS,
  playRPSTournament,
  processInput,
} from "./solution";

const input = `A Y
B X
C Z`;

const moveList = ["A Y", "B X", "C Z"];
test("processInput", () => {
  expect(processInput(input)).toEqual(moveList);
});

test("playRPS", () => {
  expect(playRPS("Y", "A")).toBe(8);
  expect(playRPS("X", "B")).toBe(1);
  expect(playRPS("Z", "C")).toBe(6);
});

test("playRPSTournement", () => {
  expect(playRPSTournament(moveList)).toBe(15);
});

test("cheatAtRPS", () => {
  expect(cheatAtRPS("Y", "A")).toBe(4);
  expect(cheatAtRPS("X", "B")).toBe(1);
  expect(cheatAtRPS("Z", "C")).toBe(7);
});
test("cheatAtRPSTournement", () => {
  expect(cheatAtRPSTournement(moveList)).toBe(12);
});
