// SI el árbol es más alto que 100, no hay árbol
// Luego he pensado que las ramas se rellenan con asteriscos, y que la primera es un asterisco
// También he pensado que para la primera fila, o para el tronco, siendo que está en el centro a los dos lados tiene altura -1 espacios en blanco.
// Entonces tengo un contador que va subiendo por la altura del árbol y lo que va haciendo es crear las ramas, repitiendo el espacio en blanco las veces que lo necesita, añadiendo líneas en blanco para separar las ramas. Agregando dos asteriscos a la siguiente rama y restando dos espacios en blanco a la siguiente rama para que el árbol tenga forma de árbol.
// Luego junto la estructura de árbol y la devuelvo
export default function createXmasTree(height) {
	let i = 0, finalTree = '', blankLength, blankSpace = '_';
	if (height > 100) {
		return finalTree;
	}
	blankLength = height-1;
	let branch = '*';
	let trunk = blankSpace.repeat(blankLength) + '#' + blankSpace.repeat(blankLength)
	while (i < height) {
		if (blankLength==0){
			finalTree += branch +'\n'
		}
		else{
		finalTree += blankSpace.repeat(blankLength) + branch + blankSpace.repeat(blankLength) + '\n'
		}
branch = branch.concat('**')
		i++;
		blankLength--;
	}
	return finalTree + trunk + '\n'+trunk
}
console.log(createXmasTree(5));
