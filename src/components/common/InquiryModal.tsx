import React, { useState, useEffect } from 'react';
import { X, Check, Sparkles, Building, Send } from 'lucide-react';
import { sound } from '../../utils/sound';

interface InquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialProject?: string;
}

export const InquiryModal: React.FC<InquiryModalProps> = ({ isOpen, onClose, initialProject }) => {
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [timeline, setTimeline] = useState<string>('3-6 Months');
  const [scale, setScale] = useState<string>('150m² – 500m²');
  const [location, setLocation] = useState<string>('Paris');
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [brandName, setBrandName] = useState<string>('');
  const [notes, setNotes] = useState<string>('');
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  useEffect(() => {
    if (initialProject) {
      setNotes(`Interested in spatial direction similar to: ${initialProject}`);
    }
  }, [initialProject]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const serviceOptions = [
    'Visual Merchandising',
    'Styling & Artistry',
    'Retail Concepts',
    'Brand Storytelling',
    'Creative Direction',
    'Space Planning'
  ];

  const timelineOptions = ['Immediate (< 2 Months)', '3 – 6 Months', 'Late 2026 / 2027'];
  const scaleOptions = ['Boutique (< 150m²)', 'Flagship (150m² – 500m²)', 'Pavilion / Monument (500m²+)'];
  const locationOptions = ['Paris', 'Milan', 'London', 'Tokyo', 'New York', 'Other Global'];

  const toggleService = (srv: string) => {
    sound.playClick();
    if (selectedServices.includes(srv)) {
      setSelectedServices(selectedServices.filter((s) => s !== srv));
    } else {
      setSelectedServices([...selectedServices, srv]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    sound.playSoftChime();
    setIsSubmitted(true);
  };

  const resetAndClose = () => {
    setIsSubmitted(false);
    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-[99995] flex items-center justify-center p-4 md:p-8 bg-[#24211D]/80 backdrop-blur-md transition-all duration-300"
      onClick={onClose}
    >
      <div
        className="w-full max-w-3xl bg-[#F6F1E7] border border-[#DED1BC] shadow-2xl relative p-6 md:p-12 max-h-[90vh] overflow-y-auto no-scrollbar"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={() => {
            sound.playClick();
            onClose();
          }}
          className="absolute top-6 right-6 p-2 rounded-full text-[#4A3828] hover:text-[#9A723E] hover:bg-[#DED1BC]/40 transition-colors"
          data-cursor="CLOSE"
        >
          <X className="w-5 h-5" />
        </button>

        {isSubmitted ? (
          <div className="py-12 flex flex-col items-center text-center space-y-6">
            <div className="w-16 h-16 rounded-full bg-[#9A723E]/10 border border-[#9A723E] flex items-center justify-center text-[#9A723E]">
              <Sparkles className="w-8 h-8" />
            </div>

            <div className="space-y-2">
              <span className="font-sans text-[11px] tracking-[0.3em] uppercase text-[#9A723E]">
                CONVERSATION INITIATED
              </span>
              <h2 className="font-serif text-3xl md:text-4xl text-[#24211D]">
                Thank You, {name || 'Esteemed Partner'}
              </h2>
              <p className="font-sans text-xs text-[#4A3828]/70 max-w-md mx-auto leading-relaxed font-light">
                Our creative directors will review your spatial parameters and reach out at <strong>{email}</strong> within 24 business hours.
              </p>
            </div>

            <div className="w-full max-w-sm bg-[#DED1BC]/20 border border-[#DED1BC] p-4 text-left text-xs font-sans space-y-2 text-[#4A3828]/80">
              <div className="flex justify-between">
                <span className="text-[#9A723E]">Brand:</span>
                <span>{brandName || 'Private Client'}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#9A723E]">Location:</span>
                <span>{location}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#9A723E]">Timeline:</span>
                <span>{timeline}</span>
              </div>
            </div>

            <button
              onClick={resetAndClose}
              className="px-8 py-3 bg-[#4A3828] text-[#F6F1E7] text-xs font-sans tracking-[0.2em] uppercase hover:bg-[#9A723E] transition-colors"
            >
              Return To Studio
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="space-y-2">
              <div className="flex items-center space-x-2 text-[10px] font-sans tracking-[0.3em] uppercase text-[#9A723E]">
                <Building className="w-3.5 h-3.5" />
                <span>SPATIAL CONSULTATION</span>
              </div>
              <h2 className="font-serif text-3xl md:text-4xl text-[#24211D]">
                Start A Conversation
              </h2>
              <p className="font-sans text-xs text-[#4A3828]/70 font-light leading-relaxed">
                Tell us about your brand, physical footprint, and aesthetic ambitions.
              </p>
            </div>

            {/* Step 1: Services Selection */}
            <div className="space-y-3">
              <label className="block text-[11px] font-sans tracking-[0.2em] uppercase text-[#4A3828]/80 font-medium">
                1. Scope of Engagement
              </label>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                {serviceOptions.map((srv) => {
                  const active = selectedServices.includes(srv);
                  return (
                    <button
                      type="button"
                      key={srv}
                      onClick={() => toggleService(srv)}
                      className={`p-3 text-left border text-xs font-sans transition-all flex items-center justify-between ${
                        active
                          ? 'bg-[#4A3828] text-[#F6F1E7] border-[#4A3828]'
                          : 'bg-white/40 text-[#4A3828] border-[#DED1BC] hover:border-[#9A723E]'
                      }`}
                    >
                      <span className="truncate pr-1">{srv}</span>
                      {active && <Check className="w-3.5 h-3.5 text-[#9A723E] shrink-0" />}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 2: Location & Scale */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="block text-[11px] font-sans tracking-[0.2em] uppercase text-[#4A3828]/80 font-medium">
                  2. Geography / Location
                </label>
                <select
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  className="w-full bg-white/60 border border-[#DED1BC] px-3 py-2.5 text-xs font-sans text-[#4A3828] focus:outline-none focus:border-[#9A723E]"
                >
                  {locationOptions.map((loc) => (
                    <option key={loc} value={loc}>
                      {loc}
                    </option>
                  ))}
                </select>
              </div>

              <div className="space-y-2">
                <label className="block text-[11px] font-sans tracking-[0.2em] uppercase text-[#4A3828]/80 font-medium">
                  3. Spatial Scale
                </label>
                <select
                  value={scale}
                  onChange={(e) => setScale(e.target.value)}
                  className="w-full bg-white/60 border border-[#DED1BC] px-3 py-2.5 text-xs font-sans text-[#4A3828] focus:outline-none focus:border-[#9A723E]"
                >
                  {scaleOptions.map((sc) => (
                    <option key={sc} value={sc}>
                      {sc}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Step 3: Timeline */}
            <div className="space-y-2">
              <label className="block text-[11px] font-sans tracking-[0.2em] uppercase text-[#4A3828]/80 font-medium">
                4. Target Timeline
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                {timelineOptions.map((time) => (
                  <button
                    type="button"
                    key={time}
                    onClick={() => {
                      sound.playClick();
                      setTimeline(time);
                    }}
                    className={`py-2 px-3 text-xs font-sans text-center border transition-all ${
                      timeline === time
                        ? 'bg-[#9A723E] text-[#F6F1E7] border-[#9A723E]'
                        : 'bg-white/40 text-[#4A3828] border-[#DED1BC] hover:border-[#9A723E]'
                    }`}
                  >
                    {time}
                  </button>
                ))}
              </div>
            </div>

            {/* Contact Details */}
            <div className="space-y-4 pt-2">
              <label className="block text-[11px] font-sans tracking-[0.2em] uppercase text-[#4A3828]/80 font-medium">
                5. Client Information
              </label>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  required
                  placeholder="Your Name *"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full bg-white/60 border border-[#DED1BC] px-3 py-2.5 text-xs font-sans text-[#4A3828] placeholder-[#4A3828]/40 focus:outline-none focus:border-[#9A723E]"
                />
                <input
                  type="email"
                  required
                  placeholder="Work Email *"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-white/60 border border-[#DED1BC] px-3 py-2.5 text-xs font-sans text-[#4A3828] placeholder-[#4A3828]/40 focus:outline-none focus:border-[#9A723E]"
                />
                <input
                  type="text"
                  placeholder="Maison / Brand Name"
                  value={brandName}
                  onChange={(e) => setBrandName(e.target.value)}
                  className="w-full md:col-span-2 bg-white/60 border border-[#DED1BC] px-3 py-2.5 text-xs font-sans text-[#4A3828] placeholder-[#4A3828]/40 focus:outline-none focus:border-[#9A723E]"
                />
                <textarea
                  rows={3}
                  placeholder="Brief description of the space, vision, or aspirations..."
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  className="w-full md:col-span-2 bg-white/60 border border-[#DED1BC] px-3 py-2.5 text-xs font-sans text-[#4A3828] placeholder-[#4A3828]/40 focus:outline-none focus:border-[#9A723E] resize-none"
                />
              </div>
            </div>

            {/* Submit button */}
            <div className="pt-4 flex items-center justify-end">
              <button
                type="submit"
                className="px-8 py-4 bg-[#4A3828] hover:bg-[#9A723E] text-[#F6F1E7] font-sans text-xs tracking-[0.2em] uppercase transition-all duration-300 flex items-center space-x-3 group cursor-pointer"
                data-cursor="SUBMIT"
              >
                <span>Transmit Project Inquiry</span>
                <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform text-[#9A723E]" />
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
