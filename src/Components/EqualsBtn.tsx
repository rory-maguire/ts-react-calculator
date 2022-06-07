import React from "react";
//styles
import styles from "../Styles/EqualsBtn.module.css";

import { Dispatch } from "react";
import { ICalculatorActions, ACTIONS } from "../Structures";
import { Howl } from "howler";
import blip from "../sfx/Video Game Beep - Sound Effect.mp3";

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
