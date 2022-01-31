import { objectKeysToSnakeCaseV2} from '../lib/index';

const user = {
	_id: "sf2309sdf0010",
	companyName: "some name",
	userPassword: "some@pass123"
};

const result = objectKeysToSnakeCaseV2(user);

console.log(result);
/**
 {
	_id: "sf2309sdf0010",
	company_name: "some name",
	user_password: "some@pass123"
 }
*/
