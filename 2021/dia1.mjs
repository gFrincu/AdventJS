//Solo paso por el array de objetos completo y le digo que me devuelva en un array de objetos nuevo las que tengan la palabra rojo, y contengan la letra n y la letra a.
// Al buscar convierto lo que busco en el array a minúsculas para poder encontrar todas las posibilidades
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
