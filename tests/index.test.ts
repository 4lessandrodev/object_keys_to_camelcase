import objctKeysToCamelCase from '../src';

describe('objctKeysToCamelCase', () => {
	let obj = {};

	beforeEach(() => {
		obj = {
			valid_name: 'any user name',
			inVaLid_UserName: 'any invalid username',
			empty_vAlueKey: '',
			hello: 'hello world',
			keyWit889hNumber: 'numbers here'
		};
	});

	it('should convert all keys to camel case', () => {
		const result = objctKeysToCamelCase<any>(obj);

		expect(result.validName).toEqual('any user name');
		expect(result.invalidUsername).toEqual('any invalid username');
		expect(result.emptyValuekey).toEqual('');
		expect(result.hello).toEqual('hello world');
		expect(result.keywit889hnumber).toEqual('numbers here');
	});
});