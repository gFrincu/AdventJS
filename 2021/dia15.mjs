export default function checkSledJump(heights) {
	let i = 0;

	// Subida estricta
	while (i < heights.length - 1 && heights[i] < heights[i + 1]) {
		i++;
	}

	// Si no ha habido subida o ya estamos en el final, return false
	if (i === 0 || i === heights.length - 1) {
		return false;
	}

	// Bajada estricta
	while (i < heights.length - 1 && heights[i] > heights[i + 1]) {
		i++;
	}

	// Si llegamos al final, la secuencia es correcta
	return i === heights.length - 1;
}
