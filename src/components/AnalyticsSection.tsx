import { BarChart3, Users, CheckCircle2, Video } from "lucide-react";

const AnalyticsSection = () => {
  const weekDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const barData = [
    { purple: 45, green: 20 },
    { purple: 65, green: 35 },
    { purple: 55, green: 25 },
    { purple: 80, green: 40 },
    { purple: 70, green: 50 },
    { purple: 90, green: 30 },
    { purple: 60, green: 45 },
  ];

  return (
    <section className="py-24 px-4 md:px-10">
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

        {/* Dashboard Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* Project Statistic Card */}
          <div className="md:col-span-3 bg-canvas border border-input rounded-card p-6 shadow-card hover:shadow-float-hover hover:-translate-y-1 transition-all duration-200">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-base font-semibold text-text-primary">Project Statistic</h3>
              <span className="text-xs text-text-secondary">All time ▾</span>
            </div>
            {/* Donut chart mock */}
            <div className="flex justify-center mb-6">
              <div className="relative w-28 h-28">
                <svg viewBox="0 0 100 100" className="w-full h-full -rotate-90">
                  <circle cx="50" cy="50" r="40" fill="none" stroke="hsl(var(--secondary))" strokeWidth="10" />
                  <circle
                    cx="50" cy="50" r="40" fill="none"
                    stroke="hsl(var(--primary))" strokeWidth="10"
                    strokeDasharray={`${0.74 * 251.2} ${251.2}`}
                    strokeLinecap="round"
                  />
                  <circle
                    cx="50" cy="50" r="40" fill="none"
                    stroke="hsl(160 84% 39%)" strokeWidth="10"
                    strokeDasharray={`${0.12 * 251.2} ${251.2}`}
                    strokeDashoffset={`${-0.74 * 251.2}`}
                    strokeLinecap="round"
                  />
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <span className="text-2xl font-bold text-text-primary">74%</span>
                  <span className="text-[11px] text-text-secondary">Activity</span>
                </div>
              </div>
            </div>
            <div className="flex justify-between text-center">
              <div>
                <p className="text-xs text-text-secondary">Completed</p>
                <p className="text-xl font-bold text-text-primary">62%</p>
              </div>
              <div>
                <p className="text-xs text-text-secondary">In progress</p>
                <p className="text-xl font-bold text-text-primary">32%</p>
              </div>
            </div>
          </div>

          {/* Usability Testing Card - Purple */}
          <div className="md:col-span-3 bg-primary text-primary-foreground rounded-card p-6 shadow-card hover:shadow-float-hover hover:-translate-y-1 transition-all duration-200 flex flex-col">
            <div className="flex items-center justify-between mb-1">
              <h3 className="text-base font-semibold">Usability testing</h3>
              <span className="text-primary-foreground/60">•••</span>
            </div>
            <p className="text-xs text-primary-foreground/70 mb-4">Estimation date: 12 April</p>
            <div className="grid grid-cols-4 gap-2 mb-6">
              {["13 Mar", "14 Mar", "15 Mar", "16 Mar"].map((date, i) => (
                <div key={date} className="bg-primary-foreground/15 rounded-[12px] p-2 text-center">
                  <p className="text-[10px] text-primary-foreground/70">{date}</p>
                  <p className="text-sm font-bold">{[5, 7, 8, 8][i]} h</p>
                </div>
              ))}
            </div>
            <div className="flex flex-col gap-2 mt-auto">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-primary-foreground/60" />
                <span className="text-sm line-through text-primary-foreground/60">Define Testing Objectives</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-primary-foreground/60" />
                <span className="text-sm line-through text-primary-foreground/60">Prepare Test Scenarios</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 rounded-full border-2 border-primary-foreground/40" />
                <span className="text-sm">Execute Usability Testing</span>
              </div>
            </div>
          </div>

          {/* Tasks & Bar Chart Card */}
          <div className="md:col-span-3 bg-canvas border border-input rounded-card p-6 shadow-card hover:shadow-float-hover hover:-translate-y-1 transition-all duration-200">
            <div className="mb-4">
              <p className="text-[40px] font-bold text-text-primary leading-none">165+</p>
              <p className="text-sm text-text-secondary mt-1">
                Selected period: <span className="font-semibold text-text-primary">39 Tasks</span>
              </p>
            </div>
            {/* Bar chart */}
            <div className="flex items-end gap-1.5 h-24 mt-4">
              {barData.map((bar, i) => (
                <div key={i} className="flex-1 flex items-end gap-0.5">
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
            <div className="flex justify-between mt-2">
              {weekDays.map((d) => (
                <span key={d} className="text-[10px] text-text-secondary flex-1 text-center">{d}</span>
              ))}
            </div>
          </div>

          {/* Right Column - Stacked Cards */}
          <div className="md:col-span-3 flex flex-col gap-6">
            {/* Design System Card */}
            <div className="bg-canvas border border-input rounded-card p-5 shadow-card hover:shadow-float-hover hover:-translate-y-1 transition-all duration-200">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-base font-semibold text-text-primary">Design System</h3>
                <span className="text-xs font-semibold text-destructive bg-destructive/10 rounded-pill px-2.5 py-0.5 flex items-center gap-1">
                  ↑ High
                </span>
              </div>
              <p className="text-xs text-text-secondary leading-[1.5] mb-3">
                The &quot;Design System&quot; project aims to establish a consistent and cohesive experience acro...
              </p>
              <div className="flex items-center gap-2">
                <div className="flex -space-x-2">
                  {["hsl(var(--primary))", "hsl(160 84% 39%)", "hsl(32 95% 44%)", "hsl(220 9% 46%)"].map((bg, i) => (
                    <div
                      key={i}
                      className="w-6 h-6 rounded-full border-2 border-canvas text-[9px] font-bold text-primary-foreground flex items-center justify-center"
                      style={{ backgroundColor: bg }}
                    >
                      {["A", "B", "C", "+2"][i]}
                    </div>
                  ))}
                </div>
                <div className="flex-1 h-1.5 bg-secondary rounded-pill overflow-hidden ml-2">
                  <div className="h-full bg-primary rounded-pill" style={{ width: "65%" }} />
                </div>
                <span className="text-xs font-semibold text-text-secondary">65%</span>
              </div>
            </div>

            {/* Team Meeting Card */}
            <div className="bg-canvas border border-input rounded-card p-5 shadow-card hover:shadow-float-hover hover:-translate-y-1 transition-all duration-200">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-base font-semibold text-text-primary">Team Meeting</h3>
                <button className="flex items-center gap-1.5 text-xs font-semibold text-primary border border-primary/20 rounded-pill px-3 py-1 hover:bg-primary/5 transition-colors">
                  <Users className="w-3.5 h-3.5" />
                  Join
                </button>
              </div>
              <div className="flex items-center gap-3 text-xs text-text-secondary">
                <Video className="w-4 h-4 text-text-secondary" />
                <div>
                  <p className="font-medium text-text-primary">Google Meet</p>
                  <p className="truncate max-w-[140px]">meet.google.com/knd-...</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Trust line */}
        <p className="text-center text-sm text-text-secondary mt-12 font-medium">
          Trusted by 2,000+ teams worldwide
        </p>
      </div>
    </section>
  );
};

export default AnalyticsSection;
