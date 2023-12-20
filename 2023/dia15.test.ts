import { autonomousDrive } from "./dia15";

test('Test #01', () => {
	const result = autonomousDrive(['..!....'], ['R', 'L']);
	expect(Array.isArray(result)).toBe(true);
	expect(result).toEqual(expect.arrayContaining([expect.any(String)]));
});

test('Test #02', () => {
	expect(autonomousDrive(['..!....'], ['R', 'L'])).toEqual([
		"..!...."
	])
})

test('Test #03', () => {
	expect(autonomousDrive(['!..', '***'], ['R', 'L'])).toEqual([
		"!..",
		"***"
	]
	)
})

test('Test #04', () => {
	expect(autonomousDrive(
		[
			'..!....',
			'......*'
		],
		['R', 'D', 'L'])
	).toEqual([
		".......",
		"..!...*"
	]
	)
})

test('Test #05', () => {
	expect(autonomousDrive(
		[
			'*..!..*',
			'*.....*'
		],
		['R', 'R', 'D', 'D'])
	).toEqual([
		"*.....*",
		"*....!*"
	])
})

test('Test #06', () => {
	expect(autonomousDrive(['***', '.!.', '***'], ['D', 'U', 'R', 'R', 'R'])).toEqual([
		"***",
		"..!",
		"***"
	]
	)
})

test('Test #07', () => {
	expect(autonomousDrive(['***', '*!*', '***'], ['D', 'U', 'R', 'L'])).toEqual([
		"***",
		"*!*",
		"***"
	]
	)
})

test('Test #08', () => {
	expect(autonomousDrive(
		[
			'.**.*.*.',
			'.***....',
			'..!.....'
		], ['D', 'U', 'R', 'R', 'R'])
	).toEqual([
		".**.*.*.",
		".***....",
		".....!.."
	]
	)
})
