import { useEffect, useRef } from "react";

interface Particle {
  x: number;
  y: number;
  speed: number;
  size: number;
  opacity: number;
  phase: "top" | "falling" | "bottom";
}

const HourglassAnimation = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const frameRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d")!;

    const W = 200;
    const H = 320;
    canvas.width = W;
    canvas.height = H;

    const MID_X = W / 2;
    const NECK_Y = H / 2;
    const PIXEL = 4;

    // Hourglass shape boundaries
    const getHourglassWidth = (y: number) => {
      const half = H / 2;
      if (y < half) {
        // Top: wide at top, narrow at middle
        const ratio = y / half;
        return MID_X * (1 - ratio * 0.85);
      } else {
        // Bottom: narrow at middle, wide at bottom
        const ratio = (y - half) / half;
        return MID_X * (0.15 + ratio * 0.85);
      }
    };

    // Initialize particles
    const initParticles = () => {
      const particles: Particle[] = [];
      for (let i = 0; i < 60; i++) {
        const y = Math.random() * (H * 0.4) + 10;
        const w = getHourglassWidth(y);
        particles.push({
          x: MID_X + (Math.random() - 0.5) * w * 1.6,
          y,
          speed: 0.3 + Math.random() * 0.5,
          size: PIXEL,
          opacity: 0.4 + Math.random() * 0.6,
          phase: "top",
        });
      }
      for (let i = 0; i < 40; i++) {
        const y = H * 0.6 + Math.random() * (H * 0.35);
        const w = getHourglassWidth(y);
        particles.push({
          x: MID_X + (Math.random() - 0.5) * w * 1.6,
          y,
          speed: 0.3 + Math.random() * 0.5,
          size: PIXEL,
          opacity: 0.4 + Math.random() * 0.6,
          phase: "bottom",
        });
      }
      // Falling particles through neck
      for (let i = 0; i < 8; i++) {
        particles.push({
          x: MID_X + (Math.random() - 0.5) * 6,
          y: NECK_Y - 30 + Math.random() * 60,
          speed: 0.8 + Math.random() * 0.6,
          size: PIXEL,
          opacity: 0.7 + Math.random() * 0.3,
          phase: "falling",
        });
      }
      return particles;
    };

    particlesRef.current = initParticles();

    // Draw hourglass outline (pixelated)
    const drawHourglass = () => {
      ctx.strokeStyle = "rgba(0, 255, 156, 0.2)";
      ctx.lineWidth = 2;
      ctx.shadowColor = "rgba(0, 255, 156, 0.3)";
      ctx.shadowBlur = 10;

      // Draw pixel outline
      for (let y = 0; y < H; y += PIXEL) {
        const w = getHourglassWidth(y);
        const leftX = MID_X - w;
        const rightX = MID_X + w;

        // Left edge pixel
        ctx.fillStyle = `rgba(0, 255, 156, 0.15)`;
        ctx.fillRect(Math.floor(leftX / PIXEL) * PIXEL, y, PIXEL, PIXEL);
        // Right edge pixel
        ctx.fillRect(Math.floor(rightX / PIXEL) * PIXEL, y, PIXEL, PIXEL);
      }

      // Top and bottom edges
      ctx.fillStyle = `rgba(0, 255, 156, 0.25)`;
      for (let x = MID_X - MID_X; x < MID_X + MID_X; x += PIXEL) {
        ctx.fillRect(x, 0, PIXEL, PIXEL);
        ctx.fillRect(x, H - PIXEL, PIXEL, PIXEL);
      }
      ctx.shadowBlur = 0;
    };

    const animate = () => {
      ctx.clearRect(0, 0, W, H);

      drawHourglass();

      // Update and draw particles
      particlesRef.current.forEach((p) => {
        if (p.phase === "top") {
          // Slowly drift toward center/neck
          p.y += p.speed * 0.3;
          p.x += (MID_X - p.x) * 0.005;
          if (p.y > NECK_Y - 20) {
            p.phase = "falling";
          }
        } else if (p.phase === "falling") {
          p.y += p.speed * 1.5;
          p.x += (MID_X - p.x) * 0.1;
          if (p.y > H * 0.85) {
            p.phase = "bottom";
            p.speed = 0.1;
          }
        } else if (p.phase === "bottom") {
          // Settle
          p.y += p.speed * 0.05;
          if (p.y > H - 10) {
            // Reset to top
            p.y = 5 + Math.random() * 20;
            const w = getHourglassWidth(p.y);
            p.x = MID_X + (Math.random() - 0.5) * w * 1.6;
            p.phase = "top";
            p.speed = 0.3 + Math.random() * 0.5;
            p.opacity = 0.4 + Math.random() * 0.6;
          }
        }

        // Glitch flicker
        const flicker = Math.random() > 0.98 ? 0.2 : 0;

        // Draw pixel particle
        const snapX = Math.floor(p.x / PIXEL) * PIXEL;
        const snapY = Math.floor(p.y / PIXEL) * PIXEL;

        ctx.fillStyle = `rgba(0, 255, 156, ${p.opacity - flicker})`;
        ctx.shadowColor = "rgba(0, 255, 156, 0.5)";
        ctx.shadowBlur = 6;
        ctx.fillRect(snapX, snapY, p.size, p.size);
        ctx.shadowBlur = 0;
      });

      frameRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => cancelAnimationFrame(frameRef.current);
  }, []);

  return (
    <div className="flex items-center justify-center">
      <canvas
        ref={canvasRef}
        className="opacity-80"
        style={{ imageRendering: "pixelated" }}
      />
    </div>
  );
};

export default HourglassAnimation;
