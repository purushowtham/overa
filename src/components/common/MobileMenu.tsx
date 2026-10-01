import React, { useEffect } from 'react';
import { X, ArrowRight, MapPin, Mail } from 'lucide-react';
import { sound } from '../../utils/sound';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenInquiry: () => void;
}

export const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose, onOpenInquiry }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const navItems = [
    { label: 'Selected Work', target: 'work', num: '01' },
    { label: 'Services Index', target: 'services', num: '02' },
    { label: 'Material Study', target: 'material', num: '03' },
    { label: 'ORÉVA Method', target: 'method', num: '04' },
    { label: 'Studio Vision', target: 'studio', num: '05' },
    { label: 'Contact', target: 'contact', num: '06' }
  ];

  const handleNav = (target: string) => {
    sound.playClick();
    onClose();
    setTimeout(() => {
      const el = document.getElementById(target);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }, 300);
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[99998] bg-[#F6F1E7] flex flex-col justify-between p-6 sm:p-10 transition-all duration-500 overflow-y-auto"
      aria-modal="true"
    >
      {/* Top Bar */}
      <div className="flex items-center justify-between border-b border-[#DED1BC] pb-5">
        <div className="flex items-center space-x-2">
          <div className="w-6 h-6 rounded-full border border-[#9A723E] flex items-center justify-center">
            <span className="font-serif text-xs text-[#9A723E]">O</span>
          </div>
          <span className="font-serif text-lg tracking-[0.2em] uppercase text-[#24211D]">ORÉVA STUDIO</span>
        </div>

        <button
          onClick={() => {
            sound.playClick();
            onClose();
          }}
          className="p-2 text-[#4A3828] hover:text-[#9A723E] flex items-center space-x-1.5 text-xs font-sans tracking-widest uppercase"
        >
          <span>Close</span>
          <X className="w-5 h-5" />
        </button>
      </div>

      {/* Nav List */}
      <div className="py-10 space-y-4">
        {navItems.map((item, idx) => (
          <button
            key={item.target}
            onClick={() => handleNav(item.target)}
            className="w-full text-left flex items-baseline justify-between py-2 border-b border-[#DED1BC]/40 group hover:border-[#9A723E] transition-all"
            style={{ animationDelay: `${idx * 60}ms` }}
          >
            <div className="flex items-baseline space-x-4">
              <span className="font-mono text-xs text-[#9A723E] tracking-widest">{item.num}</span>
              <span className="font-serif text-3xl sm:text-4xl text-[#24211D] group-hover:text-[#9A723E] group-hover:translate-x-2 transition-all">
                {item.label}
              </span>
            </div>
            <ArrowRight className="w-5 h-5 text-[#DED1BC] group-hover:text-[#9A723E] transition-colors" />
          </button>
        ))}
      </div>

      {/* Footer Info */}
      <div className="pt-6 border-t border-[#DED1BC] space-y-6">
        <button
          onClick={() => {
            sound.playClick();
            onClose();
            onOpenInquiry();
          }}
          className="w-full py-4 bg-[#4A3828] text-[#F6F1E7] text-xs font-sans tracking-[0.2em] uppercase flex items-center justify-center space-x-2"
        >
          <span>Start A Conversation</span>
          <ArrowRight className="w-4 h-4" />
        </button>

        <div className="flex flex-col sm:flex-row justify-between text-[11px] font-sans text-[#4A3828]/60 space-y-2 sm:space-y-0">
          <div className="flex items-center space-x-1.5">
            <MapPin className="w-3.5 h-3.5 text-[#9A723E]" />
            <span>Paris · Milan · Tokyo</span>
          </div>
          <div className="flex items-center space-x-1.5">
            <Mail className="w-3.5 h-3.5 text-[#9A723E]" />
            <span>contact@orevastudio.com</span>
          </div>
        </div>
      </div>
    </div>
  );
};
