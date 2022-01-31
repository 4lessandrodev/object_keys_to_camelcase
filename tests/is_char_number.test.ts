import { isCharNumber } from '../lib/is_char_number';

describe('isCharNumber', () => {
	it('should ', () => {
		const result = isCharNumber('9');
		expect(result).toBe(true);
	});

	it('should ', () => {
		const result = isCharNumber('0');
		expect(result).toBe(true);
	});

	it('should ', () => {
		const result = isCharNumber('7');
		expect(result).toBe(true);
	});

	it('should ', () => {
		const result = isCharNumber('a');
		expect(result).toBe(false);
	});

	it('should ', () => {
		const result = isCharNumber('Z');
		expect(result).toBe(false);
	});

	it('should ', () => {
		const result = isCharNumber('_');
		expect(result).toBe(false);
	});
});