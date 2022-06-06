import { Dispatch } from "react";
//styles
import styles from "../Styles/KeypadBtns.module.css";

import { ICalculatorActions, keypad } from "../Structures";
import KeypadBtn from "./KeypadBtn";

interface IProps {
	dispatch: Dispatch<ICalculatorActions>;
}

const KeypadBtns: React.FC<IProps> = ({ dispatch }) => {
	return (
		<div className={styles.keypad}>
			{keypad.map((value: string, i) => {
				return <KeypadBtn value={value} key={i} dispatch={dispatch} />;
			})}
		</div>
	);
};

export default KeypadBtns;
