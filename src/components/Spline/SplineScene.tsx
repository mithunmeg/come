import React, { Suspense } from 'react';
import Spline from '@splinetool/react-spline';

interface SplineSceneProps {
  scene?: string;
  className?: string;
  fallback?: React.ReactNode;
}

const SplineScene: React.FC<SplineSceneProps> = ({ 
  scene = "https://prod.spline.design/6Wq1Q7YGyM-iab9i/scene.splinecode", 
  className = "",
  fallback 
}) => {
  const defaultFallback = (
    <div className="w-full h-full flex items-center justify-center">
      <div className="text-center">
        <div className="w-16 h-16 glass-spinner rounded-full animate-spin mx-auto mb-4"></div>
        <p className="text-gray-400 text-sm">Loading 3D Scene...</p>
      </div>
    </div>
  );

  return (
    <div className={`w-full h-full ${className}`}>
      <Suspense fallback={fallback || defaultFallback}>
        <Spline 
          scene={scene}
          style={{ width: '100%', height: '100%' }}
        />
      </Suspense>
    </div>
  );
};

export default SplineScene;