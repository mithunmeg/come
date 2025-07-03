import React from 'react';

interface RealisticGlassProps {
  children: React.ReactNode;
  className?: string;
  intensity?: 'light' | 'medium' | 'strong' | 'ultra';
  tint?: 'blue' | 'purple' | 'amber' | 'emerald' | 'rose';
}

const RealisticGlass: React.FC<RealisticGlassProps> = ({ 
  children, 
  className = '', 
  intensity = 'medium',
  tint = 'blue'
}) => {
  const intensityStyles = {
    light: {
      background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%)',
      backdropFilter: 'blur(20px) saturate(180%)',
      border: '1px solid rgba(255, 255, 255, 0.18)',
      boxShadow: `
        0 8px 32px rgba(0, 0, 0, 0.3),
        inset 0 1px 0 rgba(255, 255, 255, 0.2),
        inset 0 -1px 0 rgba(255, 255, 255, 0.1),
        0 0 0 1px rgba(255, 255, 255, 0.05)
      `
    },
    medium: {
      background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.15) 0%, rgba(255, 255, 255, 0.08) 100%)',
      backdropFilter: 'blur(40px) saturate(200%)',
      border: '1px solid rgba(255, 255, 255, 0.25)',
      boxShadow: `
        0 16px 48px rgba(0, 0, 0, 0.4),
        inset 0 1px 0 rgba(255, 255, 255, 0.3),
        inset 0 -1px 0 rgba(255, 255, 255, 0.15),
        0 0 0 1px rgba(255, 255, 255, 0.08)
      `
    },
    strong: {
      background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.2) 0%, rgba(255, 255, 255, 0.1) 100%)',
      backdropFilter: 'blur(60px) saturate(220%)',
      border: '1px solid rgba(255, 255, 255, 0.3)',
      boxShadow: `
        0 24px 64px rgba(0, 0, 0, 0.5),
        inset 0 1px 0 rgba(255, 255, 255, 0.4),
        inset 0 -1px 0 rgba(255, 255, 255, 0.2),
        0 0 0 1px rgba(255, 255, 255, 0.1)
      `
    },
    ultra: {
      background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.25) 0%, rgba(255, 255, 255, 0.12) 100%)',
      backdropFilter: 'blur(80px) saturate(250%)',
      border: '1px solid rgba(255, 255, 255, 0.35)',
      boxShadow: `
        0 32px 80px rgba(0, 0, 0, 0.6),
        inset 0 1px 0 rgba(255, 255, 255, 0.5),
        inset 0 -1px 0 rgba(255, 255, 255, 0.25),
        0 0 0 1px rgba(255, 255, 255, 0.12),
        0 0 60px rgba(255, 255, 255, 0.1)
      `
    }
  };

  const tintOverlays = {
    blue: 'linear-gradient(135deg, rgba(0, 122, 255, 0.1) 0%, rgba(0, 122, 255, 0.05) 100%)',
    purple: 'linear-gradient(135deg, rgba(88, 86, 214, 0.1) 0%, rgba(88, 86, 214, 0.05) 100%)',
    amber: 'linear-gradient(135deg, rgba(255, 149, 0, 0.1) 0%, rgba(255, 149, 0, 0.05) 100%)',
    emerald: 'linear-gradient(135deg, rgba(52, 199, 89, 0.1) 0%, rgba(52, 199, 89, 0.05) 100%)',
    rose: 'linear-gradient(135deg, rgba(255, 59, 48, 0.1) 0%, rgba(255, 59, 48, 0.05) 100%)'
  };

  return (
    <div 
      className={`relative overflow-hidden ${className}`}
      style={{
        ...intensityStyles[intensity],
        position: 'relative'
      }}
    >
      {/* Tint overlay */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: tintOverlays[tint],
          mixBlendMode: 'overlay'
        }}
      />
      
      {/* Realistic light refraction */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-30"
        style={{
          background: `
            linear-gradient(45deg, transparent 30%, rgba(255, 255, 255, 0.1) 50%, transparent 70%),
            linear-gradient(-45deg, transparent 30%, rgba(255, 255, 255, 0.05) 50%, transparent 70%)
          `,
          animation: 'shimmer 8s ease-in-out infinite'
        }}
      />
      
      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

export default RealisticGlass;