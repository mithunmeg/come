import React from 'react';

interface HolographicTextProps {
  children: React.ReactNode;
  className?: string;
  intensity?: 'subtle' | 'medium' | 'strong';
  animated?: boolean;
}

const HolographicText: React.FC<HolographicTextProps> = ({ 
  children, 
  className = '',
  intensity = 'medium',
  animated = true
}) => {
  const intensityStyles = {
    subtle: {
      background: 'linear-gradient(45deg, #007AFF, #5856D6, #007AFF)',
      backgroundSize: '200% 200%',
      filter: 'drop-shadow(0 0 10px rgba(0, 122, 255, 0.5))'
    },
    medium: {
      background: 'linear-gradient(45deg, #007AFF, #5856D6, #AF52DE, #007AFF)',
      backgroundSize: '300% 300%',
      filter: 'drop-shadow(0 0 20px rgba(0, 122, 255, 0.7)) drop-shadow(0 0 40px rgba(88, 86, 214, 0.5))'
    },
    strong: {
      background: 'linear-gradient(45deg, #007AFF, #5856D6, #AF52DE, #FF9500, #007AFF)',
      backgroundSize: '400% 400%',
      filter: `
        drop-shadow(0 0 30px rgba(0, 122, 255, 0.8)) 
        drop-shadow(0 0 60px rgba(88, 86, 214, 0.6))
        drop-shadow(0 0 90px rgba(175, 82, 222, 0.4))
      `
    }
  };

  return (
    <span 
      className={`inline-block ${className}`}
      style={{
        ...intensityStyles[intensity],
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        backgroundClip: 'text',
        animation: animated ? 'holographic-flow 4s ease-in-out infinite, holographic-glow 2s ease-in-out infinite alternate' : 'none',
        position: 'relative'
      }}
    >
      {children}
    </span>
  );
};

export default HolographicText;