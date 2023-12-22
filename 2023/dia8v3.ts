export function organizeGifts(gifts: string): string {
	const giftsRegex = /(\d+)([a-z])/g;
	const giftMatches = [...gifts.matchAll(giftsRegex)];

	let organizedGifts = '';

	for (const [, quantity, symbol] of giftMatches) {
		let remainingQuantity = +quantity;

		organizedGifts += `[${symbol}]`.repeat(remainingQuantity / 50 | 0);
		remainingQuantity %= 50;

		organizedGifts += `{${symbol}}`.repeat(remainingQuantity / 10 | 0);
		remainingQuantity %= 10;

		if (remainingQuantity > 0) {
			organizedGifts += `(${symbol.repeat(remainingQuantity)})`;
		}
	}

	return organizedGifts;
}
