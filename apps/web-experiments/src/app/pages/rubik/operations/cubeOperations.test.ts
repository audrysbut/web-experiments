import { back, backB, bottom, bottomB, front, frontB, initialize, left, leftB, right, rightB, top, topB } from "./cubeOperations";

test("left operation should work", () => {
  const init = initialize();
  const after = left(init);
  expect(after).toMatchSnapshot();
});

test("leftB operation should work", () => {
  const init = initialize();
  const after = leftB(init);
  expect(after).toMatchSnapshot();
});

test("right operation should work", () => {
  const init = initialize();
  const after = right(init);
  expect(after).toMatchSnapshot();
});

test("rightB operation should work", () => {
  const init = initialize();
  const after = rightB(init);
  expect(after).toMatchSnapshot();
});

test("top operation should work", () => {
  const init = initialize();
  const after = top(init);
  expect(after).toMatchSnapshot();
});

test("topB operation should work", () => {
  const init = initialize();
  const after = topB(init);
  expect(after).toMatchSnapshot();
});

test("bottom operation should work", () => {
  const init = initialize();
  const after = bottom(init);
  expect(after).toMatchSnapshot();
});

test("bottomB operation should work", () => {
  const init = initialize();
  const after = bottomB(init);
  expect(after).toMatchSnapshot();
});

test("back operation should work", () => {
  const init = initialize();
  const after = back(init);
  expect(after).toMatchSnapshot();
});

test("backB operation should work", () => {
  const init = initialize();
  const after = backB(init);
  expect(after).toMatchSnapshot();
});

test("front operation should work", () => {
  const init = initialize();
  const after = front(init);
  expect(after).toMatchSnapshot();
});

test("frontB operation should work", () => {
  const init = initialize();
  const after = frontB(init);
  expect(after).toMatchSnapshot();
});