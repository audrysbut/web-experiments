import React, { useState } from "react";
import {
  Container,
  PuzzlePart,
  columns,
  gridTemplateColumns,
} from "./PuzzlePart";
import { init, shuffle } from "./shufle";

interface PuzzleProps {
  imageUrl: string;
  shuffle?: boolean;
  onSolved: (solved: boolean) => void;
  isSolved: boolean;
  showNumbers: boolean;
}

const getPosition = (
  part: number
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

const initState = (shuffleParts?: boolean): number[] => {
  return shuffleParts ? shuffle() : init();
};

export const Puzzle = ({
  imageUrl,
  shuffle,
  onSolved,
  isSolved,
  showNumbers,
}: PuzzleProps) => {
  const [state, setState] = useState(initState(shuffle));
  const swap = (actualValue: number, emptyIndex: number) => {
    const actualIndex = state.findIndex((val) => val === actualValue);

    const newState = [...state];
    newState[actualIndex] = 0;
    newState[emptyIndex] = actualValue;

    const solved = newState.every((value, index) => value === index);
    onSolved(solved);

    setState(newState);
  };

  const partClick = (partValue: number) => {
    const partIndex = state.findIndex((val) => val === partValue);
    const actualPart = getPosition(partIndex);

    const emptyIndex = state.findIndex((val) => val === 0);
    const emptySlot = getPosition(emptyIndex);

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
        gridTemplateColumns,
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
              onClick={() => !isSolved && partClick(part)}
            />
          );
        }
        return <Container key={part} isSolved={isSolved} />;
      })}
    </div>
  );
};
