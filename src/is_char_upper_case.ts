import getAsciiCodeForChar from './get_ascii_code';

const isCharUpperCase = (char: string): boolean => {
	const letterAUpperCode = 65;
	const letterZUpperCode = 90;
	if (typeof char === 'string') {
		const asciiCode = getAsciiCodeForChar(char);
		return asciiCode >= letterAUpperCode && asciiCode <= letterZUpperCode;
	}
	return false;
};

export { isCharUpperCase };
export default isCharUpperCase;