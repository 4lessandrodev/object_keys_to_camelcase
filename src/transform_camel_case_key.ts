import isLastCharUnderscore from './is_last_char_undercore';
import removeIfLastCharIsUnderscore from './remove_last_char_if_underscore';

const transformCamelCaseKey = (ranges: string[]): string => {

	let key: string = '';

	for (let i = 0; ranges[i]; i++) {

		if (i !== 0) {
			ranges[i] = ranges[i].replace(/_/g, '');
			key += ranges[i][0].toUpperCase() + ranges[i].slice(1, ranges[i].length);
		} else {
			if (isLastCharUnderscore(ranges[i])) {
				key += removeIfLastCharIsUnderscore(ranges[i]);
			} else {
				key += ranges[i];
			}
		}

	}
	return key;
};

export { transformCamelCaseKey };
export default transformCamelCaseKey;