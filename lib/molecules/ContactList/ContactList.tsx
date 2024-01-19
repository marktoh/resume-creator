import { ReactNode } from "react";

interface ContactListProps {
  children: ReactNode;
  center?: boolean;
}
function ContactList({ children, center = false }: ContactListProps) {
  // TODO: Fix class ovverride
  let classNames = "flex gap-4";
  if (center) classNames += " justify-center";
  return <ul className={classNames}>{children}</ul>;
}

export default ContactList;
