import { createFrame } from "./dia2";

test("Test #1 - Return type is a string", () => {
    const result = createFrame(["midu"]);
    expect(typeof result).toBe("string");
});

test("Test #2 - createFrame([\"midu\"])", () => {
    const result = createFrame(["midu"]);
    expect(result).toBe(
        `********
* midu *
********`
    );
});

test("Test #3 - createFrame([\"midu\", \"madeval\", \"educalvolpz\"])", () => {
    const result = createFrame(["midu", "madeval", "educalvolpz"]);
    expect(result).toBe(
        `***************
* midu        *
* madeval     *
* educalvolpz *
***************`
    );
});

test("Test #4 - createFrame([\"a\", \"bb\", \"ccc\"])", () => {
    const result = createFrame(["a", "bb", "ccc"]);
    expect(result).toBe(
        `*******
* a   *
* bb  *
* ccc *
*******`
    );
});

test("Test #5 - createFrame([\"a\", \"bb\", \"ccc\", \"dddd\"])", () => {
    const result = createFrame(["a", "bb", "ccc", "dddd"]);
    expect(result).toBe(
        `********
* a    *
* bb   *
* ccc  *
* dddd *
********`
    );
});

test("Test #6 - createFrame([\"midu\", \"madeval\", \"educalvolpz\", \"midu\"])", () => {
    const result = createFrame(["midu", "madeval", "educalvolpz", "midu"]);
    expect(result).toBe(
        `***************
* midu        *
* madeval     *
* educalvolpz *
* midu        *
***************`
    );
});
