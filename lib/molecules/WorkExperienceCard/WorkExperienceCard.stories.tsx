import type { Meta, StoryObj } from "@storybook/react";

import WorkExperienceCard from "./WorkExperienceCard";
import store from "../../../store";

const meta = {
  title: "Molecules/WorkExperienceCard",
  component: WorkExperienceCard,
  tags: ["autodocs"],
} satisfies Meta<typeof WorkExperienceCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { ...store.workExperience.data[0] },
};

export const MissingDate: Story = {
  args: { ...store.workExperience.data[1], startDate: null, endDate: null },
};
