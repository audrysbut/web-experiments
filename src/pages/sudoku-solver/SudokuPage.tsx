import { useState } from "react";
import { Sudoku } from "./sudoku/Sudoku";

export const SudokuPage = () => {
  const [state, setState] = useState(new Array<number | undefined>(81));
  return (
    <Sudoku
      viewOnly={false}
      input={state}
      onValueChanged={(index, val) => {
        setState((prev) => {
          const newState = [...prev];
          newState[index] = val;
          return newState;
        });
      }}
    />
  );
};
