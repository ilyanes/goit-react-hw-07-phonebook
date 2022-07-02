import { createReducer } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import { changeFilter } from 'redux/actions';
import { addContact, deleteContact, fetchContacts } from './todo';

function getNewContact(state, { payload }) {
  const existContact = state.some(({ name }) => name === payload.name);
  return !existContact
    ? [...state, payload]
    : alert(`${payload.name} is already in the contact`);
}

const items = createReducer([], {
  [fetchContacts.fulfilled]: (_, { payload }) => payload,
  [addContact.fulfilled]: (state, action) => getNewContact(state, action),
  [deleteContact.fulfilled]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload),
});

const filter = createReducer('', {
  [changeFilter]: (_, { payload }) => payload,
});
const loading = createReducer(false, {
  [fetchContacts.pending]: () => true,
  [fetchContacts.fulfilled]: () => false,
  [fetchContacts.rejected]: () => false,

  [addContact.pending]: () => true,
  [addContact.fulfilled]: () => false,
  [addContact.rejected]: () => false,

  [deleteContact.pending]: () => true,
  [deleteContact.fulfilled]: () => false,
  [deleteContact.rejected]: () => false,
});

export default combineReducers({
  items,
  loading,
  filter,
});
