import { getAllContacts } from './getAllContacts.js';

export const countContacts = async () => {
  const contactsQuantity = (await getAllContacts()).length;
  return contactsQuantity;
};

console.log(await countContacts());