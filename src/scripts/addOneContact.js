import fs from 'fs/promises';
import { PATH_DB } from '../constants/contacts.js';
import { createFakeContact } from '../utils/createFakeContact.js';
import { getAllContacts } from './getAllContacts.js';

export const addOneContact = async () => {
  const existingContacts = await getAllContacts();
  const updatingContacts = [...existingContacts, createFakeContact()];
  try {
    await fs.writeFile(PATH_DB, JSON.stringify(updatingContacts), 'utf8');
  } catch (error) {
    console.error(error);
  }
};

await addOneContact();