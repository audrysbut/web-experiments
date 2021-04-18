import { CSSProperties, useState } from "react";
import {
  front,
  initialize,
  left,
  top,
  right,
  bottom,
  back,
} from "./operations/cubeOperations";
import { toColor } from "./rubik/Block";
import { Rubik } from "./rubik/Rubik";

const rubikButton: CSSProperties = {
  border: "1px solid black",
  borderRadius: "0.2rem",
  padding: "10px 25px",
  marginRight: "0.3rem",
  fontSize: "16px",
};
const topColor = toColor(4);
const leftColor = toColor(13);
const frontColor = toColor(22);
const rightColor = toColor(31);
const bottomColor = toColor(40);
const backColor = toColor(49);

export const RubikPage = () => {
  const [cube, setCube] = useState(initialize());

  const rotateTop = () => setCube(top(cube));
  const rotateLeft = () => setCube(left(cube));
  const rotateFront = () => setCube(front(cube));
  const rotateRight = () => setCube(right(cube));
  const rotateBottom = () => setCube(bottom(cube));
  const rotateBack = () => setCube(back(cube));
  return (
    <div>
      <Rubik cube={cube} />
      <div
        style={{
          marginTop: "1rem",
        }}
      >
        <button
          onClick={rotateTop}
          style={{
            ...rubikButton,
            background: topColor,
          }}
        >
          Top
        </button>
        <button
          onClick={rotateLeft}
          style={{
            ...rubikButton,
            background: leftColor,
          }}
        >
          left
        </button>
        <button
          onClick={rotateFront}
          style={{
            ...rubikButton,
            background: frontColor,
          }}
        >
          front
        </button>
        <button
          onClick={rotateRight}
          style={{
            ...rubikButton,
            background: rightColor,
          }}
        >
          right
        </button>
        <button
          onClick={rotateBottom}
          style={{
            ...rubikButton,
            background: bottomColor,
          }}
        >
          bottom
        </button>
        <button
          onClick={rotateBack}
          style={{
            ...rubikButton,
            background: backColor,
          }}
        >
          back
        </button>
      </div>
    </div>
  );
};
