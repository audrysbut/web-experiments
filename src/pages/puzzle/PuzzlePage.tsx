import { Puzzle } from "./puzzle/Puzzle";

export const PuzzlePage = () => {
  const imageUrl =
    "https://www.wallpapergeeks.com/wp-content/uploads/2014/05/Dark-woman-FantasyWallpapers-800x600.jpg";
  return (
    <div>
      {/* <img src={imageUrl}></img> */}
      <Puzzle imageUrl={imageUrl} shuffle={true} />
    </div>
  );
};
