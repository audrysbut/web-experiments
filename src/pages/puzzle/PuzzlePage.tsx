import { Puzzle } from "./puzzle/Puzzle";
import { imageWidth, imageHeight } from "./puzzle/PuzzlePart";

export const PuzzlePage = () => {
  const imageUrl =
    "https://www.wallpapergeeks.com/wp-content/uploads/2014/05/Dark-woman-FantasyWallpapers-800x600.jpg";
  return (
    <>
      <img
        src={imageUrl}
        style={{
          width: `${imageWidth}rem`,
          height: `${imageHeight}rem`,
        }}
        alt="Death queen"
      ></img>
      <Puzzle imageUrl={imageUrl} />
    </>
  );
};
