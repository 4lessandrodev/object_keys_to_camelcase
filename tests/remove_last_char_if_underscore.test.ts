import removeIfLastCharIsUnderscore from '../lib/remove_last_char_if_underscore';

describe('removeIfLastCharIsUnderscore', () => {
	it('should ', () => {
		const result = removeIfLastCharIsUnderscore('last_');
		expect(result).toBe('last');
	});

	it('should ', () => {
		const result = removeIfLastCharIsUnderscore('LAST_');
		expect(result).toBe('LAST');
	});

	it('should ', () => {
		const result = removeIfLastCharIsUnderscore('230984_');
		expect(result).toBe('230984');
	});

	it('should ', () => {
		const result = removeIfLastCharIsUnderscore('_');
		expect(result).toBe('');
	});

	it('should ', () => {
		const result = removeIfLastCharIsUnderscore('_id');
		expect(result).toBe('_id');
	});
});
