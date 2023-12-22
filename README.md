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

He visto en el repo de [Achaology](https://github.com/achalogy/advent-js-2023/) Que el ha pasado los tests que Midudev pone en los retos con jest y me ha parecido una idea chula. Lo único malo de esto es que Midudev tiene algunos tests secretos que nosotros no conocemos, pero bueno, al menos los que sí también ayudan como guía. Así que intentaré introducirlos también. El advent de 2021 no te muestra los tests, así que de ese no pondré ninguno.

Para ejecutar un test hay que poner en consola

```shell
npx jest año/diaX.test.ts
```

Recuerdo que probablemente mi solución no sea la más óptima, lo hago para mejorar mi lógica de programación y porque me parece una iniciativa chula. También porque me gusta la navidad jajaja. Si tenéis alguna duda o comentario podéis escribirme en [Twitter](https://twitter.com/georgiana_fh) (para mí siempre será Twitter) o [mastodon](https://mastodon.cat/@georgiana_fh)

¡Feliz código, feliz adviento y feliz navidad!

## 2023

| Día | Dificultad | Solución |
| -- | -- | -- |
| [Día 1. ¡Primer regalo repetido!](2023/dia1.md) | Fácil | [Solución del día 1 con for clásico](2023/dia1.ts) |
| [Día 2. Ponemos en marcha la fábrica](2023/dia2.md)  | Fácil | [Solución del día 2 con for clásico](2023/dia2.ts)  |
| [Día 3. El elfo travieso](2023/dia3.md)   | Fácil | [Solución del día 3](2023/dia3.ts)  |
| [Día 4. Dale la vuelta a los paréntesis](2023/dia4.md)   | Medio | [Solución del día 4](2023/dia4.ts)  |
| [Día 5. El CyberTruck de Santa](2023/dia5.md)   | Medio | [Solución del día 5](2023/dia5.ts)  |
| [Día 6. Los renos a prueba](2023/dia6.md)   | Fácil | [Solución del día 6 con whiles e ifs](2023/dia6.ts)  |
| [Día 7. Las cajas en 3D](2023/dia7.md)   | Fácil | [Solución del día 7](2023/dia7.ts)  |
| [Día 8. Ordenando el almacén](2023/dia8.md)  | Medio | [Solución del día 8 con whiles y escritura densa](2023/dia8.ts)  |
| [Día 9. Alterna las luces](2023/dia9.md)  | Fácil | [Solución del día 9 con dos fors](2023/dia9.ts)  |
| [Día 10. Crea tu propio árbol de navidad](2023/dia10.md)  | Fácil | [Solución del día 10](2023/dia10.ts)  |
| [Día 11. Los elfos estudiosos](2023/dia11.md)  | Medio |[Solución del día 11](2023/dia11.ts)  |
| [Día 12. ¿Es una copia válida?](2023/dia12.md)  | Medio |[Solución del día 12](2023/dia12.ts)  |
| [Día 13. Calculando el tiempo](2023/dia13.md)  | Fácil |[Solución del día 13](2023/dia13.ts)  |
| [Día 14. Evita la alarma](2023/dia14.md)  | Medio |[Solución del día 14](2023/dia14.ts)  |
| [Día 15. Robot autónomo](2023/dia15.md)  | Medio |[Solución del día 15](2023/dia15.ts)  |
| [Día 16. Despliegue en viernes](2023/dia16.md)  | Fácil |[Solución del día 16](2023/dia16.ts)  |
| [Día 17. Optimizando el alquiler](2023/dia17.md)  | Fácil |[Solución del día 17](2023/dia17.ts)  |
| [Día 18. El reloj digital](2023/dia18.md)  | Difícil |[Solución del día 18](2023/dia18.ts)  |
| [Día 19. Enfrenta el sabotaje](2023/dia19.md)  | Medio |[Solución del día 19](2023/dia19.ts)  |
| [Día 20. Distribuye el peso](2023/dia20.md)  | Difícil |[Solución del día 20](2023/dia20.ts)  |
| [Día 21. Mensaje binario](2023/dia21.md)  | Medio |[Solución del día 21](2023/dia21.ts)  |
| [Día 22. Lenguaje de programación](2023/dia22.md)  | Fácil |[Solución del día 22](2023/dia22.ts)  |
| Día 23 | -- | -- |
| Día 24 | -- | -- |
| Día 25 | -- | -- |

## Lista de años realizados

- [2021](./2021.md)
- [2022](./2022.md)
- [2023](./2023.md)
