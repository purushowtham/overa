import React, { useEffect, useRef, useState } from 'react';

export const CustomCursor: React.FC = () => {
  const cursorDotRef = useRef<HTMLDivElement>(null);
  const cursorCircleRef = useRef<HTMLDivElement>(null);
  const [cursorText, setCursorText] = useState<string>('');
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const [isVisible, setIsVisible] = useState<boolean>(false);

  useEffect(() => {
    // Check if device is touch or small screen
    if (typeof window === 'undefined' || window.matchMedia('(pointer: coarse)').matches) {
      return;
    }

    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let circleX = mouseX;
    let circleY = mouseY;
    let animationFrameId: number;

    const onMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      if (!isVisible) setIsVisible(true);

      if (cursorDotRef.current) {
        cursorDotRef.current.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
      }

      // Check for cursor text and hover targets
      const target = e.target as HTMLElement | null;
      if (!target) return;

      const cursorTarget = target.closest('[data-cursor]') as HTMLElement | null;
      if (cursorTarget) {
        const text = cursorTarget.getAttribute('data-cursor') || '';
        setCursorText(text);
        setIsHovered(true);
      } else {
        const isClickable = target.closest('a, button, [role="button"], input, textarea, select');
        if (isClickable) {
          setCursorText('');
          setIsHovered(true);
        } else {
          setCursorText('');
          setIsHovered(false);
        }
      }
    };

    const onMouseLeave = () => {
      setIsVisible(false);
    };

    const onMouseEnter = () => {
      setIsVisible(true);
    };

    const render = () => {
      // Smooth interpolation for the follower circle
      circleX += (mouseX - circleX) * 0.15;
      circleY += (mouseY - circleY) * 0.15;

      if (cursorCircleRef.current) {
        cursorCircleRef.current.style.transform = `translate3d(${circleX}px, ${circleY}px, 0)`;
      }

      animationFrameId = requestAnimationFrame(render);
    };

    window.addEventListener('mousemove', onMouseMove, { passive: true });
    document.addEventListener('mouseleave', onMouseLeave);
    document.addEventListener('mouseenter', onMouseEnter);
    animationFrameId = requestAnimationFrame(render);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseleave', onMouseLeave);
      document.removeEventListener('mouseenter', onMouseEnter);
      cancelAnimationFrame(animationFrameId);
    };
  }, [isVisible]);

  return (
    <div
      className={`fixed inset-0 pointer-events-none z-[99999] transition-opacity duration-300 hidden md:block ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
      aria-hidden="true"
    >
      {/* Center sharp dot */}
      <div
        ref={cursorDotRef}
        className={`fixed top-0 left-0 -ml-1 -mt-1 w-2 h-2 rounded-full bg-[#9A723E] pointer-events-none transition-transform duration-75 ease-out ${
          cursorText ? 'opacity-0' : 'opacity-100'
        }`}
      />

      {/* Trailing follower circle */}
      <div
        ref={cursorCircleRef}
        className={`fixed top-0 left-0 flex items-center justify-center pointer-events-none transition-all duration-200 ease-out border border-[#9A723E]/50 rounded-full ${
          cursorText
            ? '-ml-12 -mt-12 w-24 h-24 bg-[#4A3828]/90 text-[#F6F1E7] backdrop-blur-sm border-[#9A723E]'
            : isHovered
            ? '-ml-6 -mt-6 w-12 h-12 bg-[#9A723E]/15 scale-110'
            : '-ml-4 -mt-4 w-8 h-8'
        }`}
      >
        {cursorText && (
          <span className="font-sans text-[9px] tracking-[0.2em] uppercase font-medium text-center px-1 leading-tight select-none">
            {cursorText}
          </span>
        )}
      </div>
    </div>
  );
};
