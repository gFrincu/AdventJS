export function compile(code: string): number {
	let counter = 0, last: number[] = [], percent = false;
	let codeArray = code.split('')
	let i = 0
	for (i; i < codeArray.length; i++) {
		let part = codeArray[i];

		counter += +(part === '+');
		counter *= 1 + +(part === '*');
		counter -= +(part === '-');

		if (part === '%') {
			last.push(i)
			percent = true;
		}

		if (part === '<' && percent) {
			codeArray[i] = '0'
			i = last.pop() ?? 0
		}

		if (part === '¿' && counter <= 0) {
			i = code.indexOf('?', i + 1);
		}
		console.log(counter, part, codeArray[i], i)
	}

	return counter;
}

console.log(compile('<%+¿++%++<?'))