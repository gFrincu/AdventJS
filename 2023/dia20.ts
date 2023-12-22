export function distributeGifts(weights: Array<Array<number | null>>): Array<Array<number | null>> {
	let result: number[][] = weights.map(row => new Array(row.length).fill(0));

	for (let i = 0; i < weights.length; i++) {
		for (let j = 0; j < weights[i].length; j++) {
			let sum = weights[i][j] ?? 0; // Convertir null a 0
			let count = +(weights[i][j] !== null);

			// Sumar y contar vecinos
			let up = weights[i - 1]?.[j] ?? 0;
			sum += up;
			count += +(up !== 0);

			let down = weights[i + 1]?.[j] ?? 0;
			sum += down;
			count += +(down !== 0);

			let right = weights[i]?.[j + 1] ?? 0;
			sum += right;
			count += +(right !== 0);

			let left = weights[i]?.[j - 1] ?? 0;
			sum += left;
			count += +(left !== 0);

			// Calcular el promedio
			result[i][j] = count > 0 ? Math.round(sum / count) : 0;
		}
	}

	return result;
}

const input = [
	[4, 5, 1],
	[6, null, 3],
	[8, null, 4]
]


console.log(distributeGifts(input))