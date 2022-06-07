import React from "react";

import styles from "../Styles/OperatorBtn.module.css";
import { Howl } from "howler";

import { Dispatch } from "react";

import { ICalculatorActions } from "../Structures/index";
import { ACTIONS } from "../Structures";

import buttonClick from "../sfx/Button_Plate Click (Minecraft Sound) - Sound Effect for editing.mp3";

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
