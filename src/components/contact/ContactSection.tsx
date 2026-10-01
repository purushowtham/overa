import React, { useState } from 'react';
import { ArrowRight, Mail, MapPin, Phone, Check } from 'lucide-react';
import { sound } from '../../utils/sound';

interface ContactSectionProps {
  onOpenInquiry: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ onOpenInquiry }) => {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleNewsletter = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail) return;
    sound.playSoftChime();
    setSubscribed(true);
  };

  return (
    <section id="contact" className="py-28 md:py-44 px-6 md:px-12 bg-[#4A3828] text-[#F6F1E7] relative overflow-hidden">
      {/* Background Subtle Watermark */}
      <div className="absolute right-0 bottom-0 select-none pointer-events-none opacity-[0.03] font-serif text-[22vw] leading-none text-[#F6F1E7]">
        ESPACE
      </div>

      <div className="max-w-7xl mx-auto space-y-20 relative z-10">
        {/* Main Editorial Invitation */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-8 space-y-6">
            <span className="font-sans text-[11px] tracking-[0.35em] uppercase text-[#9A723E] font-medium block">
              INITIATE COLLABORATION
            </span>

            <h2 className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-normal tracking-tight text-[#F6F1E7] leading-[0.98]">
              Have A Space <br />
              <span className="italic text-[#9A723E]">In Mind?</span>
            </h2>

            <p className="font-sans text-sm sm:text-base text-[#DED1BC]/80 font-light max-w-xl leading-relaxed">
              Let's create the experience around it. We accept a limited number of private atelier commissions, exhibition pavilions, and flagship architecture projects each season.
            </p>

            <div className="pt-4">
              <button
                onClick={() => {
                  sound.playClick();
                  onOpenInquiry();
                }}
                className="px-9 py-5 bg-[#9A723E] hover:bg-[#C4975A] text-[#24211D] font-sans text-xs tracking-[0.25em] uppercase font-semibold transition-all duration-300 shadow-xl flex items-center space-x-4 group cursor-pointer"
                data-cursor="CONVERSE"
              >
                <span>Start A Conversation</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
              </button>
            </div>
          </div>

          {/* Right Side: Global Atelier Locations */}
          <div className="lg:col-span-4 space-y-8 bg-[#24211D]/60 border border-[#9A723E]/30 p-8">
            <h3 className="font-serif text-2xl text-[#F6F1E7]">
              Studio Ateliers
            </h3>

            <div className="space-y-6 text-xs font-sans">
              <div className="space-y-1 border-b border-[#4A3828] pb-4">
                <div className="flex items-center space-x-2 text-[#9A723E]">
                  <MapPin className="w-3.5 h-3.5" />
                  <span className="tracking-widest uppercase font-medium">Paris Atelier</span>
                </div>
                <p className="text-[#DED1BC]/70 pl-5">
                  14 Rue de la Paix, 75002 Paris
                </p>
              </div>

              <div className="space-y-1 border-b border-[#4A3828] pb-4">
                <div className="flex items-center space-x-2 text-[#9A723E]">
                  <MapPin className="w-3.5 h-3.5" />
                  <span className="tracking-widest uppercase font-medium">Milan Studio</span>
                </div>
                <p className="text-[#DED1BC]/70 pl-5">
                  Via Montenapoleone 8, 20121 Milano
                </p>
              </div>

              <div className="space-y-1">
                <div className="flex items-center space-x-2 text-[#9A723E]">
                  <MapPin className="w-3.5 h-3.5" />
                  <span className="tracking-widest uppercase font-medium">Tokyo Representative</span>
                </div>
                <p className="text-[#DED1BC]/70 pl-5">
                  Ginza 6-Chome, Chuo-ku, Tokyo
                </p>
              </div>
            </div>

            <div className="pt-4 border-t border-[#4A3828] text-xs font-sans text-[#DED1BC]/70 space-y-2">
              <div className="flex items-center space-x-2">
                <Mail className="w-3.5 h-3.5 text-[#9A723E]" />
                <a href="mailto:inquiries@orevastudio.com" className="hover:text-[#9A723E] transition-colors">
                  inquiries@orevastudio.com
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-3.5 h-3.5 text-[#9A723E]" />
                <span>+33 (0)1 42 68 89 00</span>
              </div>
            </div>
          </div>
        </div>

        {/* The ORÉVA Journal Gazette Dispatch */}
        <div className="border-t border-[#9A723E]/30 pt-12 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-1 text-center md:text-left">
            <span className="font-mono text-[10px] text-[#9A723E] tracking-widest uppercase block">
              THE ORÉVA DISPATCH
            </span>
            <h4 className="font-serif text-xl text-[#F6F1E7]">
              Quarterly Private Spatial Essays & Material Studies
            </h4>
          </div>

          {subscribed ? (
            <div className="flex items-center space-x-2 text-xs font-sans text-[#9A723E]">
              <Check className="w-4 h-4" />
              <span>You are subscribed to the private dispatch.</span>
            </div>
          ) : (
            <form onSubmit={handleNewsletter} className="flex w-full md:w-auto max-w-md">
              <input
                type="email"
                required
                placeholder="Enter maison email address"
                value={newsletterEmail}
                onChange={(e) => setNewsletterEmail(e.target.value)}
                className="bg-[#24211D] border border-[#9A723E]/40 px-4 py-3 text-xs font-sans text-[#F6F1E7] placeholder-[#DED1BC]/40 focus:outline-none focus:border-[#9A723E] w-full md:w-72"
              />
              <button
                type="submit"
                className="px-5 py-3 bg-[#9A723E] text-[#24211D] font-sans text-xs tracking-wider uppercase font-semibold hover:bg-[#C4975A] transition-colors shrink-0"
              >
                Join
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};
