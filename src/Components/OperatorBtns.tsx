import { Dispatch } from "react";
import { ICalculatorActions } from "../Structures";
//styles
import styles from "../Styles/OperatorBtns.module.css";
import { operators } from "../Structures";

import OperatorBtn from "./OperatorBtn";

interface IProps {
	dispatch: Dispatch<ICalculatorActions>;
}

const OperatorBtns: React.FC<IProps> = ({ dispatch }) => {
	return (
		<div className={styles.operators}>
			{operators.map((operator: string, i) => {
				return <OperatorBtn operator={operator} key={i} dispatch={dispatch} />;
			})}
		</div>
	);
};

export default OperatorBtns;
