import isFirstCharUnderscore from '../lib/is_first_char_undercore';

describe('isFirstCharUnderscore', () => {
	it('not  ', () => {
		const result = isFirstCharUnderscore("hello");
		expect(result).toBe(false);
	});

	it('not  ', () => {
		const result = isFirstCharUnderscore("_hello");
		expect(result).toBe(true);
	});

	it('not  ', () => {
		const result = isFirstCharUnderscore("_ISRAEL");
		expect(result).toBe(true);
	});

	it('not  ', () => {
		const result = isFirstCharUnderscore("h_ello");
		expect(result).toBe(false);
	});

	it('not  ', () => {
		const result = isFirstCharUnderscore("hello_");
		expect(result).toBe(false);
	});
});