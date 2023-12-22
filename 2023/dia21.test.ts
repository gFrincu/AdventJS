import { findBalancedSegment } from "./dia21";

test('Test #01', () => {
	const result = findBalancedSegment([]);
	expect(Array.isArray(result)).toBe(true);
});

test('Test #02', () => {
	expect(findBalancedSegment([1, 1, 0, 1, 1, 0, 1, 1])).toEqual([
		2,
		5
	]);
});

test('Test #03', () => {
	expect(findBalancedSegment([1, 1, 0])).toEqual([
		1,
		2
	])
		;
});

test('Test #04', () => {
	expect(findBalancedSegment([1, 1, 1])).toEqual([]);
});

test('Test #05', () => {
	expect(findBalancedSegment([1, 0, 1])).toEqual([
		0,
		1
	]);
});

test('Test #06', () => {
	expect(findBalancedSegment([1, 0, 1, 0])).toEqual([
		0,
		3
	]);
});

test('Test #07', () => {
	expect(findBalancedSegment([1, 1, 0, 1, 0, 1])).toEqual([
		1,
		4
	]);
});

test('Test #08', () => {
	expect(findBalancedSegment([1, 0, 0, 0, 1, 1, 1, 0, 0, 0])).toEqual([
		0,
		7
	]);
});

test('Test #09', () => {
	expect(findBalancedSegment([0, 1, 1, 1, 1, 0, 1, 1, 1, 0, 0, 1])).toEqual([
		5,
		10
	]);
});
