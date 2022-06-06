//styles
import styles from "./Styles/App.module.css";
//components
import Display from "./Components/Display";
import Body from "./Components/Body";

export function App() {
	return (
		<div className={styles.container}>
			<Display />
			<Body />
		</div>
	);
}

export default App;
