import isUpperCase from './is_camel_case';

export const isValidCamelCase = (str: string): boolean => {
	if (typeof str === 'string') {
		if (str.length > 1) {
			const hasAnotherUnderscore = str
				.slice(1, str.length)
				.search('_') !== -1;

			if (hasAnotherUnderscore) {
				return false;
			}

			const hasUppercaseSideBySide = str
				.split('')
				.map((value, i, arr) => {
					if (i < (arr.length - 1))
						return isUpperCase(value) && isUpperCase(arr[i + 1]);
				}).includes(true);

			if (hasUppercaseSideBySide) {
				return false;
			}
			return true;
		} else {
			return (str !== '' && !isUpperCase(str));
		}
	} else {
		return false;
	}
};

export default isValidCamelCase;