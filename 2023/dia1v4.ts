// Es lo mismo que la v3, pero con el return sin ternario para aumentar puntuación
export function findFirstRepeated(gifts: number[]): number {
    const repeated = gifts.filter((gift, i) => gifts.indexOf(gift) !== i);
    return [repeated[0], -1][+(repeated.length === 0)];
}
const giftIds = [2, 1, 3, 5, 3, 2]
const firstRepeatedId = findFirstRepeated(giftIds)
console.log(firstRepeatedId)
const giftIds2 = [1, 2, 3, 4]
const firstRepeatedId2 = findFirstRepeated(giftIds2)
console.log(firstRepeatedId2)
const giftIds3 = [5, 1, 5, 1]
const firstRepeatedId3 = findFirstRepeated(giftIds3)
console.log(firstRepeatedId3)
