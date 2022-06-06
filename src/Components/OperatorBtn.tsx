import React from "react";

import styles from "../Styles/OperatorBtn.module.css";

import { Dispatch } from "react";

import { ICalculatorActions } from "../Structures/index";
import { ACTIONS } from "../Structures";

interface IProps {
	operator: string;
	dispatch: Dispatch<ICalculatorActions>;
}
const OperatorBtn: React.FC<IProps> = ({ operator, dispatch }) => {
	return (
		<button
			className={styles.btn}
			onClick={() => {
				dispatch({ type: ACTIONS.CHOOSE_OPERATOR, payload: operator });
			}}
		>
			{operator}
		</button>
	);
};

export default OperatorBtn;
