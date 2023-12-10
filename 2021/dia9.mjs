// La idea es que cada array u objeto tiene una propiedad o una función asociada. Paso por él y le digo que dependiendo de lo que sea haga una cosa u otra
// Después lo añado a un objeto
export default function groupBy(collection, it) {
	const grouped = {};

	collection.forEach(element => {
		const key = typeof it === 'function' ? it(element) : element[it];

		if (!grouped[key]) {
			grouped[key] = [];
		}

		grouped[key].push(element);
	});

	return grouped;
}

console.log(groupBy([6.1, 4.2, 6.3], Math.floor));
console.log(groupBy(['one', 'two', 'three'], 'length'));
console.log(groupBy([{ age: 23 }, { age: 24 }], 'age'));
console.log(groupBy([1397639141184, 1363223700000], timestamp => new Date(timestamp).getFullYear()));
console.log(groupBy([
	{ title: 'JavaScript: The Good Parts', rating: 8 },
	{ title: 'Aprendiendo Git', rating: 10 },
	{ title: 'Clean Code', rating: 9 },
], 'rating'));
