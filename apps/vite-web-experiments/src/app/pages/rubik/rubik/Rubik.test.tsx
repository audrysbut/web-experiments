import { render } from "@testing-library/react";
import { initialize } from "../operations/cubeOperations";
import { Rubik } from "./Rubik";

test("Rubik component should be rendered", () => {
  const cube = initialize();
  const { asFragment } = render(<Rubik cube={cube} />);
  expect(asFragment()).toMatchSnapshot();
});
