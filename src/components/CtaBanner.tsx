import { Button } from "@/components/ui/button";

const CtaBanner = () => {
  return (
    <section className="px-4 md:px-10 pb-24">
      <div className="max-w-canvas mx-auto cta-banner-gradient rounded-card border border-primary/10 py-20 px-8 text-center">
        <h2 className="text-[32px] md:text-[40px] font-bold text-text-primary leading-[1.2]">
          Let's build something extraordinary together
        </h2>
        <p className="text-base text-text-secondary mt-4 max-w-[480px] mx-auto leading-[1.65]">
          Whether it's a rebrand, a product launch, or a full creative overhaul — we're ready when you are.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
          <Button variant="hero-primary" size="xl">Book a Strategy Call</Button>
          <Button variant="hero-ghost" size="xl">Watch Demo</Button>
        </div>
      </div>
    </section>);

};

export default CtaBanner;