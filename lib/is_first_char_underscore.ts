import isCharUnderscore from './is_char_underscore';

const isFirstCharUnderscore = (str: string): boolean => {
	return isCharUnderscore(str[0]);
};

export { isFirstCharUnderscore };
export default isFirstCharUnderscore;