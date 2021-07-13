import isCharUnderscore from './is_char_undercore';

const isLastCharUnderscore = (str: string): boolean => {
	return isCharUnderscore(str[str.length - 1]);
};

export { isLastCharUnderscore };
export default isLastCharUnderscore;