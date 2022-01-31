import findRangesForSensitiveCase from './find_range_for_sensitive_case';
import { IParams } from './param.interface';

const getParams = (obj: Object): IParams[] => {
	const keys: string[] = Object.keys(obj);

	if (keys.length < 1) {
		return [];
	}

	const resultsForKey: IParams[] = [];
	let index = 0;
	const valuesForKeys = Object.values(obj);

	while (keys[index]) {

		const rangeCase = findRangesForSensitiveCase(keys[index]);

		resultsForKey.push({
			value: valuesForKeys[index],
			ranges: rangeCase
		});
		index++;
	}

	return resultsForKey;
};

export { getParams };
export default getParams;