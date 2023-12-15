// Esta es la versión cutre pensada por mi mentalidad de programadora C jajaja
// Detalles que a mí me han servido para intentar entender esto, (son obvios, pero yo necesito recordármelos a mi misma):
// Puedo iterar sobre una cadena tal como iteraría sobre un array. o sea si tengo string="patata" string[0] será p
// Si tengo un array de strings, e itero por ese array, por ejemplo, ["tomate", "pepino", "lechuga"], el elemento 0 será "tomate", no la t.
//La intención de este programa es pasar por cada letra del string de materiales y comprobar que esa letra esté en cada regalo. SI no lo está pues para y va al siguiente regalo.
export function manufacture(gifts: string[], materials: string): string[] {
	let manufacturableGifts: string[] = [];
	for (let i = 0; i < gifts.length; i++) {
		let canManufacture = true;
		for (let j = 0; j < gifts[i].length; j++) {
			if (!materials.includes(gifts[i][j])) {
				canManufacture = false;
				break;
			}
		}
		if (canManufacture) {
			manufacturableGifts.push(gifts[i]);
		}
	}

	return manufacturableGifts;
}
const gifts1 = ['tren', 'oso', 'pelota'];
const materials1 = 'tronesa';
console.log(manufacture(gifts1, materials1)); // ["tren", "oso"]

const gifts2 = ['juego', 'puzzle'];
const materials2 = 'jlepuz';
console.log(manufacture(gifts2, materials2)); // ["puzzle"]

const gifts3 = ['libro', 'ps5'];
const materials3 = 'psli';
console.log(manufacture(gifts3, materials3)); // []


