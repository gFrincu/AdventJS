function decode(message: string): string {
	// Define una expresión regular para encontrar texto entre paréntesis.
	// Captura solo el texto que no contiene otros paréntesis.
	const regex = /\(([^()]+)\)/g;

	// Invierte el texto capturado.
	const textReverse = (_: string, textInParenthesis: string) => [...textInParenthesis].reverse().join("");

	// Aplica la función de reemplazo dos veces:
	// 1. Para los paréntesis anidados más internos.
	// 2. Para los paréntesis exteriores que ahora contienen el texto ya invertido.


	message = message
		.replace(regex, textReverse) // Invierte el texto en los paréntesis de nivel 2
		.replace(regex, textReverse); // Invierte el texto en los paréntesis restantes.

	return message;
}

const a = decode('hola (odnum)')
console.log(a) // hola mundo

const b = decode('(olleh) (dlrow)!')
console.log(b) // hello world!

const c = decode('sa(u(cla)atn)s')
console.log(c) // santaclaus

// Sinceramente este me ha costado mucho y aún no creo haberlo entendido o poderlo repetir mañana si me volvieran a preguntar
// Yo me había complicado un poco la vida haciendo fors y intentando aberiguar si tenía dos paréntesis y trabajando desde ahí, pero obviamente tengo que aprender expresiones regulares, que son útiles!
// La idea del programa es encontrar los paréntesis que no tengan dentro otros paréntesis.
// Al encontrarlos coge el texto de dentro, lo revierte y lo devuelve sin paréntesis.