import { describe, it, expect } from "vitest";
import { add, subtract, multiply, divide } from "../src/calculator";

describe("計算機能のテスト", () => {
  it("add関数は2つの数値を足し合わせる", () => {
    expect(add(1, 2)).toBe(3);
    expect(add(-1, 1)).toBe(0);
    expect(add(5, 5)).toBe(10);
  });

  it("subtract関数は第一引数から第二引数を引く", () => {
    expect(subtract(5, 2)).toBe(3);
    expect(subtract(1, 1)).toBe(0);
    expect(subtract(0, 5)).toBe(-5);
  });

  it("multiply関数は2つの数値を掛け合わせる", () => {
    expect(multiply(2, 3)).toBe(6);
    expect(multiply(0, 5)).toBe(0);
    expect(multiply(-1, 5)).toBe(-5);
  });

  it("divide関数は第一引数を第二引数で割る", () => {
    expect(divide(6, 2)).toBe(3);
    expect(divide(5, 2)).toBe(2.5);
    expect(divide(0, 5)).toBe(0);
  });

  it("divide関数は0除算でエラーを投げる", () => {
    expect(() => divide(5, 0)).toThrow("Cannot divide by zero");
  });
});
