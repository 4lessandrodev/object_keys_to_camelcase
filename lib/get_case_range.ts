import isAllLower from './is_all_lower_case';
import isAllUpper from './is_all_upper_case';
import isCharUnderscore from './is_char_underscore';
import isCharUpperCase from './is_char_upper_case';

const getCaseRange = (str: string): string => {

	const allLower = isAllLower(str);
	const allUpper = isAllUpper(str);

	if (allLower || allUpper) {
		return str.toLowerCase();
	}

	let index = str.length - 1;
	let strResult = str[index];
	let rangeCase = !isCharUpperCase(str[index]);

	let isUnderscoreChar = false;
	while (str[index] && rangeCase && index >= 0 && !isUnderscoreChar) {

		index--;
		rangeCase = !isCharUpperCase(str[index]);
		isUnderscoreChar = isCharUnderscore(str[index]);

		if (typeof str[index] !== 'undefined') {
			strResult += str[index].toLowerCase();
		}

	}

	const normalized = strResult
		.split('')
		.reverse()
		.toString()
		.replace(/,/g, '');

	return normalized.toLowerCase();
};

export { getCaseRange };
export default getCaseRange;