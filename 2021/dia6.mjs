// He pensado que tengo los números y que como quiero que la suma sea a partir del de más a la izquierda, pues que quiero coger el número de la izquierda y pasar por los demás. hacerles la suma y ver si dan el resultado. Si dan pues nada, ya lo tengo.
export default function sumPairs(numbers, result) {
	let i, j;
	for (i = 0; i < numbers.length; i++) {
		for (j = i + 1; j < numbers.length; j++) {
			if (numbers[i] + numbers[j] == result) {
				return [numbers[i], numbers[j]]
			}
		}
	}
	return null
}
console.log(sumPairs([3, 5, 7, 2], 10)) // [3, 7]
console.log(sumPairs([-3, -2, 7, -5], 10)) // null
console.log(sumPairs([2, 2, 3, 1], 4)) // [2, 2]
console.log(sumPairs([6, 7, 1, 2], 8)) // [6, 2]
console.log(sumPairs([0, 2, 2, 3, -1, 1, 5], 6)) // [1, 5]
