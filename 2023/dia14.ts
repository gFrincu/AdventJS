// Tomando el ejemplo maxGifts([5, 1, 1, 5]):
//  dp[0] = 5 (solo la primera casa)
//  dp[1] = max(5, 1) = 5 (el mayor entre la primera y la segunda casa)
//  dp[2] = max(1 + 5, 5) = 6 (la suma de la tercera casa y dp[0], o el valor de dp[1])
// dp[3] = max(5 + 5, 6) = 10 (la suma de la cuarta casa y dp[1], o el valor de dp[2])
export function maxGifts(houses: number[]): number {
	if (houses.length === 0) {
		return 0;
	}

	if (houses.length === 1) {
		return houses[0];
	}

	let dp = new Array(houses.length);
	dp[0] = houses[0];
	dp[1] = Math.max(houses[0], houses[1]);

	for (let i = 2; i < houses.length; i++) {
		dp[i] = Math.max(houses[i] + dp[i - 2], dp[i - 1]);
	}

	return dp[houses.length - 1];
}

console.log(maxGifts([5, 1, 1, 5]))
console.log(maxGifts([4, 1, 1, 4, 2, 1]))
