"use client";

import { useEffect, useRef } from "react";

type Particle = {
  x: number;
  y: number;
  r: number;
  vx: number;
  vy: number;
  alpha: number;
};

type TrailPoint = {
  x: number;
  y: number;
  age: number;
};

type FishState = {
  x: number;
  y: number;
  tx: number;
  ty: number;
  angle: number;
};

export function QuantumAquarium() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const context = canvas.getContext("2d", { alpha: true });
    if (!context) return;
    const cnv = canvas;
    const ctx = context;

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const particles: Particle[] = [];
    const trail: TrailPoint[] = [];
    const fish: FishState = {
      x: window.innerWidth * 0.78,
      y: window.innerHeight * 0.58,
      tx: window.innerWidth * 0.78,
      ty: window.innerHeight * 0.58,
      angle: 0
    };

    let width = 0;
    let height = 0;
    let raf = 0;
    let last = performance.now();
    let hoverTarget: { x: number; y: number } | null = null;

    const particleCount = reducedMotion ? 16 : 42;

    function resize() {
      width = window.innerWidth;
      height = window.innerHeight;
      cnv.width = Math.floor(width * dpr);
      cnv.height = Math.floor(height * dpr);
      cnv.style.width = `${width}px`;
      cnv.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    }

    function seedParticles() {
      particles.length = 0;
      for (let i = 0; i < particleCount; i += 1) {
        particles.push({
          x: Math.random() * window.innerWidth,
          y: Math.random() * window.innerHeight,
          r: Math.random() * 1.8 + 0.6,
          vx: (Math.random() - 0.5) * 0.08,
          vy: -0.08 - Math.random() * 0.18,
          alpha: 0.16 + Math.random() * 0.28
        });
      }
    }

    function updateTarget() {
      if (hoverTarget) {
        fish.tx = hoverTarget.x;
        fish.ty = hoverTarget.y;
        return;
      }

      const scrollMax = Math.max(document.body.scrollHeight - window.innerHeight, 1);
      const progress = window.scrollY / scrollMax;
      fish.tx = width * (0.78 - progress * 0.22);
      fish.ty = height * (0.34 + Math.sin(progress * Math.PI) * 0.38);
    }

    function drawFish(time: number) {
      const dx = fish.tx - fish.x;
      const dy = fish.ty - fish.y;
      fish.x += dx * (reducedMotion ? 0.018 : 0.035);
      fish.y += dy * (reducedMotion ? 0.018 : 0.035);
      fish.angle = Math.atan2(dy, dx);

      if (!reducedMotion && trail.length < 28) {
        trail.push({ x: fish.x, y: fish.y, age: 0 });
      }

      for (let i = trail.length - 1; i >= 0; i -= 1) {
        const point = trail[i];
        point.age += 1;
        const alpha = Math.max(0, 0.22 - point.age * 0.009);
        if (alpha <= 0) {
          trail.splice(i, 1);
          continue;
        }
        ctx.beginPath();
        ctx.fillStyle = `rgba(96, 165, 250, ${alpha})`;
        ctx.arc(point.x, point.y, 2.2, 0, Math.PI * 2);
        ctx.fill();
      }

      const pulse = Math.sin(time * 0.003) * 2;
      ctx.save();
      ctx.translate(fish.x, fish.y);
      ctx.rotate(fish.angle);
      ctx.shadowColor = "rgba(96, 165, 250, 0.7)";
      ctx.shadowBlur = 18;

      const gradient = ctx.createLinearGradient(-18, 0, 22, 0);
      gradient.addColorStop(0, "rgba(216, 180, 254, 0.36)");
      gradient.addColorStop(0.52, "rgba(96, 165, 250, 0.74)");
      gradient.addColorStop(1, "rgba(245, 245, 245, 0.84)");

      ctx.beginPath();
      ctx.ellipse(0, 0, 18 + pulse, 7, 0, 0, Math.PI * 2);
      ctx.fillStyle = gradient;
      ctx.fill();

      ctx.beginPath();
      ctx.moveTo(-16, 0);
      ctx.lineTo(-31, -9);
      ctx.lineTo(-27, 0);
      ctx.lineTo(-31, 9);
      ctx.closePath();
      ctx.fillStyle = "rgba(216, 180, 254, 0.42)";
      ctx.fill();

      ctx.beginPath();
      ctx.arc(11, -1.8, 1.4, 0, Math.PI * 2);
      ctx.fillStyle = "rgba(10, 10, 15, 0.86)";
      ctx.fill();
      ctx.restore();
    }

    function frame(time: number) {
      const delta = time - last;
      if (delta < 16) {
        raf = requestAnimationFrame(frame);
        return;
      }
      last = time;

      ctx.clearRect(0, 0, width, height);
      updateTarget();

      for (const particle of particles) {
        particle.x += particle.vx;
        particle.y += particle.vy;
        if (particle.y < -10) {
          particle.y = height + 10;
          particle.x = Math.random() * width;
        }
        if (particle.x < -10) particle.x = width + 10;
        if (particle.x > width + 10) particle.x = -10;

        ctx.beginPath();
        ctx.fillStyle = `rgba(216, 180, 254, ${particle.alpha})`;
        ctx.arc(particle.x, particle.y, particle.r, 0, Math.PI * 2);
        ctx.fill();
      }

      ctx.strokeStyle = "rgba(96, 165, 250, 0.08)";
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.arc(fish.x, fish.y, 48 + Math.sin(time * 0.002) * 6, 0, Math.PI * 2);
      ctx.stroke();

      drawFish(time);
      raf = requestAnimationFrame(frame);
    }

    function onTarget(event: Event) {
      const custom = event as CustomEvent<{ x: number; y: number }>;
      hoverTarget = custom.detail;
    }

    function onClear() {
      hoverTarget = null;
    }

    function onVisibilityChange() {
      if (document.hidden) {
        cancelAnimationFrame(raf);
      } else {
        last = performance.now();
        raf = requestAnimationFrame(frame);
      }
    }

    resize();
    seedParticles();
    raf = requestAnimationFrame(frame);

    window.addEventListener("resize", resize);
    window.addEventListener("quantum-target", onTarget as EventListener);
    window.addEventListener("quantum-target-clear", onClear);
    document.addEventListener("visibilitychange", onVisibilityChange);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      window.removeEventListener("quantum-target", onTarget as EventListener);
      window.removeEventListener("quantum-target-clear", onClear);
      document.removeEventListener("visibilitychange", onVisibilityChange);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-[1] opacity-55 mix-blend-screen"
    />
  );
}
