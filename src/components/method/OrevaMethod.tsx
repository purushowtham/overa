import React from 'react';
import { Compass, CheckCircle2 } from 'lucide-react';
import { OREVA_METHOD_STEPS } from '../../data/projects';
import { sound } from '../../utils/sound';

export const OrevaMethod: React.FC = () => {
  return (
    <section id="method" className="py-24 md:py-36 px-6 md:px-12 bg-[#F6F1E7] border-b border-[#DED1BC]">
      <div className="max-w-6xl mx-auto space-y-20">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center space-x-2 text-[11px] font-sans tracking-[0.3em] uppercase text-[#9A723E] font-medium">
            <Compass className="w-3.5 h-3.5" />
            <span>THE CREATIVE PROTOCOL</span>
          </div>
          <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl text-[#24211D] font-normal">
            The ORÉVA Method
          </h2>
          <p className="font-sans text-xs sm:text-sm text-[#4A3828]/75 font-light leading-relaxed">
            Our sequential methodology translates abstract brand identity into tactile spatial realities that command reverence.
          </p>
        </div>

        {/* Vertical Connected Path */}
        <div className="relative">
          {/* Central Vertical Bronze Axis */}
          <div className="hidden md:block absolute left-1/2 top-4 bottom-4 -translate-x-1/2 w-[1px] bg-gradient-to-b from-[#9A723E] via-[#DED1BC] to-[#9A723E]" />

          <div className="space-y-16 md:space-y-24">
            {OREVA_METHOD_STEPS.map((step, idx) => {
              const isEven = idx % 2 === 0;

              return (
                <div
                  key={step.number}
                  onMouseEnter={() => sound.playHover()}
                  className="relative grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center group"
                >
                  {/* Step Node Marker in the Center for Desktop */}
                  <div className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-[#F6F1E7] border-2 border-[#9A723E] items-center justify-center shadow-md z-10 group-hover:scale-110 group-hover:bg-[#9A723E] group-hover:text-white transition-all duration-300">
                    <span className="font-mono text-[11px] text-[#4A3828] group-hover:text-[#F6F1E7] font-semibold">
                      {step.number}
                    </span>
                  </div>

                  {/* Left Column */}
                  <div
                    className={`${
                      isEven ? 'md:text-right md:pr-12' : 'md:order-2 md:text-left md:pl-12'
                    } space-y-3`}
                  >
                    <div className="flex md:hidden items-center space-x-3 mb-2">
                      <span className="w-7 h-7 rounded-full bg-[#9A723E] text-[#F6F1E7] font-mono text-xs flex items-center justify-center font-bold">
                        {step.number}
                      </span>
                      <span className="font-mono text-xs text-[#9A723E] tracking-widest">{step.stage}</span>
                    </div>

                    <span className="hidden md:block font-mono text-xs text-[#9A723E] tracking-[0.25em] uppercase">
                      STAGE {step.number} · {step.stage}
                    </span>

                    <h3 className="font-serif text-3xl sm:text-4xl text-[#24211D] group-hover:text-[#9A723E] transition-colors">
                      {step.tag}
                    </h3>

                    <p className="font-sans text-xs sm:text-sm text-[#4A3828]/80 font-light leading-relaxed">
                      {step.description}
                    </p>
                  </div>

                  {/* Right Column / Deliverable Card */}
                  <div
                    className={`${
                      isEven ? 'md:pl-12' : 'md:order-1 md:text-right md:pr-12'
                    }`}
                  >
                    <div className="p-6 bg-white/60 border border-[#DED1BC] space-y-2 group-hover:border-[#9A723E] transition-colors shadow-sm inline-block w-full max-w-md">
                      <div className="flex items-center space-x-2 text-[10px] font-sans tracking-widest uppercase text-[#9A723E] font-medium">
                        <CheckCircle2 className="w-3.5 h-3.5" />
                        <span>Key Deliverable</span>
                      </div>
                      <p className="font-serif text-lg text-[#24211D] italic font-medium">
                        "{step.deliverable}"
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
