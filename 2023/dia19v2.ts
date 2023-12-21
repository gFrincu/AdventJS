export function revealSabotage(store: string[][]): string[][] {
	let result: string[][] = store.map(row => new Array(row.length).fill(' '));

	for (let i = 0; i < store.length; i++) {
		for (let j = 0; j < store[i].length; j++) {
			if (store[i][j] === '*') {
				result[i][j] = '*';
			} else {
				let giftsCounter = 0;
				giftsCounter += +(store?.[i - 1]?.[j] === '*'); // arriba
				giftsCounter += +(store?.[i + 1]?.[j] === '*'); // abajo
				giftsCounter += +(store?.[i]?.[j + 1] === '*'); // derecha
				giftsCounter += +(store?.[i]?.[j - 1] === '*'); // izquierda
				giftsCounter += +(store?.[i - 1]?.[j - 1] === '*'); // diagonal arriba izquierda
				giftsCounter += +(store?.[i - 1]?.[j + 1] === '*'); // diagonal arriba derecha
				giftsCounter += +(store?.[i + 1]?.[j - 1] === '*'); // diagonal abajo izquierda
				giftsCounter += +(store?.[i + 1]?.[j + 1] === '*'); // diagonal abajo derecha

				result[i][j] = giftsCounter > 0 ? giftsCounter.toString() : ' ';
			}
		}
	}

	return result;
}
