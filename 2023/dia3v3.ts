export function findNaughtyStep(original: string, modified: string): string {
	// Determinar cuál cadena es más larga y cuál es más corta
	const longer = original.length >= modified.length ? original : modified;
	const shorter = original.length >= modified.length ? modified : original;

	// Recorrer cada carácter de la cadena más larga
	for (let i = 0; i < longer.length; i++) {
		// Comparar el carácter actual de ambas cadenas
		if (longer[i] !== shorter[i]) {
			// Si son diferentes, devolver el carácter de la cadena más larga
			return longer[i];
		}
	}

	// Si todos los caracteres son iguales, devolver una cadena vacía
	return '';
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


