import { useState } from "react";
import { Puzzle } from "./puzzle/Puzzle";

// const images = [
//   "https://www.wallpapergeeks.com/wp-content/uploads/2014/05/Dark-woman-FantasyWallpapers-800x600.jpg",
// ];

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
      {/* <img src={imageUrl}></img> */}
      <Puzzle imageUrl={imageUrl} shuffle={true} onSolved={onSolved} isSolved={solved} />
    </div>
  );
};
