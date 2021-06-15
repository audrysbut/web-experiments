import React from "react";
import { PartContainer } from "./PartContainer";
import { PartIndexIndicator } from "./PartIndexIndicator";
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
    <PartContainer settings={settings}>
      <div
        style={{
          position: "absolute",
        }}
      >
        <img
          src={imageUrl}
          style={{
            width: `${settings.imageWidth}px`,
            height: `${settings.imageHeight}px`,
            marginLeft: `-${left}px`,
            marginTop: `-${top}px`,
            clipPath: `inset(${top}px ${right}px ${bottom}px ${left}px)`,
          }}
          alt="part"
          onDragStart={(e) => e.preventDefault()}
          onClick={onClick}
        />
        {showNumbers && <PartIndexIndicator index={index} onClick={onClick} />}
      </div>
    </PartContainer>
  );
};
