//styles
import styles from "../Styles/OperatorBtns.module.css";
import { operators } from "../Structures";

import OperatorBtn from "./OperatorBtn";

const OperatorBtns = () => {
	return (
		<div className={styles.operators}>
			{operators.map((operator: string, i) => {
				return <OperatorBtn operator={operator} key={i} />;
			})}
		</div>
	);
};

export default OperatorBtns;
