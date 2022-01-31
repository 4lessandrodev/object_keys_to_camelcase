import { objectKeysToSnakeCaseV2} from '../lib/index';

const user = {
	_id: "sf2309sdf0010",
	companyName: "some name",
	userPassword: "some@pass123"
};

/** Dynamic Type */
interface ResultType {
	_id: string;
	company_name: string,
	user_password: string
}

const result = objectKeysToSnakeCaseV2<ResultType>(user);

console.log(result);
/**
 {
	_id: "sf2309sdf0010",
	company_name: "some name",
	user_password: "some@pass123"
 }
*/
