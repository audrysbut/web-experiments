import React from "react";
import { SudokuInputs } from "./SudokuInputs";
import { Sudokurow } from "./SudokuRow";

interface SudokuProps {
  input: SudokuInputs;
  viewOnly?: boolean;
  onValueChanged?: (
    index: number,
    value: number | undefined
  ) => void;
}

export const Sudoku = ({ input, onValueChanged, viewOnly }: SudokuProps) => {
  return (
    <div>
      <Sudokurow values={input} sudokuRow={0} viewOnly={viewOnly} key={0} onValueChanged={onValueChanged} />
      <Sudokurow values={input} sudokuRow={1} viewOnly={viewOnly} key={1} onValueChanged={onValueChanged} />
      <Sudokurow values={input} sudokuRow={2} viewOnly={viewOnly} key={2} onValueChanged={onValueChanged} />
    </div>
  );
};
