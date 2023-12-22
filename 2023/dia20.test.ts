import { distributeGifts } from "./dia20";
test('Test #01', () => {
	expect(typeof distributeGifts).toBe('function');
});

test('Test #02', () => {
	expect(distributeGifts([
		[4, 5, 1],
		[6, null, 3],
		[8, null, 4]
	])).toEqual([
		[5, 3, 3],
		[6, 5, 3],
		[7, 6, 4]
	]);
});

test('Test #03', () => {
	expect(distributeGifts([
		[2, null],
		[null, 3]
	])).toEqual([
		[2, 3],
		[3, 3]
	]);
});

test('Test #04', () => {
	expect(distributeGifts([
		[2, 1, 1],
		[3, 4, null]
	])).toEqual([
		[2, 2, 1],
		[3, 3, 3]
	]);
});

test('Test #05', () => {
	expect(distributeGifts([
		[null, 5],
		[3, null]
	])).toEqual([
		[4, 5],
		[3, 4]
	]);
});

test('Test #06', () => {
	expect(distributeGifts([
		[1, 2, 3],
		[4, 5, 6],
		[7, 8, 9]
	])).toEqual([
		[2, 3, 4],
		[4, 5, 6],
		[6, 7, 8]
	]);
});

test('Test #07', () => {
	expect(distributeGifts([
		[null, 1, null, 1, null],
		[1, null, 1, null, 1]
	])).toEqual([
		[1, 1, 1, 1, 1],
		[1, 1, 1, 1, 1]
	]);
});
