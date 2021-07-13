import isUpperCase from './is_camel_case';

export const isValidSnakeCase = (str: string): boolean => {
	if (typeof str === 'string') {
		if (str.length > 1) {
			const hasUnderscoreSideBySide = str
				.split('')
				.map((value, i, arr) => {
					if (i < (arr.length - 1))
						return value === '_' && arr[i + 1] === '_';
				}).includes(true);

			if (hasUnderscoreSideBySide) {
				return false;
			}

			const hasSomeUpper = str
				.split('')
				.map(isUpperCase)
				.includes(true);

			if (hasSomeUpper) {
				return false;
			}

			const endsWithUnderscore = str[str.length - 1] === '_';

			if (endsWithUnderscore) {
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

export default isValidSnakeCase;