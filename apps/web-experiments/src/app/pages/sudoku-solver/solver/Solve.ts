import { SudokuInputs } from "../sudoku/SudokuInputs";
import { getColumnPosibleValuesByColumn, getPartPosibleValuesInPart, getPosibleValuesByColumn, getPosibleValuesInRow, getRowPosibleValuesByRow } from "./helper";

export const solve = (input: SudokuInputs): SudokuInputs => {
  for (let index = 0; index < input.length; index++) {
    const value = input[index];
    if (!value) {
      let posibleValues = [1, 2, 3, 4, 5, 6, 7, 8, 9];
      const partPosibleValues = getPartPosibleValuesInPart(input, index);
      posibleValues = posibleValues.filter(
        (v) => !partPosibleValues.includes(v)
      );

      const rowPosibleValues = getPosibleValuesInRow(input, index);
      posibleValues = posibleValues.filter(
        (v) => !rowPosibleValues.includes(v)
      );

      const columnPosibleValues = getPosibleValuesByColumn(input, index);
      posibleValues = posibleValues.filter(
        (v) => !columnPosibleValues.includes(v)
      );
      for (const row of posibleValues) {
        const hypotesisInput = [...input];
        hypotesisInput[index] = row;
        const tempRez = solve(hypotesisInput);
        const tempRezVerified = verify(tempRez);
        if (tempRezVerified) {
          return tempRez;
        }
      }
      return input;
    }
  }

  return input;
};

const verify = (results: SudokuInputs): boolean => {
  const undefinedResultsExist =
    results.filter((val) => val === undefined).length === 0;
  if (!undefinedResultsExist) {
    return false;
  }

  for (let row = 0; row < 9; row++) {
    const vals = getRowPosibleValuesByRow(results, row);
    const posibleValues = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    const left = posibleValues.filter((v) => !vals.includes(v));
    if (left.length > 0) {
      return false;
    }
  }

  for (let col = 0; col < 9; col++) {
    const vals = getColumnPosibleValuesByColumn(results, col);
    const posibleValues = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    const left = posibleValues.filter((v) => !vals.includes(v));
    if (left.length > 0) {
      return false;
    }
  }
  return true;
};
