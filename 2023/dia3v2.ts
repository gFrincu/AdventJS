export function findNaughtyStep(original: string, modified: string): string {
	const [lessLetters, mostLetters] =
	  [original, modified].sort((o, m) => o.length - m.length);
  
	return [...mostLetters].find((x, i) => lessLetters[i] !== x) ?? "";
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


