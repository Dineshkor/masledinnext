import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";
import ts from "typescript";

const source = await readFile(new URL("../src/components/led-patterns.ts", import.meta.url), "utf8")
    .catch((error) => {
        if (error.code !== "ENOENT") throw error;
        return "export const sampleLed = undefined;";
    });
const { outputText } = ts.transpileModule(source, {
    compilerOptions: { module: ts.ModuleKind.ESNext, target: ts.ScriptTarget.ES2020 },
});
const { sampleLed } = await import(`data:text/javascript;base64,${Buffer.from(outputText).toString("base64")}`);

test("LED sampler is available", () => assert.equal(typeof sampleLed, "function"));

test("every pattern produces finite display-safe RGB values", () => {
    for (const mode of ["aurora", "spectrum", "orbit"]) {
        for (const time of [0, 12, 3600]) {
            for (let row = 0; row <= 8; row++) {
                for (let column = 0; column <= 12; column++) {
                    for (const pointer of [null, { x: 0.5, y: 0.5, strength: 1 }]) {
                        const color = sampleLed(column / 12, row / 8, time, mode, pointer);
                        assert.equal(color.length, 3);
                        for (const value of color) {
                            assert.ok(Number.isFinite(value) && value >= 0 && value <= 255);
                        }
                    }
                }
            }
        }
    }
});

test("pattern selection produces different artwork", () => {
    const samples = (mode) => Array.from({ length: 20 }, (_, i) => sampleLed(i / 20, 0.4, 2, mode, null));
    assert.notDeepEqual(samples("aurora"), samples("spectrum"));
    assert.notDeepEqual(samples("spectrum"), samples("orbit"));
});

test("pointer illumination is local and brighter near the pointer", () => {
    const pointer = { x: 0.5, y: 0.5, strength: 1 };
    const brightness = (color) => color.reduce((sum, value) => sum + value, 0);
    const change = (x, y) => brightness(sampleLed(x, y, 0, "aurora", pointer))
        - brightness(sampleLed(x, y, 0, "aurora", null));
    assert.ok(change(0.5, 0.5) > 30);
    assert.ok(change(0.5, 0.5) > change(0, 0) * 5);
});

test("a fixed time is deterministic, while advancing time animates the pattern", () => {
    for (const mode of ["aurora", "spectrum", "orbit"]) {
        const first = sampleLed(0.3, 0.4, 0, mode, null);
        assert.deepEqual(first, sampleLed(0.3, 0.4, 0, mode, null));
        assert.notDeepEqual(first, sampleLed(0.3, 0.4, 5, mode, null));
    }
});
