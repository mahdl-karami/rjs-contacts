import { useState } from "react";
import inputs from "../Constant/inputs";
import { changeHandler, submitHandler } from "../Helpers/handleForm";
import styles from "../Styles/Form.module.css";
export default function Form({ setValid }) {
	const [values, setValues] = useState({
		firstName: "",
		lastName: "",
		email: "",
		number: "",
	});
	return (
		<form onSubmit={(e) => submitHandler(e, values, setValid)} className={styles.form}>
			{inputs.map(({ name, type, placeHolder }) => (
				<input key={name} value={values[name]} name={name} type={type} placeholder={placeHolder} onChange={(e) => changeHandler(e, setValues)}></input>
			))}
			<button type="submit">Add Contact</button>
		</form>
	);
}
