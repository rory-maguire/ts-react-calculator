//styles
import styles from "../Styles/OperatorBtn.module.css";
//library to work with sfx
import { Howl } from "howler";
//special type given by react
import { Dispatch } from "react";
//structures
import { ICalculatorActions } from "../Structures/index";
import { ACTIONS } from "../Structures";
//sfx
import buttonClick from "../sfx/click.mp3";

const clickSound = new Howl({
	src: [buttonClick],
});

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
				clickSound.play();
			}}
		>
			{operator}
		</button>
	);
};

export default OperatorBtn;
