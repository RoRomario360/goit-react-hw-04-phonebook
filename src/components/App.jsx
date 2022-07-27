import { Component } from 'react';
import { Form } from './ContactForm/ContactForm';
import Container from './Container/Container';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  componentDidMount() {
    const contacts = localStorage.getItem('contacts');
    if (contacts) {
      this.setState({ contacts: JSON.parse(contacts) });
    }
  }

  componentDidUpdate(prevState) {
    if (prevState.contacts !== this.state.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  addContactsData = contact => {
    const repeatCont = this.state.contacts.some(
      elem => elem.name.toLowerCase() === contact.name.toLowerCase()
    );
    if (repeatCont) {
      alert(`Sorry:( , but ${contact.name} already in contacts`);
      return;
    }

    this.setState(prevState => ({
      contacts: [...prevState.contacts, contact],
    }));
  };

  handlerFilterUsers = ({ target: { value } }) => {
    this.setState({ filter: value });
  };

  getSearchContacts = () => {
    const { contacts, filter } = this.state;
    return contacts.filter(({ name }) => {
      return name.toLowerCase().includes(filter.toLowerCase());
    });
  };

  handlerDelete = id => {
    this.setState({
      contacts: this.state.contacts.filter(contact => id !== contact.id),
    });
  };

  render() {
    const { filter } = this.state;
    return (
      <div>
        <Container title="Phone book">
          <Form addContactsData={this.addContactsData} />
        </Container>
        <Container title="Contacts">
          <Filter
            filterContacts={filter}
            handlerFilterUsers={this.handlerFilterUsers}
          />
          <ContactList
            contactList={this.getSearchContacts()}
            onDelete={this.handlerDelete}
          />
        </Container>
      </div>
    );
  }
}
