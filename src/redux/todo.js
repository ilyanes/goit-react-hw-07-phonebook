import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://62c028fbc134cf51ceca296c.mockapi.io/api/v1/';

const fetchContacts = createAsyncThunk('contacts/fetchContacts', async () => {
  fetchContacts.pending();
  try {
    const { data } = await axios.get('/contacts');
    return data;
  } catch (error) {
    fetchContacts.rejected(error);
  }
});

const addContact = createAsyncThunk('contacts/addContact', async contact => {
  addContact.pending();
  try {
    const { data } = await axios.post('/contacts', contact);

    return data;
  } catch (error) {
    addContact.rejected(error);
  }
});

const deleteContact = createAsyncThunk('contacts/deleteContact', async id => {
  deleteContact.pending();
  try {
    await axios.delete(`/contacts/${id}`);
    return id;
  } catch (error) {
    deleteContact.rejected(error);
  }
});

export { fetchContacts, addContact, deleteContact };
