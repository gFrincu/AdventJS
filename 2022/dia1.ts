function wrapping(gifts: Array<string>): Array<string> {
	let wrappedGifts: Array<string> = []
	let wrappingPaper: string = ''
	for (let gift of gifts) {
		wrappingPaper = '*'.repeat(gift.length+2) + '\n' + '*'
		wrappingPaper += gift +wrappingPaper.split('').reverse().join('')
		wrappedGifts.push(wrappingPaper)
	}
	return wrappedGifts
}

const gifts = ['cat', 'game', 'socks']

const wrapped = wrapping(gifts)

console.log(wrapped)
