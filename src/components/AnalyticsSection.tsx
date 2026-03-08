import { CheckCircle2, Circle, Video, MoreHorizontal, ChevronDown, Flame } from "lucide-react";

const timeline = [
  { date: "13 Mar", time: "5 h", highlighted: false },
  { date: "14 Mar", time: "7 h", highlighted: false },
  { date: "15 Mar", time: "8 h", highlighted: true },
  { date: "16 Mar", time: "8 h", highlighted: false },
];

const tasks = [
  { title: "Define Testing Objectives", completed: true },
  { title: "Prepare Test Scenarios", completed: true },
  { title: "Execute Usability Testing", completed: false },
];

const barHeights = {
  violet: [30, 50, 40, 65, 90, 110, 55],
  teal: [20, 35, 25, 45, 60, 80, 40],
  labels: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  dates: ["21", "22", "23", "24", "25", "26", "27"],
};

const maxBar = 110;

const AnalyticsSection = () => {
  return (
    <section className="py-24 px-4 md:px-10">
      <div className="max-w-canvas mx-auto">
        {/* Section Header */}
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

        {/* Dashboard Cards Row */}
        <div className="flex flex-col lg:flex-row items-center lg:items-stretch justify-center gap-4 max-w-[1280px] mx-auto">

          {/* Card 1: Project Statistic */}
          <div className="w-full lg:w-[280px] flex-shrink-0 bg-canvas border border-input rounded-[20px] p-6 shadow-card hover:-translate-y-1 hover:shadow-float transition-all duration-200 z-[1]">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-base font-bold text-text-primary">Project Statistic</h3>
              <button className="flex items-center gap-1 text-[12px] text-muted-foreground hover:text-primary transition-colors">
                All time <ChevronDown className="w-3 h-3" />
              </button>
            </div>

            {/* Semi-circular Donut Gauge */}
            <div className="relative h-[110px] my-5 flex items-end justify-center">
              <svg viewBox="0 0 200 110" className="w-[180px] h-[110px]" role="img" aria-label="Activity gauge showing 74%">
                {/* Track */}
                <path
                  d="M 20 100 A 80 80 0 0 1 180 100"
                  fill="none"
                  stroke="hsl(var(--secondary))"
                  strokeWidth="14"
                  strokeLinecap="round"
                />
                {/* Violet arc ~75% */}
                <path
                  d="M 20 100 A 80 80 0 0 1 180 100"
                  fill="none"
                  stroke="#7C3AED"
                  strokeWidth="14"
                  strokeLinecap="round"
                  strokeDasharray="188.5 251.3"
                />
                {/* Teal arc ~25% */}
                <path
                  d="M 20 100 A 80 80 0 0 1 180 100"
                  fill="none"
                  stroke="#10B981"
                  strokeWidth="14"
                  strokeLinecap="round"
                  strokeDasharray="62.8 251.3"
                  strokeDashoffset="-188.5"
                />
              </svg>
              <div className="absolute bottom-[24px] left-1/2 -translate-x-1/2 text-center">
                <p className="text-[32px] font-extrabold text-text-primary leading-none tracking-tight">74%</p>
                <p className="text-[12px] text-muted-foreground mt-1">Activity Records</p>
              </div>
            </div>

            {/* Stats Row */}
            <div className="flex items-center justify-between border-t border-input pt-5 mt-2">
              <div className="text-center flex-1">
                <p className="text-[12px] text-muted-foreground">Completed</p>
                <p className="text-[24px] font-bold text-text-primary leading-tight mt-1">62%</p>
              </div>
              <div className="w-px h-10 bg-input self-center" />
              <div className="text-center flex-1">
                <p className="text-[12px] text-muted-foreground">In progress</p>
                <p className="text-[24px] font-bold text-text-primary leading-tight mt-1">32%</p>
              </div>
            </div>
          </div>

          {/* Card 2: Usability Testing — HERO CENTER */}
          <div
            className="w-full lg:w-[340px] flex-shrink-0 rounded-[24px] p-7 z-10 relative lg:rotate-[-8deg] hover:lg:rotate-[-4deg] transition-transform duration-300 lg:-mx-4 lg:my-[-16px]"
            style={{
              background: "linear-gradient(145deg, #7C3AED 0%, #6D28D9 50%, #5B21B6 100%)",
              boxShadow: "0 24px 64px rgba(124,58,237,0.35), 0 8px 24px rgba(124,58,237,0.20)",
            }}
          >
            <div className="flex items-start justify-between mb-1">
              <div>
                <h3 className="text-[20px] font-bold text-primary-foreground">Usability testing</h3>
                <p className="text-[12px] text-primary-foreground/60 mt-1">Estimation date: 12 April</p>
              </div>
              <MoreHorizontal className="w-5 h-5 text-primary-foreground/50" />
            </div>

            {/* Time Blocks */}
            <div className="flex gap-2 mt-6">
              {timeline.map((item) => (
                <div
                  key={item.date}
                  className={`flex-1 rounded-[12px] py-2.5 px-2 text-center ${
                    item.highlighted
                      ? "bg-primary-foreground/[0.28] border border-primary-foreground/20"
                      : "bg-primary-foreground/[0.15]"
                  }`}
                >
                  <p className="text-[11px] font-medium text-primary-foreground/65">{item.date}</p>
                  <p className="text-[24px] font-extrabold text-primary-foreground mt-1 leading-none">{item.time}</p>
                </div>
              ))}
            </div>

            {/* Task List */}
            <div className="flex flex-col gap-4 mt-7">
              {tasks.map((task) => (
                <div key={task.title} className="flex items-center gap-3">
                  {task.completed ? (
                    <CheckCircle2 className="w-[18px] h-[18px] text-primary-foreground/50 flex-shrink-0" />
                  ) : (
                    <Circle className="w-[18px] h-[18px] text-primary-foreground/40 flex-shrink-0" />
                  )}
                  <span
                    className={`text-[15px] font-medium ${
                      task.completed ? "line-through text-primary-foreground/[0.40]" : "text-primary-foreground"
                    }`}
                  >
                    {task.title}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Card 3: 165+ Bar Chart */}
          <div className="w-full lg:w-[340px] flex-shrink-0 bg-canvas border border-input rounded-[20px] p-6 shadow-card hover:-translate-y-1 hover:shadow-float transition-all duration-200 z-[1]">
            <div className="flex items-start justify-between mb-4">
              <p className="text-[56px] font-extrabold text-text-primary leading-none tracking-[-0.03em]">165+</p>
              <div className="text-right mt-2">
                <p className="text-[12px] text-muted-foreground">Selected period:</p>
                <p className="text-[14px] font-semibold text-text-primary">39 Tasks</p>
              </div>
            </div>

            {/* Bar Chart */}
            <div className="flex items-end gap-3 h-[120px] mt-4">
              {barHeights.labels.map((_, i) => (
                <div key={i} className="flex-1 flex items-end gap-[3px]">
                  <div
                    className="flex-1 rounded-t-[4px]"
                    style={{
                      height: `${(barHeights.violet[i] / maxBar) * 100}%`,
                      backgroundColor: "#7C3AED",
                    }}
                  />
                  <div
                    className="flex-1 rounded-t-[4px]"
                    style={{
                      height: `${(barHeights.teal[i] / maxBar) * 100}%`,
                      backgroundColor: "#10B981",
                    }}
                  />
                </div>
              ))}
            </div>
            <div className="flex justify-between mt-2">
              {barHeights.labels.map((label, i) => (
                <div key={label} className="flex-1 text-center">
                  <span className="text-[11px] text-muted-foreground block leading-tight">{label}</span>
                  <span className="text-[11px] text-muted-foreground block leading-tight">{barHeights.dates[i]}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Card 4: Right Column — stacked */}
          <div className="w-full lg:w-[280px] flex-shrink-0 flex flex-col gap-4 z-[1]">
            {/* Design System */}
            <div className="bg-canvas border border-input rounded-[20px] p-6 shadow-card hover:-translate-y-1 hover:shadow-float transition-all duration-200 flex-1">
              <div className="flex items-start justify-between mb-3">
                <h3 className="text-base font-bold text-text-primary">Design System</h3>
                <span className="inline-flex items-center gap-1 text-[12px] font-semibold text-destructive bg-destructive/10 border border-destructive/20 rounded-pill px-2.5 py-0.5">
                  <Flame className="w-[13px] h-[13px]" />
                  High
                </span>
              </div>
              <p className="text-[13px] text-text-secondary leading-[1.55]">
                The "Design System" project aims to establish a consistent and cohesive user experience acro...
              </p>

              {/* Footer: Avatars + Progress */}
              <div className="flex items-center justify-between mt-4">
                <div className="flex items-center">
                  {[
                    { initials: "SL", bg: "#7C3AED" },
                    { initials: "MK", bg: "#10B981" },
                    { initials: "JP", bg: "#F59E0B" },
                  ].map((av, i) => (
                    <div
                      key={i}
                      className={`w-7 h-7 rounded-full border-2 border-canvas flex items-center justify-center text-[9px] font-bold text-primary-foreground ${i > 0 ? "-ml-2" : ""}`}
                      style={{ backgroundColor: av.bg }}
                    >
                      {av.initials}
                    </div>
                  ))}
                  <div
                    className="-ml-2 w-7 h-7 rounded-full border-2 border-canvas flex items-center justify-center text-[11px] font-bold text-primary-foreground"
                    style={{ backgroundColor: "#7C3AED" }}
                  >
                    +2
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-20 h-1.5 bg-secondary rounded-pill overflow-hidden">
                    <div
                      className="h-full rounded-pill"
                      style={{
                        width: "65%",
                        background: "linear-gradient(90deg, #E040A0 0%, #A855F7 100%)",
                      }}
                    />
                  </div>
                  <span className="text-[13px] font-semibold text-text-primary">65%</span>
                </div>
              </div>
            </div>

            {/* Team Meeting */}
            <div className="bg-canvas border border-input rounded-[20px] p-6 shadow-card hover:-translate-y-1 hover:shadow-float transition-all duration-200">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-base font-bold text-text-primary">Team Meeting</h3>
                <button
                  className="inline-flex items-center gap-1.5 text-[13px] font-semibold rounded-pill px-4 py-1.5 transition-colors"
                  style={{
                    backgroundColor: "#F5F3FF",
                    color: "#7C3AED",
                    border: "1px solid rgba(124,58,237,0.15)",
                    boxShadow: "0 2px 8px rgba(124,58,237,0.15)",
                  }}
                >
                  <Video className="w-[14px] h-[14px]" />
                  Join
                </button>
              </div>
              <div className="flex items-center gap-2.5">
                <div className="p-1.5 rounded-lg" style={{ backgroundColor: "#F0FDF9" }}>
                  <Video className="w-4 h-4" style={{ color: "#00897B" }} />
                </div>
                <div>
                  <p className="text-[13px] font-semibold text-text-primary">Google Meet</p>
                  <p className="text-[12px] text-muted-foreground mt-0.5">meet.google.com/knd-...</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <p className="text-center text-[14px] text-muted-foreground mt-12 tracking-[0.01em]">
          Trusted by 2,000+ teams worldwide
        </p>
      </div>
    </section>
  );
};

export default AnalyticsSection;
