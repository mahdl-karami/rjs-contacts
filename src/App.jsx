import { useState } from "react";
import Form from "./Components/Form";
import Header from "./Components/Header";
import Validation from "./Components/Validation";

function App() {
	const [valid, setValid] = useState(true);
	const [contacts, setContacts] = useState([]);
	console.log(contacts);
	return (
		<>
			<Header />
			<Form setValid={setValid} setContacts={setContacts} />
			{!valid && <Validation />}
		</>
	);
}

export default App;
