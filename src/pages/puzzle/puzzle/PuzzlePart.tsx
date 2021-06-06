//TODO: remove exports
const imageWidth = 30;
const imageHeight = 25;

export const xParts = 5;
export const yParts = 5;

const partWidth = imageWidth / xParts;
const partHeight = imageHeight / yParts;

//TODO: move this calculations elsewhere
interface Positions {
  top: number;
  left: number;
  bottom: number;
  right: number;
}

//TODO: move this calculations elsewhere
const calculatePositions = (index: number): Positions => {
  const rowIndex = Math.floor(index / xParts);
  const colIndex = index - xParts * rowIndex;

  const top = rowIndex * partHeight;
  const left = colIndex * partWidth;
  const right = imageWidth - left - partWidth;
  const bottom = imageHeight - top - partHeight;

  return { top, left, bottom, right };
};

interface ContainerProps {
  isSolved: boolean;
}
//TODO: move this component elsewhere
export const Container = ({
  children,
  isSolved,
}: React.PropsWithChildren<ContainerProps>) => {
  const right = isSolved ? "0rem" : "0.02rem";
  const bottom = isSolved ? "0rem" : "0.02rem";
  return (
    <div
      style={{
        width: `${partWidth}rem`,
        height: `${partHeight}rem`,
        marginRight: right,
        marginBottom: bottom,
        userSelect: "none",
      }}
    >
      {children}
    </div>
  );
};

interface PuzzlePartProps {
  index: number;
  imageUrl: string;
  onClick: () => void;
  isSolved: boolean;
}

export const PuzzlePart = ({
  index,
  imageUrl,
  onClick,
  isSolved,
}: PuzzlePartProps) => {
  const { top, left, bottom, right } = calculatePositions(index);
  return (
    <Container isSolved={isSolved}>
      <div
        style={{
          position: "absolute",
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
          alt="Death queen"
          onClick={onClick}
        />
        {!isSolved && (
          <div
            style={{
              position: "absolute",
              top: 30,
              left: 38,
              color: "white",
            }}
            onClick={onClick}
          >
            {index + 1}
          </div>
        )}
      </div>
    </Container>
  );
};