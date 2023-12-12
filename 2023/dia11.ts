// Lo que he intentado hacer aquí es comparar letra por letra.
//  Empiezo en la primera, le pregunto, si intercambio la primera con la segunda y la segunda con la primera es palíndromo? No. Si intercambio la primera con la tercera y la tercera con la primera es palíndromo? No. Y así con todas las de la primera 
//  Luego paso a la segunda, y así con todas las letras
function getIndexsForPalindrome(word: string): Array<number> | null {
	word = word.replace(/[\W_]/g, "").toLowerCase()
	let wordArray = word.split('')
	let wordReversed = word.split('').reverse().join('')
	let length = word.length
	if (word == wordReversed) {
		return []
	}

	for (let i = 0; i < length; i++) {
		for (let j = i + 1; j < length; j++) {
			[wordArray[i], wordArray[j]] = [wordArray[j], wordArray[i]]
			word = wordArray.join('')
			wordReversed = word.split('').reverse().join('')
			if (word == wordReversed) {
				return [i, j]
			}
			[wordArray[i], wordArray[j]] = [wordArray[j], wordArray[i]]
		}
	}
	return null
}
console.log(getIndexsForPalindrome('anna')) // [])
console.log(getIndexsForPalindrome('abab')) // [0, 1])
console.log(getIndexsForPalindrome('abac')) // null)
console.log(getIndexsForPalindrome('aaaaaaaa')) // []
console.log(getIndexsForPalindrome('aaababa')) // [1, 3])
console.log(getIndexsForPalindrome('caababa')) // null)
console.log(getIndexsForPalindrome('rotaratov'))