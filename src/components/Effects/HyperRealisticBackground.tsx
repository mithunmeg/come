import React, { useEffect, useRef, useState } from 'react';

interface Particle {
  x: number;
  y: number;
  z: number;
  vx: number;
  vy: number;
  vz: number;
  size: number;
  color: string;
  opacity: number;
  life: number;
  maxLife: number;
}

interface HyperRealisticBackgroundProps {
  mousePosition: { x: number; y: number };
  scrollY: number;
}

const HyperRealisticBackground: React.FC<HyperRealisticBackgroundProps> = ({ mousePosition, scrollY }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>();
  const particlesRef = useRef<Particle[]>([]);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const updateDimensions = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };

    updateDimensions();
    window.addEventListener('resize', updateDimensions);
    return () => window.removeEventListener('resize', updateDimensions);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = dimensions.width;
    canvas.height = dimensions.height;

    // Initialize particles
    const initParticles = () => {
      particlesRef.current = [];
      const particleCount = Math.min(150, Math.floor(dimensions.width * dimensions.height / 8000));
      
      for (let i = 0; i < particleCount; i++) {
        particlesRef.current.push({
          x: Math.random() * dimensions.width,
          y: Math.random() * dimensions.height,
          z: Math.random() * 1000,
          vx: (Math.random() - 0.5) * 0.5,
          vy: (Math.random() - 0.5) * 0.5,
          vz: (Math.random() - 0.5) * 2,
          size: Math.random() * 3 + 1,
          color: ['#007AFF', '#5856D6', '#FF9500', '#34C759', '#FF3B30'][Math.floor(Math.random() * 5)],
          opacity: Math.random() * 0.8 + 0.2,
          life: Math.random() * 1000,
          maxLife: 1000 + Math.random() * 2000
        });
      }
    };

    initParticles();

    const animate = () => {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
      ctx.fillRect(0, 0, dimensions.width, dimensions.height);

      // Mouse influence
      const mouseInfluence = {
        x: (mousePosition.x / 100) * dimensions.width,
        y: (mousePosition.y / 100) * dimensions.height
      };

      particlesRef.current.forEach((particle, index) => {
        // Update particle position
        particle.x += particle.vx;
        particle.y += particle.vy;
        particle.z += particle.vz;
        particle.life += 1;

        // Mouse attraction/repulsion
        const dx = mouseInfluence.x - particle.x;
        const dy = mouseInfluence.y - particle.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        if (distance < 200) {
          const force = (200 - distance) / 200;
          particle.vx += (dx / distance) * force * 0.01;
          particle.vy += (dy / distance) * force * 0.01;
        }

        // Scroll influence
        particle.y += scrollY * 0.001;

        // Boundary wrapping
        if (particle.x < 0) particle.x = dimensions.width;
        if (particle.x > dimensions.width) particle.x = 0;
        if (particle.y < 0) particle.y = dimensions.height;
        if (particle.y > dimensions.height) particle.y = 0;
        if (particle.z < 0) particle.z = 1000;
        if (particle.z > 1000) particle.z = 0;

        // 3D projection
        const scale = 800 / (800 + particle.z);
        const projectedX = particle.x * scale;
        const projectedY = particle.y * scale;
        const projectedSize = particle.size * scale;

        // Opacity based on depth and life
        const depthOpacity = scale;
        const lifeOpacity = 1 - (particle.life / particle.maxLife);
        const finalOpacity = particle.opacity * depthOpacity * lifeOpacity;

        // Draw particle with glow effect
        if (finalOpacity > 0.01) {
          ctx.save();
          
          // Outer glow
          const gradient = ctx.createRadialGradient(
            projectedX, projectedY, 0,
            projectedX, projectedY, projectedSize * 3
          );
          gradient.addColorStop(0, `${particle.color}${Math.floor(finalOpacity * 255).toString(16).padStart(2, '0')}`);
          gradient.addColorStop(0.5, `${particle.color}${Math.floor(finalOpacity * 0.3 * 255).toString(16).padStart(2, '0')}`);
          gradient.addColorStop(1, 'transparent');
          
          ctx.fillStyle = gradient;
          ctx.beginPath();
          ctx.arc(projectedX, projectedY, projectedSize * 3, 0, Math.PI * 2);
          ctx.fill();

          // Core particle
          ctx.fillStyle = `${particle.color}${Math.floor(finalOpacity * 255).toString(16).padStart(2, '0')}`;
          ctx.beginPath();
          ctx.arc(projectedX, projectedY, projectedSize, 0, Math.PI * 2);
          ctx.fill();
          
          ctx.restore();
        }

        // Reset particle if life exceeded
        if (particle.life >= particle.maxLife) {
          particlesRef.current[index] = {
            x: Math.random() * dimensions.width,
            y: Math.random() * dimensions.height,
            z: Math.random() * 1000,
            vx: (Math.random() - 0.5) * 0.5,
            vy: (Math.random() - 0.5) * 0.5,
            vz: (Math.random() - 0.5) * 2,
            size: Math.random() * 3 + 1,
            color: ['#007AFF', '#5856D6', '#FF9500', '#34C759', '#FF3B30'][Math.floor(Math.random() * 5)],
            opacity: Math.random() * 0.8 + 0.2,
            life: 0,
            maxLife: 1000 + Math.random() * 2000
          };
        }
      });

      // Draw connections between nearby particles
      particlesRef.current.forEach((particle1, i) => {
        particlesRef.current.slice(i + 1).forEach(particle2 => {
          const dx = particle1.x - particle2.x;
          const dy = particle1.y - particle2.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < 100) {
            const opacity = (100 - distance) / 100 * 0.2;
            ctx.strokeStyle = `rgba(0, 122, 255, ${opacity})`;
            ctx.lineWidth = 0.5;
            ctx.beginPath();
            ctx.moveTo(particle1.x, particle1.y);
            ctx.lineTo(particle2.x, particle2.y);
            ctx.stroke();
          }
        });
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [dimensions, mousePosition, scrollY]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none"
      style={{ 
        background: 'transparent',
        mixBlendMode: 'screen'
      }}
    />
  );
};

export default HyperRealisticBackground;