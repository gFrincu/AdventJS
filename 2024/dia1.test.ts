import { prepareGifts } from "./dia1";

test('Test #01 - Returns an array', () => {
    const result = prepareGifts([]);
    expect(Array.isArray(result)).toBe(true);
});

test('Test #02 - Removes duplicates and sorts: [3, 1, 2, 3, 4, 2, 5]', () => {
    const result = prepareGifts([3, 1, 2, 3, 4, 2, 5]);
    expect(result).toEqual([1, 2, 3, 4, 5]);
});

test('Test #03 - Handles array with all duplicates: [5, 5, 5, 5]', () => {
    const result = prepareGifts([5, 5, 5, 5]);
    expect(result).toEqual([5]);
});

test('Test #04 - Returns sorted unique array: [1, 2, 3]', () => {
    const result = prepareGifts([1, 2, 3]);
    expect(result).toEqual([1, 2, 3]);
});

test('Test #05 - Handles empty array', () => {
    const result = prepareGifts([]);
    expect(result).toEqual([]);
});

test('Test #06 - Removes duplicates and sorts: [10, 20, 10, 30, 20, 30, 40]', () => {
    const result = prepareGifts([10, 20, 10, 30, 20, 30, 40]);
    expect(result).toEqual([10, 20, 30, 40]);
});

test('Test #07 - Removes duplicates and sorts: [3, 1, 2, 3, 1, 2]', () => {
    const result = prepareGifts([3, 1, 2, 3, 1, 2]);
    expect(result).toEqual([1, 2, 3]);
});
