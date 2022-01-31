import getParams from '../lib/get_params';

describe('getParams', () => {
	it('should ', () => {
		const result = getParams({});
		expect(result).toEqual([]);
	});

	it('should ', () => {
		const result = getParams({ helloWorld: 'test', 'welcome': 42 });

		expect(result).toEqual([
			{ ranges: ['hello', 'world'], value: 'test' },
			{ ranges: ['welcome'], value: 42 }
		]);
	});

	it('should ', () => {
		const result = getParams({ hello_world: 'test', 'welcome': 42 });

		expect(result).toEqual([
			{ ranges: ['hello', '_world'], value: 'test' },
			{ ranges: ['welcome'], value: 42 }
		]);
	});

	it('should ', () => {
		const result = getParams({ YouKnowTheMusic: 'test', well99: 42 });

		expect(result).toEqual([
			{ ranges: ['you', 'know', 'the', 'music'], value: 'test' },
			{ ranges: ['well99'], value: 42 }
		]);
	});

	it('should ', () => {
		const result = getParams({ may_be_i99: 'test', well99is_app: 42 });

		expect(result).toEqual([
			{ ranges: ['may', '_be', '_i99'], value: 'test' },
			{ ranges: ['well99is', '_app'], value: 42 }
		]);
	});

	it('should ', () => {
		const result = getParams({ _id: '239jkdfh-sdf54vs-df4', name: 'john' });

		expect(result).toEqual([
			{ ranges: ['_id'], value: '239jkdfh-sdf54vs-df4' },
			{ ranges: ['name'], value: 'john' }
		]);
	});

	it('should ', () => {
		const result = getParams({ _id: '239jkdfh-sdf54vs-df4', myMotherNameIsNotEasy: 'sarah' });

		expect(result).toEqual([
			{ ranges: ['_id'], value: '239jkdfh-sdf54vs-df4' },
			{
				ranges: ['my', 'mother', 'name', 'is', 'not', 'easy'],
				value: 'sarah'
			}
		]);
	});
});
