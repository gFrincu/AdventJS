export default function createXmasTree(height) {
	let i = 0, finalTree = '', blankLength, blankSpace = '_';
	if (height > 100) {
		return finalTree;
	}
	blankLength = Math.floor((height * 2 - 1) / 2)
	let branch = '*';
	let trunk = blankSpace.repeat(blankLength) + '#' + blankSpace.repeat(blankLength)
	while (i < height) {
		if (blankLength==0){
			finalTree += branch +'\n'
		}
		else{
		finalTree += blankSpace.repeat(blankLength) + branch + blankSpace.repeat(blankLength) + '\n'
		}
branch = branch.concat('**')
		i++;
		blankLength--;
	}
	return finalTree + trunk + '\n'+trunk
}
console.log(createXmasTree(5));
