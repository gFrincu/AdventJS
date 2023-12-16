export function adjustLights(lights: Array<string>): number {
	let changes = 0;

	lights.forEach((light, index) => {
		if ((light === lights[0]) !== (index % 2 === 0)) {
			changes++;
		}
	});

	return Math.min(changes, lights.length - changes);
}
console.log(adjustLights(['🟢', '🔴', '🟢', '🟢', '🟢']))
console.log(adjustLights(['🔴', '🔴', '🟢', '🟢', '🔴']))
console.log(adjustLights(['🟢', '🔴', '🟢', '🔴', '🟢']));
console.log(adjustLights(['🔴', '🔴', '🔴']))
console.log(adjustLights(['🟢', '🔴', '🔴', '🟢', '🔴']))
console.log(adjustLights(['🔴', '🔴', '🟢', '🔴', '🟢']))