// Primero intento buscar si hay paréntesis desemparejados
// Para que un paréntesis esté bien primero tiene que abrirse y luego tiene que cerrarse.
//  Si encuentro un paréntesis que se cierra y luego uno que se abre, no vale.
// Hago la cuenta y si no está bien, devuelvo false.
// Eso es pasando por toda la cadena, con que está dentro del for
// Luego hay otras condiciones como que incluyan llaves o corchetes, o que los paréntesis de apertura y cierre no coincidan, eso lo miro debajo con un if que si encuentra una de ellas, devuelve false.
export default function isValid(letter) {
	let openParenthesis = 0, closeParenthesis = 0;
	const stack = [];

	for (let char of letter) {
		if (char === '(') {
			openParenthesis++;
			stack.push(char);
		} else if (char === ')') {
			closeParenthesis++;

			if (stack.length === 0 || stack.pop() !== '(') {
				return false; // Paréntesis no emparejados
			}
		}
	}

	if (openParenthesis !== closeParenthesis || letter.includes('{') || letter.includes('}') || letter.includes('[') || letter.includes(']') || letter.includes('()')) {
		return false;
	}

	return stack.length === 0;
}

console.log(isValid("bici coche (balón) bici coche peluche")); // ✅
console.log(isValid("(muñeca) consola bici")); // ✅

console.log(isValid("bici coche (balón bici coche")); // ❌
console.log(isValid("peluche (bici [coche) bici coche balón")); // ❌
console.log(isValid("(peluche {) bici")); // ❌
console.log(isValid("() bici")); // ❌
