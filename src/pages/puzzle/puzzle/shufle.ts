import { columns, rows } from "./PuzzlePart";

export function init(): number[] {
  return Array.from(Array(columns * rows).keys());
}

export function shuffle(): number[] {
  let parts = init();

  for (let i = 0; i < 500; i++) {
    parts = singeShuffle(parts);
  }

  return parts;
}

function singeShuffle(state: number[]): number[] {
  const zeroIndex = state.findIndex((value) => value === 0);
  const swappableIndex = getSwappableIndex(zeroIndex);

  return swap(swappableIndex, zeroIndex, state);
}

function getSwappableIndex(zeroIndex: number): number {
  const values: number[] = [];

  const moveUpAvailable = zeroIndex > columns - 1;
  if (moveUpAvailable) {
    const index = zeroIndex - columns;
    values.push(index);
  }

  const totalBlocks = columns * rows;
  const totalBlocksWithoutLastRow = totalBlocks - columns;
  const moveDownAvailable = zeroIndex < totalBlocksWithoutLastRow;
  if (moveDownAvailable) {
    const index = zeroIndex + columns;
    values.push(index);
  }

  const moveLeftAvailable = zeroIndex % columns !== 0;
  if (moveLeftAvailable) {
    const index = zeroIndex - 1;
    values.push(index);
  }

  const moveRightAvailable = (zeroIndex + 1) % columns !== 0;
  if (moveRightAvailable) {
    const index = zeroIndex + 1;
    values.push(index);
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
