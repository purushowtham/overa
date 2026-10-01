import React from 'react';

export const Manifesto: React.FC = () => {
  return (
    <section className="relative py-28 md:py-44 px-6 md:px-12 bg-[#F6F1E7] overflow-hidden border-b border-[#DED1BC]">
      {/* Background Architectural Watermark */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 select-none pointer-events-none opacity-[0.035] font-serif text-[18vw] leading-none whitespace-nowrap text-[#24211D]">
        ORÉVA
      </div>

      <div className="max-w-5xl mx-auto flex flex-col items-center text-center relative z-10 space-y-12">
        {/* Dynamic ORÉVA Central Axis Line */}
        <div className="w-[1px] h-20 bg-gradient-to-b from-[#9A723E] to-[#DED1BC]" />

        <div className="space-y-4">
          <span className="font-sans text-[11px] tracking-[0.4em] uppercase text-[#9A723E] font-medium block">
            THE MANIFESTO
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-normal text-[#24211D] tracking-tight leading-[1.1] max-w-4xl">
            A More Beautiful Way <br />
            <span className="italic text-[#9A723E]">To Experience.</span>
          </h2>
        </div>

        <div className="max-w-2xl mx-auto space-y-6">
          <p className="font-sans text-sm md:text-base text-[#4A3828]/85 font-light leading-relaxed">
            ORÉVA Studio conceives physical environments that transcend traditional retail display. We craft spaces that are not simply seen, but felt, remembered, and deeply desired.
          </p>

          <p className="font-sans text-xs md:text-sm text-[#4A3828]/70 font-light leading-relaxed">
            Combining Milanese restraint, Parisian editorial composition, and tactile material mastery, we give high fashion and luxury maisons an unmistakable architectural voice.
          </p>
        </div>

        {/* Studio Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full pt-12 border-t border-[#DED1BC]/70">
          <div className="space-y-2 text-center md:text-left">
            <span className="font-mono text-xs text-[#9A723E] block">01 / RESTRAINT</span>
            <h3 className="font-serif text-xl text-[#24211D]">Milanese Poise</h3>
            <p className="font-sans text-xs text-[#4A3828]/70 font-light leading-relaxed">
              Eliminating extraneous noise to let volume, raw travertine, and noble patinas command the room.
            </p>
          </div>

          <div className="space-y-2 text-center md:text-left">
            <span className="font-mono text-xs text-[#9A723E] block">02 / COMPOSITION</span>
            <h3 className="font-serif text-xl text-[#24211D]">Parisian Editorial</h3>
            <p className="font-sans text-xs text-[#4A3828]/70 font-light leading-relaxed">
              Every sightline framed like an art catalogue page, balancing soft natural shadows and intimate alcoves.
            </p>
          </div>

          <div className="space-y-2 text-center md:text-left">
            <span className="font-mono text-xs text-[#9A723E] block">03 / EMOTION</span>
            <h3 className="font-serif text-xl text-[#24211D]">Tactile Memory</h3>
            <p className="font-sans text-xs text-[#4A3828]/70 font-light leading-relaxed">
              Spaces designed to decelerate time, fostering intimate customer resonance and bespoke desire.
            </p>
          </div>
        </div>

        {/* Dynamic ORÉVA Central Axis Line Bottom */}
        <div className="w-[1px] h-16 bg-gradient-to-b from-[#DED1BC] to-[#9A723E]" />
      </div>
    </section>
  );
};
