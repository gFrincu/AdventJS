export default function shouldBuyFidelity(times) {
	let price = 12
	let fidelity = 250
	let discount = 0, i = 1
	while (i <= times) {
		discount += price * (Math.pow(0.75, i))
		i++
	}
	fidelity += discount
	if (price * times < fidelity) {
		return false
	}
	return true
}
console.log(shouldBuyFidelity(1)) // false -> Mejor comprar tickets de un sólo uso
console.log(shouldBuyFidelity(100)) // true -> Mejor comprar tarjeta fidelidad
