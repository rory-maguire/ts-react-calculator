//styles
import styles from "../Styles/KeypadBtn.module.css";
//special type given by react
import { Dispatch } from "react";
//library to work with sfx
import { Howl } from "howler";
//sfx
import buttonClick from "../sfx/click.mp3";
//structures
import { ICalculatorActions } from "../Structures/index";
import { ACTIONS } from "../Structures";

const clickSound = new Howl({
	src: [buttonClick],
});

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
					clickSound.play();
				} else if (value !== "del") {
					dispatch({ type: ACTIONS.ADD_NUMBER, payload: value });
					clickSound.play();
				}
			}}
		>
			{value}
		</button>
	);
};

export default KeypadBtn;
