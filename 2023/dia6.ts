function maxDistance(movements: string): number {
	let i = 0, counter = 0, asterisks = 0;
	while (i < movements.length) {
		if (movements[i] == '>') {
			counter++;
		}
		if (movements[i] == '<') {
			counter--;
		}
		if (movements[i] == '*') {
			asterisks++
		}
		i++;
	}
	if (Math.abs(counter + asterisks) >= Math.abs(counter - asterisks)) {
		counter = Math.abs(counter + asterisks);
	}
	else {
		counter = Math.abs(counter - asterisks);
	}

	return counter;
}

const movements = '>>*<'
const distance = maxDistance(movements)
console.log(distance) // -> 2

const movements2 = '<<<>'
const distance2 = maxDistance(movements2)
console.log(distance2) // -> 2

const movements3 = '>***>'
const distance3 = maxDistance(movements3)
console.log(distance3) // -> 5

// En este programa lo que he hecho es que para < y > retroceda o avance según sea el caso
// En cuanto a los asteriscos, como depende de la distancia y lo que beneficie, pues he decidido contar cuantos hay con un contador de asteriscos
// Entonces como lo que necesitamos es el valor absoluto de la distancia, le he dicho que me diga cuando sería el valor absoluto sumando los asteriscos, y restando los asteriscos
//  El que sea más grande, es con el que me quedo