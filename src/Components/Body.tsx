//special type given by react
import { Dispatch } from "react";
//styles
import styles from "../Styles/Body.module.css";
//components
import KeypadBtns from "./KeypadBtns";
import OperatorBtns from "./OperatorBtns";
import EqualsBtn from "./EqualsBtn";
import ClearBtn from "./ClearBtn";
//structures
import { ICalculatorActions } from "../Structures";

interface IProps {
	dispatch: Dispatch<ICalculatorActions>;
}

const Body: React.FC<IProps> = ({ dispatch }) => {
	return (
		<div className={styles.body}>
			<KeypadBtns dispatch={dispatch} />
			<OperatorBtns dispatch={dispatch} />
			<ClearBtn dispatch={dispatch} />
			<EqualsBtn dispatch={dispatch} />
		</div>
	);
};

export default Body;
