import { useState } from "react";
import { Puzzle, PuzzleSettings } from "./puzzle/Puzzle";

const pickRandomImage = () => {
  return "https://picsum.photos/800/1024";
};

const getTemplateColumn = (columns: number, partWidth: number): string => {
  let str = "";
  for (let i = 0; i < columns; i++) {
    //TODO: extract separation constant
    str += `${partWidth + 0.02}rem `;
  }
  return str;
};

const getSettings = (): PuzzleSettings => {
  const columns = 5;
  const rows = 5;
  const imageWidth = 25;
  const imageHeight = 20;
  const partWidth = imageWidth / columns;
  const partHeight = imageHeight / rows;
  const gridTemplateColumns = getTemplateColumn(columns, partWidth);
  return {
    columns,
    rows,
    partWidth,
    partHeight,
    imageHeight,
    imageWidth,
    gridTemplateColumns,
  };
};

export const PuzzlePage = () => {
  const [solved, setSolved] = useState(false);

  const imageUrl = pickRandomImage();
  const onSolved = (isSolved: boolean) => {
    setSolved(isSolved);
  };

  const settings = getSettings();

  return (
    <div>
      <Puzzle
        imageUrl={imageUrl}
        shuffle={true}
        onSolved={onSolved}
        isSolved={solved}
        showNumbers={true}
        settings={settings}
      />
    </div>
  );
};
