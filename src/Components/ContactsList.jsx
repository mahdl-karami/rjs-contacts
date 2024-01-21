import styles from "../Styles/ContactsList.module.css";
import { MdOutlineContactPhone } from "react-icons/md";
import { HiOutlineMail } from "react-icons/hi";
import { PiTrash } from "react-icons/pi";
import { removeHandler } from "../Helpers/handelContacts";

export default function ContactsList({ contacts, setContacts }) {
	return (
		<ul className={styles.contacts}>
			{contacts.length ? (
				<>
					{contacts.map(({ firstName, lastName, email, number, id }, i) => (
						<li key={i}>
							<span>
								{firstName} {lastName}
							</span>
							<span>
								<HiOutlineMail />
								{email}
							</span>
							<span>
								<MdOutlineContactPhone /> {number}
							</span>
							<span>
								<button onClick={() => removeHandler(id, contacts, setContacts)}>
									<PiTrash />
								</button>
							</span>
						</li>
					))}
				</>
			) : (
				<>
					<h1>The Contact List Is Empty ;</h1>
					<h3>Add New Contact ... </h3>
				</>
			)}
		</ul>
	);
}
