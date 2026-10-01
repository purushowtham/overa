import React, { useState, useEffect } from 'react';
import { Volume2, VolumeX, Menu, ArrowUpRight } from 'lucide-react';
import { sound } from '../../utils/sound';

interface NavbarProps {
  onOpenMenu: () => void;
  onOpenInquiry: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenMenu, onOpenInquiry }) => {
  const [scrolled, setScrolled] = useState(false);
  const [soundEnabled, setSoundEnabled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSoundToggle = () => {
    const state = sound.toggleSound();
    setSoundEnabled(state);
  };

  const scrollToSection = (id: string) => {
    sound.playClick();
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-[#F6F1E7]/85 backdrop-blur-md py-4 border-b border-[#DED1BC]/60 shadow-[0_4px_20px_rgba(74,56,40,0.03)]'
          : 'bg-transparent py-7'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Brand Monogram & Logo */}
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            sound.playClick();
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="flex items-center space-x-3 group"
          data-cursor="HOME"
        >
          <div className="w-8 h-8 rounded-full border border-[#9A723E] flex items-center justify-center transition-transform duration-500 group-hover:rotate-180">
            <span className="font-serif text-sm font-semibold text-[#9A723E]">O</span>
          </div>
          <div className="flex flex-col">
            <span className="font-serif text-xl tracking-[0.25em] text-[#24211D] uppercase leading-none">
              ORÉVA
            </span>
            <span className="font-sans text-[8px] tracking-[0.35em] text-[#9A723E] uppercase font-light mt-0.5">
              STUDIO
            </span>
          </div>
        </a>

        {/* Desktop Links */}
        <nav className="hidden lg:flex items-center space-x-10 text-[11px] font-sans tracking-[0.25em] uppercase text-[#4A3828]/80 font-medium">
          <button
            onClick={() => scrollToSection('work')}
            onMouseEnter={() => sound.playHover()}
            className="hover:text-[#9A723E] transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-[#9A723E] hover:after:w-full after:transition-all after:duration-300"
          >
            Work
          </button>
          <button
            onClick={() => scrollToSection('services')}
            onMouseEnter={() => sound.playHover()}
            className="hover:text-[#9A723E] transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-[#9A723E] hover:after:w-full after:transition-all after:duration-300"
          >
            Services
          </button>
          <button
            onClick={() => scrollToSection('material')}
            onMouseEnter={() => sound.playHover()}
            className="hover:text-[#9A723E] transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-[#9A723E] hover:after:w-full after:transition-all after:duration-300"
          >
            Material
          </button>
          <button
            onClick={() => scrollToSection('method')}
            onMouseEnter={() => sound.playHover()}
            className="hover:text-[#9A723E] transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-[#9A723E] hover:after:w-full after:transition-all after:duration-300"
          >
            Method
          </button>
          <button
            onClick={() => scrollToSection('studio')}
            onMouseEnter={() => sound.playHover()}
            className="hover:text-[#9A723E] transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-[#9A723E] hover:after:w-full after:transition-all after:duration-300"
          >
            Studio
          </button>
          <button
            onClick={() => scrollToSection('contact')}
            onMouseEnter={() => sound.playHover()}
            className="hover:text-[#9A723E] transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-[#9A723E] hover:after:w-full after:transition-all after:duration-300"
          >
            Contact
          </button>
        </nav>

        {/* Right Actions: Sound & Inquire */}
        <div className="flex items-center space-x-4">
          {/* Sound Synthesizer Toggle */}
          <button
            onClick={handleSoundToggle}
            className="flex items-center space-x-2 text-[10px] font-sans tracking-widest uppercase px-3 py-1.5 rounded-full border border-[#DED1BC] hover:border-[#9A723E] text-[#4A3828] transition-colors"
            title={soundEnabled ? 'Mute Soundscape' : 'Enable Tactile Soundscape'}
            data-cursor="SOUND"
          >
            {soundEnabled ? (
              <>
                <Volume2 className="w-3.5 h-3.5 text-[#9A723E] animate-pulse" />
                <span className="hidden sm:inline">Sound On</span>
              </>
            ) : (
              <>
                <VolumeX className="w-3.5 h-3.5 text-[#4A3828]/50" />
                <span className="hidden sm:inline">Audio</span>
              </>
            )}
          </button>

          {/* Inquire CTA Button */}
          <button
            onClick={() => {
              sound.playClick();
              onOpenInquiry();
            }}
            className="hidden sm:flex items-center space-x-2 px-5 py-2.5 bg-[#4A3828] hover:bg-[#9A723E] text-[#F6F1E7] text-[11px] font-sans tracking-[0.2em] uppercase transition-all duration-300 group shadow-sm"
            data-cursor="INQUIRE"
          >
            <span>Inquire</span>
            <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => {
              sound.playClick();
              onOpenMenu();
            }}
            className="lg:hidden p-2 text-[#4A3828] hover:text-[#9A723E] transition-colors"
            aria-label="Open Navigation Menu"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </div>
    </header>
  );
};
