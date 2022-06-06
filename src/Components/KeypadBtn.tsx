import React from "react";
import styles from "../Styles/KeypadBtn.module.css";

interface IProps {
	value: string;
}

const KeypadBtn: React.FC<IProps> = ({ value }) => {
	return <button className={styles.btn}>{value}</button>;
};

export default KeypadBtn;
