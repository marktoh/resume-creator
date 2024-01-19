import type { Meta, StoryObj } from "@storybook/react";

import BrandName from "./BrandName";

const meta = {
  title: "Atoms/BrandName",
  component: BrandName,
  tags: ["autodocs"],
} satisfies Meta<typeof BrandName>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: "Mark Toh",
  },
};
