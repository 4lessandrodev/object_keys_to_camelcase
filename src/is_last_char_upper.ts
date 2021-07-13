import isCharUpperCase from './is_char_upper_case';


const isLastCharUpper = (str: string): boolean => {
	return isCharUpperCase(str[str.length - 1]);
};

export { isLastCharUpper };
export default isLastCharUpper;