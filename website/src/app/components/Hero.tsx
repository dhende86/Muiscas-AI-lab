import { ArrowRight, Server, Zap } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 pt-24 pb-16 overflow-hidden">
      {/* Animated background blobs */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-[-8%] right-[8%] w-[520px] h-[520px] rounded-full bg-gradient-to-br from-blue-600/35 to-cyan-400/25 blur-[110px] animate-pulse"
        />
        <div
          className="absolute bottom-[0%] left-[2%] w-[580px] h-[580px] rounded-full bg-gradient-to-tr from-indigo-600/30 to-blue-400/20 blur-[130px] animate-pulse"
          style={{ animationDelay: "1.2s" }}
        />
        <div
          className="absolute top-[35%] left-[15%] w-[380px] h-[380px] rounded-full bg-gradient-to-bl from-cyan-500/20 to-sky-400/15 blur-[90px] animate-pulse"
          style={{ animationDelay: "2s" }}
        />
      </div>

      {/* Badge */}
      <div className="relative z-10 mb-6 flex items-center gap-2 px-4 py-1.5 rounded-full border border-cyan-500/30 bg-cyan-500/10 backdrop-blur-sm">
        <Zap size={13} className="text-cyan-400" />
        <span className="text-cyan-300 text-xs font-medium tracking-wider uppercase">
          University Research Infrastructure
        </span>
      </div>

      {/* Title */}
      <h1
        className="relative z-10 max-w-4xl text-white leading-tight mb-6"
        style={{ fontSize: "clamp(2.4rem, 6vw, 4.5rem)", fontWeight: 700, lineHeight: 1.15 }}
      >
        Data Center{" "}
        <span
          style={{
            background: "linear-gradient(135deg, #38bdf8 0%, #22d3ee 40%, #818cf8 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          Learning Hub
        </span>
      </h1>

      {/* Subtitle */}
      <p
        className="relative z-10 max-w-2xl text-slate-300 mb-10"
        style={{ fontSize: "clamp(1rem, 2vw, 1.2rem)", lineHeight: 1.7 }}
      >
        Your one-stop platform to access, learn, and confidently navigate the university data
        center. Step-by-step tutorials, walkthroughs, and beginner-friendly guides — all in
        one place.
      </p>

      {/* CTA Buttons */}
      <div className="relative z-10 flex flex-wrap items-center justify-center gap-4">
        <button className="group flex items-center gap-2 px-7 py-3.5 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-medium shadow-xl shadow-cyan-500/30 hover:shadow-cyan-500/50 hover:scale-105 transition-all duration-300">
          Explore Tutorials
          <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-200" />
        </button>
        <button className="flex items-center gap-2 px-7 py-3.5 rounded-full border border-slate-600 bg-white/5 backdrop-blur-sm text-slate-200 font-medium hover:border-cyan-500/50 hover:bg-white/10 transition-all duration-300">
          <Server size={15} className="text-cyan-400" />
          View Resources
        </button>
      </div>

      {/* Stats row */}
      <div className="relative z-10 mt-16 flex flex-wrap justify-center gap-8">
        {[
          { value: "7+", label: "Tutorial Topics" },
          { value: "GPU", label: "A100 / DGX Access" },
          { value: "Free", label: "Open to All Students" },
        ].map((stat) => (
          <div key={stat.label} className="text-center">
            <div
              className="text-cyan-400 font-bold"
              style={{ fontSize: "1.6rem" }}
            >
              {stat.value}
            </div>
            <div className="text-slate-400 text-sm mt-0.5">{stat.label}</div>
          </div>
        ))}
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40 animate-bounce">
        <div className="w-px h-8 bg-gradient-to-b from-transparent to-cyan-400" />
        <div className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
      </div>
    </section>
  );
}
