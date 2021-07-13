import isAllUpper from '../src/is_all_upper_case';

describe('isAllUpper', () => {
	it('all upper', () => {
		const result = isAllUpper('ABCD');
		expect(result).toBe(true);
	});

	it('all upper', () => {
		const result = isAllUpper('ZHI');
		expect(result).toBe(true);
	});

	it('all upper', () => {
		const result = isAllUpper('B12AS');
		expect(result).toBe(false);
	});

	it('all upper', () => {
		const result = isAllUpper('20912');
		expect(result).toBe(false);
	});

	it('all upper', () => {
		const result = isAllUpper('_OASD');
		expect(result).toBe(false);
	});

	it('all upper', () => {
		const result = isAllUpper('/ASD');
		expect(result).toBe(false);
	});
});