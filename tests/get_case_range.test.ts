import getCaseRange from '../lib/get_case_range';

describe('getCaseRange', () => {
	it('should ', () => {
		const result = getCaseRange('helloMyFriend');
		expect(result).toBe('friend');
	});

	it('should ', () => {
		const result = getCaseRange('hello');
		expect(result).toBe('hello');
	});

	it('should ', () => {
		const result = getCaseRange('hello42welcome');
		expect(result).toBe('hello42welcome');
	});

	it('should ', () => {
		const result = getCaseRange('hello_welcome');
		expect(result).toBe('_welcome');
	});
});