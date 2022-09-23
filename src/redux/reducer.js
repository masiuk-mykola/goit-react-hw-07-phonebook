import { createReducer, current } from '@reduxjs/toolkit';
import { addContact, deleteContact, filterContact } from './action';

const contacts = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

export const phoneBookReducer = createReducer(contacts, {
  [addContact]: (state, action) => [action.payload, ...current(state)],
  [deleteContact]: (state, action) =>
    current(state).filter(contact => contact.id !== action.payload),
});

const filter = '';

export const filterReducer = createReducer(filter, {
  [filterContact]: (state, action) => action.payload,
});
