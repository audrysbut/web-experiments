import { CSSProperties } from "react";

//TODO: move this style to CSS
const blockStyle: CSSProperties = {
  width: "50px",
  height: "50px",
  lineHeight: "50px",
  border: "3px solid black",
  background: "lightblue",
  textAlign: "center",
  borderRadius: "4px",
  userSelect: "none",
};

interface BlockProps {
  value: number;
}

export const toColor = (index: number) => {
  if (index >= 45) {
    return "salmon";
  }
  if (index >= 36) {
    return "yellow";
  }
  if (index >= 27) {
    return "lime";
  }
  if (index >= 18) {
    return "orange";
  }
  if (index >= 9) {
    return "DeepSkyBlue";
  }
  return "white";
};

export const Block = ({ value }: BlockProps) => {
  return (
    <div
      style={{
        ...blockStyle,
        background: toColor(value),
      }}
    >
      {value}
    </div>
  );
};
