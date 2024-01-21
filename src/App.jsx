import { useState } from "react";
import Form from "./Components/Form";
import Header from "./Components/Header";
import Validation from "./Components/Validation";

function App() {
	const [valid, setValid] = useState(true);

	return (
		<>
			<Header />
			<Form valid={valid} setValid={setValid} />
			{!valid && <Validation />}
		</>
	);
}

export default App;
