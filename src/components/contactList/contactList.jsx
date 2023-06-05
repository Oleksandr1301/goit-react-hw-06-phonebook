import { Contact } from '../contactItem/contactItem';
import { useSelector } from 'react-redux';
import { getContacts, getValueFilter } from 'redux/selectors';

import { List } from './contactList.styled';

const getVisibleContacts = (contacts, filterValue) => {
  if (!filterValue) {
    return contacts;
  }
  return contacts.filter(contact =>
    contact.name.toLowerCase().includes(filterValue)
  );
};

export const ContactList = () => {
  const contacts = useSelector(getContacts);
  const filterValue = useSelector(getValueFilter);

  const visibleContacts = getVisibleContacts(contacts, filterValue);
  return (
    <List>
      {visibleContacts.map(contact => {
        return <Contact key={contact.id} contact={contact} />;
      })}
    </List>
  );
};
