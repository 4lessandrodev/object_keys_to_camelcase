import getAsciiCodeForChar from '../lib/get_ascii_code';

describe('getAsciiCodeForChar', () => {
	it('should ', () => {
		const result = getAsciiCodeForChar('A');
		expect(result).toBe(65);
	});

	it('should ', () => {
		const result = getAsciiCodeForChar('Z');
		expect(result).toBe(90);
	});

	it('should ', () => {
		const result = getAsciiCodeForChar('a');
		expect(result).toBe(97);
	});

	it('should ', () => {
		const result = getAsciiCodeForChar('z');
		expect(result).toBe(122);
	});

	it('should ', () => {
		const result = getAsciiCodeForChar('_');
		expect(result).toBe(95);
	});

	it('should ', () => {
		const result = getAsciiCodeForChar('N');
		expect(result).toBe(78);
	});

	it('should ', () => {
		const result = getAsciiCodeForChar('0');
		expect(result).toBe(48);
	});

	it('should ', () => {
		const result = getAsciiCodeForChar('9');
		expect(result).toBe(57);
	});
});