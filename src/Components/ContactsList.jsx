import styles from "../Styles/ContactsList.module.css";
import { MdOutlineContactPhone } from "react-icons/md";
import { HiOutlineMail } from "react-icons/hi";
import { PiTrash } from "react-icons/pi";

export default function ContactsList({ contacts }) {
	return (
		<ul className={styles.contacts}>
			{contacts.length ? (
				<>
					{contacts.map((contact, i) => (
						<li key={i}>
							<span>
								{contact.firstName} {contact.lastName}
							</span>
							<span>
								<HiOutlineMail />
								{contact.email}
							</span>
							<span>
								<MdOutlineContactPhone /> {contact.number}
							</span>
							<span>
								<button>
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
