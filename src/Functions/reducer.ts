//structures
import { ICalculatorActions } from "../Structures";
import { initialState } from "../Structures";
import { IDisplayState } from "../Structures";
import { ACTIONS } from "../Structures";
import { calculate } from "./calculate";

export const reducer = (
	state: IDisplayState,
	action: ICalculatorActions
): IDisplayState => {
	switch (action.type) {
		case ACTIONS.ADD_NUMBER:
			//don't let user type multiple ... or 000
			if (state.currentValue === "O" && action.payload === "0") return state;
			if (action.payload === "." && state.currentValue.includes("."))
				return state;

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
			if (state.previousValue === "")
				return {
					...state,
					currentValue: "",
					previousValue: state.currentValue,
					operation: action.payload,
				};

			//if user continues calculation, update previous value each time
			return {
				...state,
				previousValue: calculate(
					state.currentValue,
					state.previousValue,
					state.operation
				),
				currentValue: "",
				operation: action.payload,
			};

		case ACTIONS.CALCULATE:
			//pass the values to calculate fn
			return {
				...state,
				currentValue: calculate(
					state.currentValue,
					state.previousValue,
					state.operation
				),
				previousValue: "",
				operation: "",
			};
		case ACTIONS.CLEAR:
			//empty strings
			return initialState;
	}
};
