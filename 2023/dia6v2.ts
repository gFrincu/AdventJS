// Un poco lo mismo que el enaterior pero en vez de usar while, usar for of, y reducir un if porque se usa max
export function maxDistance(movements: string): number {
	let counter = 0, asterisks = 0;

	for (const move of movements) {
		if (move === '>') {
			counter++;
		}
		if (move === '<') {
			counter--;
		}
		if (move === '*') {
			asterisks++;
		}
	}

	return Math.max(Math.abs(counter + asterisks), Math.abs(counter - asterisks));
}

const movements = '>>*<'
const distance = maxDistance(movements)
console.log(distance) // -> 2

const movements2 = '<<<>'
const distance2 = maxDistance(movements2)
console.log(distance2) // -> 2

const movements3 = '>***>'
const distance3 = maxDistance(movements3)
console.log(distance3) // -> 5
