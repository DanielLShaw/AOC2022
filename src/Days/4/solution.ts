export function processInput(input: string): string[] {
  const list = input.split(/[\r\n]/);
  return list;
}

export function getSectionPairs(list: string[]): (number[] | null)[] {
  const regex = /(\d+)-(\d+),(\d+)-(\d+)/;
  const sectionPairs = list.map((pair) => {
    const matches = pair.match(regex);

    if (!matches) {
      return null;
    }
    const [, a1, a2, b1, b2] = matches;

    return [parseInt(a1), parseInt(a2), parseInt(b1), parseInt(b2)];
  });

  return sectionPairs;
}

export function testContains(compartments: number[] | null): boolean {
  const [aLower, aUpper, bLower, bUpper] = compartments || [];

  if (!aLower || !bLower || !aUpper || !bUpper) {
    return false;
  }

  const aContainsB = aLower <= bLower && aUpper >= bUpper;
  const bContainsa = bLower <= aLower && bUpper >= aUpper;

  return aContainsB || bContainsa;
}

export function findAllContains(
  list: (number[] | null)[]
): (number[] | null)[] {
  const overlaps = list
    .filter((entry) => entry)
    .filter((entry) => testContains(entry));
  return overlaps;
}

export function part1Solution(input: string): number {
  const list = processInput(input);
  const sectionPairs = getSectionPairs(list);
  const contains = findAllContains(sectionPairs);

  return contains.length;
}

export function testOverlaps(compartments: number[] | null): boolean {
  const [aLower, aUpper, bLower, bUpper] = compartments || [];

  if (!aLower || !bLower || !aUpper || !bUpper) {
    return false;
  }

  const aWithinB = aLower >= bLower && aLower <= bUpper;
  const bWithinA = bLower >= aLower && bLower <= aUpper;

  return aWithinB || bWithinA;
}

export function findAllOverlaps(
  list: (number[] | null)[]
): (number[] | null)[] {
  const overlaps = list
    .filter((entry) => entry)
    .filter((entry) => testOverlaps(entry));
  return overlaps;
}

export function part2Solution(input: string): number {
  const list = processInput(input);
  const sectionPairs = getSectionPairs(list);
  const overlaps = findAllOverlaps(sectionPairs);

  return overlaps.length;
}
