import { useState } from "react";
import { Sudoku } from "./sudoku/Sudoku";

export const SudokuPage = () => {
  const [state] = useState(new Array<number | undefined>(81));
  return <Sudoku input={state} viewOnly={false} />;
};
