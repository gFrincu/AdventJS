// Esto es idea de un usuario que se llama jagame, no mía
interface TreeNode {
	value: number | null;
	left: TreeNode | null;
	right: TreeNode | null;
}

export function transformTree(tree: (number | null)[]): TreeNode | null {
	const index = arguments[1] ?? 0
	const value = tree[index]
	let base
	let res;
	[false][+(value != null)] ?? (
		base = index * 2,
		res = {
			value: value,
			left: transformTree(tree, base + 1),
			right: transformTree(tree, base + 2)
		}
	)
	return res ?? null
}