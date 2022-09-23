import { Loader } from 'components/Loader/Loader';
import PropTypes from 'prop-types';
import { useDeleteContactMutation } from 'redux/contactsSlice';

export const ContactItem = ({ id, name, phone }) => {
  const [deleteContact, { status }] = useDeleteContactMutation();
  return (
    <li>
      {status === 'pending' ? (
        <Loader />
      ) : (
        <>
          <p>{name}</p>
          <p>{phone}</p>
          <button type="button" onClick={() => deleteContact(id)}>
            Delete
          </button>
        </>
      )}
    </li>
  );
};

ContactItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
};
