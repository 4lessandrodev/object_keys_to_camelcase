import getParams from './get_params';
import { IObject } from './object.interface';
import { IParams } from './param.interface';
import transformCamelCaseKey from './transform_camel_case_key';

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
const objectKeysToCamelCaseV2 = function <Result = {}, Input = {}> (obj: Input): Result {

	const resultsForKey: IParams[] = getParams(obj);

	if (resultsForKey.length < 1) {
		return {} as Result;
	}

	let result: IObject = {};
	const valuesForKeys = Object.values(obj);
	let index = 0;

	while (resultsForKey[index]) {
		const camelCaseKey = transformCamelCaseKey(resultsForKey[index].ranges);

		result = Object.assign(result, { [camelCaseKey]: valuesForKeys[index] });

		index++;
	}

	return result as unknown as Result;
};

export { objectKeysToCamelCaseV2 };
export default objectKeysToCamelCaseV2;