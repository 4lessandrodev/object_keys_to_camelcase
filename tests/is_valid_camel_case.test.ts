import isValidCamelCase from '../src/is_valid_camel_case';

describe('objctKeysToCamelCase', () => {

	it('should be invalid camelCase prop', () => {
		const res = isValidCamelCase('invalid_CamelCase');
		expect(res).toBe(false);
	});

	it('should be valid camelCase prop', () => {
		const res = isValidCamelCase('_validCamelCase');
		expect(res).toBe(true);
	});

	it('should be return valid camelCase', () => {
		const res = isValidCamelCase('emptyValuekey');
		expect(res).toBe(true);
	});

	it('should be valid camelCase prop', () => {
		const res = isValidCamelCase('validCamelCase');
		expect(res).toBe(true);
	});

	it('should be invalid camelCase prop if finish with undercore', () => {
		const res = isValidCamelCase('in8validCamelCase_');
		expect(res).toBe(false);
	});

	it('should be invalid camelCase prop if more than one upper', () => {
		const res = isValidCamelCase('oneTHoUPper');
		expect(res).toBe(false);
	});

	it('should be invalid camelCase prop if all letter is upper', () => {
		const res = isValidCamelCase('GLOBAL');
		expect(res).toBe(false);
	});
});
