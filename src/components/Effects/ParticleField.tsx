import React, { useEffect, useRef } from 'react';

interface ParticleFieldProps {
  density?: number;
  speed?: number;
  color?: string;
  size?: number;
  className?: string;
}

const ParticleField: React.FC<ParticleFieldProps> = ({
  density = 50,
  speed = 1,
  color = '#007AFF',
  size = 2,
  className = ''
}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Clear existing particles
    container.innerHTML = '';

    // Create particles
    for (let i = 0; i < density; i++) {
      const particle = document.createElement('div');
      
      particle.style.cssText = `
        position: absolute;
        width: ${size + Math.random() * size}px;
        height: ${size + Math.random() * size}px;
        background: ${color};
        border-radius: 50%;
        left: ${Math.random() * 100}%;
        top: ${Math.random() * 100}%;
        opacity: ${0.3 + Math.random() * 0.7};
        animation: float-particle ${5 + Math.random() * 10}s linear infinite;
        animation-delay: ${Math.random() * 5}s;
        box-shadow: 0 0 ${size * 2}px ${color}40;
        pointer-events: none;
      `;
      
      container.appendChild(particle);
    }

    return () => {
      if (container) {
        container.innerHTML = '';
      }
    };
  }, [density, speed, color, size]);

  return (
    <div 
      ref={containerRef}
      className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}
    />
  );
};

export default ParticleField;