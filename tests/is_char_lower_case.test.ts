import isCharLowerCase from '../lib/is_char_lower_case';

describe('isCharLowerCase', () => {
	it('lower', () => {
		const result = isCharLowerCase('A');
		expect(result).toBe(false);
	});

	it('lower', () => {
		const result = isCharLowerCase('B');
		expect(result).toBe(false);
	});

	it('lower', () => {
		const result = isCharLowerCase('a');
		expect(result).toBe(true);
	});

	it('lower', () => {
		const result = isCharLowerCase('c');
		expect(result).toBe(true);
	});

	it('lower', () => {
		const result = isCharLowerCase('4');
		expect(result).toBe(false);
	});

	it('lower', () => {
		const result = isCharLowerCase('_');
		expect(result).toBe(false);
	});
});