export default function ContactsList({ contacts }) {
	return (
		<div>
			{contacts.length ? (
				<>
					{contacts.map((contact, i) => (
						<li key={i}>{contact.firstName}</li>
					))}
				</>
			) : (
				<h1>Not Contacts</h1>
			)}
		</div>
	);
}
