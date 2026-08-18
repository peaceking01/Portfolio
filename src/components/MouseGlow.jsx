import { useEffect, useRef, useState } from 'react';

const MouseGlow = () => {
  const glowRef = useRef(null);
  const [enabled] = useState(() => {
    if (typeof window === 'undefined') return false;
    const isTouch = window.matchMedia('(pointer: coarse)').matches;
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    return !isTouch && !prefersReducedMotion;
  });

  useEffect(() => {
    if (!enabled) return;

    let frame = null;
    let x = window.innerWidth / 2;
    let y = window.innerHeight / 2;

    const handleMove = (e) => {
      x = e.clientX;
      y = e.clientY;
      if (frame) return;
      frame = requestAnimationFrame(() => {
        if (glowRef.current) {
          glowRef.current.style.transform = `translate3d(${x - 200}px, ${y - 200}px, 0)`;
        }
        frame = null;
      });
    };

    window.addEventListener('mousemove', handleMove, { passive: true });
    return () => {
      window.removeEventListener('mousemove', handleMove);
      if (frame) cancelAnimationFrame(frame);
    };
  }, [enabled]);

  if (!enabled) return null;

  return (
    <div
      ref={glowRef}
      aria-hidden="true"
      className="pointer-events-none fixed left-0 top-0 z-[1] h-[400px] w-[400px] rounded-full bg-red-600/20 blur-[100px] will-change-transform"
    />
  );
};

export default MouseGlow;
