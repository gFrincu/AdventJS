// Esta versión hace lo mismo que la anterior pero con un for of
export function findFirstRepeated(gifts: number[]): number {
	let repeated: number[] = []
		for (let gift of gifts){
		if (!repeated.includes(gift)) {
			repeated.push(gift);
		} else {
			return gift;
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
