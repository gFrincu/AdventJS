// Divido mucho las líneas porque el validador de test me dice que las líneas son demasiado largas
// Yo soy ciega y no tengo una buena visión espacial, si le preguntas a alguien vidente sobre los ejemplos te explicará que eso es un cubo y que tiene sentido, yo sinceramente, no lo entiendo así que he intentado replicar el patrón
//  Lo he dividido en la parte de arriba, la del medio, y la de abajo forzadamente porque siempre serán de una manera
//  Y las líneas de arriba y las de abajo realmente tienen el mismo patrón, lo único que las de arriba tienen espacios en blanco y las otras no.
export function drawGift(size: number, symbol: string): string {
	let i;
	let gift = '';
	let blankSpace = ' ', hash = '#';
	if (size == 1) {
		return '#\n'
	}
	else {
		let measure = size;
		let symbolCounter = 0;
		gift = blankSpace.repeat(measure - 1) + hash.repeat(measure) + '\n'
		for (i = 0; i < size - 2; i++) {
			gift += blankSpace.repeat(measure - 2)
			gift += hash + symbol.repeat(size - 2)
			gift += hash + symbol.repeat(symbolCounter) + hash + '\n'
			measure--
			symbolCounter++;
		}
		gift += hash.repeat(size) + symbol.repeat(size - 2) + hash + '\n'
		for (i = 0; i < size - 2; i++) {
			symbolCounter--;
			gift += hash + symbol.repeat(size - 2)
			gift += hash + symbol.repeat(symbolCounter)
			gift += hash + '\n'

		}
		gift += hash.repeat(size) + '\n'
	}
	return gift;
}

console.log(drawGift(1, '^'))
console.log(drawGift(5, '*'))
console.log(drawGift(4, '+'))
