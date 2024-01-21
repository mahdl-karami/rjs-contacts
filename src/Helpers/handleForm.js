const submitHandler = (e, values, setValid, setValues) => {
	const { firstName, lastName, email, number } = values;
	e.preventDefault();
	if (!firstName || !lastName || !email || !number) {
		setValid(false);
		return;
	} else {
		setValid(true);
		// setValues({
		// 	firstName: "",
		// 	lastName: "",
		// 	email: "",
		// 	number: "",
		// });
	}
};
const changeHandler = (e, setValues) => {
	const { name, value } = e.target;
	setValues((values) => ({ ...values, [name]: value }));
};
export { submitHandler, changeHandler };
