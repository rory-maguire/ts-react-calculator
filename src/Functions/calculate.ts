export const calculate = (
	previous: string,
	current: string,
	operation: string
): string => {
	let result: string | number = "";
	const curr: number = Number(current);
	const prev: number = Number(previous);

	switch (operation) {
		case "+":
			result = prev + curr;
			break;
		case "-":
			result = curr - prev;
			break;
		case "x":
			result = prev * curr;
			break;
		case "÷":
			result = curr / prev;
			break;
		default:
			return result;
	}
	return result.toString();
};
