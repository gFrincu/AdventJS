// Esta versión hace lo mismo que la anterior pero con un for of
function findFirstRepeatedV2(gifts: number[]): number {
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