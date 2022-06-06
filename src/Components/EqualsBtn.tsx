import React from "react";
//styles
import styles from "../Styles/EqualsBtn.module.css";

import { Dispatch } from "react";
import { ICalculatorActions, ACTIONS } from "../Structures";

interface IProps {
	dispatch: Dispatch<ICalculatorActions>;
}

const EqualsBtn: React.FC<IProps> = ({ dispatch }) => {
	return (
		<div className={styles.equalsBtn}>
			<button
				className={styles.btn}
				onClick={() => dispatch({ type: ACTIONS.CALCULATE, payload: "" })}
			>
				=
			</button>
		</div>
	);
};

export default EqualsBtn;
