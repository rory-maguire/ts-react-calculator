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
	}
	return { currentValue: "", previousValue: "", operation: "" };
};
