import { useState, useEffect } from 'react';
import Lenis from 'lenis';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import { CustomCursor } from './components/common/CustomCursor';
import { Preloader } from './components/common/Preloader';
import { Navbar } from './components/common/Navbar';
import { MobileMenu } from './components/common/MobileMenu';
import { CaseStudyModal } from './components/common/CaseStudyModal';
import { InquiryModal } from './components/common/InquiryModal';

import { Hero } from './components/hero/Hero';
import { Manifesto } from './components/manifesto/Manifesto';
import { SelectedWork } from './components/portfolio/SelectedWork';
import { ServicesSection } from './components/services/ServicesSection';
import { HorizontalGallery } from './components/gallery/HorizontalGallery';
import { OrevaMethod } from './components/method/OrevaMethod';
import { StudioVision } from './components/studio/StudioVision';
import { ContactSection } from './components/contact/ContactSection';
import { Footer } from './components/footer/Footer';

import type { CaseStudy } from './data/projects';

gsap.registerPlugin(ScrollTrigger);

export function App() {
  const [selectedProject, setSelectedProject] = useState<CaseStudy | null>(null);
  const [isInquiryOpen, setIsInquiryOpen] = useState(false);
  const [inquiryInitialProject, setInquiryInitialProject] = useState<string | undefined>(undefined);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [preloaderDone, setPreloaderDone] = useState(false);

  // Initialize Lenis Smooth Scroll
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      touchMultiplier: 1.5,
    });

    lenis.on('scroll', ScrollTrigger.update);

    const updateLenis = (time: number) => {
      lenis.raf(time * 1000);
    };

    gsap.ticker.add(updateLenis);
    gsap.ticker.lagSmoothing(0);

    return () => {
      gsap.ticker.remove(updateLenis);
      lenis.destroy();
    };
  }, []);

  const handleOpenInquiry = (projectNameOrService?: string) => {
    setInquiryInitialProject(projectNameOrService);
    setIsInquiryOpen(true);
  };

  const handleExploreWork = () => {
    const el = document.getElementById('work');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#F6F1E7] text-[#4A3828] relative selection:bg-[#9A723E]/20 selection:text-[#24211D]">
      {/* Custom Fluid Magnetic Cursor */}
      <CustomCursor />

      {/* Editorial Minimal Preloader */}
      <Preloader onComplete={() => setPreloaderDone(true)} />

      {/* Primary Sticky Editorial Navbar */}
      <Navbar
        onOpenMenu={() => setIsMobileMenuOpen(true)}
        onOpenInquiry={() => handleOpenInquiry()}
      />

      {/* Mobile Editorial Menu */}
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        onOpenInquiry={() => handleOpenInquiry()}
      />

      {/* Main Page Flow */}
      <main className={`transition-opacity duration-1000 ${preloaderDone ? 'opacity-100' : 'opacity-0'}`}>
        <Hero
          onOpenInquiry={() => handleOpenInquiry()}
          onExploreWork={handleExploreWork}
        />

        <Manifesto />

        <SelectedWork onSelectProject={(project) => setSelectedProject(project)} />

        <ServicesSection onOpenInquiry={(service) => handleOpenInquiry(service)} />

        <HorizontalGallery />

        <OrevaMethod />

        <StudioVision />

        <ContactSection onOpenInquiry={() => handleOpenInquiry()} />

        <Footer />
      </main>

      {/* Interactive Case Study Modal/Drawer */}
      <CaseStudyModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onOpenInquiry={(projectName) => handleOpenInquiry(projectName)}
      />

      {/* Interactive Consultation & Spatial Inquiry Modal */}
      <InquiryModal
        isOpen={isInquiryOpen}
        onClose={() => setIsInquiryOpen(false)}
        initialProject={inquiryInitialProject}
      />
    </div>
  );
}

export default App;
