export function organizeChristmasDinner(dishes: string[][]): string[][] {
	dishes.sort()
	let dinner: string[][] = [];

	for (const [dish, ...ingredientsList] of dishes) {
		for (const ingredient of ingredientsList) {
			let found = false;
			for (let plate of dinner) {
				if (plate[0] === ingredient) {
					plate.push(dish);
					found = true;
					break;
				}
			}

			if (!found) {
				dinner.push([ingredient, dish]);
			}
		}
	}

	dinner.sort((a, b) => a[0].localeCompare(b[0]));
	return dinner.filter(dish => dish.length > 2)
}
const dishes = [
	["christmas turkey", "turkey", "sauce", "herbs"],
	["cake", "flour", "sugar", "egg"],
	["hot chocolate", "chocolate", "milk", "sugar"],
	["pizza", "sauce", "tomato", "cheese", "ham"],
];

console.log(organizeChristmasDinner(dishes));
