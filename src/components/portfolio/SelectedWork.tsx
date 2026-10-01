import React, { useState } from 'react';
import { ArrowUpRight, Filter, Sparkles } from 'lucide-react';
import { SELECTED_PROJECTS, type CaseStudy } from '../../data/projects';
import { sound } from '../../utils/sound';

interface SelectedWorkProps {
  onSelectProject: (project: CaseStudy) => void;
}

export const SelectedWork: React.FC<SelectedWorkProps> = ({ onSelectProject }) => {
  const [activeFilter, setActiveFilter] = useState<string>('All');

  const categories = ['All', 'Visual Merchandising', 'Retail Concept', 'Scenography', 'Styling'];

  const filteredProjects = activeFilter === 'All'
    ? SELECTED_PROJECTS
    : SELECTED_PROJECTS.filter((p) => p.category.toLowerCase().includes(activeFilter.toLowerCase()));

  return (
    <section id="work" className="py-24 md:py-36 px-6 md:px-12 bg-[#F6F1E7] border-b border-[#DED1BC]">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 border-b border-[#DED1BC] pb-8">
          <div className="space-y-3">
            <div className="flex items-center space-x-2 text-[11px] font-sans tracking-[0.3em] uppercase text-[#9A723E] font-medium">
              <Sparkles className="w-3.5 h-3.5" />
              <span>SELECTED ARCHIVE</span>
            </div>
            <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl text-[#24211D] font-normal">
              Curated Works
            </h2>
            <p className="font-sans text-xs sm:text-sm text-[#4A3828]/70 font-light max-w-md">
              A chronological selection of visual merchandising, immersive pavilions, and bespoke spatial environments.
            </p>
          </div>

          {/* Filter Bar */}
          <div className="flex flex-wrap items-center gap-2">
            <div className="flex items-center space-x-1.5 text-xs font-sans text-[#4A3828]/60 mr-2 uppercase tracking-widest hidden sm:flex">
              <Filter className="w-3.5 h-3.5 text-[#9A723E]" />
              <span>Filter:</span>
            </div>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => {
                  sound.playClick();
                  setActiveFilter(cat);
                }}
                className={`px-4 py-1.5 text-[11px] font-sans tracking-widest uppercase transition-all duration-300 ${
                  activeFilter === cat
                    ? 'bg-[#4A3828] text-[#F6F1E7]'
                    : 'bg-[#DED1BC]/30 text-[#4A3828]/80 hover:bg-[#DED1BC]/70'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Editorial Project Sequence */}
        <div className="space-y-24 md:space-y-36">
          {filteredProjects.map((project, index) => {
            const isEven = index % 2 === 0;

            return (
              <div
                key={project.slug}
                onClick={() => {
                  sound.playClick();
                  onSelectProject(project);
                }}
                className="group cursor-pointer grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-14 items-center"
                data-cursor="VIEW PROJECT"
              >
                {/* Visual Image Block */}
                <div
                  className={`lg:col-span-7 relative overflow-hidden bg-[#DED1BC]/30 border border-[#DED1BC] ${
                    isEven ? 'lg:order-1' : 'lg:order-2'
                  }`}
                >
                  <div className="w-full h-[380px] sm:h-[480px] md:h-[540px] overflow-hidden relative">
                    <img
                      src={project.coverImage}
                      alt={project.title}
                      loading="lazy"
                      className="w-full h-full object-cover filter brightness-[0.95] group-hover:scale-105 transition-transform duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#24211D]/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>

                  {/* Corner Accent Overlay */}
                  <div className="absolute top-4 left-4 bg-[#F6F1E7]/90 backdrop-blur-sm px-3 py-1 border border-[#DED1BC] text-[10px] font-mono text-[#9A723E] tracking-widest">
                    {project.location}
                  </div>

                  <div className="absolute bottom-4 right-4 bg-[#24211D]/90 text-[#F6F1E7] px-3.5 py-1.5 text-[10px] font-sans tracking-widest uppercase flex items-center space-x-1.5 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                    <span>Explore Case Study</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-[#9A723E]" />
                  </div>
                </div>

                {/* Typography & Context Block */}
                <div
                  className={`lg:col-span-5 space-y-6 ${
                    isEven ? 'lg:order-2' : 'lg:order-1'
                  }`}
                >
                  <div className="flex items-center space-x-3 text-xs font-mono text-[#9A723E] tracking-widest">
                    <span>{project.number}</span>
                    <span className="w-8 h-[1px] bg-[#DED1BC]" />
                    <span>{project.year}</span>
                  </div>

                  <div className="space-y-2">
                    <span className="font-sans text-[11px] tracking-[0.25em] uppercase text-[#4A3828]/60 font-light block">
                      {project.category}
                    </span>
                    <h3 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#24211D] font-normal group-hover:text-[#9A723E] group-hover:translate-x-1 transition-all duration-300 leading-tight">
                      {project.title}
                    </h3>
                  </div>

                  <p className="font-sans text-xs sm:text-sm text-[#4A3828]/80 font-light leading-relaxed">
                    {project.subtitle} — {project.context.slice(0, 140)}...
                  </p>

                  <div className="flex flex-wrap gap-2 pt-2">
                    {project.materials.map((m, mi) => (
                      <span
                        key={mi}
                        className="text-[10px] font-sans px-2.5 py-1 bg-[#DED1BC]/30 text-[#4A3828]/70 border border-[#DED1BC]"
                      >
                        {m.name}
                      </span>
                    ))}
                  </div>

                  <div className="pt-4 flex items-center space-x-3 text-xs font-sans tracking-[0.2em] text-[#9A723E] uppercase font-medium">
                    <span className="group-hover:underline">Read Case Study</span>
                    <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
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
