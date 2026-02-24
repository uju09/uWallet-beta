import React, { useEffect } from 'react';
import { Navbar, HeroSection, FeaturesSection, SecuritySection, CTASection, Footer } from '@/components/ui';

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-[#0C120F]">
      <Navbar />
      <HeroSection />
      <FeaturesSection />
      <SecuritySection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default LandingPage;
