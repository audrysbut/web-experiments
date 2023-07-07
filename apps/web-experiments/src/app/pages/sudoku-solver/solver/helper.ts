import { SudokuInputs } from "../sudoku/SudokuInputs";

const findRow = (index: number): number => {
  return Math.floor(index / 9);
};

const findColumn = (index: number): number => {
  const rowNumber = findRow(index);
  const startIndex = rowNumber * 9;
  return index - startIndex;
};

const getStartIndex = (index: number) => {
  const row = Math.floor(index / 27);
  const column = findColumn(index);
  if (column === 8 || column === 7 || column === 6) {
    return 6 + row * 27;
  } else if (column === 5 || column === 4 || column === 3) {
    return 3 + row * 27;
  } else {
    return row * 27;
  }
};

export const getPosibleValuesInRow = (input: SudokuInputs, index: number) => {
  const row = findRow(index);
  return getRowPosibleValuesByRow(input, row);
};

export const getPosibleValuesByColumn = (
  input: SudokuInputs,
  index: number
) => {
  const col = findColumn(index);
  return getColumnPosibleValuesByColumn(input, col);
};

export const getPartPosibleValuesInPart = (
  input: SudokuInputs,
  index: number
) => {
  const startIndex = getStartIndex(index);

  const one = input[startIndex];
  const two = input[startIndex + 1];
  const three = input[startIndex + 2];

  const rowTwo = startIndex + 9;
  const four = input[rowTwo];
  const five = input[rowTwo + 1];
  const six = input[rowTwo + 2];

  const rowThree = rowTwo + 9;
  const seven = input[rowThree];
  const eight = input[rowThree + 1];
  const nine = input[rowThree + 2];

  return [one, two, three, four, five, six, seven, eight, nine].filter(
    (v) => v !== undefined
  );
};

export const getRowPosibleValuesByRow = (
  input: SudokuInputs,
  row: number
): number[] => {
  const startIndex = row * 9;
  const endIndex = startIndex + 9;
  const rowValues: number[] = [];
  for (let i = startIndex; i < endIndex; i++) {
    const value = input[i];
    if (value) {
      rowValues.push(value);
    }
  }
  return rowValues;
};

export const getColumnPosibleValuesByColumn = (
  input: SudokuInputs,
  column: number
): number[] => {
  const values: number[] = [];
  for (let i = 0; i < 9; i++) {
    const pos = column + i * 9;
    const value = input[pos];
    if (value) {
      values.push(value);
    }
  }
  return values;
};
