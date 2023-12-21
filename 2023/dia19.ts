export function revealSabotage(store: string[][]): string[][] {
	let result: string[][] = store.map(row => new Array(row.length).fill(' '));

	for (let i = 0; i < store.length; i++) {
		for (let j = 0; j < store[i].length; j++) {
			if (store[i][j] == '*') {
				result[i][j] = '*';
			} else {
				let giftsCounter = 0;

				giftsCounter += i > 0 && store[i - 1][j] == '*' ? 1 : 0; // arriba
				giftsCounter += i < store.length - 1 && store[i + 1][j] == '*' ? 1 : 0; // abajo
				giftsCounter += j < store[i].length - 1 && store[i][j + 1] == '*' ? 1 : 0; // derecha
				giftsCounter += j > 0 && store[i][j - 1] == '*' ? 1 : 0; // izquierda
				giftsCounter += i > 0 && j > 0 && store[i - 1][j - 1] == '*' ? 1 : 0; // diagonal arriba izquierda
				giftsCounter += i > 0 && j < store[i].length - 1 && store[i - 1][j + 1] == '*' ? 1 : 0; // diagonal arriba derecha
				giftsCounter += i < store.length - 1 && j > 0 && store[i + 1][j - 1] == '*' ? 1 : 0; // diagonal abajo izquierda
				giftsCounter += i < store.length - 1 && j < store[i].length - 1 && store[i + 1][j + 1] == '*' ? 1 : 0; // diagonal abajo derecha

				result[i][j] = giftsCounter > 0 ? giftsCounter.toString() : ' ';
			}
		}
	}

	return result;
}
