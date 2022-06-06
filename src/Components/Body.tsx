//styles
import styles from "../Styles/Body.module.css";
import ClearBtn from "./ClearBtn";

//components
import KeypadBtns from "./KeypadBtns";
import OperatorBtns from "./OperatorBtns";
import EqualsBtn from "./EqualsBtn";

const Body = () => {
	return (
		<div className={styles.body}>
			<KeypadBtns />
			<OperatorBtns />
			<ClearBtn />
			<EqualsBtn />
		</div>
	);
};

export default Body;
