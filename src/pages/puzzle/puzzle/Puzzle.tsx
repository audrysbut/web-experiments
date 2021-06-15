import React from "react";
import { Container, PuzzlePart } from "./PuzzlePart";

export interface PuzzleSettings {
  columns: number;
  rows: number;
  partWidth: number;
  partHeight: number;
  imageWidth: number;
  imageHeight: number;
  offset: number;
  gridTemplateColumns: string;
}
interface PuzzleProps {
  state: number[];
  setState: React.Dispatch<number[]>;
  imageUrl: string;
  onSolved: (solved: boolean) => void;
  showNumbers: boolean;
  settings: PuzzleSettings;
}

const getPosition = (
  part: number,
  columns: number
): {
  row: number;
  col: number;
} => {
  const row = Math.floor(part / columns);
  const col = part - row * columns;
  return {
    col,
    row,
  };
};

export const Puzzle = ({
  imageUrl,
  onSolved,
  showNumbers,
  settings,
  state,
  setState
}: PuzzleProps) => {
  const swap = (actualValue: number, emptyIndex: number) => {
    const actualIndex = state.findIndex((val) => val === actualValue);

    const newState = [...state];
    newState[actualIndex] = 0;
    newState[emptyIndex] = actualValue;

    const solved = newState.every((value, index) => value === index);
    onSolved(solved);

    setState(newState);
  };

  const partClick = (partValue: number, { columns }: PuzzleSettings) => {
    const partIndex = state.findIndex((val) => val === partValue);
    const actualPart = getPosition(partIndex, columns);

    const emptyIndex = state.findIndex((val) => val === 0);
    const emptySlot = getPosition(emptyIndex, columns);

    const rowDiff = actualPart.row - emptySlot.row;
    const colDiff = actualPart.col - emptySlot.col;

    if (
      (rowDiff === 0 && Math.abs(colDiff) === 1) ||
      (colDiff === 0 && Math.abs(rowDiff) === 1)
    ) {
      swap(partValue, emptyIndex);
    }
  };
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: settings.gridTemplateColumns,
        gridRowGap: `${settings.offset}px`,
      }}
    >
      {state.map((part) => {
        if (part) {
          return (
            <PuzzlePart
              key={part}
              index={part}
              imageUrl={imageUrl}
              showNumbers={showNumbers}
              settings={settings}
              onClick={() => partClick(part, settings)}
            />
          );
        }
        return <Container key={part} settings={settings} />;
      })}
    </div>
  );
};
