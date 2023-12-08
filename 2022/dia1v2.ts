function wrappingV2(gifts: Array<string>): Array<string> {
	return gifts.map(gift => {
		const wrappingPaper = '*'.repeat(gift.length + 2) + '\n*' + gift + '*\n' + '*'.repeat(gift.length + 2);
		return wrappingPaper;
	});
}

console.log(wrappingV2(['cat', 'game', 'socks']))
