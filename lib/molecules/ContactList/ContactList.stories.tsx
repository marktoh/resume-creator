import type { Meta, StoryObj } from "@storybook/react";

import ContactList from "./ContactList";
import ContactListItem from "../../components/ContactListItem/ContactListItem";
import ContactLink from "../ContactLink/ContactLink";

const meta = {
  title: "Molecules/ContactList",
  component: ContactList,
  tags: ["autodocs"],
} satisfies Meta<typeof ContactList>;

export default meta;
type Story = StoryObj<typeof meta>;

const DATA = [
  {
    title: "portfolio",
  },
  {
    title: "marktohtk@gmail.com",
  },
  {
    title: "linkedin",
    href: "https://linkedin.com",
  },
];

const renderItems = () =>
  DATA?.map((e) => (
    <ContactListItem key={e.title}>
      <ContactLink title={e.title} href={e.href} />
    </ContactListItem>
  ));

export const Default: Story = {
  args: {
    children: renderItems(),
  },
};

export const Center: Story = {
  args: {
    children: renderItems(),
    center: true,
  },
};
