import React from "react";
import { Sudokurow } from "./SudokuRow";

interface SudokuProps {
  input: (number | undefined)[];
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
