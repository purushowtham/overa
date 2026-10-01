import React from 'react';
import { ArrowUp } from 'lucide-react';
import { sound } from '../../utils/sound';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    sound.playClick();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#24211D] text-[#DED1BC] py-16 px-6 md:px-12 border-t border-[#4A3828]/60">
      <div className="max-w-7xl mx-auto space-y-12">
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 rounded-full border border-[#9A723E] flex items-center justify-center">
                <span className="font-serif text-sm font-semibold text-[#9A723E]">O</span>
              </div>
              <h3 className="font-serif text-3xl tracking-[0.25em] text-[#F6F1E7] uppercase">
                ORÉVA
              </h3>
            </div>
            <p className="font-serif text-xl italic text-[#9A723E]">
              Spaces. Stories. Desire.
            </p>
            <p className="font-sans text-xs text-[#DED1BC]/60 font-light max-w-sm">
              A European creative studio working at the confluence of visual merchandising, architectural styling, and tactile brand storytelling.
            </p>
          </div>

          {/* Disciplines Column */}
          <div className="space-y-2 text-xs font-sans">
            <span className="text-[10px] tracking-[0.25em] uppercase text-[#9A723E] block mb-2 font-medium">
              CORE DISCIPLINES
            </span>
            <ul className="space-y-1 text-[#DED1BC]/80 font-light">
              <li>Visual Merchandising</li>
              <li>Spatial Styling & Artistry</li>
              <li>Retail Concepts & Pavilions</li>
              <li>Brand Storytelling & Scenography</li>
            </ul>
          </div>

          {/* Socials & Legal */}
          <div className="space-y-2 text-xs font-sans">
            <span className="text-[10px] tracking-[0.25em] uppercase text-[#9A723E] block mb-2 font-medium">
              DIRECT CHANNELS
            </span>
            <ul className="space-y-1 text-[#DED1BC]/80 font-light">
              <li>
                <a href="https://instagram.com" target="_blank" rel="noreferrer" className="hover:text-[#9A723E] transition-colors">
                  Instagram (@orevastudio)
                </a>
              </li>
              <li>
                <a href="mailto:inquiries@orevastudio.com" className="hover:text-[#9A723E] transition-colors">
                  inquiries@orevastudio.com
                </a>
              </li>
              <li>Paris · Milan · Tokyo</li>
            </ul>
          </div>
        </div>

        {/* Bottom Copyright & Back to Top */}
        <div className="pt-8 border-t border-[#4A3828] flex flex-col sm:flex-row items-center justify-between gap-4 text-[10px] font-sans tracking-widest text-[#DED1BC]/50 uppercase">
          <div>
            © {new Date().getFullYear()} ORÉVA STUDIO. ALL RIGHTS RESERVED.
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center space-x-2 text-[#9A723E] hover:text-[#F6F1E7] transition-colors cursor-pointer"
            data-cursor="TOP"
          >
            <span>Return To Surface</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
