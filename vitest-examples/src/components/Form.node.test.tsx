import { describe, test, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Form } from "./Form";

describe("Form", () => {
  test("フォームに名前を入力して送信ボタンをクリックすると、onSubmitが呼ばれる", async () => {
    const onSubmit = vi.fn();
    // 1. フォームコンポーネントを描画
    render(<Form onSubmit={onSubmit} />);

    // 2. name 用の input 要素に値を入力
    const nameField = screen.getByRole("textbox", { name: "Name" });
    await userEvent.type(nameField, "nus3");

    // 3. 送信ボタンをクリック
    const submitButton = screen.getByRole("button", { name: "送信" });
    await userEvent.click(submitButton);

    // 4. submit 時に入力された値が渡されていることを確認
    expect(onSubmit).toHaveBeenCalledWith("nus3");
  });
});
