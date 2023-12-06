export default function listGifts(letter) {
    let letterArray = letter.trim().split(/\s+/);
    let gifts = {};

    for (let gift of letterArray) {
        let giftWithoutSpaces = gift.trim();

        if (giftWithoutSpaces.startsWith('_')) {
            continue;
        }

        if (gifts.hasOwnProperty(giftWithoutSpaces)) {
            gifts[giftWithoutSpaces]++;
        } else {
            gifts[giftWithoutSpaces] = 1;
        }
    }

    return gifts;
}

const carta = 'bici coche balón _playstation bici coche peluche';
const regalos = listGifts(carta);
console.log(regalos);
