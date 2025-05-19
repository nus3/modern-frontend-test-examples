import { add, subtract, multiply, divide } from "./calculator";

test("add関数は2つの数値を足し合わせる", () => {
  expect(add(1, 2)).toBe(3);
  expect(add(-1, 1)).toBe(0);
  expect(add(5, 5)).toBe(10);
});
