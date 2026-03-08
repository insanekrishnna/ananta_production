import { Users, CheckCircle2, Video, ChevronDown } from "lucide-react";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const barData = {
  labels: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  purple: [30, 45, 60, 35, 70, 90, 50],
  green: [20, 35, 50, 30, 45, 65, 40]
};

const timeline = [
  { date: "13 Mar", time: "5h" },
  { date: "14 Mar", time: "7h" },
  { date: "15 Mar", time: "8h" },
  { date: "16 Mar", time: "8h" },
];

const tasks = [
  { title: "Brand Audit & Research", completed: true },
  { title: "Moodboard & Direction", completed: true },
  { title: "Final Identity Delivery", completed: false },
];

const AnalyticsSection = () => {
  const header = useScrollReveal(0);
  const card1 = useScrollReveal(0);
  const card2 = useScrollReveal(150);
  const card3 = useScrollReveal(300);
  const card4 = useScrollReveal(450);

  return (
    <section id="analytics" className="py-16 px-4 md:px-10">
      <div className="max-w-canvas mx-auto">
        <div ref={header.ref} className={`flex flex-col items-center mb-16 ${header.className}`}>
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-[1080px] mx-auto">
          {/* Card 1: Project Statistic */}
          <div ref={card1.ref} className={`bg-canvas border border-input rounded-[16px] p-6 shadow-float ${card1.className}`}>
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-[14px] font-bold text-text-primary">Brand Projects</h3>
              <button className="flex items-center gap-1 text-[11px] text-text-secondary">
                This quarter <ChevronDown className="w-3 h-3" />
              </button>
            </div>
            <div className="flex justify-center my-4">
              <div className="relative w-[120px] h-[120px]">
                <svg viewBox="0 0 100 100" className="w-full h-full -rotate-90">
                  <circle cx="50" cy="50" r="38" fill="none" stroke="hsl(var(--secondary))" strokeWidth="12" />
                  <circle cx="50" cy="50" r="38" fill="none" stroke="hsl(var(--primary))" strokeWidth="12" strokeDasharray={`${0.62 * 238.76} ${238.76}`} strokeLinecap="round" />
                  <circle cx="50" cy="50" r="38" fill="none" stroke="hsl(200 80% 55%)" strokeWidth="12" strokeDasharray={`${0.12 * 238.76} ${238.76}`} strokeDashoffset={`${-0.62 * 238.76}`} strokeLinecap="round" />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-[24px] font-bold text-text-primary leading-none">84%</span>
                </div>
              </div>
            </div>
            <div className="flex justify-between text-center px-2">
              <div>
                <p className="text-[11px] text-text-secondary">Delivered</p>
                <p className="text-[20px] font-bold text-text-primary">62%</p>
              </div>
              <div>
                <p className="text-[11px] text-text-secondary">In progress</p>
                <p className="text-[20px] font-bold text-text-primary">22%</p>
              </div>
            </div>
          </div>

          {/* Card 2: Brand Identity Design */}
          <div ref={card2.ref} className={`bg-gradient-to-br from-[hsl(263,100%,62%)] to-[hsl(253,100%,56%)] text-primary-foreground rounded-[16px] p-6 shadow-float lg:-rotate-[6deg] hover:rotate-0 transition-transform duration-300 ${card2.className}`}>
            <div className="flex items-center justify-between mb-1">
              <h3 className="text-[16px] font-bold">Brand Identity Design</h3>
              <span className="text-primary-foreground/50 text-xl leading-none">•••</span>
            </div>
            <p className="text-[12px] text-primary-foreground/60 mb-4">Deadline: 28 March</p>
            <div className="grid grid-cols-4 gap-2 mb-5">
              {timeline.map((item) => (
                <div key={item.date} className="bg-primary-foreground/10 rounded-[12px] py-2.5 px-1 text-center">
                  <p className="text-[10px] text-primary-foreground/50 mb-0.5">{item.date}</p>
                  <p className="text-[14px] font-bold">{item.time}</p>
                </div>
              ))}
            </div>
            <div className="flex flex-col gap-2.5">
              {tasks.map((task) => (
                <div key={task.title} className="flex items-center gap-2">
                  {task.completed ? (
                    <CheckCircle2 className="w-4 h-4 text-primary-foreground/50 flex-shrink-0" />
                  ) : (
                    <div className="w-4 h-4 rounded-full border-[1.5px] border-primary-foreground/40 flex-shrink-0" />
                  )}
                  <span className={`text-[13px] ${task.completed ? "line-through text-primary-foreground/50" : ""}`}>
                    {task.title}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Card 3: Client Satisfaction */}
          <div ref={card3.ref} className={`bg-canvas border border-input rounded-[16px] p-6 shadow-float ${card3.className}`}>
            <p className="text-[40px] font-extrabold text-text-primary leading-none tracking-tight">96%</p>
            <p className="text-text-secondary mt-1 font-sans text-sm font-medium">
              client satisfaction rate
            </p>
            <div className="flex items-end gap-[6px] h-[96px] mt-5">
              {barData.labels.map((_, i) => (
                <div key={i} className="flex-1 flex items-end gap-[2px]">
                  <div className="flex-1 rounded-t-[4px] bg-primary" style={{ height: `${barData.purple[i]}%` }} />
                  <div className="flex-1 rounded-t-[4px]" style={{ height: `${barData.green[i]}%`, backgroundColor: "hsl(160 84% 39%)" }} />
                </div>
              ))}
            </div>
            <div className="flex justify-between mt-2">
              {barData.labels.map((label) => (
                <span key={label} className="flex-1 text-center text-[10px] text-text-secondary">{label}</span>
              ))}
            </div>
          </div>

          {/* Card 4: Active Campaign + Creative Sync */}
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
                  {["hsl(var(--primary))", "hsl(160 84% 39%)", "hsl(32 95% 44%)"].map((bg, i) => (
                    <div key={i} className="w-6 h-6 rounded-full border-2 border-canvas" style={{ backgroundColor: bg }} />
                  ))}
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
    </section>
  );
};

export default AnalyticsSection;
