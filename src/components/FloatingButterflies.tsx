import React, { useEffect, useRef } from 'react';

interface Butterfly {
  x: number;
  y: number;
  size: number;
  speedY: number;
  speedX: number;
  baseRotation: number;
  wobbleSpeed: number;
  wobbleAmount: number;
  flutterSpeed: number;
  flutterOffset: number;
  opacity: number;
  color: string;
}

export const FloatingButterflies: React.FC = () => {
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

    // Only a few butterflies: a romantic accent, never visual clutter.
    const butterflyCount = width < 768 ? 2 : lowPowerDevice ? 3 : 4;
    const butterflies: Butterfly[] = [];

    // Elegant gold and soft white colors for a premium look
    const colors = [
      'rgba(184, 134, 11, 0.72)', // Antique gold
      'rgba(232, 210, 121, 0.78)', // Champagne gold
      'rgba(139, 30, 49, 0.58)', // Romantic burgundy
      'rgba(220, 154, 163, 0.68)', // Dusty rose
    ];

    for (let i = 0; i < butterflyCount; i++) {
      butterflies.push({
        x: Math.random() * width,
        y: Math.random() * height,
        size: Math.random() * 3 + 5,
        speedY: -Math.random() * 0.35 - 0.18,
        speedX: (Math.random() - 0.5) * 0.55,
        baseRotation: Math.random() * 360,
        wobbleSpeed: Math.random() * 0.02 + 0.01,
        wobbleAmount: Math.random() * 30 + 10,
        flutterSpeed: Math.random() * 0.015 + 0.015,
        flutterOffset: Math.random() * Math.PI * 2,
        opacity: Math.random() * 0.24 + 0.46,
        color: colors[Math.floor(Math.random() * colors.length)],
      });
    }

    const drawButterfly = (b: Butterfly, time: number) => {
      ctx.save();
      ctx.translate(b.x, b.y);
      
      // Calculate rotation based on direction of movement + a natural wobble
      const angle = Math.atan2(b.speedY, b.speedX) + Math.PI / 2; // Point in direction of travel
      const wobble = Math.sin(time * b.wobbleSpeed + b.flutterOffset) * (b.wobbleAmount * Math.PI / 180);
      ctx.rotate(angle + wobble);
      
      ctx.globalAlpha = b.opacity;

      // Flutter calculation (wing span changes over time)
      // Math.sin oscillates between -1 and 1. Taking absolute value makes it flap.
      const flutter = Math.sin(time * b.flutterSpeed + b.flutterOffset);
      const wingScaleX = Math.abs(flutter) * 0.85 + 0.15; // Min width 0.15 to max width 1.0

      // Draw wings
      ctx.fillStyle = b.color;
      ctx.strokeStyle = 'rgba(74, 14, 23, 0.2)';
      ctx.lineWidth = 0.55;
      
      // Left wing
      ctx.save();
      ctx.scale(wingScaleX, 1);
      ctx.beginPath();
      // Top lobe
      ctx.moveTo(0, 0);
      ctx.bezierCurveTo(-b.size * 1.8, -b.size * 1.5, -b.size * 2.2, b.size * 0.2, 0, b.size * 0.5);
      // Bottom lobe
      ctx.bezierCurveTo(-b.size * 1.5, b.size * 1.2, -b.size * 0.5, b.size * 1.8, 0, b.size * 1.0);
      ctx.fill();
      ctx.stroke();
      ctx.restore();

      // Right wing
      ctx.save();
      ctx.scale(wingScaleX, 1);
      ctx.beginPath();
      // Top lobe
      ctx.moveTo(0, 0);
      ctx.bezierCurveTo(b.size * 1.8, -b.size * 1.5, b.size * 2.2, b.size * 0.2, 0, b.size * 0.5);
      // Bottom lobe
      ctx.bezierCurveTo(b.size * 1.5, b.size * 1.2, b.size * 0.5, b.size * 1.8, 0, b.size * 1.0);
      ctx.fill();
      ctx.stroke();
      ctx.restore();

      // Draw body
      ctx.fillStyle = 'rgba(40,5,11,0.6)'; // Dark burgundy body
      ctx.beginPath();
      ctx.ellipse(0, b.size * 0.3, b.size * 0.12, b.size * 0.7, 0, 0, Math.PI * 2);
      ctx.fill();

      ctx.restore();
    };

    const render = (time: number) => {
      animationFrameId = requestAnimationFrame(render);
      if (document.hidden || time - lastFrameTime < frameInterval) return;
      lastFrameTime = time - ((time - lastFrameTime) % frameInterval);
      ctx.clearRect(0, 0, width, height);

      for (let i = 0; i < butterflies.length; i++) {
        const b = butterflies[i];
        
        // Add a slight sine wave to horizontal movement for more natural flight
        const naturalSway = Math.sin(time * 0.001 + b.flutterOffset) * 0.5;
        
        b.y += b.speedY;
        b.x += b.speedX + naturalSway;

        // Wrap around screen
        if (b.y < -50) {
          b.y = height + 50;
          b.x = Math.random() * width;
        }
        if (b.x > width + 50) b.x = -50;
        if (b.x < -50) b.x = width + 50;

        drawButterfly(b, time);
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
      className="ambient-canvas fixed inset-0 pointer-events-none z-30 transform-gpu"
      aria-hidden="true"
    />
  );
};
