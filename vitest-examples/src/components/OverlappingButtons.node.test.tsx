import { describe, test, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { OverlappingButtons } from "./OverlappingButtons";

describe("OverlappingButtons (jsdom環境)", () => {
  test("前面ボタンをクリック", async () => {
    const onBackButtonClick = vi.fn();
    const onFrontButtonClick = vi.fn();

    render(
      <OverlappingButtons
        onBackButtonClick={onBackButtonClick}
        onFrontButtonClick={onFrontButtonClick}
      />
    );
    const frontButton = screen.getByRole("button", { name: "前面ボタン" });
    await userEvent.click(frontButton);

    expect(onFrontButtonClick).toHaveBeenCalledTimes(1);
    expect(onBackButtonClick).not.toHaveBeenCalled();
  });

  test("背面ボタンをクリック", async () => {
    const onBackButtonClick = vi.fn();
    const onFrontButtonClick = vi.fn();

    render(
      <OverlappingButtons
        onBackButtonClick={onBackButtonClick}
        onFrontButtonClick={onFrontButtonClick}
      />
    );

    const backButton = screen.getByRole("button", { name: "背面ボタン" });
    await userEvent.click(backButton);

    expect(onBackButtonClick).toHaveBeenCalledTimes(1);
    expect(onFrontButtonClick).not.toHaveBeenCalled();
  });
});
