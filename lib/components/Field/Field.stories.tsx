import type { Meta, StoryObj } from "@storybook/react";

import Field from "./Field";

const meta = {
  title: "Atoms/Field",
  component: Field,
  tags: ["autodocs"],
} satisfies Meta<typeof Field>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: "Education",
    value: "University of Wisconsin-Madison",
  },
};
