import React from "react";
import styles from "../Styles/KeypadBtn.module.css";
import { Dispatch } from "react";

import { ICalculatorActions } from "../Structures/index";

interface IProps {
	value: string;
	dispatch: Dispatch<ICalculatorActions>;
}

const KeypadBtn: React.FC<IProps> = ({ value }) => {
	return <button className={styles.btn}>{value}</button>;
};

export default KeypadBtn;
