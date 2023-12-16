export function checkIsValidCopy(original: string, copy: string): boolean {
	let symbols = ['#', '+', ':', '.', ' '];

	for (let i = 0; i < original.length; i++) {
		let copySymbols = symbols;

		if (original[i] === ' ' && copy[i] !== ' ') {
			return false;
		}

		if (symbols.includes(original[i])) {
			let symbolIndex = symbols.indexOf(original[i]);
			copySymbols = symbols.slice(symbolIndex);
		}
		let lessSymbols = copySymbols.includes(copy[i])
		let lowerCase = copy[i] === original[i].toLowerCase()
		let capital = copy[i] === original[i]
		if (!(lowerCase || capital || lessSymbols)) {
			return false;
		}
	}
	return true;
}
console.log(checkIsValidCopy('S#n:a Claus', 'S#+:. c:. s'))
console.log(checkIsValidCopy(
	'Santa Claus is coming',
	'sa#ta cl#us is comin#')
) // true
console.log(checkIsValidCopy(
	'Santa Claus is coming',
	'p#nt: cla#s #s c+min#'
)) // false (por la p inicial)
console.log(checkIsValidCopy('Santa Claus', 's#+:. c:. s')) // true
console.log(checkIsValidCopy('Santa Claus', 's#+:.#c:. s')) // false (hay un # donde no debería)
