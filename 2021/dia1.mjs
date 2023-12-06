export default function contarOvejas(ovejas) {
    let ovejasFiltradas = [];

    for (let oveja of ovejas) {
        if (oveja.color.toLowerCase() === 'rojo' && oveja.name.toLowerCase().includes('n') && oveja.name.toLowerCase().includes('a')) {
            ovejasFiltradas.push(oveja);
        }
    }

    return ovejasFiltradas;
}
const ovejas = [
	{ name: 'Noa', color: 'azul' },
	{ name: 'Euge', color: 'rojo' },
	{ name: 'Navidad', color: 'rojo' },
	{ name: 'Ki Na Ma', color: 'rojo' },
	{ name: 'AAAAAaaaaa', color: 'rojo' },
	{ name: 'Nnnnnnnn', color: 'rojo' }
];

const ovejasFiltradas = contarOvejas(ovejas);

console.log(ovejasFiltradas);
