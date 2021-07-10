
interface IObject {
	[key: string]: string | number;
}

const objctKeysToCamelCase = function <Result = {}, Input = {}> (obj: Input): Result {

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


	while (keys[index]) {

		const chars = keys[index].split('');
		let camelCaseKey: string = '';

		for (let pos = 0; pos < chars.length; pos++) {
			chars[pos] = chars[pos].toLowerCase();
			if (chars[pos] === '_') {
				let next = pos + 1;
				chars[next] = chars[next].toUpperCase();
				chars.splice(pos, 1);
				if ([
					'A', 'B', 'C', 'D', 'E', 'F', 'G',
					'H', 'I', 'J', 'K', 'L', 'M', 'N',
					'O', 'P', 'Q', 'R', 'S', 'T', 'U',
					'V', 'W', 'X', 'Y', 'Z'
				].includes(chars[next])) {
					chars[next] = chars[next].toLowerCase();
				}
			}

			camelCaseKey += chars[pos];
		}

		result = Object.assign(result, { [camelCaseKey]: value[index] });
		index++;
	}
	return result as unknown as Result;
};

export { objctKeysToCamelCase };
export default objctKeysToCamelCase;
