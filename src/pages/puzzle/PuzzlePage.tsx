import { useState } from "react";
import { Puzzle, PuzzleSettings } from "./puzzle/Puzzle";

const pickRandomImage = () => {
  return "https://picsum.photos/800/1024";
};

const getTemplateColumn = (columns: number, collumnOffset: number): string => {
  let str = "";
  for (let i = 0; i < columns; i++) {
    str += `${collumnOffset}rem `;
  }
  return str;
};

const getSettings = (): PuzzleSettings => {
  const columns = 5;
  const rows = 5;
  const imageWidth = 25;
  const imageHeight = 20;
  const offset = 0.02;
  const partWidth = imageWidth / columns;
  const partHeight = imageHeight / rows;
  const gridTemplateColumns = getTemplateColumn(columns, offset + partWidth);

  return {
    columns,
    rows,
    partWidth,
    partHeight,
    imageHeight,
    imageWidth,
    gridTemplateColumns,
    offset,
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
      {solved ? (
        <img
          src={imageUrl}
          style={{
            height: `${settings.imageHeight}rem`,
            width: `${settings.imageWidth}rem`,
          }}
        />
      ) : (
        <Puzzle
          imageUrl={imageUrl}
          shuffle={true}
          onSolved={onSolved}
          showNumbers={true}
          settings={settings}
        />
      )}
    </div>
  );
};
