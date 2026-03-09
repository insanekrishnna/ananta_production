const CtaBanner = () => {
  return (
    <section className="px-4 md:px-10 pb-16">
      <div className="max-w-canvas mx-auto cta-banner-gradient rounded-2xl py-14 px-6 md:px-8 text-center">
        <h2 className="text-[28px] md:text-[36px] font-bold text-white leading-[1.2]">
          Let's build something extraordinary together
        </h2>
        <p className="text-[15px] text-white/60 mt-3 max-w-[440px] mx-auto leading-[1.6]">
          Whether it's a rebrand, a product launch, or a full creative overhaul — we're ready when you are.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center mt-8">
          <button className="bg-white text-[#1a1a1a] rounded-pill px-7 py-3 text-[14px] font-semibold hover:bg-white/90 transition-colors">
            Book a Strategy Call
          </button>
          <button className="border border-white/30 text-white rounded-pill px-7 py-3 text-[14px] font-semibold hover:bg-white/10 transition-colors">
            Watch Demo
          </button>
        </div>
      </div>
    </section>
  );
};

export default CtaBanner;
