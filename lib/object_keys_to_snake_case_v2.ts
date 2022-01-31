import getParams from './get_params';
import { IObject } from './object.interface';
import { IParams } from './param.interface';
import transformSnakeCaseKey from './transform_snake_case_key';

/**
 * 
 * @param obj `{ key: value }`
 * @returns obj `{ key: value }`
 * 
 * 
 * @argument Result type as Object interface to type the return
 * @argument Input type as Object interface to validate arguments type
 * @example
 * objectKeysToSnakeCaseV2<Result, Input>({});
 * 
 * @example
 * 
 *	interface Input {
 *		goodMorning: string
 *		goodAfternoon: string
 *	}
 *
 *	interface Result {
 *		good_morning: string, 
 *		good_afternoon: string
 *	}
 *
 *	const result = objectKeysToSnakeCaseV2<Result, Input>(
 *		{
 *			goodMorning: "Its a beautiful day", 
 *			goodAfternoon: "Nice afternoon"
 *		}
 *	);
 *
 */
const objectKeysToSnakeCaseV2 = function <Result = {}, Input = {}> (obj: Input): Result {

	const resultsForKey: IParams[] = getParams(obj);

	if (resultsForKey.length < 1) {
		return {} as Result;
	}

	let result: IObject = {};
	const valuesForKeys = Object.values(obj);
	let index = 0;

	while (resultsForKey[index]) {
		const camelCaseKey = transformSnakeCaseKey(resultsForKey[index].ranges);

		result = Object.assign(result, { [camelCaseKey]: valuesForKeys[index] });

		index++;
	}

	return result as unknown as Result;
};

export { objectKeysToSnakeCaseV2 };
export default objectKeysToSnakeCaseV2;
