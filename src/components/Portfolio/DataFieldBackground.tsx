import { useEffect, useRef } from 'react';
import { createDataFieldAnimation } from '@/lib/anime-utils';

interface DataFieldBackgroundProps {
  particleCount?: number;
  showGrid?: boolean;
}

const DataFieldBackground = ({ 
  particleCount = 25,
  showGrid = true 
}: DataFieldBackgroundProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<ReturnType<typeof createDataFieldAnimation> | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    // Create data field animation
    animationRef.current = createDataFieldAnimation(containerRef.current, {
      particleCount,
      color: '#00D4FF',
      duration: 5000,
    });

    return () => {
      animationRef.current?.destroy();
    };
  }, [particleCount]);

  return (
    <div className="data-field-bg">
      {/* Grid overlay */}
      {showGrid && (
        <div className="data-field-grid" />
      )}
      
      {/* Gradient overlay for depth */}
      <div 
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(ellipse at 20% 20%, rgba(0, 212, 255, 0.08) 0%, transparent 50%),
            radial-gradient(ellipse at 80% 80%, rgba(22, 255, 0, 0.05) 0%, transparent 50%),
            radial-gradient(ellipse at 50% 50%, rgba(139, 92, 246, 0.03) 0%, transparent 70%)
          `
        }}
      />
      
      {/* Animated particles container */}
      <div 
        ref={containerRef}
        className="data-field-particles"
      />
      
      {/* Subtle scan line effect */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0, 212, 255, 0.01) 2px, rgba(0, 212, 255, 0.01) 4px)',
        }}
      />
    </div>
  );
};

export default DataFieldBackground;
