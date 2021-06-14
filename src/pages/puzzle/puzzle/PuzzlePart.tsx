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
  settings: PuzzleSettings;
}
//TODO: move this component elsewhere
export const Container = ({
  children,
  settings,
}: React.PropsWithChildren<ContainerProps>) => {
  const { partWidth, partHeight } = settings;
  return (
    <motion.div
      layout
      transition={{
        duration: 0.08,
        type: "tween",
      }}
      style={{
        width: `${partWidth}rem`,
        height: `${partHeight}rem`,
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
  showNumbers: boolean;
  settings: PuzzleSettings;
}

export const PuzzlePart = ({
  index,
  imageUrl,
  onClick,
  showNumbers,
  settings,
}: PuzzlePartProps) => {
  const { top, left, bottom, right } = calculatePositions(index, settings);
  return (
    <Container settings={settings}>
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
          onDragStart={(e) => e.preventDefault()}
          onClick={onClick}
        />
        {showNumbers && (
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
