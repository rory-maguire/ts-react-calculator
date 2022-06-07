import React from "react";
import styles from "../Styles/KeypadBtn.module.css";
import { Dispatch } from "react";
import { Howl } from "howler";
import { ICalculatorActions } from "../Structures/index";
import { ACTIONS } from "../Structures";

import buttonClick from "../sfx/Button_Plate Click (Minecraft Sound) - Sound Effect for editing.mp3";

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
