import isLastCharUnderscore from './is_last_char_underscore';

const removeIfLastCharIsUnderscore = (str: string): string => {
	return isLastCharUnderscore(str) ? str.slice(0, (str.length - 1)) : str;
};

export { removeIfLastCharIsUnderscore };
export default removeIfLastCharIsUnderscore;