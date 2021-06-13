import { motion } from "framer-motion";

//TODO: remove exports
const imageWidth = 25;
const imageHeight = 20;

export const columns = 5;
export const rows = 5;

const partWidth = imageWidth / columns;
const partHeight = imageHeight / rows;

const getTemplateColumn = (): string => {
  let str = "";
  for (let i = 0; i < columns; i++) {
    //TODO: extract separation constant
    str += `${partWidth + 0.02}rem `;
  }
  return str;
};

export const gridTemplateColumns = getTemplateColumn();

//TODO: move this calculations elsewhere
interface Positions {
  top: number;
  left: number;
  bottom: number;
  right: number;
}

//TODO: move this calculations elsewhere
const calculatePositions = (index: number): Positions => {
  const rowIndex = Math.floor(index / columns);
  const colIndex = index - columns * rowIndex;

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
    <motion.div
      layout
      transition={{
        duration: 0.06,
        type: "tween",
      }}
      style={{
        width: `${partWidth}rem`,
        height: `${partHeight}rem`,
        marginRight: right,
        marginBottom: bottom,
        userSelect: "none",
      }}
    >
      {children}
    </motion.div>
  );
};

interface PuzzlePartProps {
  index: number;
  imageUrl: string;
  onClick: () => void;
  isSolved: boolean;
  showNumbers: boolean;
}

export const PuzzlePart = ({
  index,
  imageUrl,
  onClick,
  isSolved,
  showNumbers,
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
          alt="part"
          onClick={onClick}
        />
        {!isSolved && showNumbers && (
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
