import React from "react";
//styles
import styles from "../Styles/ClearBtn.module.css";

import { Dispatch } from "react";
import { ICalculatorActions } from "../Structures";
import { ACTIONS } from "../Structures";
interface IProps {
	dispatch: Dispatch<ICalculatorActions>;
}

const ClearBtn: React.FC<IProps> = ({ dispatch }) => {
	return (
		<div className={styles.clearBtn}>
			<button
				className={styles.btn}
				onClick={() => dispatch({ type: ACTIONS.CLEAR, payload: "" })}
			>
				c
			</button>
		</div>
	);
};

export default ClearBtn;
