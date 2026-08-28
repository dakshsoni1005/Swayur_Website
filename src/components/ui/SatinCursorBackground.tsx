'use client';

import React, { useEffect, useRef } from 'react';

export const SatinCursorBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // Mouse tracking with smooth lerp interpolation
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

    // Ribbed satin wave parameters
    const waveCount = 14;
    let time = 0;

    const render = () => {
      time += 0.008;

      // Smooth Lerp for cursor light
      if (!isTouchDevice && mouse.isHovering) {
        mouse.x += (mouse.targetX - mouse.x) * 0.08;
        mouse.y += (mouse.targetY - mouse.y) * 0.08;
      } else {
        // Subtle ambient drifting if touch or idle
        mouse.targetX = width / 2 + Math.sin(time * 0.5) * (width * 0.2);
        mouse.targetY = height / 2 + Math.cos(time * 0.4) * (height * 0.2);
        mouse.x += (mouse.targetX - mouse.x) * 0.03;
        mouse.y += (mouse.targetY - mouse.y) * 0.03;
      }

      // Base off-white canvas fill
      ctx.fillStyle = '#FAFCFA';
      ctx.fillRect(0, 0, width, height);

      // Draw subtle vertical flowing satin ribbons
      const colWidth = width / (waveCount - 1);

      for (let i = 0; i < waveCount; i++) {
        const baseX = i * colWidth;
        const waveOffset = Math.sin(time + i * 0.6) * 25;
        const waveX = baseX + waveOffset;

        // Distance from cursor light
        const dx = waveX - mouse.x;
        const dy = height / 2 - mouse.y;
        const distSq = dx * dx + dy * dy;
        const lightEffect = Math.max(0, 1 - Math.sqrt(distSq) / 600);

        // Ribbon Gradient (Soft pearl white, light gray, soft sage tint)
        const gradient = ctx.createLinearGradient(waveX - colWidth, 0, waveX + colWidth, height);
        
        const alphaBase = 0.03 + Math.sin(time * 0.5 + i) * 0.01 + lightEffect * 0.04;
        
        gradient.addColorStop(0, `rgba(240, 245, 241, ${alphaBase})`);
        gradient.addColorStop(0.5, `rgba(255, 255, 255, ${alphaBase * 1.5})`);
        gradient.addColorStop(1, `rgba(235, 242, 237, ${alphaBase})`);

        ctx.fillStyle = gradient;

        // Curve path for vertical satin wave
        ctx.beginPath();
        ctx.moveTo(waveX - colWidth * 0.8, 0);

        const cp1x = waveX + Math.sin(time + i) * 40;
        const cp1y = height * 0.33;
        const cp2x = waveX - Math.cos(time + i) * 40;
        const cp2y = height * 0.66;
        const endX = waveX + Math.sin(time + i * 0.5) * 20;

        ctx.bezierCurveTo(cp1x, cp1y, cp2x, cp2y, endX, height);
        ctx.lineTo(endX + colWidth * 1.2, height);

        const rcp2x = cp2x + colWidth * 1.2;
        const rcp1x = cp1x + colWidth * 1.2;
        ctx.bezierCurveTo(rcp2x, cp2y, rcp1x, cp1y, waveX + colWidth * 0.4, 0);
        ctx.closePath();
        ctx.fill();
      }

      // Cursor-following soft circular spotlight
      const spotRadius = Math.min(width, height) * 0.35;
      const spotGlow = ctx.createRadialGradient(
        mouse.x,
        mouse.y,
        0,
        mouse.x,
        mouse.y,
        spotRadius
      );

      // Soft white satin highlight with delicate contrast ring
      spotGlow.addColorStop(0, 'rgba(255, 255, 255, 0.85)');
      spotGlow.addColorStop(0.3, 'rgba(244, 249, 245, 0.45)');
      spotGlow.addColorStop(0.7, 'rgba(225, 235, 228, 0.15)');
      spotGlow.addColorStop(1, 'rgba(250, 252, 250, 0)');

      ctx.fillStyle = spotGlow;
      ctx.beginPath();
      ctx.arc(mouse.x, mouse.y, spotRadius, 0, Math.PI * 2);
      ctx.fill();

      // Delicate subtle shadow rim for cursor depth on white background
      const shadowRim = ctx.createRadialGradient(
        mouse.x,
        mouse.y,
        spotRadius * 0.4,
        mouse.x,
        mouse.y,
        spotRadius * 0.95
      );
      shadowRim.addColorStop(0, 'rgba(0, 0, 0, 0)');
      shadowRim.addColorStop(0.8, 'rgba(46, 125, 50, 0.015)');
      shadowRim.addColorStop(1, 'rgba(0, 0, 0, 0)');

      ctx.fillStyle = shadowRim;
      ctx.beginPath();
      ctx.arc(mouse.x, mouse.y, spotRadius, 0, Math.PI * 2);
      ctx.fill();

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
