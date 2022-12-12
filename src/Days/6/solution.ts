export function getMarker(input: string): number {
  for (let pointer = 3; pointer < input.length - 1; pointer++) {
    const previous4Characters = input.slice(pointer - 4, pointer);
    const characterSet = new Set(previous4Characters.split(""));

    if (characterSet.size === 4) {
      return pointer;
    }
  }

  return 0;
}

export function getMessageMarker(input: string): number {
  for (let pointer = 13; pointer < input.length - 1; pointer++) {
    const previous4Characters = input.slice(pointer - 14, pointer);
    const characterSet = new Set(previous4Characters.split(""));

    if (characterSet.size === 14) {
      return pointer;
    }
  }

  return 0;
}
