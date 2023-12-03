function manufacture(gifts: string[], materials: string): string[] {
	let manufacturableGifts: string[] = [];
	for (let gift of gifts) {
		let canManufacture = true;
		for (let giftMaterial of gift) {
			if (!materials.includes(giftMaterial)) {
				canManufacture = false;
				break; //If the letter is not in the gift we can stop
			}
		}
		if (canManufacture) {
			manufacturableGifts.push(gift);
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