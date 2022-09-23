import PropTypes from 'prop-types';
import { ContactItem } from './ContactItem/ContactItem';

export const ContactList = ({ contacts, onDeleteBtn }) => {
  return (
    <ul>
      {contacts.map(item => {
        const { name, id, number } = item;
        return (
          <ContactItem
            id={id}
            key={id}
            name={name}
            number={number}
            handleDeleteBtn={onDeleteBtn}
          />
        );
      })}
    </ul>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ).isRequired,
  onDeleteBtn: PropTypes.func.isRequired,
};
