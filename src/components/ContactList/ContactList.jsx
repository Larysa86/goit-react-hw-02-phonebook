import PropTypes from 'prop-types';
import { ContactItem } from '../ContactItem/ContactItem';
import css from './ContactList.module.css';


export const ContactList = ({ contacts, onDeleteContact, totalContacts }) => {
  return (
    <ul className={css.contactsList}>
      {contacts.map(({ number, name, id }) => (
        <ContactItem
          key={id}
          number={number}
          name={name}
          onDeleteContact={() => onDeleteContact(id)}
        />
      ))}
      <p className={css.totalContacts}>Кількість контактів: {totalContacts}</p>
    </ul>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.exact({
      number: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    })
  ),
  onDeleteContact: PropTypes.func.isRequired,
  totalContacts: PropTypes.number,
};