import { solve } from "./Solve";

const toLineString = (row: (number | undefined)[]) => {
  return row
    .map((v) => {
      if (v) {
        return v.toString();
      }
      return "-";
    })
    .join(" ");
};

const printInput = (input: (number | undefined)[]) => {
  const lines: string[] = [];
  for (let row = 0; row < 9; row++) {
    const rowItems: (number | undefined)[] = [];
    for (let col = 0; col < 9; col++) {
      const index = row * 9 + col;
      const value = input[index];
      rowItems.push(value);
    }
    lines.push(`[ ${toLineString(rowItems)} ]`);
  }
  console.log(lines.join("\n"));
};

test("Sovle ease puzzle", () => {
  const input: (number | undefined)[] = [
    undefined,
    4,
    undefined,
    undefined,
    undefined,
    1,
    7,
    3,
    undefined,
    undefined,
    3,
    5,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    8,
    undefined,
    7,
    1,
    5,
    undefined,
    undefined,
    9,
    undefined,
    4,
    undefined,
    undefined,
    6,
    undefined,
    undefined,
    undefined,
    3,
    undefined,
    undefined,
    7,
    5,
    undefined,
    undefined,
    undefined,
    2,
    undefined,
    4,
    undefined,
    undefined,
    8,
    undefined,
    undefined,
    undefined,
    6,
    undefined,
    7,
    undefined,
    undefined,
    undefined,
    undefined,
    2,
    undefined,
    undefined,
    8,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    3,
    undefined,
    4,
    2,
    undefined,
    undefined,
    undefined,
    8,
    9,
    4,
    undefined,
    undefined,
    undefined,
    1,
  ];

  console.log("Input: ");
  printInput(input);

  const solution = solve(input);
  console.log("Solution: ");
  printInput(solution);

  expect(solution).toMatchSnapshot();
});

test("Solve hard puzzle", () => {
  const input: (number | undefined)[] = [
    undefined,
    undefined,
    undefined,
    4,
    2,
    undefined,
    undefined,
    8,
    9,
    undefined,
    undefined,
    3,
    undefined,
    undefined,
    undefined,
    1,
    undefined,
    undefined,
    undefined,
    8,
    undefined,
    7,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    8,
    3,
    undefined,
    7,
    4,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    2,
    undefined,
    1,
    undefined,
    undefined,
    1,
    6,
    7,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    7,
    undefined,
    undefined,
    5,
    undefined,
    undefined,
    6,
    2,
    undefined,
    undefined,
    4,
    undefined,
    undefined,
    undefined,
    undefined,
    1,
    undefined,
    5,
    undefined,
    undefined,
    undefined,
    undefined,
    7,
    4,
    undefined,
    undefined,
  ];
  console.log("Input: ");
  printInput(input);

  const solution = solve(input);
  console.log("Solution: ");
  printInput(solution);

  expect(solution).toMatchSnapshot();
});
