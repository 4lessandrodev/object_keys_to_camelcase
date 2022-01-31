import isCharUnderscore from '../lib/is_char_underscore';

describe('isCharUnderscore', () => {
	it('underscore', () => {
		const result = isCharUnderscore('_');
		expect(result).toBe(true);
	});

	it('underscore', () => {
		const result = isCharUnderscore('a');
		expect(result).toBe(false);
	});

	it('underscore', () => {
		const result = isCharUnderscore('Z');
		expect(result).toBe(false);
	});

	it('underscore', () => {
		const result = isCharUnderscore('2');
		expect(result).toBe(false);
	});
});