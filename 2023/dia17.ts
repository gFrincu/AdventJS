export function optimizeIntervals(intervals: number[][]): number[][] {
	intervals.sort((a, b) => a[0] - b[0])

	let optimizedIntervals: number[][] = [intervals[0]];

	for (let i = 1; i < intervals.length; i++) {
		let lastInterval = optimizedIntervals[optimizedIntervals.length - 1];
		let currentInterval = intervals[i];

		if (currentInterval[0] <= lastInterval[1]) {
			lastInterval[1] = [lastInterval[1], currentInterval[1]][+(lastInterval[1] < currentInterval[1])];
		} else {
			optimizedIntervals.push(currentInterval);
		}
	}

	return optimizedIntervals;
}
