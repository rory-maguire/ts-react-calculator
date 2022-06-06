import { ICalculatorActions, IDisplayState } from "../Structures";

export const reducer = (
	state: IDisplayState,
	action: ICalculatorActions
): IDisplayState => {
	return { currentValue: "", previousValue: "", operation: "" };
};
