import isCharNumber from './is_char_number';
import isCharUnderscore from './is_char_undercore';
import isCharUpperCase from './is_char_upper_case';

const isOnlyAlphaLowerAndUnderscore = (str: string): boolean => {

	let result = true;
	let index = 0;

	while (str[index]) {
		if (
			isCharUpperCase(str[index])
			&& !isCharUnderscore(str[index])
			&& !isCharNumber(str[index])
		) {
			return false;
		}
		index++;
	}
	return result;
};

export { isOnlyAlphaLowerAndUnderscore };
export default isOnlyAlphaLowerAndUnderscore;