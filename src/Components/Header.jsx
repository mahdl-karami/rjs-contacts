import styles from "../Styles/Header.module.css";
import { VscGithubAlt } from "react-icons/vsc";
export default function Header() {
	return (
		<header className={styles.header}>
			<h1>Concat Manager</h1>
			<h3>
				Developer <span className="badge">GitHub <VscGithubAlt /> </span> Page
			</h3>
		</header>
	);
}
