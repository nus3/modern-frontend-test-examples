import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Form } from "./Form";

describe("Form", () => {
  test("フォームに名前を入力して送信ボタンをクリックすると、onSubmitが呼ばれる", async () => {
    const onSubmit = jest.fn();
    render(<Form onSubmit={onSubmit} />);

    // 入力フィールドを取得（getByRoleを使用）
    const nameInput = screen.getByRole("textbox", { name: "Name" });

    // 入力フィールドにテキストを入力
    await userEvent.type(nameInput, "テスト太郎");

    // 送信ボタンをクリック（getByRoleを使用）
    const submitButton = screen.getByRole("button", { name: "送信" });
    await userEvent.click(submitButton);

    // onSubmit関数が正しい引数で呼ばれたか確認
    expect(onSubmit).toHaveBeenCalledWith("テスト太郎");
  });

  test("初期状態では入力フィールドは空である", () => {
    render(<Form onSubmit={() => {}} />);

    const nameInput = screen.getByLabelText("Name") as HTMLInputElement;
    expect(nameInput.value).toBe("");
  });
});
