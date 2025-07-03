import React, { useState, useEffect } from 'react';
import { Clock, Users, ChefHat, ArrowRight, Utensils, Star, Sparkles, Zap, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';
import SplineScene from '../components/Spline/SplineScene';

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
      {/* Spline 3D Background Scene */}
      <div className="absolute inset-0 z-0">
        <SplineScene 
          scene="https://prod.spline.design/6Wq1Q7YGyM-iab9i/scene.splinecode"
          className="opacity-30"
          fallback={
            <div className="w-full h-full flex items-center justify-center">
              <div className="text-center">
                <div className="w-20 h-20 glass-spinner rounded-full animate-spin mx-auto mb-6"></div>
                <p className="text-gray-300 text-lg">Loading Cosmic Experience...</p>
                <p className="text-gray-500 text-sm mt-2">Preparing your 3D journey</p>
              </div>
            </div>
          }
        />
      </div>

      {/* Enhanced Dynamic Background Elements with Parallax */}
      <div className="absolute inset-0 overflow-hidden z-1">
        {/* Floating Particles with Parallax */}
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute floating-element"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${Math.random() * 4 + 2}px`,
              height: `${Math.random() * 4 + 2}px`,
              background: i % 4 === 0 ? '#007AFF' : i % 4 === 1 ? '#5856D6' : i % 4 === 2 ? '#FF9500' : '#34C759',
              borderRadius: '50%',
              animationDelay: `${Math.random() * 10}s`,
              opacity: 0.4,
              filter: 'blur(0.5px)',
              transform: `translateY(${scrollY * (0.1 + i * 0.02)}px)`,
              transition: 'transform 0.1s ease-out',
            }}
          />
        ))}
        
        {/* Large Parallax Background Orbs */}
        <div 
          className="absolute w-96 h-96 rounded-full opacity-10"
          style={{
            background: 'radial-gradient(circle, rgba(0, 122, 255, 0.3) 0%, transparent 70%)',
            top: '10%',
            left: '10%',
            transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02 + scrollY * 0.3}px)`,
            transition: 'transform 0.3s ease-out',
          }}
        />
        <div 
          className="absolute w-80 h-80 rounded-full opacity-8"
          style={{
            background: 'radial-gradient(circle, rgba(88, 86, 214, 0.25) 0%, transparent 70%)',
            top: '60%',
            right: '15%',
            transform: `translate(${-mousePosition.x * 0.03}px, ${-mousePosition.y * 0.03 + scrollY * 0.2}px)`,
            transition: 'transform 0.3s ease-out',
          }}
        />
        <div 
          className="absolute w-64 h-64 rounded-full opacity-6"
          style={{
            background: 'radial-gradient(circle, rgba(255, 149, 0, 0.2) 0%, transparent 70%)',
            bottom: '20%',
            left: '20%',
            transform: `translate(${mousePosition.x * 0.025}px, ${mousePosition.y * 0.025 + scrollY * 0.15}px)`,
            transition: 'transform 0.3s ease-out',
          }}
        />
        
        {/* Parallax Background Layers */}
        <div 
          className="absolute inset-0 opacity-15"
          style={{
            background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(0, 122, 255, 0.08) 0%, transparent 50%)`,
            transform: `translateY(${scrollY * 0.1}px)`,
            transition: 'background 0.3s ease, transform 0.1s ease-out',
          }}
        />
        
        {/* Additional Parallax Layers */}
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            background: `conic-gradient(from ${mousePosition.x}deg at ${mousePosition.x}% ${mousePosition.y}%, rgba(88, 86, 214, 0.1) 0deg, transparent 120deg, rgba(255, 149, 0, 0.1) 240deg, transparent 360deg)`,
            transform: `translateY(${scrollY * 0.05}px) rotate(${scrollY * 0.02}deg)`,
            transition: 'background 0.5s ease, transform 0.1s ease-out',
          }}
        />
      </div>

      {/* Header with Parallax */}
      <header className="glass-morphism border-b border-white/15 relative z-10">
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
                <span className="text-2xl sm:text-3xl font-bold cosmic-text tracking-wider">Cosmic Cantina</span>
                <div className="text-sm text-gray-400 font-medium">Digital Dining System</div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section with Enhanced Parallax */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-16 relative z-10">
        <div 
          className="text-center mb-12 sm:mb-20"
          style={{
            transform: `translateY(${scrollY * 0.1}px)`,
            transition: 'transform 0.1s ease-out',
          }}
        >
          <div className="mb-8">
            <div 
              className="inline-flex items-center space-x-2 glass-morphism px-6 py-3 rounded-full border border-white/20 mb-8 hover-lift cosmic-glow"
              style={{
                transform: `translateY(${scrollY * 0.05}px)`,
                transition: 'transform 0.1s ease-out',
              }}
            >
              <Star className="w-5 h-5 text-blue-400" />
              <span className="text-blue-300 text-sm font-medium">Smart Digital Ordering</span>
              <Sparkles className="w-5 h-5 text-purple-400" />
            </div>
          </div>
          
          <h1 
            className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 sm:mb-8 tracking-tight leading-tight"
            style={{
              transform: `translateY(${scrollY * 0.08}px)`,
              transition: 'transform 0.1s ease-out',
            }}
          >
            Skip the Queue,<br />
            <span className="cosmic-text text-5xl sm:text-6xl md:text-7xl">Order Smart</span>
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
            <div className="flex items-center space-x-3 glass-card px-5 py-3 rounded-xl hover-lift">
              <Clock className="w-5 h-5 text-blue-400" />
              <span className="text-sm font-medium text-white">Instant Ordering</span>
            </div>
            <div className="flex items-center space-x-3 glass-card px-5 py-3 rounded-xl hover-lift">
              <Shield className="w-5 h-5 text-purple-400" />
              <span className="text-sm font-medium text-white">Quality Food</span>
            </div>
            <div className="flex items-center space-x-3 glass-card px-5 py-3 rounded-xl hover-lift">
              <Zap className="w-5 h-5 text-yellow-400" />
              <span className="text-sm font-medium text-white">Smart Technology</span>
            </div>
          </div>
        </div>

        {/* Role Selection Cards with Parallax */}
        <div 
          className="responsive-grid max-w-5xl mx-auto mb-16"
          style={{
            transform: `translateY(${scrollY * 0.03}px)`,
            transition: 'transform 0.1s ease-out',
          }}
        >
          {/* Student Card */}
          <Link to="/auth/student" className="group block">
            <div className="glass-card rounded-2xl p-8 hover-lift transition-all duration-500 relative overflow-hidden interactive-card gradient-border enhanced-hover">
              <div 
                className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-500/15 to-purple-500/15 rounded-full -translate-y-16 translate-x-16 group-hover:scale-150 transition-transform duration-700"
                style={{
                  transform: `translate(${16 + mousePosition.x * 0.01}px, ${-64 + mousePosition.y * 0.01}px) scale(${1 + scrollY * 0.0001})`,
                }}
              ></div>
              <div className="relative z-10">
                <div className="flex items-center justify-center w-16 sm:w-20 h-16 sm:h-20 glass-morphism rounded-2xl mb-6 sm:mb-8 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 cosmic-glow">
                  <Users className="w-8 sm:w-10 h-8 sm:h-10 text-white" />
                </div>
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
            </div>
          </Link>

          {/* Staff Card */}
          <Link to="/auth/staff" className="group block">
            <div className="glass-card rounded-2xl p-8 hover-lift transition-all duration-500 relative overflow-hidden interactive-card gradient-border enhanced-hover">
              <div 
                className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-yellow-500/15 to-orange-500/15 rounded-full -translate-y-16 translate-x-16 group-hover:scale-150 transition-transform duration-700"
                style={{
                  transform: `translate(${16 - mousePosition.x * 0.01}px, ${-64 - mousePosition.y * 0.01}px) scale(${1 + scrollY * 0.0001})`,
                }}
              ></div>
              <div className="relative z-10">
                <div className="flex items-center justify-center w-16 sm:w-20 h-16 sm:h-20 glass-morphism rounded-2xl mb-6 sm:mb-8 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500" style={{ boxShadow: '0 0 20px rgba(255, 149, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.1)' }}>
                  <ChefHat className="w-8 sm:w-10 h-8 sm:h-10 text-white" />
                </div>
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
            </div>
          </Link>
        </div>

        {/* Enhanced Features Section with Parallax */}
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
              delay: "0s"
            },
            {
              icon: Utensils,
              title: "Quality Cuisine",
              description: "Curated selection of high-quality dishes from expert chefs.",
              color: "blue",
              delay: "0.2s"
            },
            {
              icon: Star,
              title: "Smart Notifications",
              description: "Real-time updates and intelligent order tracking system.",
              color: "yellow",
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
              <div className={`w-14 h-14 sm:w-16 sm:h-16 glass-morphism rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6 group-hover:scale-125 group-hover:rotate-12 transition-all duration-500 floating-element`} style={{ 
                boxShadow: feature.color === 'purple' 
                  ? '0 0 20px rgba(88, 86, 214, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.1)'
                  : feature.color === 'blue'
                  ? '0 0 20px rgba(0, 122, 255, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.1)'
                  : '0 0 20px rgba(255, 149, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.1)'
              }}>
                <feature.icon className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
              </div>
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