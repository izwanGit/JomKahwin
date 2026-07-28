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

    const butterflyCount = width < 768 ? 6 : 12;
    const butterflies: Butterfly[] = [];

    // Elegant gold and soft white colors for a premium look
    const colors = [
      'rgba(212, 175, 55, 0.7)',  // Gold
      'rgba(245, 230, 171, 0.8)', // Light Gold
      'rgba(255, 254, 250, 0.8)', // Cream/White
      'rgba(184, 134, 11, 0.6)',  // Dark Gold
    ];

    for (let i = 0; i < butterflyCount; i++) {
      butterflies.push({
        x: Math.random() * width,
        y: Math.random() * height,
        size: Math.random() * 8 + 8, // Size between 8 and 16
        speedY: -Math.random() * 1.0 - 0.5, // Fly upwards (negative Y)
        speedX: (Math.random() - 0.5) * 1.5, // Fly left or right
        baseRotation: Math.random() * 360,
        wobbleSpeed: Math.random() * 0.02 + 0.01,
        wobbleAmount: Math.random() * 30 + 10,
        flutterSpeed: Math.random() * 0.015 + 0.015,
        flutterOffset: Math.random() * Math.PI * 2,
        opacity: Math.random() * 0.5 + 0.3,
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
      ctx.restore();

      // Draw body
      ctx.fillStyle = 'rgba(40,5,11,0.6)'; // Dark burgundy body
      ctx.beginPath();
      ctx.ellipse(0, b.size * 0.3, b.size * 0.12, b.size * 0.7, 0, 0, Math.PI * 2);
      ctx.fill();

      ctx.restore();
    };

    const render = (time: number) => {
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

      animationFrameId = requestAnimationFrame(render);
    };

    animationFrameId = requestAnimationFrame(render);

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-30 transform-gpu"
      aria-hidden="true"
    />
  );
};
