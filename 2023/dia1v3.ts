export function findFirstRepeated(gifts: number[]): number {
	// La idea de esto es que tu filtras por todos los iguales que tenga el array, la cuestión es que lo que te hace determinar que existen es ver que tengan un índice diferente a i. Si lo tienen has encontrado a tu repetido.
    const repeated = gifts.filter((gift, i) => gifts.indexOf(gift) !== i);
	console.log(repeated)
    return repeated.length > 0 ? repeated[0] : -1;
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
