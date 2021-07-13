import isAllLower from '../src/is_all_lower_case';

describe('isAllUpper', () => {
	it('all upper', () => {
		const result = isAllLower('abcd');
		expect(result).toBe(true);
	});

	it('all upper', () => {
		const result = isAllLower('ah');
		expect(result).toBe(true);
	});

	it('all upper', () => {
		const result = isAllLower('bh19');
		expect(result).toBe(false);
	});

	it('all upper', () => {
		const result = isAllLower('20912');
		expect(result).toBe(false);
	});

	it('all upper', () => {
		const result = isAllLower('_tsdfo');
		expect(result).toBe(false);
	});

	it('all upper', () => {
		const result = isAllLower('/test');
		expect(result).toBe(false);
	});
});