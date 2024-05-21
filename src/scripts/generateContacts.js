import fs from 'fs/promises';
import { PATH_DB } from '../constants/contacts.js';
import { createFakeContact } from '../utils/createFakeContact.js';
import { getAllContacts } from './getAllContacts.js';

const generateContacts = async (number) => {
  const newContacts = Array.from({ length: number }, createFakeContact);
  const existingContacts = await getAllContacts();
  const updatingContacts = [...existingContacts, ...newContacts];
  try {
    await fs.writeFile(PATH_DB, JSON.stringify(updatingContacts), 'utf8');
  } catch (error) {
    console.error(error);
  }
};

await generateContacts(5);