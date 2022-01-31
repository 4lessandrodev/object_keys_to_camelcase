import isCharLowerCase from './is_char_lower_case';

const isAllLower = (str: string): boolean => {
	let result: boolean = true;
	let index = 0;
	while (str[index]) {
		if (!isCharLowerCase(str[index])) {
			result = false;
			break;
		}
		index++;
	}
	return result;
};

export { isAllLower };
export default isAllLower;