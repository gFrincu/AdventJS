// https://www.geeksforgeeks.org/maximum-sum-such-that-no-two-elements-are-adjacent/
// Tomando el ejemplo maxGifts([5, 1, 1, 5]):
// Inicio: incl = 0, excl = 0
// Primera Casa (5): excl_new = max(0, 0) = 0, incl = 0 + 5 = 5, excl = 0
// Segunda Casa (1): excl_new = max(5, 0) = 5, incl = 0 + 1 = 1, excl = 5
//  Tercera Casa (1): excl_new = max(1, 5) = 5, incl = 5 + 1 = 6, excl = 5
//  Cuarta Casa (5): excl_new = max(6, 5) = 6, incl = 5 + 5 = 10, excl = 6
export function maxGifts(houses: number[]): number {
	let incl = 0;
	let excl = 0;
	let maxExclIncl;

	for (let house of houses) {
		maxExclIncl = [excl, incl][+(incl > excl)];

		incl = excl + house;
		excl = maxExclIncl;
	}

	return [excl, incl][+(incl > excl)];
}