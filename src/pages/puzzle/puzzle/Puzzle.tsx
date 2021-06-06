import React, { useState } from "react";
import { Container, PuzzlePart, xParts, yParts } from "./PuzzlePart";

const split = <T,>(input: T[]): T[][] => {
  var arrayOfArrays: T[][] = [];
  for (var i = 0; i < input.length; i += xParts) {
    const chunk = input.slice(i, i + xParts);
    arrayOfArrays.push(chunk);
  }
  return arrayOfArrays;
};

const parts = Array.from(Array(xParts * yParts).keys());

interface PuzzleProps {
  imageUrl: string;
  shuffle?: boolean;
  onSolved?: (solved: boolean) => void;
}

function shuffle<T>(array: T[]): T[] {
  let currentIndex = array.length;
  let temporaryValue;
  let randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

const getPosition = (
  part: number
): {
  row: number;
  col: number;
} => {
  const row = Math.floor(part / xParts);
  const col = part - row * xParts;
  return {
    col,
    row,
  };
};

const initState = (shuffleParts?: boolean): number[] => {
  return shuffleParts ? shuffle(parts) : parts;
};

export const Puzzle = ({ imageUrl, shuffle, onSolved }: PuzzleProps) => {
  const [state, setState] = useState(initState(shuffle));
  const swap = (actualValue: number, emptyIndex: number) => {
    const actualIndex = state.findIndex((val) => val === actualValue);

    const newState = [...state];
    newState[actualIndex] = 0;
    newState[emptyIndex] = actualValue;
    if (onSolved) {
      const solved = newState.every((value, index) => value === index);
      onSolved(solved);
    }
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
              if (part) {
                return (
                  <PuzzlePart
                    key={`${row}_${col}`}
                    index={part}
                    imageUrl={imageUrl}
                    onClick={() => partClick(part)}
                  />
                );
              }
              return <Container />;
            })}
          </div>
        );
      })}
    </div>
  );
};
