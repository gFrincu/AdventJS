export function organizeChristmasDinner(dishes: string[][]): string[][] {
	dishes.sort()
	let dinner: string[][] = [];
	let ingredientIndex = 0
	for (const [dish, ...ingredientsList] of dishes) {
		for (const ingredient of ingredientsList) {
			ingredientIndex = dinner.findIndex(food => food[0] === ingredient);

			if (ingredientIndex !== -1) {
				dinner[ingredientIndex].push(dish);
			} else {
				dinner.push([ingredient, dish]);
			}
		}
	}

	dinner.sort((a, b) => a[0].localeCompare(b[0]));
	return dinner.filter(dish => dish.length > 2);
}
