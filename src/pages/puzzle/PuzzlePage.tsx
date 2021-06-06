import { useState } from "react";
import { Puzzle } from "./puzzle/Puzzle";

const pickRandomImage = () => {
  return "https://picsum.photos/800/1024";
};

export const PuzzlePage = () => {
  const [solved, setSolved] = useState(false);

  const imageUrl = pickRandomImage();
  const onSolved = (isSolved: boolean) => {
    setSolved(isSolved);
  };
  return (
    <div>
      <Puzzle
        imageUrl={imageUrl}
        shuffle={true}
        onSolved={onSolved}
        isSolved={solved}
        showNumbers={true}
      />
    </div>
  );
};
