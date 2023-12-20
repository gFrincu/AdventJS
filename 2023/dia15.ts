export function autonomousDrive(store: string[], movements: string[]): string[] {
	let storeMatrix = store.map(string => string.split(''));
	let robot: number[] = [];
	let i, j;
	let initialX = -1, initialY = -1;
	for (i = 0; i < storeMatrix.length; i++) {
		for (j = 0; j < storeMatrix[i].length; j++) {
			if (storeMatrix[i][j] === '!') {
				robot = [i, j];
				initialX = i;
				initialY = j;
				break;
			}
		}
	}

	for (const move of movements) {
		let [x, y] = robot;
		switch (move) {
			case 'R':
				if (y + 1 < storeMatrix[x].length && storeMatrix[x][y + 1] !== '*') {
					robot = [x, y + 1];
				}
				break;
			case 'L':
				if (y - 1 >= 0 && storeMatrix[x][y - 1] !== '*') {
					robot = [x, y - 1];
				}
				break;
			case 'U':
				if (x - 1 >= 0 && storeMatrix[x - 1][y] !== '*') {
					robot = [x - 1, y];
				}
				break;
			case 'D':
				if (x + 1 < storeMatrix.length && storeMatrix[x + 1][y] !== '*') {
					robot = [x + 1, y];
				}
				break;
		}
	}

	storeMatrix[initialX][initialY] = '.';
	let [finalX, finalY] = robot;
	storeMatrix[finalX][finalY] = '!';

	return storeMatrix.map(row => row.join(''));
}

const store = ['..!....', '...*.*.']
const movements = ['R', 'R', 'D', 'L']
const result = autonomousDrive(store, movements)
console.log(result)
