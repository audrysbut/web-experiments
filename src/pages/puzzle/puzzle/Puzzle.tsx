import React, { useState } from "react";
import { Container, PuzzlePart } from "./PuzzlePart";
import { init, shuffle } from "./shufle";

export interface PuzzleSettings {
  columns: number;
  rows: number;
  partWidth: number;
  partHeight: number;
  imageWidth: number;
  imageHeight: number;
  gridTemplateColumns: string;
}
interface PuzzleProps {
  imageUrl: string;
  shuffle?: boolean;
  onSolved: (solved: boolean) => void;
  isSolved: boolean;
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

const initState = (
  settings: PuzzleSettings,
  shuffleParts: boolean | undefined
): number[] => {
  return shuffleParts ? shuffle(settings) : init(settings);
};

export const Puzzle = ({
  imageUrl,
  shuffle,
  onSolved,
  isSolved,
  showNumbers,
  settings,
}: PuzzleProps) => {
  const [state, setState] = useState(initState(settings, shuffle));
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
      }}
    >
      {state.map((part) => {
        if (part || isSolved) {
          return (
            <PuzzlePart
              key={part}
              index={part}
              imageUrl={imageUrl}
              isSolved={isSolved}
              showNumbers={showNumbers}
              settings={settings}
              onClick={() => !isSolved && partClick(part, settings)}
            />
          );
        }
        return <Container key={part} isSolved={isSolved} settings={settings} />;
      })}
    </div>
  );
};
