import transformSnakeCaseKey from '../lib/transform_snake_case_key';

describe('transformSnakeCaseKey', () => {
	it('should ', () => {
		const result = transformSnakeCaseKey(["hello", "my", "friend"]);
		expect(result).toBe("hello_my_friend");
	});

	it('should ', () => {
		const result = transformSnakeCaseKey(["_hello", "_my", "_friend"]);
		expect(result).toBe("_hello_my_friend");
	});

	it('should ', () => {
		const result = transformSnakeCaseKey(["_id"]);
		expect(result).toBe("_id");
	});
});