import type { Meta, StoryObj } from "@storybook/react";

import Link from "./Link";

const meta = {
  title: "Atoms/Link",
  component: Link,
  tags: ["autodocs"],
} satisfies Meta<typeof Link>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "marktohtk@gmail.com",
  },
};

export const Hover: Story = {
  args: {
    children: "marktohtk@gmail.com",
  },
  parameters: {
    pseudo: {
      hover: true,
    },
  },
};
