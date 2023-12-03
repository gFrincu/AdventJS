function findNaughtyStep(original: string, modified: string): string {
	if (original == '') {
		return modified;
	}
	if (modified == '') {
		return original
	}
	if (original === modified) {
		return '';
	}
	else if (original.length > modified.length) {
		for (let step = 0; step < original.length; step++) {
			if (modified[step] !== original[step]) {
				return original[step];
			}
		}
	} else {
		for (let step = 0; step < modified.length; step++) {
			if (modified[step] !== original[step]) {
				return modified[step];
			}
		}
	}
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


//En este programa me he atascado bastante porque había empezado haciéndolo con includes y for of pero claro, el includes te encuentra si un caracter está en la cadena, pero no si está repetido.
// Entonces por ejemplo el caso 4, no lo pasaría.
// El programa lo que hace es, primero valorar si las cadenas están vacías, y como debería haber diferencia de solo un caracter, si una está vacía, entonces la otra es el caracter, y por tanto devuelve el caracter.
// Si son iguales devuelve vacío
// Y luego compara dependiendo de cual es mayor, otra vez por la misma lógica, o sea, si solo tienen diferencia de un caracter, entonces ese caracter que sobre en cualquiera de los dos lados, es el que nos piden.
//Si original es más grande que modified, paso por todos los caracteres de original, y comparo, es original[i] igual a modified[i]? Si no lo es, ese caracter de original es el que necesito, justamente por eso, porque sobra uno en original siempre.
// Lo mismo en el caso del else, pero esta vez es pensando que modified es mayor.
