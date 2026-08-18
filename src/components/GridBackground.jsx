import { useMemo } from 'react';

// Deterministic pseudo-random particle field (no re-render churn, cheap to paint)
const PARTICLE_COUNT = 26;

const GridBackground = () => {
  const particles = useMemo(() => {
    return Array.from({ length: PARTICLE_COUNT }).map((_, i) => {
      const seed = i * 137.508; // golden angle for even distribution
      return {
        id: i,
        left: `${(seed * 3.7) % 100}%`,
        top: `${(seed * 5.3) % 100}%`,
        size: 1 + ((i * 7) % 3),
        duration: 8 + ((i * 3) % 10),
        delay: (i % 8) * -0.9,
      };
    });
  }, []);

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden bg-[#050505]"
    >
      {/* Base radial glow */}
      <div className="absolute -top-1/4 left-1/2 h-[70vh] w-[70vw] -translate-x-1/2 rounded-full bg-red-600/10 blur-[140px]" />
      <div className="absolute bottom-0 right-0 h-[50vh] w-[50vw] rounded-full bg-red-700/10 blur-[160px]" />

      {/* Animated grid */}
      <div className="cyber-grid absolute inset-0 opacity-40" />

      {/* Particles */}
      <div className="absolute inset-0">
        {particles.map((p) => (
          <span
            key={p.id}
            className="cyber-particle absolute rounded-full bg-red-500/60"
            style={{
              left: p.left,
              top: p.top,
              width: p.size,
              height: p.size,
              animationDuration: `${p.duration}s`,
              animationDelay: `${p.delay}s`,
            }}
          />
        ))}
      </div>

      {/* Scan line */}
      <div className="cyber-scanline absolute inset-0" />

      {/* Vignette so content stays readable */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(0,0,0,0.55)_100%)]" />
    </div>
  );
};

export default GridBackground;
