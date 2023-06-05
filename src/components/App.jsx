import { PhoneForm } from './phoneForm/phoneForm';

import { ContactFilter } from './contactFilter/contactFilter';
import { ContactList } from './contactList/contactList';
import { useSelector } from 'react-redux';
import { getContacts } from 'redux/selectors';

export const App = () => {
  const contacts = useSelector(getContacts);

  return (
    <div>
      <h1>Phonebook</h1>
      <PhoneForm />
      {contacts.length > 0 && (
        <div>
          <h2>Contacts</h2>
          <ContactFilter />
          <ContactList />
        </div>
      )}
    </div>
  );
};
