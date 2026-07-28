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
  type: 'petal' | 'goldDust';
  color: string;
}

export const FloatingPetals: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    // Generate 35 high-performance particles
    const particleCount = width < 768 ? 20 : 35;
    const particles: Particle[] = [];

    const petalColors = ['rgba(245, 230, 232, 0.85)', 'rgba(232, 180, 184, 0.75)', 'rgba(255, 253, 240, 0.9)'];
    const goldColors = ['rgba(212, 175, 55, 0.8)', 'rgba(245, 230, 171, 0.9)', 'rgba(184, 134, 11, 0.7)'];

    for (let i = 0; i < particleCount; i++) {
      const isPetal = i % 3 !== 0;
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        size: isPetal ? Math.random() * 8 + 6 : Math.random() * 3 + 1,
        speedY: isPetal ? Math.random() * 0.8 + 0.3 : Math.random() * 0.5 + 0.2,
        speedX: Math.sin(Math.random() * Math.PI) * 0.4 - 0.2,
        rotation: Math.random() * 360,
        rotationSpeed: (Math.random() - 0.5) * 1.5,
        opacity: Math.random() * 0.7 + 0.3,
        type: isPetal ? 'petal' : 'goldDust',
        color: isPetal
          ? petalColors[Math.floor(Math.random() * petalColors.length)]
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
      } else {
        // Draw sparkling gold dust particle
        ctx.beginPath();
        ctx.fillStyle = p.color;
        ctx.arc(0, 0, p.size, 0, Math.PI * 2);
        ctx.fill();
      }

      ctx.restore();
    };

    const render = () => {
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

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-20 transform-gpu"
      aria-hidden="true"
    />
  );
};
