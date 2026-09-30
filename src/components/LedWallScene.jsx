"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

const vertexShader = `
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`;
const fragmentShader = `
  uniform float uTime;
  uniform float uMode;
  uniform float uIndex;
  varying vec2 vUv;
  void main() {
    vec2 uv = vUv;
    float t = uTime * .28 + uIndex * .65;
    float wave = sin(uv.x * 8.0 - t * 2.0 + sin(uv.y * 4.0 + t)) * .5 + .5;
    float curve = .5 + sin(uv.x * 5.4 + t) * .32;
    float beam = exp(-pow((uv.y - curve) * 5.5, 2.0));
    float second = exp(-pow((uv.y - (.5 + cos(uv.x * 6.0 - t) * .4)) * 12.0, 2.0));
    vec3 ink = vec3(.004, .035, .11);
    vec3 blue = vec3(.015, .23, 1.0);
    vec3 ice = vec3(.3, .9, 1.0);
    vec3 color = mix(ink, blue, wave * .65 + beam * .3);
    color = mix(color, ice, beam * wave * .92);
    color += second * .55 * vec3(.24, .6, 1.0);
    float orange = exp(-pow((uv.x - (.65 + sin(t) * .2)) * 4.0, 2.0));
    color = mix(color, vec3(1., .18, .035), orange * pow(1.0 - beam, 2.0) * .9);
    if (uMode > .5 && uMode < 1.5) {
      float ring = sin(length((uv - .5) * vec2(1., .6)) * 30.0 - uTime * 1.4);
      color = mix(ink, mix(blue, ice, uv.x), smoothstep(-.5, 1.0, ring));
    }
    if (uMode > 1.5) {
      float bars = smoothstep(.4, .43, fract(uv.x * 13.0 + sin(uv.y * 3.0 + t) * .1));
      color = mix(ink, vec3(.75, .94, 1.0), bars * beam);
    }
    vec2 pixelUv = uv * vec2(180., 38.);
    vec2 grid = fract(pixelUv);
    vec2 aa = fwidth(pixelUv);
    float pixel = smoothstep(.05 - aa.x, .05 + aa.x, grid.x) * (1.0 - smoothstep(.95 - aa.x, .95 + aa.x, grid.x));
    pixel *= smoothstep(.07 - aa.y, .07 + aa.y, grid.y) * (1.0 - smoothstep(.93 - aa.y, .93 + aa.y, grid.y));
    color *= .8 + pixel * .2;
    gl_FragColor = vec4(color, 1.0);
    #include <tonemapping_fragment>
    #include <colorspace_fragment>
  }
`;

function ribbonGeometry(width, height, radius) {
  const geometry = new THREE.PlaneGeometry(width, height, 100, 10);
  const positions = geometry.attributes.position;
  for (let i = 0; i < positions.count; i++) {
    const angle = positions.getX(i) / radius;
    positions.setXYZ(i, Math.sin(angle) * radius, positions.getY(i), (1 - Math.cos(angle)) * radius);
  }
  geometry.computeVertexNormals();
  return geometry;
}

export default function LedWallScene({ mode = 0, onReady }) {
  const hostRef = useRef(null);
  const modeRef = useRef(mode);
  const readyRef = useRef(onReady);
  useEffect(() => { modeRef.current = mode; }, [mode]);

  useEffect(() => {
    const host = hostRef.current;
    if (!host) return;
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const mobile = window.innerWidth < 700;
    let renderer;
    try {
      renderer = new THREE.WebGLRenderer({ antialias: !mobile, alpha: true, powerPreference: "low-power" });
    } catch { return; }
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, mobile ? 1.25 : 1.6));
    renderer.setClearColor(0x000000, 0);
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    host.appendChild(renderer.domElement);
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(37, 1, .1, 80);
    camera.position.set(0, .5, 11.5);
    const sculpture = new THREE.Group();
    sculpture.rotation.set(-.08, -.25, -.11);
    scene.add(sculpture);
    const resources = [];
    const remember = (resource) => { resources.push(resource); return resource; };
    const ribbons = [];
    const edgeMaterial = remember(new THREE.MeshBasicMaterial({ color: 0x80e2ff, transparent: true, opacity: .7 }));
    for (let i = 0; i < 3; i++) {
      const group = new THREE.Group();
      const width = 6.5 - i * .18;
      const height = 1.3;
      const radius = 3.4;
      const geometry = remember(ribbonGeometry(width, height, radius));
      const material = remember(new THREE.ShaderMaterial({ vertexShader, fragmentShader, side: THREE.DoubleSide, uniforms: { uTime: { value: 0 }, uIndex: { value: i }, uMode: { value: modeRef.current } } }));
      const screen = new THREE.Mesh(geometry, material);
      group.add(screen);
      const backing = new THREE.Mesh(geometry, remember(new THREE.MeshBasicMaterial({ color: 0x070e1a, side: THREE.BackSide })));
      backing.position.z = -.035;
      group.add(backing);
      for (const y of [-height / 2, height / 2]) {
        const points = Array.from({ length: 60 }, (_, j) => {
          const angle = ((j / 59 - .5) * width) / radius;
          return new THREE.Vector3(Math.sin(angle) * radius, y, (1 - Math.cos(angle)) * radius + .014);
        });
        const rail = new THREE.Mesh(remember(new THREE.TubeGeometry(new THREE.CatmullRomCurve3(points), 60, .014, 4, false)), edgeMaterial);
        group.add(rail);
      }
      // Cabinet divisions create physical structure underneath the luminous surface.
      const dividerMaterial = remember(new THREE.LineBasicMaterial({ color: 0x051023, transparent: true, opacity: .7 }));
      for (let j = 1; j < 6; j++) {
        const angle = ((j / 6 - .5) * width) / radius;
        const x = Math.sin(angle) * radius;
        const z = (1 - Math.cos(angle)) * radius + .022;
        const divider = new THREE.Line(remember(new THREE.BufferGeometry().setFromPoints([new THREE.Vector3(x, -height / 2, z), new THREE.Vector3(x, height / 2, z)])), dividerMaterial);
        group.add(divider);
      }
      const home = new THREE.Vector3((i - 1) * .27, (1 - i) * 1.58, i === 1 ? .35 : 0);
      group.position.copy(home);
      group.rotation.y = (i - 1) * .18;
      sculpture.add(group);
      ribbons.push({ group, material, home });
    }
    const orbitMaterial = remember(new THREE.LineBasicMaterial({ color: 0x375b84, transparent: true, opacity: .34 }));
    for (let i = 0; i < 2; i++) {
      const points = Array.from({ length: 150 }, (_, j) => {
        const angle = j / 149 * Math.PI * 2;
        return new THREE.Vector3(Math.cos(angle) * (4.1 + i * .28), Math.sin(angle) * (3.3 + i * .2), -.8);
      });
      const orbit = new THREE.Line(remember(new THREE.BufferGeometry().setFromPoints(points)), orbitMaterial);
      orbit.rotation.set(.4 + i * .2, .12, .28);
      sculpture.add(orbit);
    }
    const dustPositions = new Float32Array(90 * 3);
    for (let i = 0; i < 90; i++) {
      dustPositions[i * 3] = Math.sin(i * 71.3) * 6.5;
      dustPositions[i * 3 + 1] = Math.cos(i * 34.2) * 4.5;
      dustPositions[i * 3 + 2] = Math.sin(i * 92.7) * 3 - 2;
    }
    const dustGeometry = remember(new THREE.BufferGeometry());
    dustGeometry.setAttribute("position", new THREE.BufferAttribute(dustPositions, 3));
    const dust = new THREE.Points(dustGeometry, remember(new THREE.PointsMaterial({ color: 0x8bcfff, size: .019, transparent: true, opacity: .5 })));
    scene.add(dust);

    let frame, visible = true, lastFrame = 0, scroll = 0, needsRender = true, lastMode = -1;
    let pointerX = 0, pointerY = 0, firstFrame = true;
    const resize = () => {
      if (!host.clientWidth || !host.clientHeight) return;
      camera.aspect = host.clientWidth / host.clientHeight;
      camera.position.z = camera.aspect < 1 ? 13.5 : 11.5;
      camera.updateProjectionMatrix();
      renderer.setSize(host.clientWidth, host.clientHeight, false);
      needsRender = true;
    };
    const pointer = (event) => {
      const bounds = host.getBoundingClientRect();
      pointerX = (event.clientX - bounds.left) / bounds.width - .5;
      pointerY = (event.clientY - bounds.top) / bounds.height - .5;
    };
    const reset = () => { pointerX = 0; pointerY = 0; };
    const onScroll = () => {
      const parent = host.closest("section");
      if (parent) scroll = THREE.MathUtils.clamp(-parent.getBoundingClientRect().top / parent.offsetHeight, 0, 1);
    };
    const preferenceChange = () => { needsRender = true; };
    const resizeObserver = new ResizeObserver(resize);
    const intersection = new IntersectionObserver(([entry]) => { visible = entry.isIntersecting; });
    resizeObserver.observe(host);
    intersection.observe(host);
    host.addEventListener("pointermove", pointer);
    host.addEventListener("pointerleave", reset);
    window.addEventListener("scroll", onScroll, { passive: true });
    reducedMotion.addEventListener("change", preferenceChange);
    resize();
    const animate = (time) => {
      frame = requestAnimationFrame(animate);
      if (!visible || document.hidden || time - lastFrame < (mobile ? 33 : 16)) return;
      if (reducedMotion.matches && !needsRender && lastMode === modeRef.current) return;
      lastFrame = time;
      const seconds = reducedMotion.matches ? 5 : time / 1000;
      for (let i = 0; i < ribbons.length; i++) {
        const { group, material, home } = ribbons[i];
        material.uniforms.uTime.value = seconds;
        material.uniforms.uMode.value = modeRef.current;
        group.position.y = home.y + (reducedMotion.matches ? 0 : Math.sin(seconds * .45 + i) * .09) + (1 - i) * scroll * 1.5;
        group.rotation.y = (i - 1) * .18 + scroll * (i - 1) * .4;
        group.position.z = home.z + scroll * i * .35;
      }
      if (!reducedMotion.matches) {
        sculpture.rotation.y = THREE.MathUtils.lerp(sculpture.rotation.y, -.28 + pointerX * .45 + scroll * .7, .035);
        sculpture.rotation.x = THREE.MathUtils.lerp(sculpture.rotation.x, -.08 - pointerY * .15 + scroll * .15, .035);
        sculpture.position.y = Math.sin(seconds * .35) * .08;
        dust.rotation.y = seconds * .013;
      }
      renderer.render(scene, camera);
      needsRender = false;
      lastMode = modeRef.current;
      if (firstFrame) { firstFrame = false; readyRef.current?.(); }
    };
    frame = requestAnimationFrame(animate);
    return () => {
      cancelAnimationFrame(frame);
      resizeObserver.disconnect();
      intersection.disconnect();
      host.removeEventListener("pointermove", pointer);
      host.removeEventListener("pointerleave", reset);
      window.removeEventListener("scroll", onScroll);
      reducedMotion.removeEventListener("change", preferenceChange);
      resources.forEach(resource => resource.dispose());
      renderer.dispose();
      renderer.domElement.remove();
    };
  }, []);

  return <div className="light-sculpture-canvas" ref={hostRef} aria-hidden="true" />;
}
