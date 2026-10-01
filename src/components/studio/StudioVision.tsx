import React from 'react';
import { Eye } from 'lucide-react';
import { STUDIO_PHILOSOPHIES } from '../../data/projects';

export const StudioVision: React.FC = () => {
  return (
    <section id="studio" className="py-24 md:py-36 px-6 md:px-12 bg-[#F6F1E7] border-b border-[#DED1BC] overflow-hidden">
      <div className="max-w-7xl mx-auto space-y-20">
        {/* Split Hero Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Editorial Vision Statement */}
          <div className="lg:col-span-6 space-y-6">
            <div className="flex items-center space-x-2 text-[11px] font-sans tracking-[0.3em] uppercase text-[#9A723E] font-medium">
              <Eye className="w-3.5 h-3.5" />
              <span>STUDIO PHILOSOPHY</span>
            </div>

            <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl text-[#24211D] font-normal leading-[1.05]">
              Spaces That <br />
              <span className="italic text-[#9A723E]">Speak.</span>
            </h2>

            <p className="font-sans text-xs sm:text-sm text-[#4A3828]/85 font-light leading-relaxed">
              Founded on the belief that physical architecture remains the most intoxicating canvas for brand intimacy, ORÉVA operates at the intersection of architectural discipline, high fashion styling, and evocative scenography.
            </p>

            <p className="font-sans text-xs sm:text-sm text-[#4A3828]/70 font-light leading-relaxed">
              We partner with global luxury maisons, bespoke craftsmen, and visionary curators who demand spaces of unapologetic presence and enduring tactile beauty.
            </p>

            {/* Quick Metrics */}
            <div className="grid grid-cols-3 gap-6 pt-6 border-t border-[#DED1BC]">
              <div className="space-y-1">
                <span className="font-serif text-3xl sm:text-4xl text-[#9A723E] font-medium block">14+</span>
                <span className="font-sans text-[10px] tracking-widest text-[#4A3828]/60 uppercase block">Years Studio Pedigree</span>
              </div>
              <div className="space-y-1">
                <span className="font-serif text-3xl sm:text-4xl text-[#9A723E] font-medium block">60+</span>
                <span className="font-sans text-[10px] tracking-widest text-[#4A3828]/60 uppercase block">Global Pavilions & Boutiques</span>
              </div>
              <div className="space-y-1">
                <span className="font-serif text-3xl sm:text-4xl text-[#9A723E] font-medium block">08</span>
                <span className="font-sans text-[10px] tracking-widest text-[#4A3828]/60 uppercase block">Design Accolades</span>
              </div>
            </div>
          </div>

          {/* Right Architectural Framing Image with Collage Accent */}
          <div className="lg:col-span-6 relative">
            <div className="relative h-[420px] sm:h-[500px] overflow-hidden border border-[#DED1BC] shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=85"
                alt="Studio Atmosphere"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-1000"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#24211D]/40 via-transparent to-transparent" />
            </div>

            {/* Floating Overlaid Plinth Box */}
            <div className="absolute -bottom-6 -left-6 bg-[#24211D] text-[#F6F1E7] p-6 max-w-xs shadow-2xl border border-[#9A723E]/40 hidden sm:block">
              <span className="font-mono text-[9px] text-[#9A723E] tracking-widest uppercase block mb-1">
                ATELIER STANDARD
              </span>
              <p className="font-serif text-sm italic">
                "We don't merely fill square meters; we choreograph how human desire flows through space."
              </p>
            </div>
          </div>
        </div>

        {/* 3 Core Philosophical Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-12 border-t border-[#DED1BC]">
          {STUDIO_PHILOSOPHIES.map((phi, i) => (
            <div key={i} className="p-8 bg-white/40 border border-[#DED1BC] space-y-3 hover:border-[#9A723E] transition-all">
              <span className="font-mono text-xs text-[#9A723E] tracking-widest block">
                0{i + 1} / PRINCIPLE
              </span>
              <h3 className="font-serif text-2xl text-[#24211D] font-normal">
                {phi.title}
              </h3>
              <p className="font-sans text-[11px] tracking-widest uppercase text-[#9A723E] font-medium">
                {phi.subtitle}
              </p>
              <p className="font-sans text-xs text-[#4A3828]/75 font-light leading-relaxed pt-1">
                {phi.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
