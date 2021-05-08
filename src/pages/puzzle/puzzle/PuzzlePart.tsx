export const imageWidth = 30;
export const imageHeight = 25;

export const xParts = 5;
export const yParts = 5;

const partWidth = imageWidth / xParts;
const partHeight = imageHeight / yParts;

interface PuzzlePartProps {
  index: number;
  imageUrl: string;
}

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

export const Container = ({ children }: React.PropsWithChildren<{}>) => {
  return (
    <div
      style={{
        width: `${partWidth}rem`,
        height: `${partHeight}rem`,
        marginRight: "0.02rem",
        marginBottom: "0.02rem",
      }}
    >
      {children}
    </div>
  );
};

export const PuzzlePart = ({ index, imageUrl }: PuzzlePartProps) => {
  const { top, left, bottom, right } = calculatePositions(index);
  return (
    <Container>
      <img
        src={imageUrl}
        style={{
          width: `${imageWidth}rem`,
          height: `${imageHeight}rem`,
          marginLeft: `-${left}rem`,
          marginTop: `-${top}rem`,
          clipPath: `inset(${top}rem ${right}rem ${bottom}rem ${left}rem)`,
        }}
        alt="Death queen"
      />
    </Container>
  );
};
