export const isUpperCase = (char: string): boolean => {
	if (char.length > 1) {
		throw new Error(`${char} has more than 1 char`);
	}
	return char.charCodeAt(0) >= 65 && char.charCodeAt(0) <= 90;
};

export default isUpperCase;