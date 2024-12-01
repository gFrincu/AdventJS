import { getStaircasePaths } from "./dia24";

test("Test #01 - Return type is an array", () => {
	const result = getStaircasePaths(0, 0);
	expect(Array.isArray(result)).toBe(true);
});

test("Test #02 - getStaircasePaths(4, 2)", () => {
	const result = getStaircasePaths(4, 2);
	expect(result).toEqual([
		[1, 1, 1, 1],
		[1, 1, 2],
		[1, 2, 1],
		[2, 1, 1],
		[2, 2],
	]);
});

test("Test #03 - getStaircasePaths(0, 0)", () => {
	const result = getStaircasePaths(0, 0);
	expect(result).toEqual([[]]);
});

test("Test #04 - getStaircasePaths(1, 1)", () => {
	const result = getStaircasePaths(1, 1);
	expect(result).toEqual([[1]]);
});

test("Test #05 - getStaircasePaths(7, 3)", () => {
	const result = getStaircasePaths(7, 3);
	expect(result).toEqual([
		[1, 1, 1, 1, 1, 1, 1],
		[1, 1, 1, 1, 1, 2],
		[1, 1, 1, 1, 2, 1],
		[1, 1, 1, 1, 3],
		[1, 1, 1, 2, 1, 1],
		[1, 1, 1, 2, 2],
		[1, 1, 1, 3, 1],
		[1, 1, 2, 1, 1, 1],
		[1, 1, 2, 1, 2],
		[1, 1, 2, 2, 1],
		[1, 1, 2, 3],
		[1, 1, 3, 1, 1],
		[1, 1, 3, 2],
		[1, 2, 1, 1, 1, 1],
		[1, 2, 1, 1, 2],
		[1, 2, 1, 2, 1],
		[1, 2, 1, 3],
		[1, 2, 2, 1, 1],
		[1, 2, 2, 2],
		[1, 2, 3, 1],
		[1, 3, 1, 1, 1],
		[1, 3, 1, 2],
		[1, 3, 2, 1],
		[1, 3, 3],
		[2, 1, 1, 1, 1, 1],
		[2, 1, 1, 1, 2],
		[2, 1, 1, 2, 1],
		[2, 1, 1, 3],
		[2, 1, 2, 1, 1],
		[2, 1, 2, 2],
		[2, 1, 3, 1],
		[2, 2, 1, 1, 1],
		[2, 2, 1, 2],
		[2, 2, 2, 1],
		[2, 2, 3],
		[2, 3, 1, 1],
		[2, 3, 2],
		[3, 1, 1, 1, 1],
		[3, 1, 1, 2],
		[3, 1, 2, 1],
		[3, 1, 3],
		[3, 2, 1, 1],
		[3, 2, 2],
		[3, 3, 1],
	]);
});

test("Test #06 - getStaircasePaths(3, 3)", () => {
	const result = getStaircasePaths(3, 3);
	expect(result).toEqual([
		[1, 1, 1],
		[1, 2],
		[2, 1],
		[3],
	]);
});

test("Test #07 - getStaircasePaths(2, 1)", () => {
	const result = getStaircasePaths(2, 1);
	expect(result).toEqual([[1, 1]]);
});

test("Test #08 - getStaircasePaths(5, 2)", () => {
	const result = getStaircasePaths(5, 2);
	expect(result).toEqual([
		[1, 1, 1, 1, 1],
		[1, 1, 1, 2],
		[1, 1, 2, 1],
		[1, 2, 1, 1],
		[1, 2, 2],
		[2, 1, 1, 1],
		[2, 1, 2],
		[2, 2, 1],
	]);
});
