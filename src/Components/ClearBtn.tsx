//special type given by react
import { Dispatch } from "react";
//styles
import styles from "../Styles/ClearBtn.module.css";
//structures
import { ICalculatorActions } from "../Structures";
import { ACTIONS } from "../Structures";
//libary to work with sfx
import { Howl } from "howler";
//sfx
import buttonClick from "../sfx/click.mp3";

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
