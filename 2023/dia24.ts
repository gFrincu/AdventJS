// Intento usar recursividad
// La cuestión es que empiezo con un vector vacío y lo voy aumentando, porque la función se va llamando a si misma
//  Paso por un reduce que me cuenta cuanto da la suma de todos los elementos de mi vector
//  Si resulta que esa suma es igual al valor de escaleras que tiene la escalera, entonces mi vector vale para las combinaciones, y lo añado
//  Hago un for, que va de 1 hasta el número máximo que me han dicho que puede subir un elfo
// Si la suma de todos los elementos de mi vector más el número en el que esté ahora es menor o igual a lo alto de la escalera, lo añado a un vector current path
//  entonces vuelvo a llamar a la función, y empieza de nuevo, el reduce, el ver si vale para añadirla, el hacer el for etc, etc, etc.


function getStaircasePaths(steps: number, maxJump: number): number[][] {
	let combinations: number[][] = [];

	function findPaths(currentPath: number[]): void {
		const currentSum = currentPath.reduce((sum, step) => sum + step, 0);

		if (currentSum === steps) {
			combinations.push([...currentPath]);
			return;
		}

		for (let jump = 1; jump <= maxJump; jump++) {
			if (currentSum + jump <= steps) {
				currentPath.push(jump);
				findPaths(currentPath);
				currentPath.pop();
			}
		}
	}

	findPaths([]);

	return combinations;
}
