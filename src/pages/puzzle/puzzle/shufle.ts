import { xParts, yParts } from "./PuzzlePart";

export function init(): number[] {
  return Array.from(Array(xParts * yParts).keys());
}

export function shuffle(): number[] {
  let parts = init();

  for (let i = 0; i < 500; i++) {
    parts = singeShuffle(parts);
  }

  return parts.filter((value) => value !== undefined);
}

function singeShuffle(state: number[]): number[] {
  const zeroIndex = state.findIndex((value) => value === 0);
  const swappableIndex = getSwappableIndex(zeroIndex);

  return swap(swappableIndex, zeroIndex, state);
}

function getSwappableIndex(zeroIndex: number): number {
  const values: number[] = [];

  const moveUpAvailable = zeroIndex >= xParts;
  if (moveUpAvailable) {
    values.push(zeroIndex - xParts);
  }

  const moveDownAvailable = zeroIndex <= (xParts - 1) * yParts;
  if (moveDownAvailable) {
    values.push(zeroIndex + xParts);
  }

  const moveLeftAvailable = zeroIndex % xParts !== 0;
  if (moveLeftAvailable) {
    values.push(zeroIndex - 1);
  }

  const moveRightAvailable = (zeroIndex + 1) % xParts !== 0;
  if (moveRightAvailable) {
    values.push(zeroIndex + 1);
  }

  const randomValue = values[Math.floor(Math.random() * values.length)];
  return randomValue;
}

function swap(
  actualIndex: number,
  emptyIndex: number,
  state: number[]
): number[] {
  const newState = [...state];
  const actualValue = newState[actualIndex];
  newState[actualIndex] = 0;
  newState[emptyIndex] = actualValue;

  return newState;
}
