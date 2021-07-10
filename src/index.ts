
interface IObject {
	[key: string]: string | number;
}

/**
 * 
 * @param obj `{ key: value }`
 * @returns obj `{ key: value }`
 * 
 * 
 * @argument Result type as Object interface to type the return
 * @argument Input type as Object interface to validate arguments type
 * @example
 * objectKeysToCamelCase<Result, Input>({});
 * 
 * @example
 * 
 *	interface Result {
 *		goodMorning: string
 *		goodAfternoon: string
 *	}
 *
 *	interface Input {
 *		good_morning: string, 
 *		good_afternoon: string
 *	}
 *
 *	const result = objectKeysToCamelCase<Result, Input>(
 *		{
 *			good_morning: "Its a beautfull day", 
 *			good_afternoon: "Nice afternoon"
 *		}
 *	);
 *
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

export { objectKeysToCamelCase };
export default objectKeysToCamelCase;
