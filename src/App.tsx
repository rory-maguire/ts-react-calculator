//styles
import styles from "./Styles/App.module.css";
//components
import Display from "./Components/Display";
import Body from "./Components/Body";
import { useReducer } from "react";
import { initialState } from "./Structures";
import { reducer } from "./Functions/reducer";

export function App() {
	const [state, dispatch] = useReducer(reducer, initialState);
	const { currentValue, previousValue, operation } = state;
	return (
		<div className={styles.container}>
			<Display
				currentValue={currentValue}
				previousValue={previousValue}
				operation={operation}
			/>
			<Body dispatch={dispatch} />
		</div>
	);
}

export default App;
