import React, { CSSProperties } from "react";
import { CubeData } from "../operations/cubeOperations";
import { Block } from "./Block";

interface FaceProps {
  values: CubeData;
}

const td: CSSProperties = {
  padding: "0.02rem",
};

const tr: CSSProperties = {};

const table: CSSProperties = {
  borderSpacing: "0.1rem",
};

export const Face = ({ values }: FaceProps) => {
  return (
    <table style={table}>
      <tbody>
        <tr style={tr}>
          <td style={td}>
            <Block value={values[0]} />
          </td>
          <td style={td}>
            <Block value={values[1]} />
          </td>
          <td style={td}>
            <Block value={values[2]} />
          </td>
        </tr>
        <tr style={tr}>
          <td style={td}>
            <Block value={values[3]} />
          </td>
          <td style={td}>
            <Block value={values[4]} />
          </td>
          <td style={td}>
            <Block value={values[5]} />
          </td>
        </tr>
        <tr style={tr}>
          <td style={td}>
            <Block value={values[6]} />
          </td>
          <td style={td}>
            <Block value={values[7]} />
          </td>
          <td style={td}>
            <Block value={values[8]} />
          </td>
        </tr>
      </tbody>
    </table>
  );
};
