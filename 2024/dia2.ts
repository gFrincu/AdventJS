export function createFrame(names: string[]): string {
	let maxLength = 0;
	for (let name of names) {
		if (name.length > maxLength) {
			maxLength = name.length;
		}
	}
let result=`${"*".repeat(maxLength+4)}\n`;
for (let name of names){
result+=`* ${name} ${" ".repeat(maxLength- name.length)}*\n`
}
result += "*".repeat(maxLength+4);
	return result;
}

console.log(createFrame(['midu', 'madeval', 'educalvolpz']));
console.log(createFrame(['midu']));
