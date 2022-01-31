import isOnlyAlphaUpperAndUnderscore from '../lib/is_only_alpha_upper_and_underscore';
import isOnlyAlphaLowerAndUnderscore from '../lib/is_only_alpha_lower_and_underscore';

describe('isOnlyAlphaAndUnderscore', () => {
	it('should ', () => {
		const result = isOnlyAlphaUpperAndUnderscore('GLOBAL_CONFIG');
		expect(result).toBe(true);
	});

	it('should ', () => {
		const result = isOnlyAlphaUpperAndUnderscore('GLOBAL_aCONFIG');
		expect(result).toBe(false);
	});

	it('should ', () => {
		const result = isOnlyAlphaUpperAndUnderscore('GLOBAL_9CONFIG');
		expect(result).toBe(true);
	});

	it('should ', () => {
		const result = isOnlyAlphaLowerAndUnderscore('simple_7config');
		expect(result).toBe(true);
	});

	it('should ', () => {
		const result = isOnlyAlphaLowerAndUnderscore('simple_7Config');
		expect(result).toBe(false);
	});
});