import { Users, CheckCircle2, Video } from "lucide-react";

const AnalyticsSection = () => {
  const weekData = [
    { day: "Sun", date: 21, purple: 40, green: 18 },
    { day: "Mon", date: 22, purple: 62, green: 32 },
    { day: "Tue", date: 23, purple: 52, green: 22 },
    { day: "Wed", date: 24, purple: 78, green: 38 },
    { day: "Thu", date: 25, purple: 68, green: 48 },
    { day: "Fri", date: 26, purple: 88, green: 28 },
    { day: "Sat", date: 27, purple: 58, green: 42 },
  ];

  return (
    <section className="py-24 px-4 md:px-10 overflow-hidden">
      <div className="max-w-canvas mx-auto">
        <div className="flex flex-col items-center mb-16">
          <span className="bg-secondary text-text-secondary rounded-pill px-4 py-1 text-[13px] font-semibold uppercase tracking-[0.08em] mb-4">
            Analytics
          </span>
          <h2 className="text-[32px] md:text-[36px] font-bold text-text-primary text-center max-w-[560px] leading-[1.2]">
            Powerful insights at your fingertips
          </h2>
          <p className="text-base text-text-secondary leading-[1.65] text-center max-w-[440px] mt-4">
            Track project progress, team performance, and task completion — all in one unified dashboard.
          </p>
        </div>

        {/* Floating Dashboard Collage */}
        <div className="relative mx-auto max-w-[960px] h-[420px] hidden md:block">
          {/* Project Statistic Card - Left */}
          <div className="absolute left-0 top-[40px] w-[220px] bg-canvas border border-input rounded-card p-6 shadow-float z-10">
            <div className="flex items-center gap-2 mb-1">
              <h3 className="text-[14px] font-bold text-text-primary">Project Statistic</h3>
              <span className="text-[11px] text-text-secondary">All time ▾</span>
            </div>
            {/* Donut */}
            <div className="flex justify-center my-4">
              <div className="relative w-[120px] h-[120px]">
                <svg viewBox="0 0 100 100" className="w-full h-full -rotate-90">
                  <circle cx="50" cy="50" r="38" fill="none" stroke="hsl(var(--secondary))" strokeWidth="12" />
                  <circle
                    cx="50" cy="50" r="38" fill="none"
                    stroke="hsl(var(--primary))" strokeWidth="12"
                    strokeDasharray={`${0.62 * 238.76} ${238.76}`}
                    strokeLinecap="round"
                  />
                  <circle
                    cx="50" cy="50" r="38" fill="none"
                    stroke="hsl(160 84% 39%)" strokeWidth="12"
                    strokeDasharray={`${0.12 * 238.76} ${238.76}`}
                    strokeDashoffset={`${-0.62 * 238.76}`}
                    strokeLinecap="round"
                  />
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <span className="text-[24px] font-bold text-text-primary leading-none">74%</span>
                  <span className="text-[11px] text-text-secondary mt-0.5">Activity Records</span>
                </div>
              </div>
            </div>
            <div className="flex justify-between text-center px-2">
              <div>
                <p className="text-[11px] text-text-secondary">Completed</p>
                <p className="text-[20px] font-bold text-text-primary">62%</p>
              </div>
              <div>
                <p className="text-[11px] text-text-secondary">In progress</p>
                <p className="text-[20px] font-bold text-text-primary">32%</p>
              </div>
            </div>
          </div>

          {/* Usability Testing Card - Center, elevated */}
          <div className="absolute left-[180px] top-0 w-[260px] bg-primary text-primary-foreground rounded-card p-6 shadow-float z-20">
            <div className="flex items-center justify-between mb-1">
              <h3 className="text-[16px] font-bold">Usability testing</h3>
              <span className="text-primary-foreground/50 text-xl leading-none">•••</span>
            </div>
            <p className="text-[12px] text-primary-foreground/60 mb-4">Estimation date: 12 April</p>
            <div className="grid grid-cols-4 gap-2 mb-5">
              {[
                { date: "13 Mar", hours: "5 h" },
                { date: "14 Mar", hours: "7 h" },
                { date: "15 Mar", hours: "8 h" },
                { date: "16 Mar", hours: "8 h" },
              ].map((item) => (
                <div key={item.date} className="bg-primary-foreground/10 rounded-[12px] py-2.5 px-1 text-center">
                  <p className="text-[10px] text-primary-foreground/50 mb-0.5">{item.date}</p>
                  <p className="text-[14px] font-bold">{item.hours}</p>
                </div>
              ))}
            </div>
            <div className="flex flex-col gap-2.5 mt-2">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-[16px] h-[16px] text-primary-foreground/50" />
                <span className="text-[13px] line-through text-primary-foreground/50">Define Testing Objectives</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-[16px] h-[16px] text-primary-foreground/50" />
                <span className="text-[13px] line-through text-primary-foreground/50">Prepare Test Scenarios</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-[16px] h-[16px] rounded-full border-[1.5px] border-primary-foreground/40 flex-shrink-0" />
                <span className="text-[13px]">Execute Usability Testing</span>
              </div>
            </div>
          </div>

          {/* 165+ Tasks Card */}
          <div className="absolute left-[400px] top-[16px] w-[260px] bg-canvas border border-input rounded-card p-6 shadow-float z-10">
            <p className="text-[40px] font-extrabold text-text-primary leading-none tracking-tight">165+</p>
            <p className="text-[13px] text-text-secondary mt-1">
              Selected period: &nbsp;<span className="font-semibold text-text-primary">39 Tasks</span>
            </p>
            {/* Bar chart */}
            <div className="flex items-end gap-[6px] h-[96px] mt-5">
              {weekData.map((bar, i) => (
                <div key={i} className="flex-1 flex items-end gap-[2px]">
                  <div
                    className="flex-1 rounded-t-[3px] bg-primary"
                    style={{ height: `${bar.purple}%` }}
                  />
                  <div
                    className="flex-1 rounded-t-[3px]"
                    style={{ height: `${bar.green}%`, backgroundColor: "hsl(160 84% 39%)" }}
                  />
                </div>
              ))}
            </div>
            <div className="flex justify-between mt-1.5">
              {weekData.map((d) => (
                <div key={d.day} className="flex-1 text-center">
                  <span className="text-[10px] text-text-secondary block leading-tight">{d.day}</span>
                  <span className="text-[10px] text-text-secondary block leading-tight">{d.date}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Design System Card - Right Top */}
          <div className="absolute right-0 top-0 w-[224px] bg-canvas border border-input rounded-card p-5 shadow-float z-10">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-[14px] font-bold text-text-primary">Design System</h3>
              <span className="text-[11px] font-semibold text-destructive bg-destructive/10 rounded-pill px-2 py-0.5 flex items-center gap-0.5">
                ↑ High
              </span>
            </div>
            <p className="text-[12px] text-text-secondary leading-[1.5] mb-3">
              The &quot;Design System&quot; project aims to establish a consistent and cohesive user experience acro...
            </p>
            <div className="flex items-center gap-1.5">
              <div className="flex -space-x-1.5">
                {[
                  "hsl(var(--primary))",
                  "hsl(160 84% 39%)",
                  "hsl(32 95% 44%)",
                  "hsl(220 9% 46%)",
                ].map((bg, i) => (
                  <div
                    key={i}
                    className="w-[24px] h-[24px] rounded-full border-2 border-canvas text-[8px] font-bold text-primary-foreground flex items-center justify-center"
                    style={{ backgroundColor: bg }}
                  >
                    {["", "", "", "+2"][i]}
                  </div>
                ))}
              </div>
              <div className="flex-1 h-[6px] bg-secondary rounded-pill overflow-hidden">
                <div className="h-full bg-primary rounded-pill" style={{ width: "65%" }} />
              </div>
              <span className="text-[12px] font-semibold text-text-secondary">65%</span>
            </div>
          </div>

          {/* Team Meeting Card - Right Bottom */}
          <div className="absolute right-0 top-[200px] w-[224px] bg-canvas border border-input rounded-card p-5 shadow-float z-10">
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-[14px] font-bold text-text-primary">Team Meeting</h3>
              <button className="flex items-center gap-1 text-[11px] font-semibold text-primary border border-primary/20 rounded-pill px-2.5 py-1 hover:bg-primary/5 transition-colors">
                <Users className="w-3 h-3" />
                Join
              </button>
            </div>
            <div className="flex items-center gap-2.5">
              <Video className="w-[20px] h-[20px] text-text-secondary flex-shrink-0" />
              <div className="min-w-0">
                <p className="text-[12px] font-semibold text-text-primary">Google Meet</p>
                <p className="text-[11px] text-text-secondary truncate">meet.google.com/knd-...</p>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile fallback - stacked */}
        <div className="flex flex-col gap-4 md:hidden">
          {/* Project Statistic */}
          <div className="bg-canvas border border-input rounded-card p-6 shadow-float">
            <div className="flex items-center gap-2 mb-4">
              <h3 className="text-[14px] font-bold text-text-primary">Project Statistic</h3>
              <span className="text-[11px] text-text-secondary">All time ▾</span>
            </div>
            <div className="flex justify-center mb-4">
              <div className="relative w-[120px] h-[120px]">
                <svg viewBox="0 0 100 100" className="w-full h-full -rotate-90">
                  <circle cx="50" cy="50" r="38" fill="none" stroke="hsl(var(--secondary))" strokeWidth="12" />
                  <circle cx="50" cy="50" r="38" fill="none" stroke="hsl(var(--primary))" strokeWidth="12" strokeDasharray={`${0.62 * 238.76} ${238.76}`} strokeLinecap="round" />
                  <circle cx="50" cy="50" r="38" fill="none" stroke="hsl(160 84% 39%)" strokeWidth="12" strokeDasharray={`${0.12 * 238.76} ${238.76}`} strokeDashoffset={`${-0.62 * 238.76}`} strokeLinecap="round" />
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <span className="text-[24px] font-bold text-text-primary leading-none">74%</span>
                  <span className="text-[11px] text-text-secondary mt-0.5">Activity Records</span>
                </div>
              </div>
            </div>
            <div className="flex justify-between text-center px-4">
              <div>
                <p className="text-[11px] text-text-secondary">Completed</p>
                <p className="text-[20px] font-bold text-text-primary">62%</p>
              </div>
              <div>
                <p className="text-[11px] text-text-secondary">In progress</p>
                <p className="text-[20px] font-bold text-text-primary">32%</p>
              </div>
            </div>
          </div>

          {/* Usability Testing */}
          <div className="bg-primary text-primary-foreground rounded-card p-6 shadow-float">
            <h3 className="text-[16px] font-bold mb-1">Usability testing</h3>
            <p className="text-[12px] text-primary-foreground/60 mb-4">Estimation date: 12 April</p>
            <div className="grid grid-cols-4 gap-2 mb-5">
              {[{ date: "13 Mar", hours: "5 h" }, { date: "14 Mar", hours: "7 h" }, { date: "15 Mar", hours: "8 h" }, { date: "16 Mar", hours: "8 h" }].map((item) => (
                <div key={item.date} className="bg-primary-foreground/10 rounded-[12px] py-2.5 px-1 text-center">
                  <p className="text-[10px] text-primary-foreground/50 mb-0.5">{item.date}</p>
                  <p className="text-[14px] font-bold">{item.hours}</p>
                </div>
              ))}
            </div>
            <div className="flex flex-col gap-2.5">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-primary-foreground/50" />
                <span className="text-[13px] line-through text-primary-foreground/50">Define Testing Objectives</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-primary-foreground/50" />
                <span className="text-[13px] line-through text-primary-foreground/50">Prepare Test Scenarios</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 rounded-full border-[1.5px] border-primary-foreground/40" />
                <span className="text-[13px]">Execute Usability Testing</span>
              </div>
            </div>
          </div>

          {/* 165+ Tasks */}
          <div className="bg-canvas border border-input rounded-card p-6 shadow-float">
            <p className="text-[40px] font-extrabold text-text-primary leading-none">165+</p>
            <p className="text-[13px] text-text-secondary mt-1">Selected period: <span className="font-semibold text-text-primary">39 Tasks</span></p>
            <div className="flex items-end gap-[6px] h-[96px] mt-5">
              {weekData.map((bar, i) => (
                <div key={i} className="flex-1 flex items-end gap-[2px]">
                  <div className="flex-1 rounded-t-[3px] bg-primary" style={{ height: `${bar.purple}%` }} />
                  <div className="flex-1 rounded-t-[3px]" style={{ height: `${bar.green}%`, backgroundColor: "hsl(160 84% 39%)" }} />
                </div>
              ))}
            </div>
            <div className="flex justify-between mt-1.5">
              {weekData.map((d) => (
                <div key={d.day} className="flex-1 text-center">
                  <span className="text-[10px] text-text-secondary block">{d.day}</span>
                  <span className="text-[10px] text-text-secondary block">{d.date}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Design System & Team Meeting */}
          <div className="bg-canvas border border-input rounded-card p-5 shadow-float">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-[14px] font-bold text-text-primary">Design System</h3>
              <span className="text-[11px] font-semibold text-destructive bg-destructive/10 rounded-pill px-2 py-0.5">↑ High</span>
            </div>
            <p className="text-[12px] text-text-secondary leading-[1.5] mb-3">The &quot;Design System&quot; project aims to establish a consistent and cohesive user experience acro...</p>
            <div className="flex items-center gap-1.5">
              <div className="flex -space-x-1.5">
                {["hsl(var(--primary))", "hsl(160 84% 39%)", "hsl(32 95% 44%)", "hsl(220 9% 46%)"].map((bg, i) => (
                  <div key={i} className="w-6 h-6 rounded-full border-2 border-canvas text-[8px] font-bold text-primary-foreground flex items-center justify-center" style={{ backgroundColor: bg }}>{["", "", "", "+2"][i]}</div>
                ))}
              </div>
              <div className="flex-1 h-1.5 bg-secondary rounded-pill overflow-hidden">
                <div className="h-full bg-primary rounded-pill" style={{ width: "65%" }} />
              </div>
              <span className="text-[12px] font-semibold text-text-secondary">65%</span>
            </div>
          </div>
          <div className="bg-canvas border border-input rounded-card p-5 shadow-float">
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-[14px] font-bold text-text-primary">Team Meeting</h3>
              <button className="flex items-center gap-1 text-[11px] font-semibold text-primary border border-primary/20 rounded-pill px-2.5 py-1">
                <Users className="w-3 h-3" />
                Join
              </button>
            </div>
            <div className="flex items-center gap-2.5">
              <Video className="w-5 h-5 text-text-secondary flex-shrink-0" />
              <div>
                <p className="text-[12px] font-semibold text-text-primary">Google Meet</p>
                <p className="text-[11px] text-text-secondary">meet.google.com/knd-...</p>
              </div>
            </div>
          </div>
        </div>

        {/* Trust line */}
        <p className="text-center text-[14px] text-primary font-medium mt-12 md:mt-16">
          Trusted by 2,000+ teams worldwide
        </p>
      </div>
    </section>
  );
};

export default AnalyticsSection;
