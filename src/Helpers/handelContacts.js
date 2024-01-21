const removeHandler = (id , contacts , setContacts) => {
    const newContacts = contacts.filter(contact => contact.id != id);
    setContacts(newContacts)
};
export {removeHandler}