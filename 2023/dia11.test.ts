import { getIndexsForPalindrome } from "./dia11";

test('Test #01 - Returns an array of numbers or null', () => {
	const result = getIndexsForPalindrome('anna');

	if (result !== null) {
		// Verificar si result es un array
		expect(Array.isArray(result)).toBe(true);

		// Verificar que todos los elementos en el array son números
		result.forEach(element => {
			expect(typeof element).toBe('number');
		});
	} else {
		// Verificar si result es null
		expect(result).toBeNull();
	}
});

test('Test #02 - getIndexsForPalindrome("anna")', () => {
	expect(getIndexsForPalindrome('anna')).toStrictEqual([])
});


test('Test #03 - getIndexsForPalindrome("abab")', () => {
	expect(getIndexsForPalindrome('abab')).toStrictEqual([
		0,
		1
	])
});

test('Test #04 - getIndexsForPalindrome("abac")', () => {
	expect(getIndexsForPalindrome('abac')).toStrictEqual(null);
});

test('Test #05 - getIndexsForPalindrome("aaaaaaaa")', () => {
	expect(getIndexsForPalindrome('aaaaaaaa')).toStrictEqual([])
});

test('Test #06 - getIndexsForPalindrome("aaababa")', () => {
	expect(getIndexsForPalindrome('aaababa')).toStrictEqual([1, 3])
});

test('Test #07 - getIndexsForPalindrome("caababa")', () => {
	expect(getIndexsForPalindrome('caababa')).toStrictEqual(null)
});

test('Test #08 - getIndexsForPalindrome("rotavator")', () => {
	expect(getIndexsForPalindrome('rotavator')).toStrictEqual([])
});

test('Test #09 - getIndexsForPalindrome("rotaratov")', () => {
	expect(getIndexsForPalindrome('rotaratov')).toStrictEqual([4, 8])
});

test('Test #10 - getIndexsForPalindrome("saippuakivikauppias")', () => {
	expect(getIndexsForPalindrome('saippuakivikauppias')).toStrictEqual([])
});
