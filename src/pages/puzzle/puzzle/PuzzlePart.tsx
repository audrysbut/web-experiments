import { motion } from "framer-motion";
import { PuzzleSettings } from "./Puzzle";

//TODO: move this calculations elsewhere
interface Positions {
  top: number;
  left: number;
  bottom: number;
  right: number;
}

//TODO: move this calculations elsewhere
const calculatePositions = (
  index: number,
  { columns, partHeight, partWidth, imageWidth, imageHeight }: PuzzleSettings
): Positions => {
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
  settings: PuzzleSettings;
}
//TODO: move this component elsewhere
export const Container = ({
  children,
  isSolved,
  settings,
}: React.PropsWithChildren<ContainerProps>) => {
  const right = isSolved ? "0rem" : "0.02rem";
  const bottom = isSolved ? "0rem" : "0.02rem";
  const { partWidth, partHeight } = settings;
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
  settings: PuzzleSettings;
}

export const PuzzlePart = ({
  index,
  imageUrl,
  onClick,
  isSolved,
  showNumbers,
  settings,
}: PuzzlePartProps) => {
  const { top, left, bottom, right } = calculatePositions(index, settings);
  return (
    <Container isSolved={isSolved} settings={settings}>
      <div
        style={{
          position: "absolute",
        }}
      >
        <img
          src={imageUrl}
          style={{
            width: `${settings.imageWidth}rem`,
            height: `${settings.imageHeight}rem`,
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
