// No controlo mucho como iterar sobre objetos y buscar lo que necesito
// Me he ayudado de esta web y según lo que explicaban he hecho
// https://dev.to/alisabaj/searching-through-a-nested-object-using-recursion-regular-expressions-and-sets-bm7
export default function contains(store, product) {
    let found = false;

    Object.keys(store).forEach(key => {
        if (typeof store[key] === 'object') {
            if (contains(store[key], product)) {
                found = true;
            }
        } else if (store[key] === product) {
            found = true;
        }
    });

    return found;
}

const almacen = {
	'estanteria1': {
		'cajon1': {
			'producto1': 'coca-cola',
			'producto2': 'fanta',
			'producto3': 'sprite'
		}
	},
	'estanteria2': {
		'cajon1': 'vacio',
		'cajon2': {
			'producto1': 'pantalones',
			'producto2': 'camiseta' // <- ¡Está aquí!
		}
	}
}

console.log(contains(almacen, 'camiseta'))

const otroAlmacen = {
	'baul': {
		'fondo': {
			'objeto': 'cd-rom',
			'otro-objeto': 'disquette',
			'otra-cosa': 'mando'
		}
	}
}

console.log(contains(otroAlmacen, 'gameboy')) // false
