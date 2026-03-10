import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import LogoStrip from "@/components/LogoStrip";
import InteractiveHeadline from "@/components/InteractiveHeadline";
import AnalyticsSection from "@/components/AnalyticsSection";
import FeaturesSection from "@/components/FeaturesSection";
import IntegrationsSection from "@/components/IntegrationsSection";
import ExpertiseMapSection from "@/components/ExpertiseMapSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import PricingSection from "@/components/PricingSection";
import CtaBanner from "@/components/CtaBanner";
import FooterSection from "@/components/FooterSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-outer">
      <div className="max-w-canvas mx-auto my-6 bg-canvas rounded-canvas overflow-hidden shadow-app">
        <Navbar />
        <HeroSection />
        <InteractiveHeadline />
        <AnalyticsSection />
        <LogoStrip />
        <ExpertiseMapSection />
        <IntegrationsSection />
        <FeaturesSection />
        <TestimonialsSection />
        <PricingSection />
        <CtaBanner />
        <FooterSection />
      </div>
    </div>
  );
};

export default Index;
