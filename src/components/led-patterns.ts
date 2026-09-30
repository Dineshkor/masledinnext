export type LedPattern = "aurora" | "spectrum" | "orbit";
export type LedPointer = { x: number; y: number; strength: number };
export type LedColor = [number, number, number];

/** Sample one diode in normalized screen coordinates. */
export function sampleLed(
    u: number, v: number, time: number, pattern: LedPattern, pointer: LedPointer | null,
): LedColor {
    const x = u * 2 - 1;
    const y = v * 2 - 1;
    let intensity: number;
    let blend: number;

    if (pattern === "aurora") {
        const ribbon = Math.sin(x * 2.8 + time * 0.28) * 0.38
            + Math.sin(x * 5 - time * 0.4) * 0.12;
        const distance = y - ribbon;
        const envelope = Math.exp(-distance * distance * 5.5);
        const threads = Math.pow(Math.sin(distance * 18 + x * 3 - time * 0.5) * 0.5 + 0.5, 3);
        intensity = envelope * (0.14 + threads * 0.86);
        blend = Math.sin(x * 2 + y * 1.8 + time * 0.12) * 0.5 + 0.5;
    } else if (pattern === "spectrum") {
        const wave = Math.sin(x * 3 + y * 3.4 - time * 0.7);
        intensity = 0.12 + Math.pow(wave * 0.5 + 0.5, 2) * 0.88;
        blend = Math.sin(x * 2 - y * 2 + time * 0.25) * 0.5 + 0.5;
    } else {
        const radius = Math.hypot(x * 0.9, y * 1.15);
        const ring = Math.sin(radius * 16 - time * 0.8) * 0.5 + 0.5;
        intensity = Math.pow(ring, 4) * Math.exp(-radius * 0.6);
        blend = Math.sin(Math.atan2(y, x) + time * 0.18) * 0.5 + 0.5;
    }

    const glow = pointer
        ? Math.exp(-((u - pointer.x) ** 2 + (v - pointer.y) ** 2) * 75) * pointer.strength
        : 0;
    const color: LedColor = [24 + blend * 231, 222 - blend * 118, 245 - blend * 111];
    return color.map((channel) => Math.round(Math.min(255, Math.max(0,
        10 + channel * intensity + glow * (255 - channel * intensity) * 0.85,
    )))) as LedColor;
}
