import { compile } from "./dia22";

test('Test #01', () => {
	expect(typeof compile('<<<<<<+<<<<<+%')).toBe('number');
});

test('Test #02', () => {
	const expected = 3
	const received = compile('++*-')
	expect(received).toEqual(expected);
});

test('Test #03', () => {
	const expected = 3
	const received = compile('++¿+?')
	expect(received).toEqual(expected);
});

test('Test #04', () => {
	const expected = 0
	const received = compile('-+¿+?')
	expect(received).toEqual(expected);
});

test('Test #05', () => {
	const expected = 3
	const received = compile('++*¿-?')
	expect(received).toEqual(expected);
});

test('Test #06', () => {
	const expected = 6
	const received = compile('++%++<')
	expect(received).toEqual(expected);
});

test('Test #07', () => {
	const expected = 16
	const received = compile('++%++<++¿*?')
	expect(received).toEqual(expected);
});

test('Test #08', () => {
	const expected = 5
	const received = compile('++¿+?¿+?¿+?')
	expect(received).toEqual(expected);
});

test('Test #09', () => {
	const expected = -2
	const received = compile('--¿+++?')
	expect(received).toEqual(expected);
});

test('Test #10', () => {
	const expected = -1
	const received = compile('--¿+++?+++¿--?')
	expect(received).toEqual(expected);
});

test('Test #11', () => {
	const expected = 7
	const received = compile('<%+¿++%++<?')
	expect(received).toEqual(expected);
});

test('Test #12', () => {
	const expected = 2
	const received = compile('<<<<<<+<<<<<+%')
	expect(received).toEqual(expected);
});

