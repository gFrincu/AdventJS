import { travelDistance } from "./dia25";

test("Test #01 - Return type is a number", () => {
    const result = travelDistance("S");
    expect(typeof result).toBe("number");
});

test("Test #02 - travelDistance(`.....1....\n..S.......\n..........\n....3.....\n......2...`)", () => {
    const result = travelDistance(
        `.....1....
..S.......
..........
....3.....
......2...`
    );
    expect(result).toBe(12);
});

test("Test #03 - travelDistance(`..S.1...`)", () => {
    const result = travelDistance(`..S.1...`);
    expect(result).toBe(2);
});

test("Test #04 - travelDistance(`.....2....\n..S.......\n..........\n....1.....\n......3...`)", () => {
    const result = travelDistance(
        `.....2....
..S.......
..........
....1.....
......3...`
    );
    expect(result).toBe(13);
});

test("Test #05 - travelDistance(`3....1....\n..S.......\n.........2\n..........\n......4...`)", () => {
    const result = travelDistance(
        `3....1....
..S.......
.........2
..........
......4...`
    );
    expect(result).toBe(31);
});

test("Test #06 - travelDistance(`S1`)", () => {
    const result = travelDistance(`S1`);
    expect(result).toBe(1);
});

test("Test #07 - travelDistance(`1....S`)", () => {
    const result = travelDistance(`1....S`);
    expect(result).toBe(5);
});

test("Test #08 - travelDistance(`S12....3`)", () => {
    const result = travelDistance(`S12....3`);
    expect(result).toBe(7);
});
