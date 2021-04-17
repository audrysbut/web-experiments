import {  SudokuPart } from "./SudokuPart";
interface SudokurowProps {
  values: (number | undefined)[];
  sudokuRow: number;
  viewOnly?: boolean;
  onValueChanged?: (
    index: number,
    value: number | undefined
  ) => void;
}

export const Sudokurow = ({ values, sudokuRow, onValueChanged, viewOnly }: SudokurowProps) => {
  const part1 = sudokuRow * 9;
  const part2 = part1 + 1;
  const part3 = part2 + 1;

  return (
    <div
      style={{
        flexDirection: "row",
        display: "flex",
      }}
    >
      <SudokuPart values={values} viewOnly={viewOnly} part={part1} key={part1} onValueChanged={onValueChanged} />
      <SudokuPart values={values} viewOnly={viewOnly} part={part2} key={part2} onValueChanged={onValueChanged} />
      <SudokuPart values={values} viewOnly={viewOnly} part={part3} key={part3} onValueChanged={onValueChanged} />
    </div>
  );
};
