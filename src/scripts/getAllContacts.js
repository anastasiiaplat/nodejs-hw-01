import fs from 'fs/promises';
import { PATH_DB } from '../constants/contacts.js';


export const getAllContacts = async () => {
  try {
    const allContacts = JSON.parse(await fs.readFile(PATH_DB, 'utf8'));
    return allContacts;
  } catch (error) {
    console.error(error);
  }
};

console.log(await getAllContacts());