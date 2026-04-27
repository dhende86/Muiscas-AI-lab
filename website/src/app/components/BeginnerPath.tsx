import { Shield, Monitor, FlaskConical, BookOpen, Activity, Box, ChevronRight, CheckCircle2 } from "lucide-react";
import { useNavigate } from "react-router";

const steps = [
  {
    number: 1,
    to: "/tutorials/vpn",
    icon: Shield,
    title: "VPN Setup",
    description: "Connect securely to the university network before anything else.",
    detail: "Install and configure the university VPN client. Required for all remote access.",
    color: "from-emerald-500 to-teal-400",
    borderColor: "border-emerald-500/40",
    bgColor: "bg-emerald-500/10",
    glowColor: "shadow-emerald-500/20",
    iconColor: "text-emerald-400",
    dotColor: "bg-emerald-500",
  },
  {
    number: 2,
    to: "/tutorials/a100-dgx",
    icon: Monitor,
    title: "Connect to A100 / DGX",
    description: "SSH into the GPU compute server once your VPN is active.",
    detail: "Learn the SSH command syntax, how to handle keys, and verify your first connection.",
    color: "from-blue-500 to-cyan-400",
    borderColor: "border-blue-500/40",
    bgColor: "bg-blue-500/10",
    glowColor: "shadow-blue-500/20",
    iconColor: "text-blue-400",
    dotColor: "bg-blue-500",
  },
  {
    number: 3,
    to: "/tutorials/venv",
    icon: FlaskConical,
    title: "Set Up Virtual Environment",
    description: "Create an isolated Python environment for your project.",
    detail: "Use conda or venv to manage packages without affecting the system Python.",
    color: "from-violet-500 to-purple-400",
    borderColor: "border-violet-500/40",
    bgColor: "bg-violet-500/10",
    glowColor: "shadow-violet-500/20",
    iconColor: "text-violet-400",
    dotColor: "bg-violet-500",
  },
  {
    number: 4,
    to: "/tutorials/jupyter",
    icon: BookOpen,
    title: "Launch Jupyter",
    description: "Start a Jupyter server and connect from your local browser.",
    detail: "Set up port forwarding and open JupyterLab for interactive computing.",
    color: "from-orange-500 to-amber-400",
    borderColor: "border-orange-500/40",
    bgColor: "bg-orange-500/10",
    glowColor: "shadow-orange-500/20",
    iconColor: "text-orange-400",
    dotColor: "bg-orange-500",
  },
  {
    number: 5,
    to: "/tutorials/nvidia-smi",
    icon: Activity,
    title: "Check Nvidia SMI",
    description: "Verify your GPU access and monitor resource usage.",
    detail: "Run nvidia-smi to inspect GPU memory, utilization, and active processes.",
    color: "from-green-500 to-lime-400",
    borderColor: "border-green-500/40",
    bgColor: "bg-green-500/10",
    glowColor: "shadow-green-500/20",
    iconColor: "text-green-400",
    dotColor: "bg-green-500",
  },
  {
    number: 6,
    to: "/tutorials/containers",
    icon: Box,
    title: "Use Containers / Docker",
    description: "Deploy your work in reproducible, portable containers.",
    detail: "Pull images, run containers, and learn basic Docker commands for research workflows.",
    color: "from-cyan-500 to-sky-400",
    borderColor: "border-cyan-500/40",
    bgColor: "bg-cyan-500/10",
    glowColor: "shadow-cyan-500/20",
    iconColor: "text-cyan-400",
    dotColor: "bg-cyan-500",
  },
];

export function BeginnerPath() {
  const navigate = useNavigate();
  return (
    <section id="beginner-path" className="relative px-6 py-24">
      {/* Subtle background accent */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[400px] h-[500px] bg-cyan-600/6 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-cyan-500/30 bg-cyan-500/10 mb-5">
            <CheckCircle2 size={12} className="text-cyan-400" />
            <span className="text-cyan-300 text-xs font-medium tracking-wider uppercase">
              Recommended for Beginners
            </span>
          </div>
          <h2
            className="text-white mb-4"
            style={{ fontSize: "clamp(1.8rem, 4vw, 2.8rem)", fontWeight: 700 }}
          >
            Suggested Beginner Path
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto" style={{ lineHeight: 1.7 }}>
            New to the data center? Follow this guided sequence to go from zero to
            running your first GPU accelerated workload.
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connector line — desktop */}
          <div className="hidden lg:block absolute top-[52px] left-[calc(8.33%-1px)] right-[calc(8.33%-1px)] h-px bg-gradient-to-r from-emerald-500/20 via-blue-500/30 to-cyan-500/20 z-0" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-5">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={step.number} className="relative flex flex-col">
                  {/* Arrow connector (mobile/tablet) */}
                  {index < steps.length - 1 && (
                    <div className="xl:hidden absolute -right-2.5 top-1/2 -translate-y-1/2 z-10 text-slate-600">
                      <ChevronRight size={16} />
                    </div>
                  )}

                  {/* Card */}
                  <div
                    onClick={() => navigate(step.to)}
                    className={`relative flex flex-col items-center text-center rounded-2xl border ${step.borderColor} ${step.bgColor} p-5 hover:-translate-y-1.5 hover:shadow-lg ${step.glowColor} transition-all duration-300 h-full z-10 bg-[#0a1628]/70 backdrop-blur-sm cursor-pointer`}
                  >
                    {/* Step number badge */}
                    <div
                      className={`w-9 h-9 rounded-full bg-gradient-to-br ${step.color} flex items-center justify-center text-white text-sm font-bold mb-4 shadow-lg`}
                    >
                      {step.number}
                    </div>

                    {/* Icon */}
                    <div className="w-10 h-10 rounded-xl bg-black/20 flex items-center justify-center mb-3">
                      <Icon size={18} className={step.iconColor} />
                    </div>

                    {/* Title */}
                    <h3
                      className="text-white mb-2"
                      style={{ fontWeight: 600, fontSize: "0.9rem" }}
                    >
                      {step.title}
                    </h3>

                    {/* Short desc */}
                    <p className="text-slate-400 text-xs leading-relaxed mb-3">
                      {step.description}
                    </p>

                    {/* Detail hint */}
                    <p className="text-slate-500 text-[11px] leading-relaxed italic">
                      {step.detail}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* CTA below */}
        <div className="text-center mt-12">
          <button
            onClick={() => navigate("/tutorials/vpn")}
            className="group inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-gradient-to-r from-cyan-500/20 to-blue-600/20 border border-cyan-500/30 text-cyan-300 font-medium hover:from-cyan-500/30 hover:to-blue-600/30 hover:border-cyan-400/50 transition-all duration-300"
          >
            Start the Beginner Path
            <ChevronRight size={16} className="group-hover:translate-x-0.5 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
}
