const imageWidth = 30;
const imageHeight = 25;

const xParts = 5;
const yParts = 5;

const partWidth = imageWidth / xParts;
const partHeight = imageHeight / yParts;

interface Positions {
  top: number;
  left: number;
  bottom: number;
  right: number;
}

const calculatePositions = (index: number): Positions => {
  const rowIndex = Math.floor(index / xParts);
  const colIndex = index - xParts * rowIndex;

  const top = rowIndex * partHeight;
  const left = colIndex * partWidth;
  const right = imageWidth - left - partWidth;
  const bottom = imageHeight - top - partHeight;

  return { top, left, bottom, right };
};

interface PuzzlePartProps {
  index: number;
  imageUrl: string;
}

const PuzzlePart = ({ index, imageUrl }: PuzzlePartProps) => {
  const { top, left, bottom, right } = calculatePositions(index);
  return (
    <div
      style={{
        width: `${partWidth}rem`,
        height: `${partHeight}rem`,
        marginRight: "0.1rem",
        marginBottom: "0.1rem",
      }}
    >
      <img
        src={imageUrl}
        style={{
          width: `${imageWidth}rem`,
          height: `${imageHeight}rem`,
          marginLeft: `-${left}rem`,
          marginTop: `-${top}rem`,
          clipPath: `inset(${top}rem ${right}rem ${bottom}rem ${left}rem)`,
        }}
        alt="Death quin"
      />
    </div>
  );
};

const split = <T,>(input: T[]): T[][] => {
  var arrayOfArrays: T[][] = [];
  for (var i = 0; i < input.length; i += xParts) {
    const chunk = input.slice(i, i + xParts);
    arrayOfArrays.push(chunk);
  }
  return arrayOfArrays;
};

const parts = Array.from(Array(xParts * yParts).keys());

export const Puzzle = () => {
  const imageUrl =
    "https://www.wallpapergeeks.com/wp-content/uploads/2014/05/Dark-woman-FantasyWallpapers-800x600.jpg";
  const chunks = split(parts);
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
