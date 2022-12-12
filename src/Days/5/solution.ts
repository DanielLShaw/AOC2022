import React, { ReactPropTypes, SetStateAction } from "react";

export function processInput(input: string): [string[], string[]] {
  const lines = input.split(/[\r\n]/);

  const indexWithStackNumbers = lines.findIndex(
    (line) => line.indexOf("1") > -1
  );

  const crateRows = lines.splice(0, indexWithStackNumbers);
  lines.splice(0, 2);

  return [crateRows, lines];
}

interface stackType {
  [key: number]: string;
}
export function processCrateInput(crateRows: string[]): stackType[] {
  const stacks: stackType[] = [];

  crateRows.forEach((creates, row) => {
    const regex = /(\[\w\])/g;

    const matches = creates.matchAll(regex);

    Array.from(matches).forEach((match) => {
      if (typeof match.index !== "undefined") {
        const crateStack = Math.floor(match.index / 4);
        const crateContent = match[0].charAt(1);

        if (stacks[row]) {
          stacks[row][crateStack] = crateContent;
        } else {
          stacks[row] = { [crateStack]: crateContent };
        }
      }
    });
  });

  return stacks;
}

export function createCrateStacks(stacks: stackType[]): string[][] | false {
  if (stacks && stacks.length > 0) {
    const stackList = new Array(stacks.length);
    stackList.fill(new Array(0));
    for (let i = stacks.length - 1; i >= 0; i--) {
      const stack = stacks[i];
      Object.entries(stack).forEach(([stackIndex, contents]) => {
        const index = parseInt(stackIndex);
        stackList[index] = [...(stackList[index] || []), contents];
      });
    }

    return stackList;
  }

  return false;
}

// crane9000 moves 1 at a time
export function moveCratesCrane9000(crates: string[][], move: string) {
  const moveRegex = /move (\d+) from (\d+) to (\d+)/;

  const match = move.match(moveRegex);

  if (match) {
    const amount = parseInt(match[1]);
    const from = parseInt(match[2]) - 1;
    const to = parseInt(match[3]) - 1;

    const updatedCrates = [...crates];

    for (let amountMoved = 0; amountMoved < amount; amountMoved++) {
      const movedCrate = updatedCrates[from].pop();
      if (movedCrate) {
        updatedCrates[to].push(movedCrate);
      }
    }

    return updatedCrates;
  }

  return crates;
}

// crane9001 moves many at a time, maintaining order

export function moveCratesCrane9001(crates: string[][], move: string) {
  const moveRegex = /move (\d+) from (\d+) to (\d+)/;

  const match = move.match(moveRegex);

  if (match) {
    const amount = parseInt(match[1]);
    const from = parseInt(match[2]) - 1;
    const to = parseInt(match[3]) - 1;

    const updatedCrates = [...crates];
    const targetStack = updatedCrates[from];

    const movedCrates = targetStack.splice(targetStack.length - amount, amount);
    updatedCrates[to] = [...updatedCrates[to], ...movedCrates];

    return updatedCrates;
  }

  return crates;
}

export function getTopCrates(crates: string[][]): string {
  let topCrates = "";

  crates.forEach((crateStack) => {
    const topItem = crateStack[crateStack.length - 1];
    if (topItem) {
      topCrates += topItem;
    }
  });
  return topCrates;
}

export function part1Solution(
  input: string,
  setCrates: any,
  setMove: any,
  setAnswer: any
) {
  const [crateRows, moves] = processInput(input);
  const processedCrateInput = processCrateInput(crateRows);
  const stacks = createCrateStacks(processedCrateInput);
  if (stacks) {
    setCrates(stacks);
    let updatedStacks = [...stacks];
    moves.forEach((move, index) => {
      setTimeout(() => {
        updatedStacks = moveCratesCrane9000(updatedStacks, move);
        setCrates(updatedStacks);
        setMove(index);
        setAnswer(getTopCrates(updatedStacks));
      }, 2000 * (index + 1));
    });
  }
}

export function part2Solution(
  input: string,
  setCrates: any,
  setMove: any,
  setAnswer: any
) {
  const [crateRows, moves] = processInput(input);
  const processedCrateInput = processCrateInput(crateRows);
  const stacks = createCrateStacks(processedCrateInput);
  if (stacks) {
    setCrates(stacks);
    let updatedStacks = [...stacks];
    moves.forEach((move, index) => {
      setTimeout(() => {
        updatedStacks = moveCratesCrane9001(updatedStacks, move);

        setCrates(updatedStacks);
        setMove(index);
        setAnswer(getTopCrates(updatedStacks));
      }, 2000 * (index + 1));
    });
  }
}
