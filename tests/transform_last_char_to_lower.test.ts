import transformLastCharToLower from '../src/transform_last_char_to_lower';

describe('transformLastCharToLower', () => {
	it('should ', () => {
		const result = transformLastCharToLower('hellO');
		expect(result).toBe('hello');
	});

	it('should ', () => {
		const result = transformLastCharToLower('HELLO');
		expect(result).toBe('HELLo');
	});

	it('should ', () => {
		const result = transformLastCharToLower('hello');
		expect(result).toBe('hello');
	});
});