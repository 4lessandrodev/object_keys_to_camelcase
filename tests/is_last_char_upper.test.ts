import isLastCharUpper from '../src/is_last_char_upper';

describe('isLastCharUpper', () => {
	it('should ', () => {
		const result = isLastCharUpper("ALLUPPER");
		expect(result).toBe(true);
	});

	it('should ', () => {
		const result = isLastCharUpper("upperR");
		expect(result).toBe(true);
	});

	it('should ', () => {
		const result = isLastCharUpper("upper1");
		expect(result).toBe(false);
	});

	it('should ', () => {
		const result = isLastCharUpper("upper");
		expect(result).toBe(false);
	});

	it('should ', () => {
		const result = isLastCharUpper("upper_");
		expect(result).toBe(false);
	});
});

