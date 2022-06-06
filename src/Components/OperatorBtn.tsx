import React from "react";

import styles from "../Styles/OperatorBtn.module.css";

import { Dispatch } from "react";

import { ICalculatorActions } from "../Structures/index";

interface IProps {
	operator: string;
	dispatch: Dispatch<ICalculatorActions>;
}
const OperatorBtn: React.FC<IProps> = ({ operator }) => {
	return <button className={styles.btn}>{operator}</button>;
};

export default OperatorBtn;
