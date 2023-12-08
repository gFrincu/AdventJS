function organizeGiftsV2(gifts: string): string {
	let organizedGifts = '';
	let numbers = gifts.match(/\d+/g) ?? [];
	let letters = gifts.match(/[a-zA-Z]+/g) ?? [];

	numbers.forEach((number, i) => {
		const count = Number(number);
		const letter = letters[i];
		const boxes = Math.floor(count / 10);
		const restOfGifts = count % 10;
		organizedGifts += `{${letter}}`.repeat(boxes);
		if (restOfGifts > 0) {
			organizedGifts += `(${letter.repeat(restOfGifts)})`;
		}

		let pallet = `{${letter}}`.repeat(5)
		while (organizedGifts.includes(pallet)) {
			organizedGifts = organizedGifts.replace(pallet, `[${letter}]`)
		}
	});
	return organizedGifts;
}
console.log(organizeGiftsV2(`76a11b`))
console.log(organizeGiftsV2("20a"))
console.log(organizeGifts("70b120a4c"))