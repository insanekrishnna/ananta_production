import { FEATURES } from "@/data/content";
import { Database, Layers, Users } from "lucide-react";

const iconMap = { Database, Layers, Users } as const;

const FeaturesSection = () => {
  return (
    <section className="py-24 px-4 md:px-10">
      <div className="max-w-canvas mx-auto">
        <div className="flex flex-col items-center mb-16">
          <span className="bg-secondary text-text-secondary rounded-pill px-4 py-1 text-[13px] font-semibold uppercase tracking-[0.08em] mb-4">
            Features
          </span>
          <h2 className="text-[32px] md:text-[36px] font-bold text-text-primary text-center max-w-[560px] leading-[1.2]">
            Everything you need to build internal tools
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {FEATURES.map((feat) => {
            const Icon = iconMap[feat.icon];
            return (
              <div
                key={feat.title}
                className="bg-canvas border border-input rounded-card p-8 shadow-card hover:shadow-float-hover hover:-translate-y-1 transition-all duration-200"
              >
                <div
                  className="w-12 h-12 rounded-[12px] flex items-center justify-center mb-4"
                  style={{ backgroundColor: feat.iconBg }}
                >
                  <Icon size={24} strokeWidth={1.5} style={{ color: feat.iconColor }} />
                </div>
                <h3 className="text-xl font-semibold text-text-primary mb-2">{feat.title}</h3>
                <p className="text-[15px] text-text-secondary leading-[1.65]">{feat.body}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
