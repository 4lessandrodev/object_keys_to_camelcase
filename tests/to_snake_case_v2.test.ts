import objectKeysToSnakeCase from '../src/object_keys_to_snake_case_v2';

describe('objctKeysToCamelCase', () => {

	it('should convert a simple camel case to snake case', () => {
		const result = objectKeysToSnakeCase<any>({ validName: 'name' });

		expect(result).toEqual({ valid_name: 'name' });
	});


	it('should convert normalize all char after _ to lowercase', () => {
		const result = objectKeysToSnakeCase<any>(
			{ inVaLidUSERrName: 'invalid username' }
		);

		expect(result).toEqual({ in_va_lid_u_s_e_rr_name: 'invalid username' });
	});


	it('should normalize and return empty string', () => {
		const result = objectKeysToSnakeCase<any>({ EmptyvAlueKey: '' });

		expect(result).toEqual({ emptyv_alue_key: '' });
	});


	it('should keep the same key name', () => {
		const result = objectKeysToSnakeCase<any>({ hello: 'world' });

		expect(result).toEqual({ hello: 'world' });
	});


	it('should keep keys with number', () => {
		const result = objectKeysToSnakeCase<any>({ key889number: 'numbers' });

		expect(result).toEqual({ key889number: 'numbers' });
	});


	it('should convert to camel case and return number', () => {
		const result = objectKeysToSnakeCase<any>({ userAge: 21 });

		expect(result).toEqual({ user_age: 21 });
	});

	it('should infere the result and the input', () => {

		const user = {
			name: 'john',
			companyName: 'google',
			userAge: 31
		};
		interface inputs {
			name: string,
			companyName: string;
			userAge: number;
		}
		interface returns {
			name: string,
			company_name: string;
			user_age: number;
		}

		const result = objectKeysToSnakeCase<returns, inputs>(user);
		result.name;

		expect(result).toEqual(
			{
				name: 'john',
				company_name: 'google',
				user_age: 31
			});
	});

	it('should keep first underscore to protected key', () => {
		const result = objectKeysToSnakeCase<any>(
			{ _startsWithUnderscore: "ok" }
		);

		expect(result).toEqual({ _starts_with_underscore: 'ok' });
	});

	it('should convert last letter to lowercase', () => {
		const result = objectKeysToSnakeCase<any>(
			{ lastCharUpper: "ok" }
		);

		expect(result).toEqual({ last_char_upper: 'ok' });
	});

	it('should return an empty object if provided {}', () => {
		const result = objectKeysToSnakeCase({});

		expect(result).toEqual({});
	});

	it('should keep key if it already is snake case', () => {
		const result = objectKeysToSnakeCase({ valid_snake: 'valid' });

		expect(result).toEqual({ valid_snake: 'valid' });
	});

	it('should remvove last underscore', () => {
		const result = objectKeysToSnakeCase({ in8valid_case_: 'valid' });

		expect(result).toEqual({ in8valid_case: 'valid' });
	});

	it('should remove all underscore', () => {
		const result = objectKeysToSnakeCase({ validEmail: 'valid' });

		expect(result).toEqual({ valid_email: 'valid' });
	});


	it('should not remove protected keys', () => {
		const result = objectKeysToSnakeCase({ __dirname: 'valid' });

		expect(result).toEqual({ _dirname: 'valid' });
	});


	it('should remove double underscore on the end', () => {
		const result = objectKeysToSnakeCase({ dirname__: 'valid' });

		expect(result).toEqual({ dirname: 'valid' });
	});

	it('should keep _id', () => {
		const result = objectKeysToSnakeCase<any>({
			_id: "8579fd4b-da3f-4d10-be62-4a4c3cda52ec",
		});

		expect(result).toEqual({ _id: "8579fd4b-da3f-4d10-be62-4a4c3cda52ec" });
	});

	it('should convert to snake case prop', () => {
		const result = objectKeysToSnakeCase<any>({ invalid_CamelCase: 'ok' });
		expect(result).toEqual({ invalid_camel_case: 'ok' });
	});

	it('should be valid snake case prop', () => {
		const result = objectKeysToSnakeCase({ _validCamelCase: '21' });
		expect(result).toEqual({ _valid_camel_case: '21' });
	});

	it('should be return valid snake case', () => {
		const result = objectKeysToSnakeCase({ emptyValuekey: '' });
		expect(result).toEqual({ empty_valuekey: '' });
	});

	it('should convert all uppercase for lower', () => {
		const result = objectKeysToSnakeCase({ ALLUPPER: '' });
		expect(result).toEqual({ allupper: '' });
	});

	it('should convert all uppercase', () => {
		const result = objectKeysToSnakeCase({ GLOBAL: '' });
		expect(result).toEqual({ global: '' });
	});
});
