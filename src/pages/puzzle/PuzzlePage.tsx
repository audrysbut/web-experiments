import { useState } from "react";
import { Puzzle, PuzzleSettings } from "./puzzle/Puzzle";
import { shuffle } from "./puzzle/shufle";

const pickRandomImage = ({ imageWidth, imageHeight }: PuzzleSettings) => {
  const randomId = Math.floor(Math.random() * 1028) + 1;
  return `https://picsum.photos/id/${randomId}/${imageHeight}/${imageWidth}`;
};

const getSettings = (): PuzzleSettings => {
  const columns = 5;
  const rows = 5;
  const imageWidth = 640*0.8;
  const imageHeight = 480*0.8;
  const offset = 0.5;
  const partWidth = imageWidth / columns;
  const partHeight = imageHeight / rows;
  const gridTemplateColumns = `repeat(${columns}, ${partWidth + offset}px)`;

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
  const settings = getSettings();
  const [solved, setSolved] = useState(false);
  const [url, setUrl] = useState(pickRandomImage(settings));
  const [state, setState] = useState(shuffle(settings));

  const onSolved = (isSolved: boolean) => {
    setSolved(isSolved);
  };

  const updateImage = () => {
    setUrl(pickRandomImage(settings));
    setState(shuffle(settings));
    setSolved(false);
  };

  const renderPuzzle = () => {
    if (solved) {
      return (
        <img
          src={url}
          style={{
            height: `${settings.imageHeight}px`,
            width: `${settings.imageWidth}px`,
          }}
          alt="Solved"
        />
      );
    }
    return (
      <Puzzle
        imageUrl={url}
        onSolved={onSolved}
        showNumbers={true}
        settings={settings}
        state={state}
        setState={setState}
      />
    );
  };

  return (
    <div>
      <button onClick={updateImage}>Refresh</button>
      <div>{renderPuzzle()}</div>
    </div>
  );
};
