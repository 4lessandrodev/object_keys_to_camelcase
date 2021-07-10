import objectKeysToCamelCase from '../src';

describe('objctKeysToCamelCase', () => {
	let obj = {};
	let user = {
		name: 'john',
		company_name: 'google', user_age: 31
	};

	beforeEach(() => {
		obj = {
			valid_name: 'any user name',
			inVaLid_UserName: 'any invalid username',
			empty_vAlueKey: '',
			hello: 'hello world',
			keyWit889hNumber: 'numbers here',
			user_age: 21
		};

	});

	it('should convert all keys to camel case', () => {
		const result = objectKeysToCamelCase<any>(obj);

		expect(result.validName).toEqual('any user name');
		expect(result.invalidUsername).toEqual('any invalid username');
		expect(result.emptyValuekey).toEqual('');
		expect(result.hello).toEqual('hello world');
		expect(result.keywit889hnumber).toEqual('numbers here');
		expect(result.userAge).toEqual(21);

	});

	it('should infere the result and the input', () => {
		interface returns {
			name: string,
			companyName: string;
			userAge: number;
		}
		interface inputs {
			name: string,
			company_name: string;
			user_age: number;
		}

		const result = objectKeysToCamelCase<returns, inputs>(user);

		expect(result.companyName).toEqual('google');
		expect(result.name).toEqual('john');
		expect(result.userAge).toEqual(31);
	});
});
