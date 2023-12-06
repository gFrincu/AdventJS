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
