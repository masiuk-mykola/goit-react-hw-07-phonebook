import PropTypes from 'prop-types';

export const ContactItem = ({ id, name, number, handleDeleteBtn }) => {
  return (
    <li>
      <p>{name}</p>
      <p>{number}</p>
      <button type="button" onClick={() => handleDeleteBtn(id)}>
        Delete
      </button>
    </li>
  );
};

ContactItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  handleDeleteBtn: PropTypes.func.isRequired,
};
