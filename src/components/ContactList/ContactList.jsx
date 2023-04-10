import { ContactListItem } from 'components/ContactListItem';
import { useSelector } from 'react-redux';
import { getContacts, getFilterValue } from 'components/redux/selectors';

import style from './ContactList.module.css';

const getVisibleContacts = (contacts, filter) => {
  const normalizedFilter = filter.toLowerCase();
  return contacts.filter(({ name }) => {
    return name.includes(normalizedFilter);
  });
};

export const ContactList = () => {
  const contacts = useSelector(getContacts);
  console.log(contacts);
  const filter = useSelector(getFilterValue);
  const visibleContacts = getVisibleContacts(contacts, filter);
  return (
    <ul className={style.contactList}>
      {visibleContacts.map(contact => {
        return <ContactListItem contact={contact} key={contact.id} />;
      })}
    </ul>
  );
};
