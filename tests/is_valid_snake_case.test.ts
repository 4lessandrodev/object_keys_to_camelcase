import isValidSnakeCase from '../src/is_valid_snake_case';

describe('objctKeysToSnakeCase', () => {

	it('should be invalid SnakeCase prop', () => {
		const res = isValidSnakeCase('invalid_SnakeCase');
		expect(res).toBe(false);
	});

	it('should be valid SnakeCase prop', () => {
		const res = isValidSnakeCase('_valid_snake_case');
		expect(res).toBe(true);
	});

	it('should be valid SnakeCase prop', () => {
		const res = isValidSnakeCase('valid');
		expect(res).toBe(true);
	});

	it('should be valid SnakeCase prop', () => {
		const res = isValidSnakeCase('valid90_case1');
		expect(res).toBe(true);
	});

	it('should be return valid SnakeCase', () => {
		const res = isValidSnakeCase('valid_snake_case');
		expect(res).toBe(true);
	});

	it('should be valid SnakeCase prop', () => {
		const res = isValidSnakeCase('valid_snake');
		expect(res).toBe(true);
	});

	it('should be invalid SnakeCase prop if finish with undercore', () => {
		const res = isValidSnakeCase('invalid_');
		expect(res).toBe(false);
	});

	it('should be invalid SnakeCase prop if more than one upper', () => {
		const res = isValidSnakeCase('inValid_snake');
		expect(res).toBe(false);
	});

	it('should be invalid SnakeCase prop if all letter is upper', () => {
		const res = isValidSnakeCase('GLOBAL');
		expect(res).toBe(false);
	});
});
