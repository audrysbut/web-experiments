import { CSSProperties } from "react";
import { EditableItem } from "./EditableItem";
import { SudokuInputs } from "./SudokuInputs";

const brickStyle: CSSProperties = {
  border: "1px solid black",
  height: "60px",
  width: "60px",
  textAlign: "center",
  fontSize: "30px",
};

const tableStyle: CSSProperties = {
  border: "1px solid black",
};

const toMatrix = (all: (number | undefined)[], part: number): Matrix => {
  const rowOne = part * 3 - 1;
  const one = all[rowOne + 1];
  const two = all[rowOne + 2];
  const three = all[rowOne + 3];

  const rowTwo = rowOne + 6;
  const four = all[rowTwo + 4];
  const five = all[rowTwo + 5];
  const six = all[rowTwo + 6];

  const rowThree = rowTwo + 6;
  const seven = all[rowThree + 7];
  const eight = all[rowThree + 8];
  const nine = all[rowThree + 9];

  return [
    [one, two, three],
    [four, five, six],
    [seven, eight, nine],
  ];
};

type Matrix = (number | undefined)[][];
interface SudokuPartProps {
  values: SudokuInputs;
  part: number;
  viewOnly?: boolean;
  onValueChanged?: (index: number, value: number | undefined) => void;
}

export const SudokuPart = ({
  values,
  part,
  viewOnly,
  onValueChanged,
}: SudokuPartProps) => {
  const matrix = toMatrix(values, part);
  const rowOne = part * 3 - 1;
  const rowTwo = rowOne + 6;
  const rowThree = rowTwo + 6;

  const rocordMap = new Map<number, number>([
    [0, rowOne + 1],
    [1, rowOne + 2],
    [2, rowOne + 3],

    [3, rowTwo + 4],
    [4, rowTwo + 5],
    [5, rowTwo + 6],

    [6, rowThree + 7],
    [7, rowThree + 8],
    [8, rowThree + 9],
  ]);
  return (
    <table style={tableStyle}>
      <tbody>
        {matrix.map((row, rowIndex) => {
          return (
            <tr key={rowIndex} style={brickStyle}>
              {row.map((td, colIndex) => {
                return (
                  <td key={colIndex} style={brickStyle}>
                    {viewOnly ? (
                      td
                    ) : (
                      <EditableItem
                        value={td}
                        onValueChanged={(value) => {
                          if (onValueChanged) {
                            const pos = rowIndex * 3 + colIndex;
                            const index = rocordMap.get(pos) as number;
                            onValueChanged(index, value);
                          }
                        }}
                      ></EditableItem>
                    )}
                  </td>
                );
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};
