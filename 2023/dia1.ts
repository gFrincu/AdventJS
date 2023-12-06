function findFirstRepeated(gifts: number[]): number {
	let gift: number[] = [];

	for (let i = 0; i < gifts.length; i++) {
		if (!gift.includes(gifts[i])) {
			gift.push(gifts[i]);
		} else {
			return gifts[i];
		}
	}

	return -1;
}
const giftIds = [2, 1, 3, 5, 3, 2]
const firstRepeatedId = findFirstRepeated(giftIds)
console.log(firstRepeatedId)
const giftIds2 = [1, 2, 3, 4]
const firstRepeatedId2 = findFirstRepeated(giftIds2)
console.log(firstRepeatedId2)
const giftIds3 = [5, 1, 5, 1]
const firstRepeatedId3 = findFirstRepeated(giftIds3)
console.log(firstRepeatedId3)
//El programa pasa por el array de números y los va agregando todos a un array nuevo. Antes de agregar, comprueba que el número no esté ya en el array, y si lo está, para y devuelve el número, porque será el primero repetido.