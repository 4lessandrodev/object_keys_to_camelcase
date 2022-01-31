import isUpperCase from './is_camel_case';
import isValidCamelCase from './is_valid_camel_case';

interface IObject {
	[key: string]: string | number;
}

/**
 * @deprecated use import objectKeysToCamelCaseV2
 */
const objectKeysToCamelCase = function <Result = {}, Input = {}> (obj: Input): Result {

	let index: number = 0;
	let result: IObject = {};
	const keys: string[] = Object.keys(obj);

	if (keys.length < 1) {
		return {} as Result;
	}

	const value = Object.values(obj);

	if (value.length < 1) {
		return {} as Result;
	}


	while (index < keys.length) {

		const chars = keys[index].split('');
		let camelCaseKey: string = '';

		if (chars[chars.length - 1] === '_') {
			chars.pop();
			chars.map((char) => { camelCaseKey += char; });
		}


		if (isValidCamelCase(keys[index])) {
			camelCaseKey = keys[index];
		} else {

			if (!isValidCamelCase(camelCaseKey)) {

				camelCaseKey = '';

				for (let pos = 0; pos < chars.length; pos++) {

					chars[pos] = chars[pos].toLowerCase();

					if (chars[pos] === '_' && pos > 1
						&& pos < (chars.length - 1)) {

						let next = pos + 1;

						if (chars[next] === '_') {
							chars.splice(next, 1);
						}

						chars[next] = chars[next].toUpperCase();

						chars.splice(pos, 1);

						if (isUpperCase(chars[next])) {
							chars[next] = chars[next].toLowerCase();
						}
					}
					camelCaseKey += chars[pos];
				}

				if (camelCaseKey[camelCaseKey.length - 1] === '_') {
					camelCaseKey = camelCaseKey
						.slice(0, camelCaseKey.length - 1);
				}
			}
		}
		result = Object.assign(result, { [camelCaseKey]: value[index] });
		index++;
	}
	return result as unknown as Result;
};

export { objectKeysToCamelCase };
export default objectKeysToCamelCase;
