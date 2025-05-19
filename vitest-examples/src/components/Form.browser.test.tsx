import { describe, test, expect, vi } from "vitest";
import { render } from "vitest-browser-react";
import { page, userEvent } from '@vitest/browser/context'
import { Form } from "./Form";

describe("Form (ブラウザテスト)", () => {
  test("フォームに名前を入力して送信ボタンをクリックすると、onSubmitが呼ばれる", async () => {
    const onSubmit = vi.fn();
    render(<Form onSubmit={onSubmit} />);

    // 入力フィールドを取得
    const nameField = page.getByRole("textbox", { name: "Name" });

    // 入力フィールドにテキストを入力
    await userEvent.type(nameField, "nus3");

    // 送信ボタンをクリック
    const submitButton = page.getByRole("button", { name: "送信" });
    await userEvent.click(submitButton);

    // onSubmit関数が正しい引数で呼ばれたか確認
    expect(onSubmit).toHaveBeenCalledWith("nus3");
  });

});
