//  La idea de reduce es transformar un array en un valor
// El método itera sobre cada elemento del array y aplica una función reductora, acumulando su resultado
// La idea es que claro, alternamos luces, luz roja, luz verde, luz roja, luz verde, etc.
// Entonces siempre en los índices pares debería haber un color, y en los índices impares otro 
// Lo que intentamos hacer con el reduce es contar los índices si el primer color fuera el mismo que tiene el array
//  Y luego comparamos, ese número con el complementario, porque sería si empezara con el otro color
export function adjustLights(lights: Array<string>): number {
	const changes = lights.reduce((count, light, index) => {
		return count + ((light === lights[0]) !== (index % 2 === 0) ? 1 : 0);
	}, 0);

	return Math.min(changes, lights.length - changes);
}
