export default function wrapGifts(gifts) {
	// Si el array está vacío, devolvemos un array vacío
	if (gifts.length === 0) 
		return [];

	// Calculamos la longitud del regalo (suponemos que todos tienen la misma longitud ya que eso dice el enunciado)
	let howBig = gifts[0].length;

	// Creamos el array donde guardaremos los regalos envueltos
	let wrappedGifts = [];

	// Creamos la primera y última línea de asteriscos
	let border = '*'.repeat(howBig + 2);

	// Añadimos el borde superior
	wrappedGifts.push(border);

	// Envolvemos cada regalo con asteriscos y lo añadimos al array
	for (const element of gifts) {
		wrappedGifts.push(`*${element}*`);
	}

	// Añadimos el borde inferior
	wrappedGifts.push(border);

	return wrappedGifts;
}

// Ejemplos:
console.log(wrapGifts(["📷", "⚽️"]));
// Resultado: [ '****', '*📷*', '*⚽️*', '****' ]

console.log(wrapGifts(["🏈🎸", "🎮🧸"]));
// Resultado: [ '******', '*🏈🎸*', '*🎮🧸*', '******' ]

console.log(wrapGifts(["📷"]));
// Resultado: [ '****', '*📷*', '****' ]
