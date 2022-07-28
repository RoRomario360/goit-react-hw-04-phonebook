import { useState, useEffect } from 'react';
import { Form } from './ContactForm/ContactForm';
import Container from './Container/Container';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';

export const App = () => {
  const [contacts, setContacts] = useState(() => {
    return (
      JSON.parse(localStorage.getItem('contacts')) ?? [
        { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
        { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
        { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
        { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
      ]
    );
  });
  const [filter, setfilter] = useState('');

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const addContactsData = contact => {
    const repeatCont = contacts.some(
      elem => elem.name.toLowerCase() === contact.name.toLowerCase()
    );
    if (repeatCont) {
      alert(`Sorry:( , but ${contact.name} already in contacts`);
      return;
    }

    setContacts(ps => [...ps, contact]);
  };

  const handlerFilterUsers = ({ target: { value } }) => {
    setfilter(value);
  };

  const getSearchContacts = () => {
    return contacts.filter(({ name }) => {
      return name.toLowerCase().includes(filter.toLowerCase());
    });
  };

  const handlerDelete = id => {
    setContacts(ps => ps.filter(contact => id !== contact.id));
  };

  return (
    <div>
      <Container title="Phone book">
        <Form addContactsData={addContactsData} />
      </Container>
      <Container title="Contacts">
        <Filter
          filterContacts={filter}
          handlerFilterUsers={handlerFilterUsers}
        />
        <ContactList
          contactList={getSearchContacts()}
          onDelete={handlerDelete}
        />
      </Container>
    </div>
  );
};
