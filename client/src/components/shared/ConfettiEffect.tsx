import React, { useMemo } from 'react';

interface ConfettiEffectProps {
  show: boolean;
}

const COLORS = ['#F97316', '#FBBF24', '#FB923C', '#FCD34D', '#F59E0B', '#EA580C'];

const keyframesStyle = `
@keyframes confettiFall {
  0% { transform: translateY(0) rotate(0deg); opacity: 1; }
  100% { transform: translateY(100vh) rotate(720deg); opacity: 0; }
}`;

const ConfettiEffect: React.FC<ConfettiEffectProps> = ({ show }) => {
  const pieces = useMemo(
    () =>
      Array.from({ length: 45 }, (_, i) => ({
        id: i,
        left: Math.random() * 100,
        delay: Math.random() * 0.4,
        duration: 1.2 + Math.random() * 1.5,
        color: COLORS[Math.floor(Math.random() * COLORS.length)],
        size: 5 + Math.random() * 8,
        rotation: Math.random() * 360,
      })),
    [show],
  );

  if (!show) return null;

  return (
    <div style={{ position: 'fixed', inset: 0, pointerEvents: 'none', zIndex: 9999 }}>
      <style>{keyframesStyle}</style>
      {pieces.map((p) => (
        <div
          key={p.id}
          style={{
            position: 'absolute',
            left: `${p.left}%`,
            top: -12,
            width: p.size,
            height: p.size,
            backgroundColor: p.color,
            borderRadius: p.size > 9 ? '50%' : '2px',
            transform: `rotate(${p.rotation}deg)`,
            animation: `confettiFall ${p.duration}s ease-in ${p.delay}s forwards`,
          }}
        />
      ))}
    </div>
  );
};

export { ConfettiEffect };
export default ConfettiEffect;
