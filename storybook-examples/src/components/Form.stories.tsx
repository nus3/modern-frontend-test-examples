import type { Meta, StoryObj } from '@storybook/react';
import { userEvent, within, fn, waitFor, expect } from '@storybook/test';
import { Form } from './Form';

const meta = {
  title: 'Components/Form',
  component: Form,
  parameters: {
    layout: 'centered',
  }
} satisfies Meta<typeof Form>;

export default meta;
type Story = StoryObj<typeof meta>;

// 基本的なフォームの表示
export const Default: Story = {
  args: {
    onSubmit: (name) => {
      console.log(`Submitted name: ${name}`);
    },
  },
};

// 送信ボタンをクリックするインタラクションテスト
export const SubmitInteraction: Story = {
  args: {
    onSubmit: fn(),
  },
  play: async ({ canvasElement, step, args }) => {
    const canvas = within(canvasElement);

    await step('名前フィールドに名前を入力', async () => {
      await userEvent.type(canvas.getByRole("textbox", { name: "Name" }), 'nus3');
    });

    await step('送信ボタンをクリック', async () => {
      await userEvent.click(canvas.getByRole("button", { name: "送信" }));
    });

    await step('submit時に入力された値が渡される', async () => {
      await waitFor(() => expect(args.onSubmit).toHaveBeenCalledWith('nus3'));
    });
  },
};
