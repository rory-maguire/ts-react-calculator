import React from "react";
import styles from "../Styles/KeypadBtn.module.css";
import { Dispatch } from "react";

import { ICalculatorActions } from "../Structures/index";
import { ACTIONS } from "../Structures";

interface IProps {
	value: string;
	dispatch: Dispatch<ICalculatorActions>;
}

const KeypadBtn: React.FC<IProps> = ({ value, dispatch }) => {
	return (
		<button
			className={styles.btn}
			onClick={() => {
				if (value === "del") {
					dispatch({ type: ACTIONS.DELETE_NUMBER, payload: "" });
				} else if (value !== "del") {
					dispatch({ type: ACTIONS.ADD_NUMBER, payload: value });
				}
			}}
		>
			{value}
		</button>
	);
};

export default KeypadBtn;
