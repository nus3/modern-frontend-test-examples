import { describe, test, expect, vi } from "vitest";
import { render } from "vitest-browser-react";
import { page, userEvent } from "@vitest/browser/context";
import { OverlappingButtons } from "./OverlappingButtons";

describe("OverlappingButtons (ブラウザ環境)", () => {
  test("前面ボタンをクリック", async () => {
    const onBackButtonClick = vi.fn();
    const onFrontButtonClick = vi.fn();

    render(
      <OverlappingButtons
        onBackButtonClick={onBackButtonClick}
        onFrontButtonClick={onFrontButtonClick}
      />
    );

    const frontButton = page.getByRole("button", { name: "前面ボタン" });
    await userEvent.click(frontButton);

    expect(onFrontButtonClick).toHaveBeenCalledTimes(1);
    expect(onBackButtonClick).not.toHaveBeenCalled();
  });

  test.skip("背面ボタンをクリック", async () => {
    const onBackButtonClick = vi.fn();
    const onFrontButtonClick = vi.fn();

    render(
      <OverlappingButtons
        onBackButtonClick={onBackButtonClick}
        onFrontButtonClick={onFrontButtonClick}
      />
    );

    const backButton = page.getByRole("button", { name: "背面ボタン" });
    await backButton.click();

    expect(onBackButtonClick).toHaveBeenCalledTimes(1);
    expect(onFrontButtonClick).not.toHaveBeenCalled();
  });
});
