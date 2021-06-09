import React, { useState } from "react";
import { Container, PuzzlePart, columns } from "./PuzzlePart";
import { init, shuffle } from "./shufle";

const split = <T,>(input: T[]): T[][] => {
  var arrayOfArrays: T[][] = [];
  for (var i = 0; i < input.length; i += columns) {
    const chunk = input.slice(i, i + columns);
    arrayOfArrays.push(chunk);
  }
  return arrayOfArrays;
};

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

    if (rowDiff === 0 && colDiff === 1) {
      // alert(`move left`);
      swap(partValue, emptyIndex);
    }

    if (rowDiff === 0 && colDiff === -1) {
      // alert(`move right`);
      swap(partValue, emptyIndex);
    }

    if (colDiff === 0 && rowDiff === 1) {
      // alert(`move up`);
      swap(partValue, emptyIndex);
    }

    if (colDiff === 0 && rowDiff === -1) {
      // alert(`move down`);
      swap(partValue, emptyIndex);
    }
  };
  return (
    <div>
      {split(state).map((chunk, row) => {
        return (
          <div
            style={{
              display: "flex",
              flexDirection: "row",
            }}
          >
            {chunk.map((part, col) => {
              if (part || isSolved) {
                return (
                  <PuzzlePart
                    key={`${row}_${col}`}
                    index={part}
                    imageUrl={imageUrl}
                    isSolved={isSolved}
                    showNumbers={showNumbers}
                    onClick={() => !isSolved && partClick(part)}
                  />
                );
              }
              return <Container key={`${row}_${col}`} isSolved={isSolved} />;
            })}
          </div>
        );
      })}
    </div>
  );
};
