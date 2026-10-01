import React, { useRef } from 'react';
import { ChevronLeft, ChevronRight, Layers } from 'lucide-react';
import { MATERIAL_GALLERY, type MaterialItem } from '../../data/projects';
import { sound } from '../../utils/sound';

export const HorizontalGallery: React.FC = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [selectedMaterial, setSelectedMaterial] = React.useState<MaterialItem>(MATERIAL_GALLERY[0]);

  const scroll = (direction: 'left' | 'right') => {
    sound.playClick();
    if (scrollContainerRef.current) {
      const scrollAmount = 380;
      scrollContainerRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="material" className="py-24 md:py-36 bg-[#24211D] text-[#F6F1E7] overflow-hidden border-b border-[#4A3828]">
      <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-12">
        {/* Gallery Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-[#4A3828] pb-8">
          <div className="space-y-2">
            <div className="flex items-center space-x-2 text-[11px] font-sans tracking-[0.3em] uppercase text-[#9A723E] font-medium">
              <Layers className="w-3.5 h-3.5" />
              <span>THE TACTILE VOCABULARY</span>
            </div>
            <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl text-[#F6F1E7] font-normal">
              Material · Mood · Meaning
            </h2>
          </div>

          {/* Slider Controls */}
          <div className="flex items-center space-x-3">
            <button
              onClick={() => scroll('left')}
              className="p-3 rounded-full border border-[#4A3828] hover:border-[#9A723E] hover:bg-[#9A723E]/20 text-[#F6F1E7] transition-all"
              aria-label="Scroll left"
              data-cursor="PREV"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => scroll('right')}
              className="p-3 rounded-full border border-[#4A3828] hover:border-[#9A723E] hover:bg-[#9A723E]/20 text-[#F6F1E7] transition-all"
              aria-label="Scroll right"
              data-cursor="NEXT"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Selected Material Spotlight Bar */}
        <div className="bg-[#4A3828]/40 border border-[#4A3828] p-6 rounded-none flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 rounded-full overflow-hidden border border-[#9A723E] shrink-0">
              <img
                src={selectedMaterial.image}
                alt={selectedMaterial.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <span className="text-[10px] font-mono text-[#9A723E] tracking-widest uppercase block">
                Active Material Study: {selectedMaterial.category}
              </span>
              <h4 className="font-serif text-2xl text-[#F6F1E7]">{selectedMaterial.name}</h4>
            </div>
          </div>

          <div className="flex flex-wrap gap-6 text-xs font-sans text-[#DED1BC]">
            <div>
              <span className="text-[#9A723E] block text-[10px] uppercase tracking-wider">Tactile Quality:</span>
              <span>{selectedMaterial.tactileFeel}</span>
            </div>
            <div>
              <span className="text-[#9A723E] block text-[10px] uppercase tracking-wider">Light Behavior:</span>
              <span>{selectedMaterial.reflection}</span>
            </div>
          </div>
        </div>

        {/* Horizontal Track */}
        <div
          ref={scrollContainerRef}
          className="flex space-x-6 overflow-x-auto pb-8 pt-2 no-scrollbar scroll-smooth cursor-grab active:cursor-grabbing"
          data-cursor="DRAG"
        >
          {MATERIAL_GALLERY.map((mat) => {
            const isSelected = selectedMaterial.id === mat.id;
            return (
              <div
                key={mat.id}
                onClick={() => {
                  sound.playClick();
                  setSelectedMaterial(mat);
                }}
                className={`w-[290px] sm:w-[340px] shrink-0 bg-[#2C2723] border transition-all duration-300 group overflow-hidden ${
                  isSelected ? 'border-[#9A723E] shadow-[0_0_25px_rgba(154,114,62,0.2)]' : 'border-[#4A3828] hover:border-[#9A723E]/60'
                }`}
              >
                <div className="h-64 sm:h-72 overflow-hidden relative">
                  <img
                    src={mat.image}
                    alt={mat.name}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute top-3 left-3 bg-[#24211D]/80 text-[#9A723E] px-2.5 py-1 text-[9px] font-mono tracking-widest uppercase">
                    {mat.category}
                  </div>
                </div>

                <div className="p-6 space-y-3">
                  <div className="flex items-center justify-between">
                    <h3 className="font-serif text-xl text-[#F6F1E7] group-hover:text-[#9A723E] transition-colors">
                      {mat.name}
                    </h3>
                    <span className="w-2 h-2 rounded-full bg-[#9A723E]" />
                  </div>
                  <p className="font-sans text-xs text-[#DED1BC]/70 font-light leading-relaxed">
                    {mat.description}
                  </p>

                  <div className="pt-2 border-t border-[#4A3828] flex items-center justify-between text-[10px] font-sans text-[#9A723E] uppercase tracking-wider">
                    <span>Inspect Texture</span>
                    <span className="opacity-0 group-hover:opacity-100 transition-opacity">Select →</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
