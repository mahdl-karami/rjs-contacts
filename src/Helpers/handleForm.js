const submitHandler = (e, values) => {
	e.preventDefault();
	console.log(values);
};
const changeHandler = (e, setValues) => {
	const { name, value } = e.target;
	setValues((values) => ({ ...values, [name]: value }));
};
export { submitHandler, changeHandler };
