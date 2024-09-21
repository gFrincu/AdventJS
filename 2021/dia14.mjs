// Reconozco que mi primera aproximación fue la de ordenar el Array para encontrar el valor
export default function missingReindeer(ids) {
	// Existe una fórmula de Gauss que permite calcular la suma de los números de un rango concreto.
	//La fórmula es n(n+1)/2. Como en nuestro array también va incluido el 0, el rango no será de ids.length+1 si no de ids.length ya que 0 no suma nada en la suma total.
	let n = ids.length;
	let missingNumber = (n * (n + 1)) / 2
	for (const element of ids) {
		missingNumber -= element;
	}
	return missingNumber;
}

console.log(missingReindeer([0, 2, 3])); // -> 1
console.log(missingReindeer([5, 6, 1, 2, 3, 7, 0])); // -> 4
console.log(missingReindeer([0, 1])); // -> 2 (¡es el último el que falta!)
console.log(missingReindeer([3, 0, 1])); // -> 2
console.log(missingReindeer([9, 2, 3, 5, 6, 4, 7, 0, 1])); // -> 8
console.log(missingReindeer([0])); // -> 1 (¡es el último el que falta!)
