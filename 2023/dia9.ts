// Lo que he intentado es comparar la luz actual con la siguiente, y si la siguiente es diferente, cambiarla y sumar en un contador el cambio
//  Pero también lo he hecho empezando por las luces del final, por si fuera la primera la única que estuviese mal
// Comparo contadores, y me quedo con el menor
function adjustLights(lights: Array<string>): number {
	let changesLeft = 0;
	let changesRight = 0;
	let changes = lights.slice();
  
	for (let i = 0; i < lights.length - 1; i++) {
	  if (changes[i] === changes[i + 1]) {
		changes[i + 1] = (changes[i + 1] === '🔴') ? '🟢' : '🔴';
		changesLeft++;
	  }
	}
	changes = lights.slice();
	for (let i = lights.length - 1; i > 0; i--) {
	  if (changes[i] === changes[i - 1]) {
		changes[i - 1] = (changes[i - 1] === '🔴') ? '🟢' : '🔴';
		changesRight++;
	  }
	}
  
	return Math.min(changesRight, changesLeft);
  }
  
  console.log(adjustLights(['🟢', '🔴', '🟢', '🟢', '🟢']))
  console.log(adjustLights(['🔴', '🔴', '🟢', '🟢', '🔴']))
  console.log(adjustLights(['🟢', '🔴', '🟢', '🔴', '🟢']));
  console.log(adjustLights(['🔴', '🔴', '🔴']))
console.log(adjustLights(['🟢', '🔴', '🔴', '🟢', '🔴']))
console.log(adjustLights(['🔴', '🔴', '🟢', '🔴', '🟢']))