import React, { CSSProperties } from "react";
import { CubeData } from "../operations/cubeOperations";
import { Face } from "./Face";

interface RubikProps {
  cube: CubeData;
}

const td: CSSProperties = {};

const tr: CSSProperties = {};

const table: CSSProperties = {
  borderSpacing: "0.1rem",
};

export const Rubik = ({ cube }: RubikProps) => {
  return (
    <table style={table}>
      <tr style={tr}>
        <td style={td}></td>
        <td style={td}>
          <Face values={cube.slice(0, 9)} />
        </td>
        <td style={td}></td>
      </tr>
      <tr style={tr}>
        <td style={td}>
          <Face values={cube.slice(9, 18)} />
        </td>
        <td style={td}>
          <Face values={cube.slice(18, 27)} />
        </td>
        <td style={td}>
          <Face values={cube.slice(27, 36)} />
        </td>
      </tr>
      <tr style={tr}>
        <td style={td}></td>
        <td style={td}>
          <Face values={cube.slice(36, 45)} />
        </td>
        <td style={td}></td>
      </tr>
      <tr style={tr}>
        <td style={td}></td>
        <td style={td}>
          <Face values={cube.slice(45, 54)} />
        </td>
        <td style={td}></td>
      </tr>
    </table>
  );
};
