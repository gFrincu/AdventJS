export function organizeGifts(gifts: string): string {
	let organizedGifts = '';
	const numbers = gifts.match(/\d+/g) ?? [];
	const letters = gifts.match(/[a-zA-Z]+/g) ?? [];

	numbers.forEach((number, i) => {
		const count = Number(number);
		const letter = letters[i];
		const pallets = Math.floor(count / 50);
		const boxes = Math.floor((count % 50) / 10);
		const individualGifts = count % 10;

		organizedGifts += `[${letter}]`.repeat(pallets);
		organizedGifts += `{${letter}}`.repeat(boxes);
		if (individualGifts > 0) {
			organizedGifts += `(${letter.repeat(individualGifts)})`;
		}
	});

	return organizedGifts;
}
