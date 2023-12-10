export default function getMinJump(obstacles) {
	obstacles = obstacles.sort((a, b) => a - b);
	let i=0, variable = 1;
  
	// Itera mientras sea menor o igual a la longitud máxima de la ruta (suponiendo 10 en este caso aunque tampoco lo tengo claro)
	while (i  <= 10) {
	  // Verifica si el próximo paso está bloqueado por un obstáculo
	  if (obstacles.includes(i + variable)) {
		// Si está bloqueado, aumenta la variable de salto y reinicia el contador
		variable++;
		i = 0;
	  } else {
		// Si no está bloqueado, avanza al siguiente paso
		i += variable;
	  }
	}
  
	return variable;
  }
  
  console.log(getMinJump([2, 4, 6, 8, 10])); // -> 7
  console.log(getMinJump([5, 3, 6, 7, 9])); // -> 4
  console.log(getMinJump([1, 2, 3, 5])); // -> 4
  console.log(getMinJump([3, 7, 5])); // -> 2
  console.log(getMinJump([9, 5, 1])); // -> 2
