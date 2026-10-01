import React, { useState } from 'react';
import { ArrowUpRight, Check, Plus, Minus } from 'lucide-react';
import { SERVICES_LIST } from '../../data/projects';
import { sound } from '../../utils/sound';

interface ServicesSectionProps {
  onOpenInquiry: (serviceName?: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onOpenInquiry }) => {
  const [activeServiceIndex, setActiveServiceIndex] = useState<number>(0);
  const [expandedMobile, setExpandedMobile] = useState<number | null>(0);

  const activeService = SERVICES_LIST[activeServiceIndex];

  return (
    <section id="services" className="py-24 md:py-36 px-6 md:px-12 bg-[#F6F1E7] border-b border-[#DED1BC] overflow-hidden">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Section Title */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-[#DED1BC] pb-8">
          <div className="space-y-2">
            <span className="font-sans text-[11px] tracking-[0.3em] uppercase text-[#9A723E] font-medium block">
              CAPABILITIES & DISCIPLINES
            </span>
            <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl text-[#24211D] font-normal">
              Services Index
            </h2>
          </div>
          <p className="font-sans text-xs sm:text-sm text-[#4A3828]/70 font-light max-w-md">
            Editorial curation and architectural direction tailored for luxury fashion houses, private ateliers, and design exhibitions.
          </p>
        </div>

        {/* Desktop Layout: Service List (Left) + Floating Preview Card (Right) */}
        <div className="hidden lg:grid grid-cols-12 gap-12 items-start">
          {/* Left Column: Interactive Index List */}
          <div className="col-span-7 space-y-2">
            {SERVICES_LIST.map((srv, idx) => {
              const isActive = activeServiceIndex === idx;
              return (
                <div
                  key={srv.number}
                  onMouseEnter={() => {
                    sound.playHover();
                    setActiveServiceIndex(idx);
                  }}
                  onClick={() => {
                    sound.playClick();
                    onOpenInquiry(srv.title);
                  }}
                  className={`group p-6 border-b transition-all duration-300 cursor-pointer flex items-center justify-between ${
                    isActive
                      ? 'border-[#9A723E] bg-[#DED1BC]/20'
                      : 'border-[#DED1BC]/70 hover:border-[#9A723E]/50'
                  }`}
                  data-cursor="INQUIRE"
                >
                  <div className="flex items-baseline space-x-6">
                    <span className="font-mono text-sm text-[#9A723E] tracking-widest">
                      {srv.number}
                    </span>
                    <div>
                      <h3
                        className={`font-serif text-2xl xl:text-3xl transition-all duration-300 ${
                          isActive
                            ? 'text-[#24211D] translate-x-2'
                            : 'text-[#4A3828]/75 group-hover:text-[#24211D]'
                        }`}
                      >
                        {srv.title}
                      </h3>
                      <p className="font-sans text-xs text-[#4A3828]/60 font-light mt-1 max-w-md">
                        {srv.tagline}
                      </p>
                    </div>
                  </div>

                  <ArrowUpRight
                    className={`w-5 h-5 transition-transform duration-300 ${
                      isActive ? 'text-[#9A723E] translate-x-1 -translate-y-1' : 'text-[#DED1BC]'
                    }`}
                  />
                </div>
              );
            })}
          </div>

          {/* Right Column: Dynamic Preview Display */}
          <div className="col-span-5 sticky top-28 bg-white/60 border border-[#DED1BC] p-6 shadow-xl space-y-6">
            <div className="relative h-64 overflow-hidden border border-[#DED1BC]">
              <img
                src={activeService.image}
                alt={activeService.title}
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
              />
              <div className="absolute top-3 left-3 bg-[#24211D]/80 text-[#F6F1E7] px-2.5 py-1 text-[10px] font-mono tracking-widest">
                DISCIPLINE {activeService.number}
              </div>
            </div>

            <div className="space-y-3">
              <h4 className="font-serif text-2xl text-[#24211D]">
                {activeService.title}
              </h4>
              <p className="font-sans text-xs text-[#4A3828]/80 font-light leading-relaxed">
                {activeService.description}
              </p>
            </div>

            {/* Deliverables checklist */}
            <div className="space-y-2 pt-2 border-t border-[#DED1BC]">
              <span className="font-sans text-[10px] uppercase tracking-widest text-[#9A723E] font-semibold block">
                Typical Engagements & Deliverables:
              </span>
              <ul className="space-y-1.5">
                {activeService.deliverables.map((del, i) => (
                  <li key={i} className="flex items-center space-x-2 text-xs font-sans text-[#4A3828]/80">
                    <Check className="w-3.5 h-3.5 text-[#9A723E] shrink-0" />
                    <span>{del}</span>
                  </li>
                ))}
              </ul>
            </div>

            <button
              onClick={() => {
                sound.playClick();
                onOpenInquiry(activeService.title);
              }}
              className="w-full py-3 bg-[#4A3828] hover:bg-[#9A723E] text-[#F6F1E7] font-sans text-xs tracking-[0.2em] uppercase transition-colors flex items-center justify-center space-x-2 cursor-pointer"
            >
              <span>Consult on {activeService.title}</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Mobile Accordion Layout */}
        <div className="lg:hidden space-y-4">
          {SERVICES_LIST.map((srv, idx) => {
            const isExpanded = expandedMobile === idx;
            return (
              <div key={srv.number} className="border border-[#DED1BC] bg-white/40 overflow-hidden">
                <button
                  onClick={() => {
                    sound.playClick();
                    setExpandedMobile(isExpanded ? null : idx);
                  }}
                  className="w-full p-5 text-left flex items-center justify-between"
                >
                  <div className="flex items-baseline space-x-4">
                    <span className="font-mono text-xs text-[#9A723E]">{srv.number}</span>
                    <span className="font-serif text-xl text-[#24211D]">{srv.title}</span>
                  </div>
                  {isExpanded ? (
                    <Minus className="w-4 h-4 text-[#9A723E]" />
                  ) : (
                    <Plus className="w-4 h-4 text-[#4A3828]/60" />
                  )}
                </button>

                {isExpanded && (
                  <div className="p-5 pt-0 space-y-4 border-t border-[#DED1BC]/60">
                    <img
                      src={srv.image}
                      alt={srv.title}
                      className="w-full h-48 object-cover border border-[#DED1BC] mt-4"
                    />
                    <p className="font-sans text-xs text-[#4A3828]/80 font-light leading-relaxed">
                      {srv.description}
                    </p>
                    <ul className="space-y-1">
                      {srv.deliverables.map((del, i) => (
                        <li key={i} className="flex items-center space-x-2 text-xs font-sans text-[#4A3828]/80">
                          <Check className="w-3 h-3 text-[#9A723E]" />
                          <span>{del}</span>
                        </li>
                      ))}
                    </ul>
                    <button
                      onClick={() => {
                        sound.playClick();
                        onOpenInquiry(srv.title);
                      }}
                      className="w-full py-3 bg-[#4A3828] text-[#F6F1E7] text-xs font-sans tracking-widest uppercase flex items-center justify-center space-x-2"
                    >
                      <span>Inquire Scope</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </button>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
