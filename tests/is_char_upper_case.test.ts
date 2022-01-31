import isCharUpperCase from '../lib/is_char_upper_case';

describe('isCharUpperCase', () => {
	it('all upper', () => {
		const result = isCharUpperCase('A');
		expect(result).toBe(true);
	});

	it('all upper', () => {
		const result = isCharUpperCase('Z');
		expect(result).toBe(true);
	});

	it('all upper', () => {
		const result = isCharUpperCase('B');
		expect(result).toBe(true);
	});

	it('all upper', () => {
		const result = isCharUpperCase('2');
		expect(result).toBe(false);
	});

	it('all upper', () => {
		const result = isCharUpperCase('_');
		expect(result).toBe(false);
	});

	it('all upper', () => {
		const result = isCharUpperCase('/');
		expect(result).toBe(false);
	});
});