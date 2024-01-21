import styles from "../Styles/Header.module.css";
import { VscGithubAlt } from "react-icons/vsc";
export default function Header() {
	return (
		<header className={styles.header}>
			<h1>Concat Manager</h1>
			<h3>
				Developer{" "}
				<span className="badge">
					<a href="https://github.com/mahdl-karami/" target="_blank"  rel="noreferrer">
						GitHub <VscGithubAlt />
					</a>
				</span>{" "}
				Page
			</h3>
		</header>
	);
}
