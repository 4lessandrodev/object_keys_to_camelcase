import transformCamelCaseKey from '../src/transform_camel_case_key';

describe('transformCamelCaseKey', () => {
	it('should ', () => {
		const result = transformCamelCaseKey(["hello", "my", "friend"]);
		expect(result).toBe("helloMyFriend");
	});

	it('should ', () => {
		const result = transformCamelCaseKey(["_hello", "_my", "_friend"]);
		expect(result).toBe("_helloMyFriend");
	});

	it('should ', () => {
		const result = transformCamelCaseKey(["_id"]);
		expect(result).toBe("_id");
	});
});