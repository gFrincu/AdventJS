export function travelDistance(map: string): number {
	let totalKM = 0;
	let currentKid = 1;
	const mapArray = map.split('\n').map(row => row.split(''));
	let santa: number[] = [];

	// Buscar la posición inicial de Santa Claus
	for (let i = 0; i < mapArray.length; i++) {
		for (let j = 0; j < mapArray[i].length; j++) {
			if (mapArray[i][j] === 'S') {
				santa = [i, j];
				break;
			}
		}
	}
	// Recorrer el mapa para entregar los regalos
	for (let i = 0; i < mapArray.length; i++) {
		for (let j = 0; j < mapArray[i].length; j++) {
			if (mapArray[i][j] === currentKid.toString()) {
				totalKM += Math.abs(santa[0] - i) + Math.abs(santa[1] - j);
				santa = [i, j];
				currentKid++;
				i = -1;
				j = -1;
				break;
			}
		}
	}

	return totalKM;
}

const resultSanta = travelDistance(`.....1....
..S.......
..........
....3.....
......2...`);
console.log(resultSanta); // Salida esperada: 12

const result2Santa = travelDistance(
	`3....1....
..S.......
.........2
..........
......4...`
);
console.log(result2Santa); // Salida esperada: 2
