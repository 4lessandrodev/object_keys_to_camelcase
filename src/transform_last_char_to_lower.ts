const transformLastCharToLower = (str: string): string => {
	return str.slice(0, (str.length - 1)) + str[str.length - 1].toLowerCase();
};

export { transformLastCharToLower };
export default transformLastCharToLower;