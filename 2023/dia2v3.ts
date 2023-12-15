// Filter itera por cada elemento del array
// Lo dividimos en letras
// Y buscamos si las letras están en los regalos
export function manufacture(gifts: string[], materials: string): string[] {
	return gifts.filter(gift => {
		return gift.split('').every(letter => materials.includes(letter));
	});
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


