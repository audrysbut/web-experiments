import { PuzzleSettings } from "./Puzzle";

interface Positions {
  top: number;
  left: number;
  bottom: number;
  right: number;
}

export const calculatePositions = (
  index: number,
  { columns, partHeight, partWidth, imageWidth, imageHeight }: PuzzleSettings
): Positions => {
  const rowIndex = Math.floor(index / columns);
  const colIndex = index - columns * rowIndex;

  const top = rowIndex * partHeight;
  const left = colIndex * partWidth;
  const right = imageWidth - left - partWidth;
  const bottom = imageHeight - top - partHeight;

  return { top, left, bottom, right };
};
