// Tienes un array que representa un árbol binario. Cada elemento en el array es un nodo del árbol, y la posición de cada elemento en el array determina su relación con otros nodos (es decir, quiénes son sus nodos hijo). El objetivo es convertir esta representación en array a una representación en objeto, donde cada nodo es un objeto con propiedades `value`, `left` (hijo izquierdo), y `right` (hijo derecho).
// Para un nodo en el índice `i` del array: El hijo izquierdo de este nodo está en el índice `2*i + 1` (si existe). El hijo derecho de este nodo está en el índice `2*i + 2` (si existe).
interface TreeNode {
	value: number | null;
	left: TreeNode | null;
	right: TreeNode | null;
}

export function transformTree(tree: (number | null)[]): TreeNode | null {
	function createNode(index: number): TreeNode | null {
		if (index < tree.length && tree[index] !== null) {
			return {
				value: tree[index],
				left: createNode(2 * index + 1),
				right: createNode(2 * index + 2)
			};
		}
		return null;
	}

	const rootNode = createNode(0);
	return rootNode;
}
