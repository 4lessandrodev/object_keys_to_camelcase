import isCharUpperCase from './is_char_upper_case';

const isAllUpper = (str: string): boolean => {
	let result: boolean = true;
	let index = 0;
	while (str[index]) {
		if (!isCharUpperCase(str[index])) {
			result = false;
			break;
		}
		index++;
	}
	return result;
};

export { isAllUpper };
export default isAllUpper;