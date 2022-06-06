//styles
import styles from "../Styles/KeypadBtns.module.css";

import { keypad } from "../Structures";
import KeypadBtn from "./KeypadBtn";

const KeypadBtns = () => {
	return (
		<div className={styles.keypad}>
			{keypad.map((value: string, i) => {
				return <KeypadBtn value={value} key={i} />;
			})}
		</div>
	);
};

export default KeypadBtns;
