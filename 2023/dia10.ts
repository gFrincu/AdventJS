export function createChristmasTree(ornaments: string, height: number): string {
	//  Defino los espacios para lo que no es árbol
	let blankSpace = ' '.repeat(height - 1);
//  Esto será el tronco
	let trunk = blankSpace + '|' + '\n';
	// Aquí defino todos los posibles adornos que podría necesitar, y cambio ornaments para que lo repita las veces que obtengo. 
	// Lo pongo de esta manera sobretodo para que se cumpla en strings pequeños, aunque en grandes a lo mejor me sobren, comprobar caso 3 por ejemplo
	let allOrnaments = (height * (height + 1)) / 2;
	let ornamentsBranch = ornaments.repeat(allOrnaments);
	let tree = '';
	let branch = ''
	let currentOrnament = 0;
	// La idea de este for es rellenar el árbol
	//  Primero identificas cuanto de larga va a ser la rama, en base al for, que si nos fijamos, siempre es un número más
	// Después divides la cadena en los trozos que te interesa., o sea, tu cadena tiene los posibles adornos, entonces es como que vas cortando por trocitos.
	//  Primero te quedas con este adorno, luego sigues a los dos siguientes, luego a los tres siguientes... Nunca vuelves a los anteriores.
	// Yo intentaba hacer un círculo de alguna manera, pero no lo he conseguido
	//  En fin, entonces concatenas los espacios necesarios para que quede bien, los adornos, y el cambio de línea
	//  Restas un espacio, y vuelta a empezar
	for (let i = 0; i < height; i++) {
		let branchLength = i + 1;
		let branch = ornamentsBranch.slice(currentOrnament, currentOrnament + branchLength).split('').join(' ');
		currentOrnament += branchLength;
		tree += blankSpace + branch + '\n';
		blankSpace = blankSpace.slice(1);
	}
	// AÑades el tronco
	tree += trunk;
	return tree;
}


console.log(createChristmasTree('*@o', 3));
console.log(createChristmasTree('123', 4));
console.log(createChristmasTree('xxx', 3));

