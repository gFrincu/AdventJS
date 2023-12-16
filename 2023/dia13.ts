export function calculateTime(deliveries: string[]): string {
	let totalTime = new Date(0, 0, 0, 0, 0, 0);

	for (let delivery of deliveries) {
		let [hours, minutes, seconds] = delivery.split(":").map(Number);
		totalTime.setHours(totalTime.getHours() + hours);
		totalTime.setMinutes(totalTime.getMinutes() + minutes);
		totalTime.setSeconds(totalTime.getSeconds() + seconds);
	}

	let endTime = "07:00:00".split(':').map(Number);
	let endTimeDate = new Date(0, 0, 0, endTime[0], endTime[1], endTime[2]);

	let differenceInMilliseconds = totalTime.getTime() - endTimeDate.getTime();

	let differenceDate = new Date(Math.abs(differenceInMilliseconds));

	let hours = differenceDate.getUTCHours().toString().padStart(2, '0');
	let minutes = differenceDate.getUTCMinutes().toString().padStart(2, '0');
	let seconds = differenceDate.getUTCSeconds().toString().padStart(2, '0');
	let sign = differenceInMilliseconds < 0 ? '-' : '';

	return `${sign}${hours}:${minutes}:${seconds}`;
}

