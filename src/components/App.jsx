import { ContactForm } from './Form/Form';
import { ContactList } from './ContactList/ContactList';
import { Box } from './Box';
import { Filter } from './Filter/Filter';
import { useSelector, useDispatch } from 'react-redux';
import {
  useGetContactsQuery,
  useAddContactMutation,
} from 'redux/contactsSlice';
import { filterContacts } from 'redux/filterSlice';

export const App = () => {
  const { data: contacts, isFetching } = useGetContactsQuery();
  const [addContact] = useAddContactMutation();

  const filterState = useSelector(state => state.filter);
  const dispatch = useDispatch();

  const handleSubmitForm = contact => {
    contacts.find(
      item => item.name.toLowerCase() === contact.name.toLowerCase()
    )
      ? alert(` ${contact.name} is already in contacts`)
      : addContact(contact);
  };

  const changeFilter = e => {
    dispatch(filterContacts(e.currentTarget.value));
  };

  const normalFilter = filterState.toLowerCase();
  if (!contacts) {
    return;
  }

  const visibleContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(normalFilter)
  );

  return (
    <Box p={10}>
      <h2>Phonebook</h2>

      <ContactForm onSubmit={handleSubmitForm} />

      <h2>Contacts</h2>
      <Filter value={filterState} onChange={changeFilter} />

      {!isFetching && contacts.length > 0 ? (
        <ContactList contacts={visibleContacts} />
      ) : (
        <h3>Please, add new contact</h3>
      )}
    </Box>
  );
};
