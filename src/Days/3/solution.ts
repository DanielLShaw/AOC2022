export function processInput(input: string): string[] {
  const list = input.split(/[\r\n]/);
  return list;
}

export function getCompartments(input: string): string[] {
  const compartmentSize = input.length / 2;

  const firstCompartment = input.slice(0, compartmentSize);
  const secondCompartment = input.slice(compartmentSize);

  return [firstCompartment, secondCompartment];
}

export function findDuplicate(
  firstCompartment: string,
  secondCompartment: string
): string {
  const letters = firstCompartment.split("");
  const duplicate = letters.find((letter) => {
    return secondCompartment.indexOf(letter) > -1;
  });

  return duplicate || "";
}

const priorityKey = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

export function getPriority(character: string): number {
  return priorityKey.indexOf(character) + 1;
}

export function part1Solution(input: string) {
  const bags = processInput(input);
  const compartmentList = bags.map((bag) => getCompartments(bag));
  const duplicateItems = compartmentList.map(([first, second]) =>
    findDuplicate(first, second)
  );

  const priorityTotal = duplicateItems.reduce(
    (sum, letter) => sum + getPriority(letter),
    0
  );

  return priorityTotal;
}

export function getElfGroups(bagList: string[]): string[][] {
  const elfGroups: string[][] = [];

  for (let i = 0; i < bagList.length; i++) {
    const bag = bagList[i];
    const groupIndex = Math.floor(i / 3);

    elfGroups[groupIndex] = [...(elfGroups[groupIndex] || []), bag];
  }

  return elfGroups;
}

export function getCommonLetter(bagGroup: string[]): number {
  let smallestBag = bagGroup[0] || "";

  let commonLetter = " ";

  bagGroup.forEach((bag) => {
    if (bag.length < smallestBag.length) {
      smallestBag = bag;
    }
  });

  const otherBags = [...bagGroup];

  otherBags.splice(otherBags.indexOf(smallestBag), 1);

  smallestBag.split("").forEach((letter) => {
    const hasMatch = otherBags.every((bag) => bag.indexOf(letter) > -1);
    if (hasMatch) {
      commonLetter = letter;
    }
  });

  return getPriority(commonLetter);
}

export function part2Solution(input: string): number {
  const bags = processInput(input);
  const elfGroups = getElfGroups(bags);

  const priorityList = elfGroups.map((group) => getCommonLetter(group));

  return priorityList.reduce((acc, current) => (acc += current));
}
