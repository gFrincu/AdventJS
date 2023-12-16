// Absolutamente lo mismo pero he intentado simplificar cosas
export function cyberReindeer(road: string, time: number): string[] {
	let i = road.indexOf('S'), j = 1;
	let result: string[] = [];
	let currentChar = '.';
	result.push(road);

	while (j < time) {
		if (j === 5) {
			road = road.replace(/\|/g, '*');
		}
		let roadArray = road.split('');
		if (road[i + 1] !== '|') {
			roadArray[i] = currentChar;
			currentChar = roadArray[i + 1];
			roadArray[i + 1] = 'S';
			road = roadArray.join('')
			i++;
		}

		result.push(road);
		j++;
	}

	return [result, ['']][+(time === 0 || road === '')];
}

const road = 'S..|...|..'
const time = 10 // unidades de tiempo
const result = cyberReindeer(road, time)
console.log(result)
const road2 = 'S..||.'
const time2 = 8 // unidades de tiempo
const result2 = cyberReindeer(road2, time2)
console.log(result2)

