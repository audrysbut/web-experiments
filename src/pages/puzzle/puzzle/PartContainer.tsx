import { motion } from "framer-motion";
import { PuzzleSettings } from "./Puzzle";

interface PartContainerProps {
  settings: PuzzleSettings;
}

export const PartContainer = ({
  children,
  settings,
}: React.PropsWithChildren<PartContainerProps>) => {
  const { partWidth, partHeight } = settings;
  return (
    <motion.div
      layout
      transition={{
        duration: 0.08,
        type: "tween",
      }}
      style={{
        width: `${partWidth}px`,
        height: `${partHeight}px`,
        userSelect: "none",
      }}
    >
      {children}
    </motion.div>
  );
};
