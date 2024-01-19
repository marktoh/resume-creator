import STORE from "../../../store";
import ContactList from "../../molecules/ContactList/ContactList";
import ContactListItem from "../../components/ContactListItem/ContactListItem";
import ContactLink from "../../molecules/ContactLink/ContactLink";

function PopulatedContactList() {
  const renderItems = () =>
    STORE.CONTACT_LIST_DATA?.map((e) => (
      <ContactListItem key={e.title}>
        <ContactLink key={e.title} title={e.title} href={e.href} />
      </ContactListItem>
    ));
  return <ContactList center>{renderItems()}</ContactList>;
}

export default PopulatedContactList;
