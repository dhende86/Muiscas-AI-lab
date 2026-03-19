import { Lightbulb, Users, BookOpenCheck, Gauge } from "lucide-react";

const pillars = [
  {
    icon: Lightbulb,
    title: "Clarity First",
    description: "Complex tools explained in plain language — no assumed background knowledge.",
    color: "text-yellow-400",
    bg: "bg-yellow-500/10",
    border: "border-yellow-500/20",
  },
  {
    icon: Users,
    title: "Built for Students",
    description: "Designed by people who have faced the same onboarding challenges in research computing.",
    color: "text-blue-400",
    bg: "bg-blue-500/10",
    border: "border-blue-500/20",
  },
  {
    icon: BookOpenCheck,
    title: "Structured Learning",
    description: "Follow guided paths or jump directly to the topic you need — your pace, your choice.",
    color: "text-emerald-400",
    bg: "bg-emerald-500/10",
    border: "border-emerald-500/20",
  },
  {
    icon: Gauge,
    title: "Real Infrastructure",
    description: "Everything here maps directly to the real tools, commands, and systems in the university data center.",
    color: "text-purple-400",
    bg: "bg-purple-500/10",
    border: "border-purple-500/20",
  },
];

export function WhySection() {
  return (
    <section className="relative px-6 py-24">
      {/* Subtle background glow */}
      <div className="absolute inset-0 flex justify-center items-center pointer-events-none">
        <div className="w-[700px] h-[300px] bg-blue-600/8 rounded-full blur-[120px]" />
      </div>

      <div className="relative max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left — Text Block */}
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-purple-500/30 bg-purple-500/10 mb-6">
              <span className="text-purple-300 text-xs font-medium tracking-wider uppercase">
                Our Purpose
              </span>
            </div>
            <h2
              className="text-white mb-6"
              style={{ fontSize: "clamp(1.8rem, 4vw, 2.6rem)", fontWeight: 700, lineHeight: 1.25 }}
            >
              Why this platform{" "}
              <span
                style={{
                  background: "linear-gradient(135deg, #a78bfa 0%, #60a5fa 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                exists
              </span>
            </h2>
            <div className="space-y-4 text-slate-300" style={{ lineHeight: 1.8, fontSize: "1.05rem" }}>
              <p>
                The university data center is home to powerful computing infrastructure — from
                GPU clusters and A100 servers to containerized environments and high-speed
                interconnects. These tools unlock the full potential of modern research,
                machine learning, and data science.
              </p>
              <p>
                But for new users — students, researchers, and first-time HPC users — this
                ecosystem can feel overwhelming. Documentation is often scattered, commands
                are cryptic, and there's rarely a clear "where do I start?" answer.
              </p>
              <p>
                <span className="text-cyan-300 font-medium">
                  This platform was created to change that.
                </span>{" "}
                It gives every new user a single, organized, beginner-friendly home base for
                learning how to confidently use the data center's tools and resources — from
                first login to running your first GPU workload.
              </p>
            </div>
          </div>

          {/* Right — Pillars */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {pillars.map((pillar) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={pillar.title}
                  className={`rounded-2xl border ${pillar.border} ${pillar.bg} p-5 hover:-translate-y-1 transition-transform duration-200`}
                >
                  <div className={`w-10 h-10 rounded-xl bg-black/20 flex items-center justify-center mb-3`}>
                    <Icon size={19} className={pillar.color} />
                  </div>
                  <h4
                    className="text-white mb-1.5"
                    style={{ fontWeight: 600, fontSize: "0.95rem" }}
                  >
                    {pillar.title}
                  </h4>
                  <p className="text-slate-400 text-sm leading-relaxed">{pillar.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
