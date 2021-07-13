import getAsciiCodeForChar from './get_ascii_code';

const isCharNumber = (char: string): boolean => {
	const asciiCode = getAsciiCodeForChar(char);
	const zeroAsciiCode = 48;
	const nineAsciiCode = 57;
	return asciiCode >= zeroAsciiCode && asciiCode <= nineAsciiCode;
};

export { isCharNumber };
export default isCharNumber;