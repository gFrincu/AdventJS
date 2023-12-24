import { organizeChristmasDinner } from "./dia23";

describe('organizeChristmasDinner', () => {
	test('Test #01: return type', () => {
		expect(Array.isArray(organizeChristmasDinner([]))).toBe(true);
	});

	test('Test #02: organizeChristmasDinner with standard dishes', () => {
		const dishes = [
			["christmas turkey", "turkey", "sauce", "herbs"],
			["cake", "flour", "sugar", "egg"],
			["hot chocolate", "chocolate", "milk", "sugar"],
			["pizza", "sauce", "tomato", "cheese", "ham"]
		];
		const expected = [
			["sauce", "christmas turkey", "pizza"],
			["sugar", "cake", "hot chocolate"]
		];
		expect(organizeChristmasDinner(dishes)).toEqual(expected);
	});

	test('Test #03: organizeChristmasDinner with fruit and desserts', () => {
		const dishes = [
			["fruit salad", "apple", "banana", "orange"],
			["berry smoothie", "blueberry", "banana", "milk"],
			["apple pie", "apple", "sugar", "flour"]
		];
		const expected = [
			["apple", "apple pie", "fruit salad"],
			["banana", "berry smoothie", "fruit salad"]
		];
		expect(organizeChristmasDinner(dishes)).toEqual(expected);
	});

	test('Test #04: organizeChristmasDinner with varied dishes', () => {
		const dishes = [
			["gingerbread", "flour", "ginger", "sugar"],
			["glazed ham", "ham", "honey", "sugar", "vinegar"],
			["roast chicken", "chicken", "rosemary", "thyme", "garlic"],
			["vegetable soup", "carrot", "potato", "onion", "garlic"],
			["fruit punch", "apple juice", "orange juice", "sugar"]
		];
		const expected = [
			["garlic", "roast chicken", "vegetable soup"],
			["sugar", "fruit punch", "gingerbread", "glazed ham"]
		];
		expect(organizeChristmasDinner(dishes)).toEqual(expected);
	});

	test('Test #05: organizeChristmasDinner with holiday favorites', () => {
		const dishes = [
			["pumpkin pie", "pumpkin", "cinnamon", "sugar", "flour"],
			["mashed potatoes", "potatoes", "butter", "milk"],
			["cinnamon rolls", "flour", "cinnamon", "butter", "sugar"],
			["turkey stuffing", "bread crumbs", "celery", "onion", "butter"]
		];
		const expected = [
			["butter", "cinnamon rolls", "mashed potatoes", "turkey stuffing"],
			["cinnamon", "cinnamon rolls", "pumpkin pie"],
			["flour", "cinnamon rolls", "pumpkin pie"],
			["sugar", "cinnamon rolls", "pumpkin pie"]
		];
		expect(organizeChristmasDinner(dishes)).toEqual(expected);
	});

	test('Test #06: organizeChristmasDinner with Italian-inspired dishes', () => {
		const dishes = [
			["chicken alfredo", "chicken", "pasta", "parmesan"],
			["parmesan chicken", "chicken", "parmesan", "bread crumbs"],
			["pasta salad", "pasta", "olive oil", "tomato"],
			["tomato soup", "tomato", "basil", "cream"]
		];
		const expected = [
			["chicken", "chicken alfredo", "parmesan chicken"],
			["parmesan", "chicken alfredo", "parmesan chicken"],
			["pasta", "chicken alfredo", "pasta salad"],
			["tomato", "pasta salad", "tomato soup"]
		];
		expect(organizeChristmasDinner(dishes)).toEqual(expected);
	});

	test('Test #07: organizeChristmasDinner with no common ingredients', () => {
		const dishes = [
			["snowflake cookies", "flour", "sugar", "vanilla"],
			["winter stew", "beef", "carrots", "potatoes"],
			["holiday punch", "cranberry juice", "orange juice", "sparkling water"],
			["festive salad", "lettuce", "cranberries", "walnuts"]
		];
		expect(organizeChristmasDinner(dishes)).toEqual([]);
	});
});
