import isLastCharUnderscore from '../src/is_last_char_undercore';


describe('isLastCharUnderscore', () => {
	it('should ', () => {
		const result = isLastCharUnderscore("lastunderscore_");
		expect(result).toBe(true);
	});

	it('should ', () => {
		const result = isLastCharUnderscore("last_underscore_");
		expect(result).toBe(true);
	});

	it('should ', () => {
		const result = isLastCharUnderscore("UNDER_");
		expect(result).toBe(true);
	});

	it('should ', () => {
		const result = isLastCharUnderscore("_UNDER_");
		expect(result).toBe(true);
	});

	it('should ', () => {
		const result = isLastCharUnderscore("lastunderscore");
		expect(result).toBe(false);
	});

	it('should ', () => {
		const result = isLastCharUnderscore("last_underscore");
		expect(result).toBe(false);
	});

	it('should ', () => {
		const result = isLastCharUnderscore("UNDER");
		expect(result).toBe(false);
	});

	it('should ', () => {
		const result = isLastCharUnderscore("_UNDER");
		expect(result).toBe(false);
	});
});