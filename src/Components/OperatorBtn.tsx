import React from "react";

import styles from "../Styles/OperatorBtn.module.css";

interface IProps {
	operator: string;
}
const OperatorBtn: React.FC<IProps> = ({ operator }) => {
	return <button className={styles.btn}>{operator}</button>;
};

export default OperatorBtn;
