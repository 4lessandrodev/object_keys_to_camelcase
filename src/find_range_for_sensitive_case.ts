import getCaseRange from './get_case_range';
import isAllLower from './is_all_lower_case';
import isAllUpper from './is_all_upper_case';
import isLastCharUnderscore from './is_last_char_undercore';
import isLastCharUpper from './is_last_char_upper';
import isOnlyAlphaUpperAndUnderscore from './is_only_alpha_upper_and_underscore';
import removeIfLastCharIsUnderscore from './remove_last_char_if_underscore';
import transformLastCharToLower from './transform_last_char_to_lower';

const findRangesForSensitiveCase = (str: string): string[] => {

	const ranges: string[] = [];
	let strCopy = str;

	if (isAllUpper(str)) {
		return [str.toLowerCase()];
	}

	if (isAllLower(str)) {
		return [str.toLowerCase()];
	}

	if (isOnlyAlphaUpperAndUnderscore(str)) {
		strCopy = str.toLowerCase();
	}

	let hasFinalUnderscoreValue = isLastCharUnderscore(strCopy);

	if (isLastCharUpper(str)) {
		strCopy = transformLastCharToLower(strCopy);
	}

	while (hasFinalUnderscoreValue) {
		strCopy = removeIfLastCharIsUnderscore(strCopy);
		hasFinalUnderscoreValue = isLastCharUnderscore(strCopy);
	}

	while (strCopy.length > 1) {
		let range = getCaseRange(strCopy);
		strCopy = strCopy.slice(0, strCopy.length - range.length);
		ranges.push(range);
	}

	return ranges.reverse();
};

export { findRangesForSensitiveCase };
export default findRangesForSensitiveCase;