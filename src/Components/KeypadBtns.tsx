//special type given by react
import { Dispatch } from "react";
//styles
import styles from "../Styles/KeypadBtns.module.css";
//structures
import { ICalculatorActions } from "../Structures";
import { keypad } from "../Structures";
//components
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
