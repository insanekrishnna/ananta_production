import { Button } from "@/components/ui/button";

const CtaBanner = () => {
  return (
    <section className="px-4 md:px-10 pb-16">
      <div className="max-w-canvas mx-auto cta-banner-gradient rounded-card border border-primary/10 py-14 px-6 md:px-8 text-center">
        <h2 className="text-[28px] md:text-[36px] font-bold text-text-primary leading-[1.2]">
          Let's build something extraordinary together
        </h2>
        <p className="text-[15px] text-text-secondary mt-3 max-w-[440px] mx-auto leading-[1.6]">
          Whether it's a rebrand, a product launch, or a full creative overhaul — we're ready when you are.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center mt-8">
          <a href="https://calendly.com/iiprathamyadav/30min" target="_blank" rel="noopener noreferrer">
            <Button variant="hero-primary" size="lg">Book a Strategy Call</Button>
          </a>
          <Button variant="hero-ghost" size="lg">Watch Demo</Button>
        </div>
      </div>
    </section>
  );
};

export default CtaBanner;
