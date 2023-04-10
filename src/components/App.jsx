import { ContactForm } from 'components/ContactForm';
import { ContactList } from 'components/ContactList';
import { FilterContactForm } from 'components/FilterContactForm';

import style from './App.module.css';

export const App = () => {
  return (
    <div
      style={{
        fontSize: 40,
        color: '#010101',
      }}
      className={style.container}
    >
      <h1 className={style.title}>Phonebook</h1>
      <ContactForm />
      <h2 className={style.title}>Contacts</h2>
      <FilterContactForm />
      <ContactList />
    </div>
  );
};
