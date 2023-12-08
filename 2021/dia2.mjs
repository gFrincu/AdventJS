// Divido la frase de la carta por espacios
// Luego paso por toda la carta dividida en regalos
// Si la palabra empieza por _  le digo que continúe y que no haga nada
// Si encuentro un regalo en la carta, le pongo un 1 si es la primera vez que lo veo, o le sumo 1 si ya ha salido antes.
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
