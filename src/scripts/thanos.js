import fs from 'fs/promises';
import { PATH_DB } from '../constants/contacts.js';
import { getAllContacts } from './getAllContacts.js';

export const thanos = async () => {
  const allContacts = await getAllContacts();
  const updatingContacts = allContacts.reduce((acc, item) => {
    const probability = Math.random().toFixed(4);
    probability >= 0.5 ? acc.push(item) : acc;
    return acc;
  }, []);
  try {
    await fs.writeFile(PATH_DB, JSON.stringify(updatingContacts), 'utf8');
  } catch (error) {
    console.error(error);
  }
};

await thanos();