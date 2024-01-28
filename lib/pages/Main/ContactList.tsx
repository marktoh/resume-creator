import ContactList from "../../molecules/ContactList/ContactList";
import ContactListItem from "../../components/ContactListItem/ContactListItem";
import ContactLink from "../../molecules/ContactLink/ContactLink";

interface itemProps {
  title: string;
  href?: string;
}
function PopulatedContactList({ items }: { items: Array<itemProps> }) {
  const renderItems = () =>
    items?.map((e: itemProps) => (
      <ContactListItem key={e.title}>
        <ContactLink key={e.title} title={e.title} href={e.href} />
      </ContactListItem>
    ));
  return <ContactList center>{renderItems()}</ContactList>;
}

export default PopulatedContactList;
