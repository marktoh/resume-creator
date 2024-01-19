import { ReactNode } from "react";

interface ContactListItemProps {
  children: ReactNode;
}
function ContactListItem({ children }: ContactListItemProps) {
  return <li className="text-sm">{children}</li>;
}

export default ContactListItem;
