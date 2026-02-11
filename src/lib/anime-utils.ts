import { animate, stagger, createTimeline, utils } from 'animejs';
import { useEffect, useRef, useCallback } from 'react';

/**
 * Anime.js v4 utility functions for portfolio animations
 */

// Data field particle animation - creates floating nodes with connections
export const createDataFieldAnimation = (
  container: HTMLElement,
  options: {
    particleCount?: number;
    color?: string;
    duration?: number;
  } = {}
) => {
  const { particleCount = 20, color = '#00D4FF', duration = 4000 } = options;
  
  // Create particles
  const particles: HTMLDivElement[] = [];
  for (let i = 0; i < particleCount; i++) {
    const particle = document.createElement('div');
    particle.className = 'data-particle';
    const size = Math.random() * 6 + 2;
    particle.style.cssText = `
      position: absolute;
      width: ${size}px;
      height: ${size}px;
      background: ${color};
      border-radius: 50%;
      opacity: 0;
      box-shadow: 0 0 10px ${color}, 0 0 20px ${color}40;
      pointer-events: none;
      left: ${Math.random() * 100}%;
      top: ${Math.random() * 100}%;
    `;
    container.appendChild(particle);
    particles.push(particle);
  }

  // Animate particles using v4 API
  const animations = particles.map((particle, i) => {
    return animate(particle, {
      translateX: { from: 0, to: utils.random(-100, 100) },
      translateY: { from: 0, to: utils.random(-100, 100) },
      scale: { from: 0, to: utils.random(0.5, 1.5) },
      opacity: { from: 0, to: utils.random(0.3, 0.8) },
      duration: utils.random(duration, duration * 2),
      delay: utils.random(0, duration / 2),
      ease: 'inOutQuad',
      loop: true,
      alternate: true,
    });
  });

  return {
    animations,
    destroy: () => {
      animations.forEach(anim => anim.pause());
      particles.forEach(p => p.remove());
    }
  };
};

// Liquid bubble animation for header
export const createBubbleAnimation = (
  container: HTMLElement,
  options: {
    bubbleCount?: number;
    colors?: string[];
    minSize?: number;
    maxSize?: number;
  } = {}
) => {
  const { 
    bubbleCount = 15, 
    colors = ['#00D4FF', '#16FF00', '#ffffff'],
    minSize = 4,
    maxSize = 12
  } = options;

  const bubbles: HTMLDivElement[] = [];
  
  for (let i = 0; i < bubbleCount; i++) {
    const bubble = document.createElement('div');
    const size = Math.random() * (maxSize - minSize) + minSize;
    const color = colors[Math.floor(Math.random() * colors.length)];
    
    bubble.className = 'header-bubble';
    bubble.style.cssText = `
      position: absolute;
      width: ${size}px;
      height: ${size}px;
      background: radial-gradient(circle at 30% 30%, ${color}80, ${color}20);
      border-radius: 50%;
      opacity: 0;
      pointer-events: none;
      filter: blur(${size > 8 ? 1 : 0}px);
      border: 1px solid ${color}40;
      left: ${utils.random(5, 95)}%;
      bottom: ${utils.random(-10, 30)}%;
    `;
    container.appendChild(bubble);
    bubbles.push(bubble);
  }

  const animations = bubbles.map((bubble) => {
    return animate(bubble, {
      translateY: { from: utils.random(20, 40), to: utils.random(-20, -40) },
      translateX: utils.random(-30, 30),
      scale: { from: 0.5, to: utils.random(0.8, 1.2) },
      opacity: { from: 0, to: utils.random(0.4, 0.8) },
      duration: utils.random(3000, 5000),
      delay: utils.random(0, 2000),
      ease: 'inOutSine',
      loop: true,
      alternate: true,
    });
  });

  return {
    animations,
    destroy: () => {
      animations.forEach(anim => anim.pause());
      bubbles.forEach(b => b.remove());
    }
  };
};

// Stagger animation for lists/grids
export const staggerReveal = (
  elements: HTMLElement[] | NodeListOf<Element>,
  options: {
    delay?: number;
    duration?: number;
    translateY?: number;
  } = {}
) => {
  const { delay = 100, duration = 800, translateY = 30 } = options;

  return animate(elements, {
    translateY: { from: translateY, to: 0 },
    opacity: { from: 0, to: 1 },
    duration,
    delay: stagger(delay),
    ease: 'outExpo',
  });
};

// Connection line animation (for data flow effect)
export const createConnectionLine = (
  svg: SVGSVGElement,
  from: { x: number; y: number },
  to: { x: number; y: number },
  color: string = '#00D4FF'
) => {
  const line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
  line.setAttribute('x1', String(from.x));
  line.setAttribute('y1', String(from.y));
  line.setAttribute('x2', String(from.x));
  line.setAttribute('y2', String(from.y));
  line.setAttribute('stroke', color);
  line.setAttribute('stroke-width', '1');
  line.setAttribute('opacity', '0.5');
  svg.appendChild(line);

  animate(line, {
    x2: to.x,
    y2: to.y,
    opacity: { from: 0, to: 0.5 },
    duration: 2000,
    ease: 'inOutQuad',
    onComplete: () => line.remove(),
  });

  return line;
};

// Custom hook for Anime.js timeline
export const useAnimeTimeline = () => {
  const timelineRef = useRef<ReturnType<typeof createTimeline> | null>(null);

  useEffect(() => {
    timelineRef.current = createTimeline();
    
    return () => {
      timelineRef.current?.pause();
    };
  }, []);

  const add = useCallback((target: any, params: any, offset?: string | number) => {
    if (timelineRef.current) {
      timelineRef.current.add(target, params, offset);
    }
  }, []);

  return { timeline: timelineRef, add };
};

// Pulse animation for data nodes
export const pulseAnimation = (element: HTMLElement, color: string = '#00D4FF') => {
  return animate(element, {
    boxShadow: {
      from: `0 0 0 0 ${color}40`,
      to: `0 0 0 15px ${color}00`,
    },
    duration: 1500,
    ease: 'outQuad',
    loop: true,
  });
};

// Liquid morph animation
export const liquidMorph = (element: HTMLElement) => {
  return animate(element, {
    borderRadius: {
      from: '30% 70% 70% 30% / 30% 30% 70% 70%',
      to: '70% 30% 30% 70% / 70% 70% 30% 30%',
    },
    duration: 8000,
    ease: 'inOutSine',
    alternate: true,
    loop: true,
  });
};
