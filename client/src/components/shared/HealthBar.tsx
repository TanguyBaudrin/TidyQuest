import React from 'react';
import { getHealthColor } from '../../utils/health';

interface HealthBarProps {
  value: number;
  height?: number;
  showLabel?: boolean;
  animate?: boolean;
}

const HealthBar: React.FC<HealthBarProps> = ({
  value,
  height = 10,
  showLabel = true,
  animate = false,
}) => {
  const color = getHealthColor(value);

  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 10, width: '100%' }}>
      <div
        style={{
          flex: 1,
          height,
          backgroundColor: 'var(--health-bar-track)',
          borderRadius: 99,
          overflow: 'hidden',
        }}
      >
        <div
          style={{
            height: '100%',
            width: `${value}%`,
            backgroundColor: color,
            borderRadius: 99,
            transition: animate
              ? 'width 0.8s cubic-bezier(.4,2,.6,1)'
              : 'width 0.3s ease',
          }}
        />
      </div>
      {showLabel && (
        <span
          style={{
            fontSize: 12,
            fontWeight: 700,
            color,
            minWidth: 36,
            textAlign: 'right',
          }}
        >
          {value}%
        </span>
      )}
    </div>
  );
};

export { HealthBar };
export default HealthBar;
