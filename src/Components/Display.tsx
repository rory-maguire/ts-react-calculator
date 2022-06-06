//styles
import styles from "../Styles/Display.module.css";
interface IProps {
	currentValue: string;
	previousValue: string;
	operation: string;
}
const Display: React.FC<IProps> = ({
	currentValue,
	previousValue,
	operation,
}) => {
	return (
		<div className={styles.display}>
			<div className={styles.previousValue}>
				<h1>
					{previousValue}
					{operation}
				</h1>
			</div>
			<div className={styles.currentValue}>
				<h1>{currentValue}</h1>
			</div>
		</div>
	);
};

export default Display;
