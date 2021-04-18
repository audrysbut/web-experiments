import React from "react";

interface RotationHandlerProps {
  width: number;
  height: number;
  thickness: number;
}

export const RotationHandler = ({ width, height, thickness }: RotationHandlerProps) => {
  const radius = 10;

  return (
    <div
      style={{
        position: "absolute",
        // margin: -thickness,
      }}
    >
      <svg width={width} height={height}>
        <g fill="green">
          <rect
            rx={radius}
            ry={radius}
            x={width / 2 + thickness}
            y="0"
            width={width / 2 - thickness}
            height={thickness}
          />
          <rect
            rx={radius}
            ry={radius}
            x={width - thickness}
            y="0"
            width={thickness}
            height={height}
          />
          <rect
            rx={radius}
            ry={radius}
            x={width / 2 + thickness}
            y={height - thickness}
            width={width / 2 - thickness}
            height={thickness}
          />
        </g>
        <g fill="red">
          <rect
            rx={radius}
            ry={radius}
            x="0"
            y="0"
            width={width / 2 - thickness}
            height={thickness}
          />
          <rect
            rx={radius}
            ry={radius}
            x="0"
            y="0"
            width={thickness}
            height={height}
          />
          <rect
            rx={radius}
            ry={radius}
            x="0"
            y={height - thickness}
            width={width / 2 - thickness}
            height={thickness}
          />
        </g>
      </svg>
    </div>
  );
};
