import getAsciiCodeForChar from './get_ascii_code';

const isCharLowerCase = (char: string): boolean => {
	const letterALowerCode = 97;
	const letterZCode = 122;
	if (typeof char === 'string') {
		const asciiCode = getAsciiCodeForChar(char);
		return asciiCode >= letterALowerCode && asciiCode <= letterZCode;
	}
	return false;
};

export { isCharLowerCase };
export default isCharLowerCase;