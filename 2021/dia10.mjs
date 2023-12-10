export default function getCoins(change) {
	// Definimos las monedas
	let coins = [1, 2, 5, 10, 20, 50]
	// Definimos el resultado, inicialmente no estamos usando nada, así que 0 en todas
	let coinCount = coins.map(() => 0);
	// La idea ahora es que empiezo a contar desde las monedas más grandes
	// Divido el valor que me da la función por el valor de la moneda, y me quedo con ese valor.
	//  Resto al valor de la función (change) lo que ya he utilizado
	// Guardo las monedas que he podido usar en el lugar correspondiente
	//  Y avanzo hasta llegar al valor de moneda más pequeño, en nuestro caso, 1
	for (let i = coins.length - 1; i >= 0; i--) {
		const count = Math.floor(change / coins[i]);

		change -= count * coins[i];
		coinCount[i] = count;
	}
	return coinCount;
}
console.log(getCoins(51)) // [1, 0, 0, 0, 0, 1] -> una moneda de 1 céntimo y otra de 50 céntimos
console.log(getCoins(3)) // [1, 1, 0, 0, 0, 0] -> una moneda de 1 céntimo y otra de 2
console.log(getCoins(5)) // [0, 0, 1, 0, 0, 0] -> una moneda de 5 céntimos
console.log(getCoins(16)) // [1, 0, 1, 1, 0, 0] -> una moneda de 1 céntimo, una de 5 y una de 10
console.log(getCoins(100)) // [0, 0, 0, 0, 0, 2] -> dos monedas de 50 céntimos
