import React, { useState } from "react";
import { PuzzlePart, xParts, yParts } from "./PuzzlePart";

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

export const Puzzle = ({ imageUrl }: PuzzleProps) => {
  // const [chunks] = useState(split(shuffle(parts)));
  const [chunks] = useState(split(parts));
  return (
    <div>
      {chunks.map((chunk) => {
        return (
          <div
            style={{
              display: "flex",
              flexDirection: "row",
            }}
          >
            {chunk.map((part) => {
              return <PuzzlePart index={part} imageUrl={imageUrl} />;
            })}
          </div>
        );
      })}
    </div>
  );
};
