import React, { useEffect, useState } from 'react';

interface PreloaderProps {
  onComplete: () => void;
}

export const Preloader: React.FC<PreloaderProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [isDone, setIsDone] = useState(false);
  const [shouldUnmount, setShouldUnmount] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          return 100;
        }
        const increment = Math.floor(Math.random() * 25) + 10;
        return Math.min(prev + increment, 100);
      });
    }, 70);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (progress === 100) {
      const exitTimer = setTimeout(() => {
        setIsDone(true);
        onComplete();
      }, 350);

      const unmountTimer = setTimeout(() => {
        setShouldUnmount(true);
      }, 1200);

      return () => {
        clearTimeout(exitTimer);
        clearTimeout(unmountTimer);
      };
    }
  }, [progress, onComplete]);

  if (shouldUnmount) return null;

  return (
    <div
      className={`fixed inset-0 z-[999999] bg-[#F6F1E7] flex flex-col items-center justify-between py-12 px-6 transition-all duration-800 ease-[cubic-bezier(0.85,0,0.15,1)] ${
        isDone ? '-translate-y-full opacity-90' : 'translate-y-0 opacity-100'
      }`}
      aria-hidden="true"
    >
      <div className="w-full max-w-7xl flex items-center justify-between text-[11px] font-sans tracking-[0.25em] text-[#4A3828]/60 uppercase">
        <span>ORÉVA STUDIO</span>
        <span>PARIS · MILAN · TOKYO</span>
      </div>

      <div className="flex flex-col items-center text-center space-y-6">
        {/* Monogram emblem */}
        <div className="relative w-16 h-16 flex items-center justify-center">
          <div className="absolute inset-0 rounded-full border border-[#9A723E]/40 animate-spin [animation-duration:12s]" />
          <div className="w-10 h-10 rounded-full border border-[#4A3828]/30 flex items-center justify-center">
            <span className="font-serif text-lg text-[#9A723E] italic">O</span>
          </div>
        </div>

        <div className="space-y-2">
          <h1 className="font-serif text-3xl md:text-4xl tracking-[0.35em] text-[#24211D] uppercase">
            ORÉVA
          </h1>
          <p className="font-sans text-[10px] tracking-[0.4em] text-[#9A723E] uppercase font-light">
            STUDIO · VISUAL MERCHANDISING
          </p>
        </div>
      </div>

      <div className="w-full max-w-xs flex flex-col items-center space-y-3">
        <div className="w-full h-[1px] bg-[#DED1BC] relative overflow-hidden">
          <div
            className="absolute top-0 left-0 h-full bg-[#9A723E] transition-all duration-300 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>
        <div className="flex items-center justify-between w-full text-[10px] font-sans tracking-[0.2em] text-[#4A3828]/60">
          <span>SPACES · STORIES · DESIRE</span>
          <span className="font-mono text-[#9A723E]">{String(progress).padStart(2, '0')}%</span>
        </div>
      </div>
    </div>
  );
};
