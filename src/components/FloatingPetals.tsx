import React, { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  size: number;
  speedY: number;
  speedX: number;
  rotation: number;
  rotationSpeed: number;
  opacity: number;
  type: 'petal' | 'heart' | 'goldDust';
  color: string;
}

export const FloatingPetals: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d', { alpha: true, desynchronized: true });
    if (!ctx) return;

    let animationFrameId = 0;
    let lastFrameTime = 0;
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reducedMotion) return;
    const lowPowerDevice = (navigator.hardwareConcurrency ?? 4) <= 4;
    const frameInterval = lowPowerDevice ? 1000 / 30 : 1000 / 60;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    let resizeFrameId = 0;
    const handleResize = () => {
      if (!canvas) return;
      cancelAnimationFrame(resizeFrameId);
      resizeFrameId = requestAnimationFrame(() => {
        width = canvas.width = window.innerWidth;
        height = canvas.height = window.innerHeight;
      });
    };

    window.addEventListener('resize', handleResize);

    // A restrained amount reads as luxurious and keeps low-end devices smooth.
    const particleCount = width < 768 ? (lowPowerDevice ? 10 : 14) : (lowPowerDevice ? 16 : 22);
    const particles: Particle[] = [];

    const petalColors = ['rgba(139, 30, 49, 0.62)', 'rgba(205, 112, 126, 0.58)', 'rgba(238, 190, 196, 0.72)', 'rgba(255, 248, 239, 0.86)'];
    const heartColors = ['rgba(116, 25, 40, 0.68)', 'rgba(163, 36, 58, 0.62)', 'rgba(212, 175, 55, 0.66)'];
    const goldColors = ['rgba(212, 175, 55, 0.8)', 'rgba(245, 230, 171, 0.9)', 'rgba(184, 134, 11, 0.7)'];

    for (let i = 0; i < particleCount; i++) {
      const type: Particle['type'] = i % 11 === 0 ? 'heart' : i % 4 === 0 ? 'goldDust' : 'petal';
      const isGoldDust = type === 'goldDust';
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        size: type === 'petal' ? Math.random() * 6 + 5 : type === 'heart' ? Math.random() * 3 + 4 : Math.random() * 2 + 1,
        speedY: isGoldDust ? Math.random() * 0.35 + 0.18 : Math.random() * 0.55 + 0.28,
        speedX: Math.sin(Math.random() * Math.PI) * 0.4 - 0.2,
        rotation: Math.random() * 360,
        rotationSpeed: (Math.random() - 0.5) * 1.1,
        opacity: Math.random() * 0.42 + 0.38,
        type,
        color: type === 'petal'
          ? petalColors[Math.floor(Math.random() * petalColors.length)]
          : type === 'heart'
            ? heartColors[Math.floor(Math.random() * heartColors.length)]
          : goldColors[Math.floor(Math.random() * goldColors.length)],
      });
    }

    const drawPetal = (p: Particle) => {
      ctx.save();
      ctx.translate(p.x, p.y);
      ctx.rotate((p.rotation * Math.PI) / 180);
      ctx.globalAlpha = p.opacity;

      if (p.type === 'petal') {
        // Draw soft teardrop jasmine/rose petal
        ctx.beginPath();
        ctx.fillStyle = p.color;
        ctx.moveTo(0, 0);
        ctx.bezierCurveTo(-p.size / 2, -p.size, -p.size, p.size / 3, 0, p.size);
        ctx.bezierCurveTo(p.size, p.size / 3, p.size / 2, -p.size, 0, 0);
        ctx.fill();
      } else if (p.type === 'heart') {
        // Tiny calligraphic heart — deliberately sparse among the rose petals.
        ctx.beginPath();
        ctx.fillStyle = p.color;
        ctx.moveTo(0, p.size * 0.72);
        ctx.bezierCurveTo(-p.size * 1.3, -p.size * 0.1, -p.size * 0.8, -p.size, 0, -p.size * 0.34);
        ctx.bezierCurveTo(p.size * 0.8, -p.size, p.size * 1.3, -p.size * 0.1, 0, p.size * 0.72);
        ctx.fill();
      } else {
        // Draw sparkling gold dust particle
        ctx.beginPath();
        ctx.fillStyle = p.color;
        ctx.arc(0, 0, p.size, 0, Math.PI * 2);
        ctx.fill();
      }

      ctx.restore();
    };

    const render = (time: number) => {
      animationFrameId = requestAnimationFrame(render);
      if (document.hidden || time - lastFrameTime < frameInterval) return;
      lastFrameTime = time - ((time - lastFrameTime) % frameInterval);
      ctx.clearRect(0, 0, width, height);

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.y += p.speedY;
        p.x += Math.sin(p.y * 0.01) * 0.5 + p.speedX;
        p.rotation += p.rotationSpeed;

        if (p.y > height + 20) {
          p.y = -20;
          p.x = Math.random() * width;
        }
        if (p.x > width + 20) p.x = -20;
        if (p.x < -20) p.x = width + 20;

        drawPetal(p);
      }

    };

    animationFrameId = requestAnimationFrame(render);

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
      cancelAnimationFrame(resizeFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="ambient-canvas fixed inset-0 pointer-events-none z-20 transform-gpu"
      aria-hidden="true"
    />
  );
};
