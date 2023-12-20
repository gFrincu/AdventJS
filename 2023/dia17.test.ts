import { optimizeIntervals } from "./dia17";

test('Test #01', () => {
	const result = optimizeIntervals([[2, 7], [3, 4], [5, 8]]);
	expect(Array.isArray(result)).toBe(true);
	result.forEach(subArray => {
		expect(Array.isArray(subArray)).toBe(true);
		subArray.forEach(element => {
			expect(typeof element).toBe('number');
		});
	});
});

test('Test #02', () => {
	expect(optimizeIntervals([[2, 7], [3, 4], [5, 8]])).toEqual([[2, 8]]);
});

test('Test #03', () => {
	expect(optimizeIntervals([[3, 4], [5, 8], [2, 7]])).toEqual([[2, 8]]);
});

test('Test #04', () => {
	expect(optimizeIntervals([[1, 3], [2, 6], [8, 10]])).toEqual([[1, 6], [8, 10]]);
});

test('Test #05', () => {
	expect(optimizeIntervals([[1, 2], [3, 4], [5, 6]])).toEqual([[1, 2], [3, 4], [5, 6]]);
});

test('Test #06', () => {
	expect(optimizeIntervals([[5, 7], [6, 8]])).toEqual([[5, 8]]);
});

test('Test #07', () => {
	expect(optimizeIntervals([[1, 5], [6, 10], [11, 15], [16, 20]])).toEqual([[1, 5], [6, 10], [11, 15], [16, 20]]);
});

test('Test #08', () => {
	expect(optimizeIntervals([[1, 15], [8, 12], [4, 7]])).toEqual([[1, 15]]);
});
