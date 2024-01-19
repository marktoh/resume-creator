import type { Meta, StoryObj } from "@storybook/react";

import ContactListItem from "./ContactListItem";

const meta = {
  title: "Atoms/ContactListItem",
  component: ContactListItem,
  tags: ["autodocs"],
} satisfies Meta<typeof ContactListItem>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: <a>marktohtk@gmail.com</a>,
  },
};
