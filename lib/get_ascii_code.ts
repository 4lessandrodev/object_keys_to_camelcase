const getAsciiCodeForChar = (char: string): number => {
	if (typeof char === 'string') {
		return char.charCodeAt(0);
	}
	return 0;
};

export { getAsciiCodeForChar };
export default getAsciiCodeForChar;