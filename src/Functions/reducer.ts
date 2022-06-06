import { ICalculatorActions } from "../Structures";
import { IDisplayState } from "../Structures";
import { ACTIONS } from "../Structures";

export const reducer = (
	state: IDisplayState,
	action: ICalculatorActions
): IDisplayState => {
	switch (action.type) {
		case ACTIONS.ADD_NUMBER:
			//spread state and overwrite current value by appending value of pressed btn
			return {
				...state,
				currentValue: `${state.currentValue}${action.payload}`,
			};
		case ACTIONS.DELETE_NUMBER:
			//remove most recently appended value
			return { ...state, currentValue: state.currentValue.slice(0, -1) };
		case ACTIONS.CHOOSE_OPERATOR:
			//receive chosen operator in payload + await new currentValue
			return {
				...state,
				currentValue: "",
				previousValue: state.currentValue,
				operation: action.payload,
			};
	}
	return { currentValue: "", previousValue: "", operation: "" };
};
