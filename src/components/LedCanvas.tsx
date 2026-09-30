"use client";

import { useEffect, useRef, useState, useSyncExternalStore } from "react";
import { ArrowUpRight, MousePointer2, Pause, Play, Sparkles, Waves, Orbit } from "lucide-react";
import { sampleLed, type LedPattern } from "./led-patterns";

const patterns = [
    { id: "aurora", label: "Aurora", icon: Waves },
    { id: "spectrum", label: "Spectrum", icon: Sparkles },
    { id: "orbit", label: "Orbit", icon: Orbit },
] as const;

function subscribeToMotion(callback: () => void) {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    media.addEventListener("change", callback);
    return () => media.removeEventListener("change", callback);
}

export default function LedCanvas() {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const elapsedRef = useRef(0);
    const [pattern, setPattern] = useState<LedPattern>("aurora");
    const [playbackOverride, setPlaybackOverride] = useState<boolean | null>(null);
    const reducedMotion = useSyncExternalStore(
        subscribeToMotion,
        () => window.matchMedia("(prefers-reduced-motion: reduce)").matches,
        () => true,
    );
    const playing = playbackOverride ?? !reducedMotion;

    useEffect(() => {
        const canvas = canvasRef.current;
        const context = canvas?.getContext("2d", { alpha: false });
        if (!canvas || !context) return;
        let width = 0;
        let height = 0;
        let columns = 0;
        let rows = 0;
        let frame = 0;
        let previousTime = 0;
        let inView = false;
        let touchTimeout: ReturnType<typeof setTimeout> | undefined;
        let pointer = { x: 0.5, y: 0.5, strength: 0 };

        function draw() {
            if (!context || !canvas || !width || !height) return;
            context.fillStyle = "#050a15";
            context.fillRect(0, 0, width, height);
            const stepX = width / columns;
            const stepY = height / rows;
            const radius = Math.min(stepX, stepY) * 0.32;
            for (let row = 0; row < rows; row++) {
                for (let column = 0; column < columns; column++) {
                    const [r, g, b] = sampleLed(
                        column / (columns - 1), row / (rows - 1), elapsedRef.current, pattern, pointer,
                    );
                    context.fillStyle = `rgb(${r},${g},${b})`;
                    context.beginPath();
                    context.arc((column + 0.5) * stepX, (row + 0.5) * stepY, radius, 0, Math.PI * 2);
                    context.fill();
                }
            }
            canvas.dataset.ready = "true";
        }

        function animate(timestamp: number) {
            frame = 0;
            if (!playing || !inView || document.hidden) return;
            if (timestamp - previousTime >= 1000 / 30) {
                if (previousTime) elapsedRef.current += Math.min((timestamp - previousTime) / 1000, 0.08);
                previousTime = timestamp;
                draw();
            }
            frame = requestAnimationFrame(animate);
        }

        function syncPlayback() {
            cancelAnimationFrame(frame);
            frame = 0;
            previousTime = 0;
            if (playing && inView && !document.hidden) frame = requestAnimationFrame(animate);
        }

        function resize() {
            if (!canvas || !context) return;
            const bounds = canvas.getBoundingClientRect();
            width = bounds.width;
            height = bounds.height;
            const density = Math.min(window.devicePixelRatio || 1, 2);
            canvas.width = Math.round(width * density);
            canvas.height = Math.round(height * density);
            context.setTransform(density, 0, 0, density, 0, 0);
            columns = Math.max(30, Math.min(100, Math.round(width / 6.5)));
            rows = Math.max(20, Math.round(columns * height / Math.max(width, 1)));
            draw();
        }

        function illuminate(event: PointerEvent) {
            if (!canvas || (event.type === "pointermove" && event.pointerType === "touch")) return;
            const bounds = canvas.getBoundingClientRect();
            pointer = {
                x: Math.max(0, Math.min(1, (event.clientX - bounds.left) / Math.max(bounds.width, 1))),
                y: Math.max(0, Math.min(1, (event.clientY - bounds.top) / Math.max(bounds.height, 1))),
                strength: 1,
            };
            if (event.pointerType === "touch") {
                clearTimeout(touchTimeout);
                // Touch browsers emit pointerleave on release. Keep the light visible
                // briefly so even a fast tap receives feedback without blocking scroll.
                touchTimeout = setTimeout(() => {
                    pointer.strength = 0;
                    if (!playing || reducedMotion) draw();
                }, 900);
            }
            if (!playing || reducedMotion || event.type === "pointerdown") draw();
        }

        function clearPointer(event: PointerEvent) {
            if (event.type === "pointerleave" && event.pointerType === "touch") return;
            clearTimeout(touchTimeout);
            pointer.strength = 0;
            if (!playing || reducedMotion) draw();
        }

        const resizeObserver = new ResizeObserver(resize);
        const intersectionObserver = new IntersectionObserver(([entry]) => {
            inView = entry.isIntersecting;
            syncPlayback();
        });
        resizeObserver.observe(canvas);
        intersectionObserver.observe(canvas);
        document.addEventListener("visibilitychange", syncPlayback);
        canvas.addEventListener("pointermove", illuminate);
        canvas.addEventListener("pointerdown", illuminate);
        canvas.addEventListener("pointerleave", clearPointer);
        canvas.addEventListener("pointercancel", clearPointer);
        resize();

        return () => {
            cancelAnimationFrame(frame);
            clearTimeout(touchTimeout);
            resizeObserver.disconnect();
            intersectionObserver.disconnect();
            document.removeEventListener("visibilitychange", syncPlayback);
            canvas.removeEventListener("pointermove", illuminate);
            canvas.removeEventListener("pointerdown", illuminate);
            canvas.removeEventListener("pointerleave", clearPointer);
            canvas.removeEventListener("pointercancel", clearPointer);
        };
    }, [pattern, playing, reducedMotion]);

    return (
        <div className="led-preview">
            <div className="led-preview-heading">
                <span><span className="led-status-dot" /> THE LIGHT LAB</span>
                <span className="led-preview-label">Interactive display preview <ArrowUpRight size={13} aria-hidden="true" /></span>
            </div>
            <div className="led-wall">
                <div className="led-wall-screen">
                    <div className="led-static-art" aria-hidden="true" />
                    <canvas
                        ref={canvasRef}
                        className="led-canvas"
                        role="img"
                        aria-label={`${patterns.find((item) => item.id === pattern)?.label} pattern on an LED display. Move your pointer or tap to illuminate pixels.`}
                        aria-describedby="led-interaction-hint"
                    >A luminous LED wall with cyan and coral patterns.</canvas>
                    <div className="led-screen-caption" aria-hidden="true">
                        <span>SMALL PIXELS.</span>
                        <span>Infinite impact.</span>
                    </div>
                    <div className="led-screen-corner" aria-hidden="true">MAS / LED</div>
                </div>
                <div className="led-wall-bezel" aria-hidden="true">
                    <span>MAS LED</span><span className="led-bezel-light" />
                </div>
            </div>
            <div className="led-console">
                <div className="led-pattern-buttons" role="group" aria-label="Display pattern">
                    {patterns.map(({ id, label, icon: Icon }) => (
                        <button key={id} type="button" className="led-pattern-button"
                            aria-pressed={pattern === id} onClick={() => setPattern(id)}>
                            <Icon size={15} aria-hidden="true" />{label}
                        </button>
                    ))}
                </div>
                <button className="led-playback-button" type="button"
                    aria-label={playing ? "Pause animation" : "Play animation"}
                    onClick={() => setPlaybackOverride(!playing)}>
                    {playing ? <Pause size={15} aria-hidden="true" /> : <Play size={15} aria-hidden="true" />}
                </button>
            </div>
            <p className="led-interaction-hint" id="led-interaction-hint">
                <MousePointer2 size={12} aria-hidden="true" />
                <span className="led-hint-desktop">Move your cursor. Make a little light.</span>
                <span className="led-hint-touch">Tap the display. Make a little light.</span>
            </p>
        </div>
    );
}
