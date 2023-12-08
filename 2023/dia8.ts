function organizeGifts(gifts: string): string {
	let i = 0
	let organizedGifts = ''
	let numbers = gifts.split(/[a-z]/g).filter(Boolean);
	let letters = gifts.split(/\d/g).filter(Boolean);
	let count = Number(numbers[0])
	while (i < numbers.length && i < letters.length) {
		count = Number(numbers[i])
		if (count >= 10) {
			organizedGifts += ('{' + letters[i] + '}').repeat(Math.floor(count / 10));
		}
		count = count % 10
		if (count > 0) {
			organizedGifts += '(' + letters[i].repeat(count) + ')'
		}
		let pallet = ('{' + letters[i] + '}').repeat(5)
		while (organizedGifts.includes(pallet)) {
			organizedGifts = organizedGifts.replace(pallet, '[' + letters[i] + ']')
		}
		i++
	}
	return organizedGifts
}
const result1 = organizeGifts(`76a11b`)
console.log(result1)
console.log(organizeGifts("20a"))
console.log(organizeGifts("70b120a4c"))