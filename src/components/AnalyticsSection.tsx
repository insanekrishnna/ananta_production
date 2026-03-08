import { Users, CheckCircle2, Video, Palette, ArrowDown } from "lucide-react";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import samukOld from "@/assets/samuk-old-logo.png";
import samukNew from "@/assets/samuk-new-logo.png";

const tasks = [
{ title: "Concept Sketching", completed: true },
{ title: "Vector Refinement", completed: true },
{ title: "Grid Alignment", completed: true },
{ title: "Brand Audit & Research", completed: true },
{ title: "Moodboard & Direction", completed: true },
{ title: "Final Mark", completed: true },
{ title: "Final Identity Delivery", completed: true }];


const AnalyticsSection = () => {
  const header = useScrollReveal(0);
  const card2 = useScrollReveal(0);
  const card4 = useScrollReveal(150);

  return (
    <section id="analytics" className="py-16 px-4 md:px-10">
      <div className="max-w-canvas mx-auto">
        <div ref={header.ref} className={`flex flex-col items-center mb-10 ${header.className}`}>
          <span className="bg-secondary text-text-secondary rounded-pill px-4 py-1 text-[13px] font-semibold uppercase tracking-[0.08em] mb-3">
            Dashboard
          </span>
          <h2 className="text-[32px] md:text-[36px] font-bold text-text-primary text-center max-w-[560px] leading-[1.2]">
            Every project, tracked in real time
          </h2>
          <p className="text-base text-text-secondary leading-[1.65] text-center max-w-[440px] mt-4">
            Monitor design sprints, brand deliverables, and team performance from one unified creative dashboard.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-[1080px] mx-auto auto-rows-auto">
          {/* Brand Identity Design + Logo Evolution */}
          <div ref={card2.ref} className={`bg-gradient-to-br from-[hsl(220,10%,20%)] to-[hsl(220,10%,12%)] text-white rounded-[16px] p-6 shadow-float lg:col-span-2 lg:-rotate-[3deg] hover:rotate-0 transition-transform duration-300 ${card2.className}`}>
            <div className="flex gap-6">
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between mb-1">
                  <div className="flex items-center gap-2">
                    <Palette className="w-4 h-4 text-white/70" />
                    <h3 className="text-[16px] font-bold">Brand Identity Design</h3>
                  </div>
                  <span className="text-white/40 text-xl leading-none">•••</span>
                </div>
                <div className="flex flex-col gap-2.5 mt-4">
                  {tasks.map((task) =>
                    <div key={task.title} className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-white flex-shrink-0" />
                      <span className="text-[13px] text-white/80">{task.title}</span>
                    </div>
                  )}
                </div>
              </div>

              <div className="hidden lg:flex flex-col gap-4 pl-6 border-l border-white/10 min-w-[180px]">
                <div className="flex flex-col items-center gap-2">
                  <span className="text-[10px] font-semibold uppercase tracking-[0.1em] text-white/50 self-start">Logo Evolution</span>
                  <div className="flex items-center gap-3 w-full">
                    <div className="bg-white rounded-[10px] p-2.5 w-[72px] h-[52px] flex items-center justify-center">
                      <img src={samukOld} alt="Samuk old logo" className="max-h-[28px] object-contain opacity-60" />
                    </div>
                    <ArrowDown className="w-3.5 h-3.5 text-white/30 rotate-[-90deg]" />
                    <div className="bg-white rounded-[10px] p-2.5 w-[72px] h-[52px] flex items-center justify-center ring-2 ring-primary/40">
                      <img src={samukNew} alt="Samuk new logo" className="max-h-[28px] object-contain" />
                    </div>
                  </div>
                </div>
                <div>
                  <span className="text-[10px] font-semibold uppercase tracking-[0.1em] text-white/50">Color System</span>
                  <div className="flex gap-1.5 mt-2">
                    {["#4F46E5", "#7C3AED", "#06B6D4", "#10B981", "#F59E0B"].map((color) => (
                      <div key={color} className="flex flex-col items-center gap-1">
                        <div className="w-7 h-7 rounded-full shadow-lg" style={{ backgroundColor: color }} />
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <span className="text-[10px] font-semibold uppercase tracking-[0.1em] text-white/50">Typography</span>
                  <div className="mt-2 space-y-1">
                    <p className="text-[18px] font-bold text-white/90 leading-none tracking-tight">Aa</p>
                    <p className="text-[10px] text-white/50 font-medium">Plus Jakarta Sans</p>
                    <p className="text-[9px] text-white/30 tracking-wide">ABCDEFGHIJKLM</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Active Campaign + Creative Sync */}
          <div ref={card4.ref} className={`flex flex-col gap-6 ${card4.className}`}>
            <div className="bg-canvas border border-input rounded-[16px] p-5 shadow-float flex-1">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-[14px] font-bold text-text-primary">Rebrand Campaign</h3>
                <span className="text-[11px] font-semibold text-destructive bg-destructive/10 rounded-pill px-2 py-0.5">
                  ↑ Priority
                </span>
              </div>
              <p className="text-[12px] text-text-secondary leading-[1.5] mb-3">
                Complete visual overhaul for Lumina — logo, typography, color system, and brand guidelines.
              </p>
              <div className="flex items-center gap-2">
                <div className="flex -space-x-2">
                  {["hsl(var(--primary))", "hsl(160 84% 39%)", "hsl(32 95% 44%)"].map((bg, i) =>
                  <div key={i} className="w-6 h-6 rounded-full border-2 border-canvas" style={{ backgroundColor: bg }} />
                  )}
                  <div className="w-6 h-6 rounded-full border-2 border-canvas bg-muted text-[8px] font-bold text-text-secondary flex items-center justify-center">
                    +2
                  </div>
                </div>
                <div className="flex-1 h-1.5 bg-secondary rounded-pill overflow-hidden">
                  <div className="h-full bg-primary rounded-pill" style={{ width: "72%" }} />
                </div>
                <span className="text-[12px] font-semibold text-text-secondary">72%</span>
              </div>
            </div>

            <div className="bg-canvas border border-input rounded-[16px] p-5 shadow-float">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-[14px] font-bold text-text-primary">Creative Sync</h3>
                <button className="flex items-center gap-1 text-[11px] font-semibold text-primary border border-primary/20 rounded-pill px-2.5 py-1 hover:bg-primary/5 transition-colors">
                  <Users className="w-3 h-3" />
                  Join
                </button>
              </div>
              <div className="flex items-center gap-2.5">
                <Video className="w-5 h-5 text-text-secondary flex-shrink-0" />
                <div>
                  <p className="text-[12px] font-semibold text-text-primary">Design Review</p>
                  <p className="text-[11px] text-text-secondary">Weekly creative standup</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <p className="text-center text-[14px] text-primary font-medium mt-12">
          200+ Brand Projects Delivered Worldwide
        </p>
      </div>
    </section>);

};

export default AnalyticsSection;
