export default function decodeNumber(symbols) {
	// Diccionario que mapea los símbolos a sus valores
	const symbolValues = {
		'.': 1,
		',': 5,
		':': 10,
		';': 50,
		'!': 100
	};

	let finalNumber = 0;

	for (let i = 0; i < symbols.length; i++) {
		const currentValue = symbolValues[symbols[i]];
		const nextValue = symbolValues[symbols[i + 1]];

		// Si el símbolo actual no es válido, devolvemos NaN
		if (currentValue === undefined) {
			return NaN;
		}

		// Si el valor actual es menor que el siguiente, restamos
		if (nextValue !== undefined && currentValue < nextValue) {
			finalNumber -= currentValue;
		} else {
			// En caso contrario, sumamos el valor
			finalNumber += currentValue;
		}
	}

	return finalNumber;
}
