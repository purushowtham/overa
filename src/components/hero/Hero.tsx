import React, { Suspense, lazy } from 'react';
import { ArrowDown, Sparkles } from 'lucide-react';
import { sound } from '../../utils/sound';

const HeroMonogram3D = lazy(() =>
  import('./HeroMonogram3D').then((m) => ({ default: m.HeroMonogram3D }))
);

interface HeroProps {
  onOpenInquiry: () => void;
  onExploreWork: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenInquiry, onExploreWork }) => {
  return (
    <section className="relative min-h-screen w-full flex flex-col justify-between pt-28 pb-12 px-6 md:px-12 overflow-hidden bg-[#F6F1E7]">
      {/* Top Editorial Tagline */}
      <div className="max-w-7xl mx-auto w-full flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#DED1BC]/80 pb-6">
        

        <div className="flex items-center space-x-6 text-[10px] sm:text-[11px] font-sans tracking-[0.25em] uppercase text-[#4A3828]/60">
          <span>PARIS</span>
          <span>·</span>
          <span>MILANO</span>
          <span>·</span>
          <span>TOKYO</span>
        </div>
      </div>

      {/* Main Hero Stage: Layered Editorial Image & 3D Bronze Sculpture */}
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-8 items-center my-auto py-8">
        {/* Left Column: Monumental Editorial Statement */}
        <div className="lg:col-span-6 space-y-6 z-10">
          <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-normal text-[#24211D] tracking-tight leading-[0.95]">
            Spaces. <br />
            <span className="italic font-light text-[#9A723E]">Stories.</span> <br />
            Desire.
          </h1>

          <p className="font-sans text-xs sm:text-sm text-[#4A3828]/80 max-w-lg leading-relaxed font-light">
            We architect tactile retail sanctuaries, high-fashion window scenography, and poetic brand narratives that turn spaces into lasting cultural moments.
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-4">
            <button
              onClick={() => {
                sound.playClick();
                onExploreWork();
              }}
              className="px-7 py-3.5 bg-[#4A3828] hover:bg-[#9A723E] text-[#F6F1E7] text-xs font-sans tracking-[0.2em] uppercase transition-all duration-300 shadow-md group"
              data-cursor="PORTFOLIO"
            >
              <span>Explore Selected Work</span>
            </button>

            <button
              onClick={() => {
                sound.playClick();
                onOpenInquiry();
              }}
              className="px-7 py-3.5 border border-[#4A3828] hover:border-[#9A723E] hover:text-[#9A723E] text-[#4A3828] text-xs font-sans tracking-[0.2em] uppercase transition-all duration-300 bg-transparent"
              data-cursor="INQUIRE"
            >
              <span>Studio Consultation</span>
            </button>
          </div>
        </div>

        {/* Right Column: Layered Editorial Image & 3D Interactive Sculpture */}
        <div className="lg:col-span-6 relative flex items-center justify-center min-h-[420px] md:min-h-[520px]">
          {/* Background Architectural Canvas */}
          <div className="w-full max-w-md md:max-w-lg h-[400px] md:h-[480px] relative overflow-hidden shadow-2xl border border-[#DED1BC]">
            <img
              src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=85"
              alt="ORÉVA Architectural Concept"
              className="w-full h-full object-cover filter brightness-[0.92] contrast-[1.05] hover:scale-105 transition-transform duration-1000 ease-out"
            />
            {/* Subtle Gradient Veil */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#24211D]/60 via-transparent to-[#F6F1E7]/20" />

            <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-[#F6F1E7] text-[10px] font-sans tracking-[0.2em] uppercase">
              <span>Maison Néo-Classique</span>
              <span className="text-[#DED1BC]">Place Vendôme</span>
            </div>
          </div>

          {/* Floating 3D Bronze Sculpture (Overlaid) */}
          <div className="absolute -top-6 -right-6 md:-top-10 md:-right-8 w-60 h-60 md:w-72 md:h-72 pointer-events-auto">
            <Suspense
              fallback={
                <div className="w-full h-full flex items-center justify-center">
                  <div className="w-12 h-12 rounded-full border border-[#9A723E]/30 animate-spin" />
                </div>
              }
            >
              <HeroMonogram3D />
            </Suspense>
          </div>

          {/* Editorial badge */}
          <div className="absolute -bottom-4 -left-4 bg-[#F6F1E7] border border-[#DED1BC] p-4 shadow-lg hidden sm:block">
            <span className="font-mono text-[9px] text-[#9A723E] tracking-widest block uppercase">ORÉVA CODEX</span>
            <span className="font-serif text-sm text-[#24211D] italic block">"A more beautiful way to experience."</span>
          </div>
        </div>
      </div>

      {/* Hero Bottom Bar with Scroll Indicator */}
      <div className="max-w-7xl mx-auto w-full flex items-center justify-between pt-6 border-t border-[#DED1BC]/80">
        <div className="text-[10px] font-sans tracking-[0.25em] text-[#4A3828]/60 uppercase">
          DISCIPLINES: VISUAL MERCHANDISING · SCENOGRAPHY · STYLING
        </div>

        <button
          onClick={() => {
            sound.playClick();
            onExploreWork();
          }}
          className="flex items-center space-x-2 text-[10px] font-sans tracking-[0.25em] text-[#9A723E] uppercase hover:text-[#4A3828] transition-colors group"
          data-cursor="SCROLL"
        >
          <span>Scroll To Discover</span>
          <ArrowDown className="w-3.5 h-3.5 group-hover:translate-y-1 transition-transform animate-bounce" />
        </button>
      </div>
    </section>
  );
};
