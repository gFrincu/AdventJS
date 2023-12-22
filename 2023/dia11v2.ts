// Idea de una chica que se llama Alba, me ha parecido super interesante.
export function getIndexsForPalindrome(word: string): number[] | null {
	const chars = word.split('');
	const index = chars.findIndex((letter, i) => letter != word.at(-i - 1));
	const index2 = word.length - 1 - index;
	if (index === -1) return [];

	for (let i = index + 1; i < index2; i++) {
		const arr = word.split('');
		arr[index] = word.at(i) || '';
		arr[i] = word.at(index) || '';

		if (arr.every((l, idx) => l === arr.at(arr.length - 1 - idx))) return [index, i];

		arr[index] = word.at(index) || '';
		arr[i] = word.at(index2) || '';
		arr[index2] = word.at(i) || '';

		if (arr.every((l, idx) => l === arr.at(arr.length - 1 - idx))) return [index + i, index2];
	}

	return null;
}
