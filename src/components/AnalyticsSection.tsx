import { Users, CheckCircle2, Video, ChevronDown, ThumbsUp, Repeat, Clock, TrendingUp, Palette } from "lucide-react";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const tasks = [
  { title: "Concept Sketching", completed: true },
  { title: "Grid Alignment", completed: true },
  { title: "Brand Audit & Research", completed: true },
  { title: "Final Mark", completed: true },
  { title: "Final Identity Delivery", completed: true },
];

const AnalyticsSection = () => {
  const header = useScrollReveal(0);
  const card1 = useScrollReveal(0);
  const card2 = useScrollReveal(150);
  const card3 = useScrollReveal(300);
  const card4 = useScrollReveal(450);

  return (
    <section id="analytics" className="pt-0 pb-16 px-4 md:px-10">
      <div className="max-w-canvas mx-auto">
        <div ref={header.ref} className={`mb-10 ${header.className}`}>
          <h2 className="text-[32px] md:text-[42px] font-bold text-[#1a1a1a] leading-[1.15] tracking-tight max-w-[560px]">
            Monitor design sprints from one <span className="underline decoration-[#1a1a1a]/20 underline-offset-4">unified dashboard</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-[1080px] mx-auto">
          {/* Card 1: Project Statistic */}
          <div ref={card1.ref} className={`bg-white border border-[#e8e8e8] rounded-2xl p-6 shadow-[0_2px_16px_rgba(0,0,0,0.04)] ${card1.className}`}>
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-[14px] font-bold text-[#1a1a1a]">Brand Projects</h3>
              <button className="flex items-center gap-1 text-[11px] text-[#999]">
                This quarter <ChevronDown className="w-3 h-3" />
              </button>
            </div>
            <div className="flex justify-center my-4">
              <div className="relative w-[120px] h-[120px]">
                <svg viewBox="0 0 100 100" className="w-full h-full -rotate-90">
                  <circle cx="50" cy="50" r="38" fill="none" stroke="#f0f0f0" strokeWidth="12" />
                  <circle cx="50" cy="50" r="38" fill="none" stroke="#1a1a1a" strokeWidth="12" strokeDasharray={`${0.62 * 238.76} ${238.76}`} strokeLinecap="round" />
                  <circle cx="50" cy="50" r="38" fill="none" stroke="#999" strokeWidth="12" strokeDasharray={`${0.12 * 238.76} ${238.76}`} strokeDashoffset={`${-0.62 * 238.76}`} strokeLinecap="round" />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-[24px] font-bold text-[#1a1a1a] leading-none">84%</span>
                </div>
              </div>
            </div>
            <div className="flex justify-between text-center px-2">
              <div>
                <p className="text-[11px] text-[#999]">Delivered</p>
                <p className="text-[20px] font-bold text-[#1a1a1a]">62%</p>
              </div>
              <div>
                <p className="text-[11px] text-[#999]">In progress</p>
                <p className="text-[20px] font-bold text-[#1a1a1a]">22%</p>
              </div>
            </div>
          </div>

          {/* Card 2: Brand Identity Design */}
          <div ref={card2.ref} className={`bg-[#1a1a1a] text-white rounded-2xl p-6 pb-4 shadow-[0_16px_40px_-8px_rgba(0,0,0,0.3)] lg:-rotate-[6deg] hover:rotate-0 transition-transform duration-300 self-start ${card2.className}`}>
            <div className="flex items-center justify-between mb-5">
              <div className="flex flex-col gap-1">
                <Palette className="w-4 h-4 text-white/40" />
                <h3 className="text-[18px] font-bold leading-tight">Brand Identity<br />Design</h3>
              </div>
              <span className="text-white/30 text-xl leading-none self-start">•••</span>
            </div>
            <div className="flex flex-col gap-3">
              {tasks.map((task) =>
                <div key={task.title} className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-white/50 flex-shrink-0" />
                  <span className="text-[13px] text-white/80 font-medium">{task.title}</span>
                </div>
              )}
            </div>
          </div>

          {/* Card 3: Client Satisfaction */}
          <div ref={card3.ref} className={`bg-white border border-[#e8e8e8] rounded-2xl p-6 shadow-[0_2px_16px_rgba(0,0,0,0.04)] ${card3.className}`}>
            <p className="text-[40px] font-extrabold text-[#1a1a1a] leading-none tracking-tight">96%</p>
            <p className="text-[#999] mt-1 text-sm font-medium">Client satisfaction rate</p>
            <div className="flex flex-col gap-3 mt-5">
              {[
                { icon: ThumbsUp, label: "Happy clients", value: "20+" },
                { icon: Repeat, label: "Repeat rate", value: "78%" },
                { icon: Clock, label: "Avg. delivery", value: "12 days" },
                { icon: TrendingUp, label: "YoY growth", value: "+34%" },
              ].map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.label} className="flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                      <Icon size={15} strokeWidth={1.5} className="text-[#bbb]" />
                      <span className="text-[13px] text-[#888] font-medium">{item.label}</span>
                    </div>
                    <span className="text-[13px] font-semibold text-[#1a1a1a]">{item.value}</span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Card 4 */}
          <div ref={card4.ref} className={`flex flex-col gap-4 ${card4.className}`}>
            <div className="bg-white border border-[#e8e8e8] rounded-2xl p-4 shadow-[0_2px_16px_rgba(0,0,0,0.04)] flex-1">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-[14px] font-bold text-[#1a1a1a]">Rebrand Campaign</h3>
                <span className="text-[11px] font-semibold text-[#1a1a1a] bg-[#f0f0f0] rounded-pill px-2 py-0.5">
                  ↑ Priority
                </span>
              </div>
              <p className="text-[12px] text-[#999] leading-[1.5] mb-3">
                Complete visual overhaul for Samuk - logo, typography, color system, and brand guidelines.
              </p>
              <div className="flex items-center gap-2">
                <div className="flex -space-x-2">
                  {["#1a1a1a", "#555", "#999"].map((bg, i) =>
                    <div key={i} className="w-6 h-6 rounded-full border-2 border-white" style={{ backgroundColor: bg }} />
                  )}
                  <div className="w-6 h-6 rounded-full border-2 border-white bg-[#eee] text-[8px] font-bold text-[#999] flex items-center justify-center">+2</div>
                </div>
                <div className="flex-1 h-1.5 bg-[#f0f0f0] rounded-pill overflow-hidden">
                  <div className="h-full bg-[#1a1a1a] rounded-pill" style={{ width: "72%" }} />
                </div>
                <span className="text-[12px] font-semibold text-[#999]">72%</span>
              </div>
            </div>

            <div className="bg-white border border-[#e8e8e8] rounded-2xl p-4 shadow-[0_2px_16px_rgba(0,0,0,0.04)]">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-[14px] font-bold text-[#1a1a1a]">Creative Sync</h3>
                <button className="flex items-center gap-1 text-[11px] font-semibold text-[#1a1a1a] border border-[#e0e0e0] rounded-pill px-2.5 py-1 hover:bg-[#f5f5f5] transition-colors">
                  <Users className="w-3 h-3" />
                  Join
                </button>
              </div>
              <div className="flex items-center gap-2.5">
                <Video className="w-5 h-5 text-[#bbb] flex-shrink-0" />
                <div>
                  <p className="text-[12px] font-semibold text-[#1a1a1a]">Design Review</p>
                  <p className="text-[11px] text-[#999]">Weekly creative standup</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <p className="text-center text-[14px] text-[#1a1a1a] font-medium mt-12">
          Trusted by 20+ Brands Worldwide
        </p>
      </div>
    </section>
  );
};

export default AnalyticsSection;
