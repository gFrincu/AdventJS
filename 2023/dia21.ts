export function findBalancedSegment(message: number[]): number[] {
	let maxSegment: number[] = [];
	let maxSegmentLength = 0;

	for (let startIndex = 0; startIndex < message.length; startIndex++) {
		let countZeros = 0;
		let countOnes = 0;

		for (let endIndex = startIndex; endIndex < message.length; endIndex++) {
			if (message[endIndex] === 0) {
				countZeros++;
			} else {
				countOnes++;
			}

			if (countZeros === countOnes) {
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
