import inputs from "../Constant/inputs";
export default function Form() {
	return (
		<form>
			{inputs.map(({ name, type, placeHolder }) => (
				<input key={name} name={name} type={type} placeholder={placeHolder}></input>
			))}
			<button type="submit">Add Contact</button>
		</form>
	);
}
