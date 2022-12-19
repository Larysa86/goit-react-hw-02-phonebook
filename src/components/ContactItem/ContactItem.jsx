import PropTypes from 'prop-types';
import css from './ContactItem.module.css';

export const ContactItem = ({ name, number, onDeleteContact }) => {
  return (
    <li className={css.contactItem}>
      {name}: {number}
      <button className={css.contactBtn} type="button" onClick={onDeleteContact}>
        Delete
      </button>
    </li>
  );
};

ContactItem.propTypes = {
  number: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};