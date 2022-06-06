import React from "react";
//styles
import styles from "../Styles/ClearBtn.module.css";

const ClearBtn = () => {
	return (
		<div className={styles.clearBtn}>
			<button className={styles.btn}>c</button>
		</div>
	);
};

export default ClearBtn;
