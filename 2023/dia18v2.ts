// De nuevo, idea de Jagame. Gracias
export function drawClock(time: string): string[][] {
	const NUMBERS: { [key: string]: number } = {
		'0': 0b111101101101101101111,
		'1': 0b100100100100100100100,
		'2': 0b111001001111100100111,
		'3': 0b111100100111100100111,
		'4': 0b100100100111101101101,
		'5': 0b111100100111001001111,
		'6': 0b111101101111001001111,
		'7': 0b100100100100100100111,
		'8': 0b111101101111101101111,
		'9': 0b111100100111101101111,
		':': 0b0010100
	}

	const SIGNS: string[] = [' ', '*']
	const result: string[][] = [[], [], [], [], [], [], []]
	const SBITS = 0b0010100
	const NBITS0 = NUMBERS[time[0]]
	const NBITS1 = NUMBERS[time[1]]
	const NBITS3 = NUMBERS[time[3]]
	const NBITS4 = NUMBERS[time[4]]
	for (const i of result.keys()) {
		const mov0 = i * 3;
		const mov1 = mov0 + 1;
		const mov2 = mov0 + 2;

		// Agregar símbolos para los dos primeros números
		result[i].push(SIGNS[NUMBERS[time[0]] >>> mov0 & 1]);
		result[i].push(SIGNS[NUMBERS[time[0]] >>> mov1 & 1]);
		result[i].push(SIGNS[NUMBERS[time[0]] >>> mov2 & 1]);

		// Agregar espacio separador
		result[i].push(' ');

		// Agregar símbolos para el siguiente número
		result[i].push(SIGNS[NUMBERS[time[1]] >>> mov0 & 1]);
		result[i].push(SIGNS[NUMBERS[time[1]] >>> mov1 & 1]);
		result[i].push(SIGNS[NUMBERS[time[1]] >>> mov2 & 1]);

		// Agregar espacio separador y los dos puntos
		result[i].push(' ', SIGNS[NUMBERS[':'] >>> i & 1], ' ');

		// Agregar símbolos para los dos últimos números
		result[i].push(SIGNS[NUMBERS[time[3]] >>> mov0 & 1]);
		result[i].push(SIGNS[NUMBERS[time[3]] >>> mov1 & 1]);
		result[i].push(SIGNS[NUMBERS[time[3]] >>> mov2 & 1]);

		result[i].push(' ');

		result[i].push(SIGNS[NUMBERS[time[4]] >>> mov0 & 1]);
		result[i].push(SIGNS[NUMBERS[time[4]] >>> mov1 & 1]);
		result[i].push(SIGNS[NUMBERS[time[4]] >>> mov2 & 1]);
	}

	return result;
}
