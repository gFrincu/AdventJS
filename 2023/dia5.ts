// Este programa también me ha costado.
// Inicialmente tenía algo que substituía los casos dependiendo de si era o punto o asterisco y lo hacía avanzar con mis substituciones. Pero me fallaba un test
// El test correspondiente era uno en el que hubiese varios asteriscos seguidos, como en el segundo caso de ejemplo que tengo puesto.
// Hay que pensar que el trineo de santa se va moviendo, pero que cuando se mueve, la carretera sigue siendo carretera, esta vez sin trineo.
// Por tanto, la posición inicial de la carretera cuando el trineo se mueva, entendemos que será un '.'
// Así lo que vamos haciendo es mover a S, recuperar la posición en la que pondremos a S, y devolver la posición de la que se va S a su estado original
// Esto facilitado por la conversión  de un string a array, y luego a string otra vez

export function cyberReindeer(road: string, time: number): string[] {
	let i = road.indexOf('S'), j = 1;
	let result: string[] = [];
	if (time === 0 || road === '') {
		return result;
	}

	let currentChar = '.';

	result.push(road);

	while (j < time) {
		if (j === 5) {
			road = road.replace(/\|/g, '*');
		}
		let roadArray = road.split('');
		if (i < road.length - 1 && (road[i + 1] === '.' || road[i + 1] === '*')) {
			roadArray[i] = currentChar;
			currentChar = roadArray[i + 1];
			roadArray[i + 1] = 'S';
			road = roadArray.join('')
			i++;
		}

		result.push(road);
		j++;
	}

	return result;
}

const road = 'S..|...|..'
const time = 10 // unidades de tiempo
const result = cyberReindeer(road, time)
console.log(result)
const road2 = 'S..||.'
const time2 = 8 // unidades de tiempo
const result2 = cyberReindeer(road2, time2)
console.log(result2)

