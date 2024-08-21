import { useEffect, useState } from "react";
import Form from "./Components/Form";
import Header from "./Components/Header";
import Validation from "./Components/Validation";
import ContactsList from "./Components/ContactsList";

function App() {
  const [valid, setValid] = useState(true);
  const [contacts, setContacts] = useState(JSON.parse(localStorage.getItem("contacts")) || []);
  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);
  return (
    <>
      <Header />
      <Form setValid={setValid} setContacts={setContacts} />
      <Validation valid={valid} />
      <ContactsList contacts={contacts} setContacts={setContacts} />
    </>
  );
}

export default App;
