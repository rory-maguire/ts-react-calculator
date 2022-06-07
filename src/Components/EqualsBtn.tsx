//styles
import styles from "../Styles/EqualsBtn.module.css";
//special type given by react
import { Dispatch } from "react";
//structures
import { ICalculatorActions } from "../Structures";
import { ACTIONS } from "../Structures";
//library to work with sfx
import { Howl } from "howler";
//sfx
import blip from "../sfx/blip.mp3";

interface IProps {
	dispatch: Dispatch<ICalculatorActions>;
}

const blipSound = new Howl({
	src: [blip],
});

const EqualsBtn: React.FC<IProps> = ({ dispatch }) => {
	return (
		<div className={styles.equalsBtn}>
			<button
				className={styles.btn}
				onClick={() => {
					dispatch({ type: ACTIONS.CALCULATE, payload: "" });
					blipSound.play();
				}}
			>
				=
			</button>
		</div>
	);
};

export default EqualsBtn;
