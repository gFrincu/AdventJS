// Esta es una idea de jamerrq, cogida de aquí. Yo lo he intentado, pero nunca he pasado de 50 intentando minimizar mi mierda. https://github.com/jamerrq/advent-js-2023/blob/master/src/challenges/15.ts
export function autonomousDrive(store: string[], movements: string[]): string[] {
	let row = store.findIndex(_ => _.includes('!'))
	let col = store[row].indexOf('!')
	store[row] = store[row].replace('!', '.')
	for (const move of movements) {
		col += +(store[row][col + 1] === '.') * +(move === 'R')
		col -= +(store[row][col - 1] === '.') * +(move === 'L')
		row -= +(store.at(row - 1)?.at(col) === '.') * +(move === 'U')
		row += +(store.at(row + 1)?.at(col) === '.') * +(move === 'D')
	}
	const str = store[row]
	store[row] = str.substring(0, col) + '!' + str.substring(col + 1)
	return store
}

const store = ['..!....', '...*.*.']
const movements = ['R', 'R', 'D', 'L']
const result = autonomousDrive(store, movements)
console.log(result)
