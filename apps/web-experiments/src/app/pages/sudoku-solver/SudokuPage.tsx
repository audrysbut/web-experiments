import { useState } from "react";
import { solve } from "./solver/Solve";
import { Sudoku } from "./sudoku/Sudoku";
import "./SudokuPage.css";

export const SudokuPage = () => {
  const [state, setState] = useState(new Array<number | undefined>(81));
  const [viewOnly, setViewOnly] = useState(false);

  const solveSudoku = () => {
    const solution = solve(state);
    setState(solution);
    setViewOnly(true);
  };

  const clearSolution = () => {
    setState(new Array<number | undefined>(81));
    setViewOnly(false);
  };

  return (
    <div>
      <Sudoku
        viewOnly={viewOnly}
        input={state}
        onValueChanged={(index, val) => {
          setState((prev) => {
            const newState = [...prev];
            newState[index] = val;
            return newState;
          });
        }}
      />
      <button className="SudokuButton" onClick={solveSudoku}>Solve</button>
      <button className="SudokuButton" onClick={clearSolution}>Clear</button>
    </div>
  );
};
