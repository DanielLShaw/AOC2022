export const convertToArray = (input: string): string[] => {
  const list = input.split(/[\r\n][\r\n]/);
  return list;
};

export const convertToElfList = (array: string[]): number[][] => {
  const elfList = array.map((elf) =>
    elf.split(/[\r\n]/).map((foodCalories) => Number.parseFloat(foodCalories))
  );

  return elfList;
};

export const getTotalCalorieList = (array: number[][]): number[] => {
  return array.map((calorieList) =>
    calorieList.reduce((cur, acc) => (acc += cur))
  );
};

export const getSortedCalories = (array: number[]): number[] => {
  return array.sort((a, b) => b - a);
};

export const day1part1Solution = (input: string): number => {
  const textArray = convertToArray(input);
  const elfList = convertToElfList(textArray);
  const elfTotalCalorieList = getTotalCalorieList(elfList);
  const sortedCalories = getSortedCalories(elfTotalCalorieList);

  return sortedCalories?.[0];
};

export const day1part2Solution = (input: string): number => {
  const textArray = convertToArray(input);
  const elfList = convertToElfList(textArray);
  const elfTotalCalorieList = getTotalCalorieList(elfList);
  const sortedCalories = getSortedCalories(elfTotalCalorieList);

  const top3 = sortedCalories.slice(0, 3);

  const top3Total = top3.reduce((current, acc) => (acc += current));

  return top3Total;
};
