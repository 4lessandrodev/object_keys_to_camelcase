import objectKeysToCamelCase from '../src/to_camel_case';

describe('objctKeysToCamelCase', () => {

	it('should convert a simple snake case to camel case', () => {
		const result = objectKeysToCamelCase<any>({ valid_name: 'name' });

		expect(result).toEqual({ validName: 'name' });
	});


	it('should convert normalize all char after _ to lowercase', () => {
		const result = objectKeysToCamelCase<any>(
			{ inVaLid_UserName: 'invalid username' }
		);

		expect(result).toEqual({ invalidUsername: 'invalid username' });
	});


	it('should normalize and return empty string', () => {
		const result = objectKeysToCamelCase<any>({ empty_valuekey: '' });

		expect(result).toEqual({ emptyValuekey: '' });
	});


	it('should keep the same key name', () => {
		const result = objectKeysToCamelCase<any>({ hello: 'world' });

		expect(result).toEqual({ hello: 'world' });
	});


	it('should convert keys with number to camel case', () => {
		const result = objectKeysToCamelCase<any>({ key889number: 'numbers' });

		expect(result).toEqual({ key889number: 'numbers' });
	});


	it('should convert to camel case and return number', () => {
		const result = objectKeysToCamelCase<any>({ user_age: 21 });

		expect(result).toEqual({ userAge: 21 });
	});

	it('should infere the result and the input', () => {

		const user = {
			name: 'john',
			company_name: 'google',
			user_age: 31
		};
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
		result.name;

		expect(result).toEqual(
			{
				name: 'john',
				companyName: 'google',
				userAge: 31
			});
	});

	it('should keep first underscore to protected key', () => {
		const result = objectKeysToCamelCase<any>(
			{ _starts_with_underscore: "ok" }
		);

		expect(result).toEqual({ _startsWithUnderscore: 'ok' });
	});

	it('should convert last letter to lowercase', () => {
		const result = objectKeysToCamelCase<any>(
			{ last_char_uppeR: "ok" }
		);

		expect(result).toEqual({ lastCharUpper: 'ok' });
	});

	it('should return an empty object if provided {}', () => {
		const result = objectKeysToCamelCase({});

		expect(result).toEqual({});
	});

	it('should keep key if it already is camelCase', () => {
		const result = objectKeysToCamelCase({ validCamelCase: 'valid' });

		expect(result).toEqual({ validCamelCase: 'valid' });
	});

	it('should remvove last underscore', () => {
		const result = objectKeysToCamelCase({ in8validCamelCase_: 'valid' });

		expect(result).toEqual({ in8validCamelCase: 'valid' });
	});

	it('should remove all underscore', () => {
		const result = objectKeysToCamelCase({ valid__email: 'valid' });

		expect(result).toEqual({ validEmail: 'valid' });
	});


	it('should not remove protected keys', () => {
		const result = objectKeysToCamelCase({ __dirname: 'valid' });

		expect(result).toEqual({ __dirname: 'valid' });
	});


	it('should remove double underscore on the end', () => {
		const result = objectKeysToCamelCase({ dirname__: 'valid' });

		expect(result).toEqual({ dirname: 'valid' });
	});

	it('should keep _id', () => {
		const result = objectKeysToCamelCase<any>({
			_id: "8579fd4b-da3f-4d10-be62-4a4c3cda52ec",
		});

		expect(result).toEqual({ _id: "8579fd4b-da3f-4d10-be62-4a4c3cda52ec" });
	});

	it('should convert to camelCase prop', () => {
		const result = objectKeysToCamelCase<any>({ invalid_CamelCase: 'ok' });
		expect(result).toEqual({ invalidCamelcase: 'ok' });
	});

	it('should be valid camelCase prop', () => {
		const result = objectKeysToCamelCase({ _validCamelCase: '21' });
		expect(result).toEqual({ _validCamelCase: '21' });
	});

	it('should be return valid camelCase', () => {
		const result = objectKeysToCamelCase({ emptyValuekey: '' });
		expect(result).toEqual({ emptyValuekey: '' });
	});

	it('should convert all uppercase', () => {
		const result = objectKeysToCamelCase({ ALL_UPPER: '' });
		expect(result).toEqual({ allUpper: '' });
	});

	it('should convert all uppercase', () => {
		const result = objectKeysToCamelCase({ GLOBAL: '' });
		expect(result).toEqual({ global: '' });
	});
});
