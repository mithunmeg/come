import React, { useState, useEffect } from 'react';
import { Clock, Users, ChefHat, ArrowRight, Utensils, Star, Sparkles, Zap, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';
import HyperRealisticBackground from '../components/Effects/HyperRealisticBackground';
import RealisticGlass from '../components/Effects/RealisticGlass';
import HolographicText from '../components/Effects/HolographicText';
import ParticleField from '../components/Effects/ParticleField';

const Landing: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="min-h-screen cosmic-gradient relative overflow-hidden">
      {/* Hyper-Realistic Background Effects */}
      <HyperRealisticBackground mousePosition={mousePosition} scrollY={scrollY} />
      
      {/* Particle Fields */}
      <ParticleField density={30} color="#007AFF" size={1} />
      <ParticleField density={20} color="#5856D6" size={2} />
      <ParticleField density={15} color="#FF9500" size={1.5} />

      {/* Enhanced Dynamic Background Elements */}
      <div className="absolute inset-0 overflow-hidden z-1">
        {/* Large Parallax Background Orbs with Realistic Lighting */}
        <div 
          className="absolute w-96 h-96 rounded-full opacity-20 realistic-lighting"
          style={{
            background: 'radial-gradient(circle, rgba(0, 122, 255, 0.4) 0%, rgba(0, 122, 255, 0.2) 40%, transparent 70%)',
            top: '10%',
            left: '10%',
            transform: `translate(${mousePosition.x * 0.03}px, ${mousePosition.y * 0.03 + scrollY * 0.4}px)`,
            transition: 'transform 0.3s ease-out',
            filter: 'blur(1px)',
          }}
        />
        <div 
          className="absolute w-80 h-80 rounded-full opacity-15 realistic-lighting"
          style={{
            background: 'radial-gradient(circle, rgba(88, 86, 214, 0.35) 0%, rgba(88, 86, 214, 0.15) 40%, transparent 70%)',
            top: '60%',
            right: '15%',
            transform: `translate(${-mousePosition.x * 0.04}px, ${-mousePosition.y * 0.04 + scrollY * 0.3}px)`,
            transition: 'transform 0.3s ease-out',
            filter: 'blur(1px)',
          }}
        />
        <div 
          className="absolute w-64 h-64 rounded-full opacity-12 realistic-lighting"
          style={{
            background: 'radial-gradient(circle, rgba(255, 149, 0, 0.3) 0%, rgba(255, 149, 0, 0.1) 40%, transparent 70%)',
            bottom: '20%',
            left: '20%',
            transform: `translate(${mousePosition.x * 0.035}px, ${mousePosition.y * 0.035 + scrollY * 0.25}px)`,
            transition: 'transform 0.3s ease-out',
            filter: 'blur(1px)',
          }}
        />
        
        {/* Enhanced Parallax Background Layers */}
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            background: `conic-gradient(from ${mousePosition.x * 2}deg at ${mousePosition.x}% ${mousePosition.y}%, 
              rgba(0, 122, 255, 0.15) 0deg, 
              transparent 60deg, 
              rgba(88, 86, 214, 0.12) 120deg, 
              transparent 180deg, 
              rgba(255, 149, 0, 0.1) 240deg, 
              transparent 300deg, 
              rgba(0, 122, 255, 0.15) 360deg)`,
            transform: `translateY(${scrollY * 0.08}px) rotate(${scrollY * 0.03}deg)`,
            transition: 'background 0.5s ease, transform 0.1s ease-out',
          }}
        />
      </div>

      {/* Header with Enhanced Glass Effect */}
      <header className="relative z-10">
        <RealisticGlass intensity="strong" tint="blue" className="border-b border-white/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center group">
                <div 
                  className="w-20 h-20 flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300 icon-glow-large"
                  style={{
                    transform: `translateY(${scrollY * 0.02}px)`,
                    transition: 'transform 0.1s ease-out',
                  }}
                >
                  <img src="/site-icon.png" alt="Cosmic Cantina" className="w-16 h-16 rounded-full object-cover" />
                </div>
                <div>
                  <HolographicText intensity="strong" className="text-2xl sm:text-3xl font-bold tracking-wider">
                    Cosmic Cantina
                  </HolographicText>
                  <div className="text-sm text-gray-400 font-medium">Digital Dining System</div>
                </div>
              </div>
            </div>
          </div>
        </RealisticGlass>
      </header>

      {/* Hero Section with Ultra-Realistic Effects */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-16 relative z-10">
        <div 
          className="text-center mb-12 sm:mb-20"
          style={{
            transform: `translateY(${scrollY * 0.1}px)`,
            transition: 'transform 0.1s ease-out',
          }}
        >
          <div className="mb-8">
            <RealisticGlass 
              intensity="medium" 
              tint="purple" 
              className="inline-flex items-center space-x-2 px-6 py-3 rounded-full mb-8 ultra-hover"
              style={{
                transform: `translateY(${scrollY * 0.05}px)`,
                transition: 'transform 0.1s ease-out',
              }}
            >
              <Star className="w-5 h-5 text-blue-400" />
              <span className="text-blue-300 text-sm font-medium">Smart Digital Ordering</span>
              <Sparkles className="w-5 h-5 text-purple-400" />
            </RealisticGlass>
          </div>
          
          <h1 
            className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 sm:mb-8 tracking-tight leading-tight"
            style={{
              transform: `translateY(${scrollY * 0.08}px)`,
              transition: 'transform 0.1s ease-out',
            }}
          >
            Skip the Queue,<br />
            <HolographicText intensity="strong" className="text-5xl sm:text-6xl md:text-7xl">
              Order Smart
            </HolographicText>
          </h1>
          
          <p 
            className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto mb-8 sm:mb-12 leading-relaxed px-4"
            style={{
              transform: `translateY(${scrollY * 0.06}px)`,
              transition: 'transform 0.1s ease-out',
            }}
          >
            Experience quality cuisine with cutting-edge technology. Pre-order your favorite meals 
            and skip the lunch rush with our intelligent ordering system.
          </p>

          <div 
            className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center mb-10"
            style={{
              transform: `translateY(${scrollY * 0.04}px)`,
              transition: 'transform 0.1s ease-out',
            }}
          >
            <RealisticGlass intensity="light" tint="blue" className="flex items-center space-x-3 px-5 py-3 rounded-xl ultra-hover">
              <Clock className="w-5 h-5 text-blue-400" />
              <span className="text-sm font-medium text-white">Instant Ordering</span>
            </RealisticGlass>
            <RealisticGlass intensity="light" tint="purple" className="flex items-center space-x-3 px-5 py-3 rounded-xl ultra-hover">
              <Shield className="w-5 h-5 text-purple-400" />
              <span className="text-sm font-medium text-white">Quality Food</span>
            </RealisticGlass>
            <RealisticGlass intensity="light" tint="amber" className="flex items-center space-x-3 px-5 py-3 rounded-xl ultra-hover">
              <Zap className="w-5 h-5 text-yellow-400" />
              <span className="text-sm font-medium text-white">Smart Technology</span>
            </RealisticGlass>
          </div>
        </div>

        {/* Role Selection Cards with Hyper-Realistic Glass */}
        <div 
          className="responsive-grid max-w-5xl mx-auto mb-16"
          style={{
            transform: `translateY(${scrollY * 0.03}px)`,
            transition: 'transform 0.1s ease-out',
          }}
        >
          {/* Student Card */}
          <Link to="/auth/student" className="group block">
            <RealisticGlass intensity="ultra" tint="blue" className="rounded-2xl p-8 ultra-hover transform-3d card-3d relative overflow-hidden">
              <div 
                className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full -translate-y-16 translate-x-16 group-hover:scale-150 transition-transform duration-700 realistic-lighting"
                style={{
                  transform: `translate(${16 + mousePosition.x * 0.02}px, ${-64 + mousePosition.y * 0.02}px) scale(${1 + scrollY * 0.0002})`,
                }}
              />
              <div className="relative z-10">
                <RealisticGlass intensity="medium" tint="blue" className="flex items-center justify-center w-16 sm:w-20 h-16 sm:h-20 rounded-2xl mb-6 sm:mb-8 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 cosmic-glow mx-auto sm:mx-0">
                  <Users className="w-8 sm:w-10 h-8 sm:h-10 text-white" />
                </RealisticGlass>
                <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4 group-hover:text-blue-300 transition-colors">Student Portal</h3>
                <p className="text-gray-300 mb-6 sm:mb-8 leading-relaxed text-base sm:text-lg">
                  Browse menus, place orders instantly, and track your food status in real-time. 
                  Perfect for busy students who value quality and efficiency.
                </p>
                <div className="flex items-center text-blue-400 font-semibold group-hover:text-blue-300 transition-colors text-base sm:text-lg">
                  <Shield className="w-5 sm:w-6 h-5 sm:h-6 mr-3" />
                  <span>Enter Portal</span>
                  <ArrowRight className="w-5 sm:w-6 h-5 sm:h-6 ml-3 transform group-hover:translate-x-3 transition-transform duration-300" />
                </div>
              </div>
            </RealisticGlass>
          </Link>

          {/* Staff Card */}
          <Link to="/auth/staff" className="group block">
            <RealisticGlass intensity="ultra" tint="amber" className="rounded-2xl p-8 ultra-hover transform-3d card-3d relative overflow-hidden">
              <div 
                className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-yellow-500/20 to-orange-500/20 rounded-full -translate-y-16 translate-x-16 group-hover:scale-150 transition-transform duration-700 realistic-lighting"
                style={{
                  transform: `translate(${16 - mousePosition.x * 0.02}px, ${-64 - mousePosition.y * 0.02}px) scale(${1 + scrollY * 0.0002})`,
                }}
              />
              <div className="relative z-10">
                <RealisticGlass intensity="medium" tint="amber" className="flex items-center justify-center w-16 sm:w-20 h-16 sm:h-20 rounded-2xl mb-6 sm:mb-8 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 mx-auto sm:mx-0" style={{ boxShadow: '0 0 30px rgba(255, 149, 0, 0.4), inset 0 2px 0 rgba(255, 255, 255, 0.2)' }}>
                  <ChefHat className="w-8 sm:w-10 h-8 sm:h-10 text-white" />
                </RealisticGlass>
                <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4 group-hover:text-yellow-300 transition-colors">Staff Portal</h3>
                <p className="text-gray-300 mb-6 sm:mb-8 leading-relaxed text-base sm:text-lg">
                  Manage orders efficiently, update menus dynamically, and streamline operations. 
                  Advanced tools for modern food service management.
                </p>
                <div className="flex items-center text-yellow-400 font-semibold group-hover:text-yellow-300 transition-colors text-base sm:text-lg">
                  <Shield className="w-5 sm:w-6 h-5 sm:h-6 mr-3" />
                  <span>Enter Portal</span>
                  <ArrowRight className="w-5 sm:w-6 h-5 sm:h-6 ml-3 transform group-hover:translate-x-3 transition-transform duration-300" />
                </div>
              </div>
            </RealisticGlass>
          </Link>
        </div>

        {/* Enhanced Features Section with Hyper-Realistic Effects */}
        <div 
          className="responsive-grid mb-16"
          style={{
            transform: `translateY(${scrollY * 0.02}px)`,
            transition: 'transform 0.1s ease-out',
          }}
        >
          {[
            {
              icon: Clock,
              title: "Time Efficiency",
              description: "Advanced ordering system eliminates waiting times during peak hours.",
              color: "purple",
              tint: "purple" as const,
              delay: "0s"
            },
            {
              icon: Utensils,
              title: "Quality Cuisine",
              description: "Curated selection of high-quality dishes from expert chefs.",
              color: "blue",
              tint: "blue" as const,
              delay: "0.2s"
            },
            {
              icon: Star,
              title: "Smart Notifications",
              description: "Real-time updates and intelligent order tracking system.",
              color: "yellow",
              tint: "amber" as const,
              delay: "0.4s"
            }
          ].map((feature, index) => (
            <div 
              key={index} 
              className="text-center group" 
              style={{ 
                animationDelay: feature.delay,
                transform: `translateY(${scrollY * (0.01 + index * 0.005)}px)`,
                transition: 'transform 0.1s ease-out',
              }}
            >
              <RealisticGlass 
                intensity="strong" 
                tint={feature.tint}
                className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6 group-hover:scale-125 group-hover:rotate-12 transition-all duration-500 floating-element"
              >
                <feature.icon className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
              </RealisticGlass>
              <h3 className="text-lg sm:text-xl font-semibold text-white mb-3 sm:mb-4 group-hover:text-blue-300 transition-colors">{feature.title}</h3>
              <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors text-sm sm:text-base">{feature.description}</p>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Landing;