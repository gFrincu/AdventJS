// Quería hacer algo que de alguna manera fuera recorriendo el array de izquierda a derecha y de derecha a izquierda a la vez
// Entonces he pensado que en cada momento en el que reste la venta y la compra tenga un valor mayor, pues ese es el que quiero
// Quiero buscar el valor más barato para la venta así que si me encuentro con números grandes, no me interesa avanzar si no mantener el precio que he conseguido
// Lo mismo pasa para la compra, pero en este caso con el valor mayor
export default function maxProfit(prices) {
	let i = 0, j = prices.length - 1, max = 0;

	while (i < j) {
		if (prices[j] - prices[i] > max) {
			max = prices[j] - prices[i];
		}
		if (prices[i] > prices[i + 1]) {
			i++;
		} else {
			j--;
		}
	}

	return max > 0 ? max : -1;
}

const pricesBtc = [39, 18, 29, 25, 34, 32, 5];
console.log(maxProfit(pricesBtc)); // -> 16 (compra a 18, vende a 34)

const pricesEth = [10, 20, 30, 40, 50, 60, 70];
console.log(maxProfit(pricesEth)); // -> 60 (compra a 10, vende a 70)

const pricesDoge = [18, 15, 12, 11, 9, 7];
console.log(maxProfit(pricesDoge)); // -> -1 (no hay ganancia posible)

const pricesAda = [3, 3, 3, 3, 3];
console.log(maxProfit(pricesAda)); // -> -1 (no hay ganancia posible)
