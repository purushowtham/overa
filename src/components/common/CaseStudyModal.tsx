import React, { useEffect } from 'react';
import { X, ArrowRight, MapPin, Calendar, Maximize2, Sparkles } from 'lucide-react';
import type { CaseStudy } from '../../data/projects';
import { sound } from '../../utils/sound';

interface CaseStudyModalProps {
  project: CaseStudy | null;
  onClose: () => void;
  onOpenInquiry: (projectName?: string) => void;
}

export const CaseStudyModal: React.FC<CaseStudyModalProps> = ({ project, onClose, onOpenInquiry }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-[99990] flex justify-end bg-[#24211D]/75 backdrop-blur-md transition-all duration-500"
      onClick={onClose}
    >
      <div
        className="w-full max-w-4xl bg-[#F6F1E7] text-[#4A3828] h-full overflow-y-auto shadow-2xl relative flex flex-col no-scrollbar"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Sticky Header Bar */}
        <div className="sticky top-0 z-30 bg-[#F6F1E7]/90 backdrop-blur-md border-b border-[#DED1BC] px-6 md:px-12 py-5 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <span className="font-mono text-xs text-[#9A723E] tracking-widest">{project.number}</span>
            <span className="w-6 h-[1px] bg-[#DED1BC]" />
            <span className="font-sans text-[11px] tracking-[0.25em] uppercase text-[#4A3828]/70">
              {project.category}
            </span>
          </div>

          <button
            onClick={() => {
              sound.playClick();
              onClose();
            }}
            className="flex items-center space-x-2 text-xs font-sans tracking-widest uppercase hover:text-[#9A723E] transition-colors p-2 rounded-full hover:bg-[#DED1BC]/40"
            data-cursor="CLOSE"
          >
            <span className="hidden sm:inline">Close</span>
            <X className="w-5 h-5 text-[#4A3828]" />
          </button>
        </div>

        {/* Hero Section of Case Study */}
        <div className="relative w-full h-[55vh] min-h-[380px] overflow-hidden">
          <img
            src={project.heroImage}
            alt={project.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#24211D]/80 via-[#24211D]/30 to-transparent" />
          
          <div className="absolute bottom-8 left-6 md:left-12 right-6 md:right-12 text-[#F6F1E7]">
            <p className="font-sans text-xs tracking-[0.3em] text-[#DED1BC] uppercase mb-2">
              {project.subtitle}
            </p>
            <h1 className="font-serif text-3xl md:text-5xl lg:text-6xl font-normal tracking-wide leading-tight">
              {project.title}
            </h1>

            <div className="flex flex-wrap gap-6 mt-4 text-xs font-sans text-[#DED1BC]/80">
              <span className="flex items-center space-x-1">
                <MapPin className="w-3.5 h-3.5 text-[#9A723E]" />
                <span>{project.location}</span>
              </span>
              <span className="flex items-center space-x-1">
                <Calendar className="w-3.5 h-3.5 text-[#9A723E]" />
                <span>{project.year}</span>
              </span>
              <span className="flex items-center space-x-1">
                <Maximize2 className="w-3.5 h-3.5 text-[#9A723E]" />
                <span>{project.area}</span>
              </span>
            </div>
          </div>
        </div>

        {/* Case Study Content Sections */}
        <div className="p-6 md:p-12 space-y-16">
          {/* Editorial Quote */}
          <div className="border-l-2 border-[#9A723E] pl-6 py-2">
            <blockquote className="font-serif text-2xl md:text-3xl text-[#24211D] italic leading-relaxed">
              "{project.accentQuote}"
            </blockquote>
          </div>

          {/* 01 Context & 02 Concept */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="space-y-4">
              <div className="flex items-center space-x-2 text-[11px] font-sans tracking-[0.25em] text-[#9A723E] uppercase font-semibold">
                <span>01</span>
                <span>/</span>
                <span>Context & Challenge</span>
              </div>
              <p className="font-sans text-sm text-[#4A3828]/80 leading-relaxed font-light">
                {project.context}
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center space-x-2 text-[11px] font-sans tracking-[0.25em] text-[#9A723E] uppercase font-semibold">
                <span>02</span>
                <span>/</span>
                <span>The Spatial Concept</span>
              </div>
              <p className="font-sans text-sm text-[#4A3828]/80 leading-relaxed font-light">
                {project.concept}
              </p>
            </div>
          </div>

          {/* Moodboard & Palette */}
          <div className="bg-[#DED1BC]/25 p-8 border border-[#DED1BC]/70 space-y-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2 text-[11px] font-sans tracking-[0.25em] text-[#9A723E] uppercase font-semibold">
                <Sparkles className="w-4 h-4" />
                <span>03 / Moodboard & Tonality</span>
              </div>
              <span className="text-[10px] font-sans tracking-widest text-[#4A3828]/60 uppercase">Atmosphere</span>
            </div>

            <p className="font-sans text-sm text-[#4A3828]/90 font-light">
              {project.moodboard.description}
            </p>

            {/* Swatches */}
            <div className="flex items-center space-x-4 pt-2">
              <span className="text-[11px] font-sans tracking-widest text-[#4A3828]/60 uppercase">Palette:</span>
              <div className="flex items-center space-x-2">
                {project.moodboard.colors.map((color, i) => (
                  <div key={i} className="flex items-center space-x-1.5 bg-white/70 px-2.5 py-1 border border-[#DED1BC] rounded-sm">
                    <span className="w-3.5 h-3.5 rounded-full border border-black/10" style={{ backgroundColor: color }} />
                    <span className="text-[10px] font-mono text-[#4A3828]">{color}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Elements */}
            <div className="flex flex-wrap gap-2 pt-2">
              {project.moodboard.elements.map((elem, i) => (
                <span key={i} className="text-[11px] font-sans px-3 py-1 bg-[#F6F1E7] border border-[#DED1BC] text-[#4A3828]/80">
                  {elem}
                </span>
              ))}
            </div>
          </div>

          {/* Secondary Editorial Image */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
            <div className="md:col-span-7 overflow-hidden">
              <img
                src={project.secondaryImage}
                alt="Secondary view"
                className="w-full h-80 object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="md:col-span-5 space-y-4">
              <div className="flex items-center space-x-2 text-[11px] font-sans tracking-[0.25em] text-[#9A723E] uppercase font-semibold">
                <span>04</span>
                <span>/</span>
                <span>Spatial Direction</span>
              </div>
              <p className="font-sans text-sm text-[#4A3828]/80 leading-relaxed font-light">
                {project.spatialDirection}
              </p>
            </div>
          </div>

          {/* 05 Tactile Materials Grid */}
          <div className="space-y-6">
            <div className="flex items-center space-x-2 text-[11px] font-sans tracking-[0.25em] text-[#9A723E] uppercase font-semibold">
              <span>05</span>
              <span>/</span>
              <span>Material Specification</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {project.materials.map((mat, i) => (
                <div key={i} className="p-5 bg-white/50 border border-[#DED1BC] space-y-2">
                  <div className="flex items-center justify-between">
                    <h4 className="font-serif text-lg text-[#24211D] font-medium">{mat.name}</h4>
                    <span className="text-[9px] font-sans uppercase tracking-widest text-[#9A723E] bg-[#9A723E]/10 px-2 py-0.5">
                      {mat.finish}
                    </span>
                  </div>
                  <p className="font-sans text-xs text-[#4A3828]/70 leading-relaxed font-light">
                    {mat.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* 06 Final Experience & Outcomes */}
          <div className="p-8 bg-[#24211D] text-[#F6F1E7] space-y-8">
            <div className="space-y-3">
              <span className="font-sans text-[10px] tracking-[0.3em] text-[#9A723E] uppercase font-semibold">
                06 / Outcome & Resonance
              </span>
              <h3 className="font-serif text-2xl md:text-3xl text-[#F6F1E7] font-normal">
                {project.outcome.highlight}
              </h3>
              <p className="font-sans text-xs text-[#DED1BC]/70 font-light leading-relaxed">
                {project.finalExperience}
              </p>
            </div>

            <div className="grid grid-cols-3 gap-4 border-t border-[#4A3828] pt-6">
              {project.outcome.stats.map((stat, i) => (
                <div key={i} className="space-y-1">
                  <div className="font-serif text-2xl md:text-3xl text-[#9A723E] font-medium">
                    {stat.value}
                  </div>
                  <div className="text-[10px] font-sans tracking-wider text-[#DED1BC]/60 uppercase">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Project Gallery */}
          <div className="space-y-6">
            <div className="flex items-center space-x-2 text-[11px] font-sans tracking-[0.25em] text-[#9A723E] uppercase font-semibold">
              <span>07</span>
              <span>/</span>
              <span>Visual Archive</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {project.gallery.map((item, i) => (
                <div key={i} className={`overflow-hidden ${item.aspect === 'wide' ? 'md:col-span-2' : ''}`}>
                  <img
                    src={item.url}
                    alt={item.caption}
                    className="w-full h-80 md:h-96 object-cover hover:scale-105 transition-transform duration-700"
                  />
                  <p className="text-[11px] font-sans text-[#4A3828]/60 mt-2 italic">
                    — {item.caption}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Next Steps CTA inside modal */}
          <div className="pt-8 border-t border-[#DED1BC] flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <h4 className="font-serif text-2xl text-[#24211D]">Envision a similar atmosphere?</h4>
              <p className="font-sans text-xs text-[#4A3828]/70 font-light mt-1">
                Let's discuss spatial direction, timeline, and material curation.
              </p>
            </div>

            <button
              onClick={() => {
                sound.playClick();
                onClose();
                onOpenInquiry(project.title);
              }}
              className="w-full sm:w-auto px-8 py-4 bg-[#4A3828] hover:bg-[#9A723E] text-[#F6F1E7] font-sans text-xs tracking-[0.2em] uppercase transition-all duration-300 flex items-center justify-center space-x-3 group"
              data-cursor="INQUIRE"
            >
              <span>Start A Project Inquiry</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
