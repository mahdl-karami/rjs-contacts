import styles from "../Styles/Validation.module.css";
export default function Validation({ valid }) {
	return (
		<div className={styles.valid} style={{ visibility: valid ? "hidden" : "visible" }}>
			<h3>Please Enter Valid Values</h3>
		</div>
	);
}
