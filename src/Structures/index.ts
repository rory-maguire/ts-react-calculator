export const keypad: string[] = [
	"1",
	"2",
	"3",
	"4",
	"5",
	"6",
	"7",
	"8",
	"9",
	"del",
	"0",
	".",
];
export const operators: string[] = ["+", "-", "x", "÷"];

export interface IDisplayState {
	previousValue: string;
	currentValue: string;
	operation: string;
}

export const initialState: IDisplayState = {
	previousValue: "",
	currentValue: "",
	operation: "",
};

export enum ACTIONS {
	ADD_NUMBER = "add-number",
	DELETE_NUMBER = "delete-number",
	CLEAR = "clear",
	CHOOSE_OPERATOR = "choose-operator",
	CALCULATE = "calculate",
}

export interface ICalculatorActions {
	type: ACTIONS;
	payload: string;
}
