import isLastCharUnderscore from './is_last_char_undercore';
import removeIfLastCharIsUnderscore from './remove_last_char_if_underscore';

const transformSnakeCaseKey = (ranges: string[]): string => {

	let key: string = '';

	for (let i = 0; ranges[i]; i++) {

		if (i !== 0) {
			ranges[i] = ranges[i].replace(/_/g, '');
			key += '_' + ranges[i];
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

export { transformSnakeCaseKey };
export default transformSnakeCaseKey;