import type { Meta, StoryObj } from "@storybook/react";

import ContactLink from "./ContactLink";

const meta = {
  title: "Molecules/ContactLink",
  component: ContactLink,
  tags: ["autodocs"],
} satisfies Meta<typeof ContactLink>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: "Click Me",
  },
};

export const Portfolio: Story = {
  args: {
    title: "portfolio",
  },
};

export const Email: Story = {
  args: {
    title: "marktohtk@gmail.com",
  },
};

export const Website: Story = {
  args: {
    title: "facebook.com",
    href: "https://facebook.com",
  },
};
