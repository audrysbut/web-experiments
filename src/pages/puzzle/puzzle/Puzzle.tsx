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
}

function shuffle<T>(array: T[]): T[] {
  let currentIndex = array.length,
    temporaryValue,
    randomIndex;

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

const getPostion = (
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

export const Puzzle = ({ imageUrl }: PuzzleProps) => {
  const [state, setState] = useState(parts);
  const swap = (actualValue: number, emptyIndex: number) => {
    const actualIndex = state.findIndex((val) => val === actualValue);

    const newState = [...state];
    newState[actualIndex] = 0;
    newState[emptyIndex] = actualValue;
    setState(newState);
  };

  const partClick = (partIndex: number) => {
    const actualPart = getPostion(partIndex);

    const emptyIndex = state.findIndex((val) => val === 0);
    const emptySlot = getPostion(emptyIndex);

    const rowDiff = actualPart.row - emptySlot.row;
    const colDiff = actualPart.col - emptySlot.col;

    if (rowDiff === 0 && colDiff === 1) {
      // alert(`move left`);
      swap(partIndex, emptyIndex);
      return;
    }

    if (rowDiff === 0 && colDiff === -1) {
      // alert(`move right`);
      swap(partIndex, emptyIndex);
      return;
    }

    if (colDiff === 0 && rowDiff === 1) {
      // alert(`move up`);
      swap(partIndex, emptyIndex);
      return;
    }

    if (colDiff === 0 && rowDiff === -1) {
      // alert(`move down`);
      swap(partIndex, emptyIndex);
      return;
    }
  };
  return (
    <div>
      {split(state).map((chunk) => {
        return (
          <div
            style={{
              display: "flex",
              flexDirection: "row",
            }}
          >
            {chunk.map((part) => {
              if (part) {
                return (
                  <PuzzlePart
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
