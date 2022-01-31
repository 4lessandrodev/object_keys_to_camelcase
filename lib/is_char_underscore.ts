import getAsciiCodeForChar from './get_ascii_code';

const isCharUnderscore = (char: string): boolean => {
	const underscoreCode = 95;
	if (typeof char === 'string') {
		const asciiCode = getAsciiCodeForChar(char);
		return asciiCode === underscoreCode;
	}
	return false;
};

export { isCharUnderscore };
export default isCharUnderscore;