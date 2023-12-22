export function findBalancedSegment(message: number[]): number[] {
	let maxSegment: number[] = [];
	let maxSegmentLength = 0;

	for (let startIndex = 0; startIndex < message.length; startIndex++) {
		let count = 0;

		for (let endIndex = startIndex; endIndex < message.length; endIndex++) {
			count += +(message[endIndex] === 1) - +(message[endIndex] === 0);

			if (count === 0) {
				let segmentLength = endIndex - startIndex + 1;
				if (segmentLength > maxSegmentLength) {
					maxSegmentLength = segmentLength;
					maxSegment = [startIndex, endIndex];
				}
			}
		}
	}

	return maxSegment;
}
