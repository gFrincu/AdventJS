export function findNaughtyStep(original: string, modified: string): string {
	// Aberiguamos cual es la cadena más larga
	const [shorter, longer] = original.length > modified.length ? [modified, original] : [original, modified];

	// Convertimos cadena en array
	// Usamos reduce
	return longer.split('').reduce((acc, curr, index) => {
		if (acc) return acc;
		return curr !== shorter[index] ? curr : acc;
	}, '');
}
const original = 'abcd'
const modified = 'abcde'
console.log(findNaughtyStep(original, modified)) // 'e'

const original2 = 'stepfor'
const modified2 = 'stepor'
console.log(findNaughtyStep(original2, modified2)) // 'f'

const original3 = 'abcde'
const modified3 = 'abcde'
console.log(findNaughtyStep(original3, modified3)) // ''

const original4 = 'abcdec'
const modified4 = 'abdec'
console.log(findNaughtyStep(original4, modified4)) // 'c'


