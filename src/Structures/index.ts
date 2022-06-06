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
