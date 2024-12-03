# AdventJS

En este repo intentaré hacer los retos del [AdventJS](https://adventjs.dev/es) organizado por [MiduDev](https://midu.dev/). ¡A ver qué tal se me da!

El lenguaje que aprendí primero es C, así que hay muchas cosas de Javascript que me cuestan un poco, y soy de las que se complica la vida utilizando fors innecesarios cuando hay otro tipo de métodos más sencillos. A lo mejor dejo varias soluciones para intentar reducir la complejidad de lo que he hecho. En caso de hacerlo, la solución que mostraré en la tabla será la que conseguí en primer lugar, las demás estarán en la carpeta

Empiezo a intentar este reto en diciembre de 2023, y espero poder acordarme y tener el tiempo si se hace en años siguientes. También me gustaría hacer el de los años anteriores.

La idea es hacerlos en typescript. Así que para ejecutarlos hay que clonar el repo:  

```shell
git clone https://github.com/gFrincu/AdventJS
```

y hacer el npm install

```shell
npm install
````

Después en una consola hay que escribir `tsc` para hacer el transpilado. Se nos generará una carpeta js con el código en javascript de todos los años.

Y para ejecutar cualquiera de los programas hay que, estando en la raíz del proyecto,  escribir en la consola `node js/año/diax.js` substituyendo la x por el número de día que sea.

```shell
tsc
node js/2023/dia1.js
```

En la versión de 2021 no se podía hacer con typescript así que para ejecutarlos hay que hacer:

```shell
node 2021/dia1.mjs
```

Mis commits probablemente serán un poco caóticos al menos en 2023, espero que con el pasar de los años (si lo sigo haciendo) tenga algo más de sentido. Pido disculpas por adelantado.

He visto en algunos repos que hacen el archivo de test con los tests públicos que hay en la web del AdventJS con Jest y me ha parecido una idea chula. Lo único malo de esto es que Midudev tiene algunos tests secretos que nosotros no conocemos, pero bueno, al menos los que sí también ayudan como guía. Así que intentaré introducirlos también. El advent de 2021 no te muestra los tests, así que de ese no pondré ninguno.

Para ejecutar un test hay que poner en consola

```shell
npx jest año/diaX.test.ts
```

Recuerdo que probablemente mi solución no sea la más óptima, lo hago para mejorar mi lógica de programación y porque me parece una iniciativa chula. También porque me gusta la navidad jajaja. Si tenéis alguna duda o comentario podéis escribirme en [Twitter](https://twitter.com/georgiana_fh) (para mí siempre será Twitter) o [mastodon](https://mastodon.cat/@georgiana_fh)

¡Feliz código, feliz adviento y feliz navidad!

## 2024

| Día | Dificultad | Solución |
| -- | -- | -- |
| [Día 1. ¡Primer regalo repetido!](2024/dia1.md) | Fácil | [Solución del día 1](2024/dia1.ts) |
| [Día 2. Enmarcando nombres](2024/dia2.md) | Fácil | [Solución del día 2](2024/dia2.ts) |

## Lista de años realizados

- [2021](./2021.md)
- [2022](./2022.md)
- [2023](./2023.md)
- [2024](./2024.md)
