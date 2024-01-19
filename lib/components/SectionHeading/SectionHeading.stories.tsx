import type { Meta, StoryObj } from "@storybook/react";

import SectionHeading from "./SectionHeading";

const meta = {
  title: "Atoms/SectionHeading",
  component: SectionHeading,
  tags: ["autodocs"],
} satisfies Meta<typeof SectionHeading>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: "Mark Toh",
  },
};

export const Role: Story = {
  args: {
    title: "Front-end Engineer, Full Stack Engineer, Tech Lead",
  },
};

export const Experience: Story = {
  args: {
    title: "Work Experience",
  },
};
