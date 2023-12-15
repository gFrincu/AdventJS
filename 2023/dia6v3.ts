export function maxDistance(movements: string): number {
	let counter = 0, asterisks = 0;

	for (const move of movements) {
		// Utilizamos el valor unario, convierte booleanos a números para poder operar
		// Counter aumenta en uno si es > y decrementará si es <
	// Astericos 	aumentan también si aparecen
		counter += +(move === '>') - +(move === '<');
		asterisks += +(move === '*');
	}

	return Math.abs(counter) + asterisks;
}
