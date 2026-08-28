'use client';

import React, { useEffect, useRef } from 'react';

export const SatinCursorBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d', { alpha: false });
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // Mouse position with smooth Lerp interpolation
    const mouse = {
      x: width / 2,
      y: height / 2,
      targetX: width / 2,
      targetY: height / 2,
      isHovering: false,
    };

    const isTouchDevice =
      typeof window !== 'undefined' &&
      ('ontouchstart' in window ||
        navigator.maxTouchPoints > 0 ||
        window.matchMedia('(pointer: coarse)').matches);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouse.targetX = e.clientX;
      mouse.targetY = e.clientY;
      mouse.isHovering = true;
    };

    const handleMouseLeave = () => {
      mouse.isHovering = false;
    };

    window.addEventListener('resize', handleResize);
    if (!isTouchDevice) {
      window.addEventListener('mousemove', handleMouseMove);
      document.body.addEventListener('mouseleave', handleMouseLeave);
    }

    // Satin fold parameters
    const foldCount = 16;
    let time = 0;

    const render = () => {
      time += 0.006;

      // Lerp smooth mouse position
      if (!isTouchDevice && mouse.isHovering) {
        mouse.x += (mouse.targetX - mouse.x) * 0.08;
        mouse.y += (mouse.targetY - mouse.y) * 0.08;
      } else {
        // Idle ambient gentle movement
        mouse.targetX = width / 2 + Math.sin(time * 0.5) * (width * 0.15);
        mouse.targetY = height / 2 + Math.cos(time * 0.3) * (height * 0.15);
        mouse.x += (mouse.targetX - mouse.x) * 0.03;
        mouse.y += (mouse.targetY - mouse.y) * 0.03;
      }

      // Base pure white fill
      ctx.fillStyle = '#FFFFFF';
      ctx.fillRect(0, 0, width, height);

      const colWidth = width / (foldCount - 1);
      const spotRadius = 380;

      // Render vertical satin fabric folds
      for (let i = 0; i < foldCount; i++) {
        const baseX = i * colWidth;

        // Wave curve vertices along Y axis
        const segments = 20;
        const points: { x: number; y: number; light: number }[] = [];

        for (let s = 0; s <= segments; s++) {
          const py = (s / segments) * height;
          const wavePhase = time + i * 0.5 + (py / height) * Math.PI * 1.5;
          const px = baseX + Math.sin(wavePhase) * 35;

          // Distance to mouse cursor
          const dx = px - mouse.x;
          const dy = py - mouse.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          const light = Math.max(0, 1 - dist / spotRadius);

          points.push({ x: px, y: py, light });
        }

        // Draw vertical satin fold ribbon
        for (let s = 0; s < segments; s++) {
          const p1 = points[s];
          const p2 = points[s + 1];

          const avgLight = (p1.light + p2.light) * 0.5;

          // Dynamic colors reacting to cursor light (White satin with pearl-gray shadows & glossy highlights)
          const shadowAlpha = 0.06 + (1 - avgLight) * 0.04 + Math.sin(time + i) * 0.015;
          const highlightAlpha = 0.15 + avgLight * 0.35;

          const ribbonGrad = ctx.createLinearGradient(p1.x - colWidth * 0.6, p1.y, p1.x + colWidth * 0.6, p2.y);
          ribbonGrad.addColorStop(0, `rgba(215, 225, 218, ${shadowAlpha})`);
          ribbonGrad.addColorStop(0.4, `rgba(255, 255, 255, ${highlightAlpha})`);
          ribbonGrad.addColorStop(0.7, `rgba(235, 242, 237, ${shadowAlpha * 0.8})`);
          ribbonGrad.addColorStop(1, `rgba(210, 220, 214, ${shadowAlpha})`);

          ctx.fillStyle = ribbonGrad;
          ctx.beginPath();
          ctx.moveTo(p1.x - colWidth * 0.5, p1.y);
          ctx.lineTo(p1.x + colWidth * 0.5, p1.y);
          ctx.lineTo(p2.x + colWidth * 0.5, p2.y);
          ctx.lineTo(p2.x - colWidth * 0.5, p2.y);
          ctx.closePath();
          ctx.fill();
        }
      }

      // Soft circular cursor light spotlight
      if (!isTouchDevice && mouse.isHovering) {
        const spotGlow = ctx.createRadialGradient(
          mouse.x,
          mouse.y,
          0,
          mouse.x,
          mouse.y,
          spotRadius
        );

        spotGlow.addColorStop(0, 'rgba(255, 255, 255, 0.95)');
        spotGlow.addColorStop(0.35, 'rgba(245, 250, 246, 0.6)');
        spotGlow.addColorStop(0.7, 'rgba(230, 240, 234, 0.2)');
        spotGlow.addColorStop(1, 'rgba(255, 255, 255, 0)');

        ctx.fillStyle = spotGlow;
        ctx.beginPath();
        ctx.arc(mouse.x, mouse.y, spotRadius, 0, Math.PI * 2);
        ctx.fill();

        // Delicate subtle shadow contrast ring around cursor spotlight for 3D depth on white
        const ringGlow = ctx.createRadialGradient(
          mouse.x,
          mouse.y,
          spotRadius * 0.5,
          mouse.x,
          mouse.y,
          spotRadius
        );
        ringGlow.addColorStop(0, 'rgba(0, 0, 0, 0)');
        ringGlow.addColorStop(0.75, 'rgba(30, 80, 50, 0.025)');
        ringGlow.addColorStop(1, 'rgba(0, 0, 0, 0)');

        ctx.fillStyle = ringGlow;
        ctx.beginPath();
        ctx.arc(mouse.x, mouse.y, spotRadius, 0, Math.PI * 2);
        ctx.fill();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      if (!isTouchDevice) {
        window.removeEventListener('mousemove', handleMouseMove);
        document.body.removeEventListener('mouseleave', handleMouseLeave);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full pointer-events-none -z-10"
      aria-hidden="true"
    />
  );
};
