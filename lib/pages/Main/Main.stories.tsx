import type { Meta, StoryObj } from "@storybook/react";

import Main from "./Main";

const meta = {
  title: "Pages/Main",
  component: Main,
  tags: ["autodocs"],
} satisfies Meta<typeof Main>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
