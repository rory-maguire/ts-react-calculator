import React from "react";
//styles
import styles from "../Styles/ClearBtn.module.css";

import { Dispatch } from "react";
import { ICalculatorActions } from "../Structures";
import { ACTIONS } from "../Structures";

import { Howl } from "howler";
import buttonClick from "../sfx/Button_Plate Click (Minecraft Sound) - Sound Effect for editing.mp3";

const clickSound = new Howl({
	src: [buttonClick],
});
interface IProps {
	dispatch: Dispatch<ICalculatorActions>;
}

const ClearBtn: React.FC<IProps> = ({ dispatch }) => {
	return (
		<div className={styles.clearBtn}>
			<button
				className={styles.btn}
				onClick={() => {
					dispatch({ type: ACTIONS.CLEAR, payload: "" });
					clickSound.play();
				}}
			>
				c
			</button>
		</div>
	);
};

export default ClearBtn;
