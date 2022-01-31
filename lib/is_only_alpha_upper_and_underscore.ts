import isCharLowerCase from './is_char_lower_case';
import isCharNumber from './is_char_number';
import isCharUnderscore from './is_char_underscore';

const isOnlyAlphaUpperAndUnderscore = (str: string): boolean => {

	let result = true;
	let index = 0;

	while (str[index]) {
		if (
			isCharLowerCase(str[index])
			&& !isCharUnderscore(str[index])
			&& !isCharNumber(str[index])
		) {
			return false;
		}
		index++;
	}
	return result;
};

export { isOnlyAlphaUpperAndUnderscore };
export default isOnlyAlphaUpperAndUnderscore;