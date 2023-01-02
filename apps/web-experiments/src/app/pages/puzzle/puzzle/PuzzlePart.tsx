import React from "react";
import { PartContainer } from "./PartContainer";
import { PartIndexIndicator } from "./PartIndexIndicator";
import { calculatePositions } from "./PositionCalculator";
import { PuzzleSettings } from "./Puzzle";

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
