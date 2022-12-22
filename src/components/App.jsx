import React, { Component } from 'react';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { nanoid } from 'nanoid';
import { ContactForm, ContactList, Filter } from './index';
import css from './App.module.css';

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
// handleInputChange = (e) => {
//     this.setState({
//       [e.currentTarget.name]: e.currentTarget.value,
//     });
//   };

//   addContact = (data) => {
//     const { name, number } = data;
//     if (this.checkDoubleContact(data)) {
//       Notify.info(`${name} is already in your contacts!`);
//       return;
//     }
//     const newContact = {
//       id: nanoid(),
//       name,
//       number,
//     };
//     this.setState(prevState => ({
//       contacts: [newContact, ...prevState.contacts],
//     }));
//   };

//   checkDoubleContact = (inputData) => {
//     return this.state.contacts.find(contact => contact.name === inputData.name);
//   };

//   getVisibleContacts = () => {
//     const { contacts, filter } = this.state;
//     const normalized = filter.toLowerCase();
//     return contacts.filter(contact => contact.name.toLowerCase().includes(normalized));
//   };

//   deleteContact = (id) => {
//     this.setState(prevState => ({
//       contacts: prevState.contacts.filter(el => el.id !== id),
//     }));
//   };

//   render() {
//     const visibleContacts = this.getVisibleContacts();

//     return (
//       <div className={css.wrapper}>
//         <h1 className={css.title}>Phonebook</h1>
//         <ContactForm onSubmit={this.addContact} />
//         <h2 className={css.titleContacts}>Contacts</h2>
//         <Filter value={this.state.filter} onFilter={this.handleInputChange} />
//         <ContactList contacts={visibleContacts} deleteContact={this.deleteContact} />
//       </div>
//     );
//   }
    addContact = ({ name, number }) => {
      const newContact = {
        id: nanoid(),
        name,
        number,
      };
      const currentName = name;
      const matchName = this.state.contacts.some(
        ({ name }) => name === currentName
      );

      matchName
        ? Notify.info(`${name} is already in contacts!`)
        : this.setState(({ contacts }) => ({
            contacts: [newContact, ...contacts],
          }));
    };

    changeFilter = event => {
      this.setState({ filter: event.currentTarget.value });
    };

    getVisibleContacts = () => {
      const { contacts, filter } = this.state;
      const normalizedFilter = filter.toLowerCase().trim();

      return contacts.filter(({ name }) =>
        name.toLowerCase().includes(normalizedFilter)
      );
    };

    deleteContact = contactId => {
      this.setState(({ contacts }) => ({
        contacts: contacts.filter(({ id }) => id !== contactId),
      }));
    };

    render() {
      const { contacts, filter } = this.state;
      const { addContact, changeFilter, deleteContact, getVisibleContacts } =
        this;
      const visibleContacts = getVisibleContacts();
      const totalContacts = contacts.length;

      return (
        <div className={css.wrapper}>
          <h1 className={css.title}>Phonebook</h1>
          <ContactForm onSubmit={addContact} />
          <h2 className={css.titleContacts}>Contacts</h2>
          <Filter value={filter} onChange={changeFilter} />
          <ContactList
            deleteContact={deleteContact}
            contacts={visibleContacts}
            totalContacts={totalContacts}
          />
        </div>
      );
    }
}
