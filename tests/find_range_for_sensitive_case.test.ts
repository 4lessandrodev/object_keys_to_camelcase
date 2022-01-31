import findRangesForSensitiveCase from '../lib/find_range_for_sensitive_case';

describe('findRangesForSensitiveCase', () => {
	it('should valid range', () => {
		const range = findRangesForSensitiveCase("hello_world");
		expect(range).toEqual(["hello", "_world"]);
	});

	it('should valid range', () => {
		const range = findRangesForSensitiveCase("helloWorld");
		expect(range).toEqual(["hello", "world"]);
	});

	it('should valid range', () => {
		const range = findRangesForSensitiveCase("someNewVariable");
		expect(range).toEqual(["some", "new", "variable"]);
	});

	it('should valid range', () => {
		const range = findRangesForSensitiveCase("alllowercase");
		expect(range).toEqual(["alllowercase"]);
	});

	it('should valid range', () => {
		const range = findRangesForSensitiveCase("ALLUPPER");
		expect(range).toEqual(["allupper"]);
	});
});
