import { Button } from "@/components/ui/button";

const CtaBanner = () => {
  return (
    <section className="px-4 md:px-10 pb-24">
      <div className="max-w-canvas mx-auto cta-banner-gradient rounded-card border border-primary/10 py-20 px-8 text-center">
        <h2 className="text-[32px] md:text-[40px] font-bold text-text-primary leading-[1.2]">
          Start building your first app today
        </h2>
        <p className="text-base text-text-secondary mt-4 max-w-[480px] mx-auto leading-[1.65]">
          Join thousands of teams already using Stacker to build internal tools without code.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
          <Button variant="hero-primary" size="xl">Get Started Free</Button>
          <Button variant="hero-ghost" size="xl">Watch Demo</Button>
        </div>
      </div>
    </section>
  );
};

export default CtaBanner;
