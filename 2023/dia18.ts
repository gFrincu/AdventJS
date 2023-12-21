export function drawClock(time: string): string[][] {
	const numbers: { [key: string]: string[] } = {
		'0': ['***', '* *', '* *', '* *', '* *', '* *', '***'],
		'1': ['  *', '  *', '  *', '  *', '  *', '  *', '  *'],
		'2': ['***', '  *', '  *', '***', '*  ', '*  ', '***'],
		'3': ['***', '  *', '  *', '***', '  *', '  *', '***'],
		'4': ['* *', '* *', '* *', '***', '  *', '  *', '  *'],
		'5': ['***', '*  ', '*  ', '***', '  *', '  *', '***'],
		'6': ['***', '*  ', '*  ', '***', '* *', '* *', '***'],
		'7': ['***', '  *', '  *', '  *', '  *', '  *', '  *'],
		'8': ['***', '* *', '* *', '***', '* *', '* *', '***'],
		'9': ['***', '* *', '* *', '***', '  *', '  *', '***'],
		':': [' ', ' ', '*', ' ', '*', ' ', ' '],
	}

	const num0 = numbers[time[0]];
	const num1 = numbers[time[1]];
	const point = numbers[':'];
	const num3 = numbers[time[3]];
	const num4 = numbers[time[4]];
	const clock: string[][] = [];
	for (let i = 0; i < num0.length; i++) {
		const row = `${num0[i]} ${num1[i]} ${point[i]} ${num3[i]} ${num4[i]}`;
		clock.push(row.split(''));
	}
	return clock;
}
