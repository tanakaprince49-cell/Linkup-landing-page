import React, { useEffect, useRef, useState } from 'react';

export const CursorGlow: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const updateMousePosition = (ev: MouseEvent) => {
      if (!isHovering) setIsHovering(true);
      if (!containerRef.current) return;
      
      // Use requestAnimationFrame for smoother rendering
      requestAnimationFrame(() => {
        if (containerRef.current) {
          containerRef.current.style.setProperty('--x', `${ev.clientX}px`);
          containerRef.current.style.setProperty('--y', `${ev.clientY}px`);
        }
      });
    };

    const handleMouseLeave = () => setIsHovering(false);

    window.addEventListener('mousemove', updateMousePosition);
    document.addEventListener('mouseleave', handleMouseLeave);
    
    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [isHovering]);

  return (
    <div 
      ref={containerRef}
      className={`pointer-events-none fixed inset-0 z-[5] transition-opacity duration-700 hidden sm:block ${
        isHovering ? 'opacity-100' : 'opacity-0'
      }`}
      style={{
        background: 'radial-gradient(800px circle at var(--x, 50vw) var(--y, 50vh), rgba(251, 230, 24, 0.06), transparent 40%)'
      }}
    />
  );
};
