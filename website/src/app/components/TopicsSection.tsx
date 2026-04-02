import { Shield, Monitor, FlaskConical, BookOpen, Activity, Box, Container, ArrowRight } from "lucide-react";
import { Link } from "react-router";

const topics = [
  {
    icon: Shield,
    title: "VPN Setup",
    description: "Learn how to securely connect to the university network from anywhere using the campus VPN.",
    color: "from-emerald-500/20 to-teal-500/10",
    border: "border-emerald-500/30",
    glow: "shadow-emerald-500/10",
    iconColor: "text-emerald-400",
    iconBg: "bg-emerald-500/15",
    tag: "Networking",
    path: "/tutorials/vpn",
  },
  {
    icon: Monitor,
    title: "Connect to A100 / DGX",
    description: "Step-by-step guidance for SSH access and remote login to the high-performance GPU compute servers.",
    color: "from-blue-500/20 to-cyan-500/10",
    border: "border-blue-500/30",
    glow: "shadow-blue-500/10",
    iconColor: "text-blue-400",
    iconBg: "bg-blue-500/15",
    tag: "GPU Compute",
    path: "/tutorials/a100-dgx",
  },
  {
    icon: FlaskConical,
    title: "Virtual Environments",
    description: "Set up isolated Python environments with venv to keep your project dependencies organized.",
    color: "from-violet-500/20 to-purple-500/10",
    border: "border-violet-500/30",
    glow: "shadow-violet-500/10",
    iconColor: "text-violet-400",
    iconBg: "bg-violet-500/15",
    tag: "Python",
    path: "/tutorials/venv",
  },
  {
    icon: BookOpen,
    title: "Launch Jupyter",
    description: "Start and connect to Jupyter Lab sessions running on the remote server via SSH port forwarding.",
    color: "from-orange-500/20 to-amber-500/10",
    border: "border-orange-500/30",
    glow: "shadow-orange-500/10",
    iconColor: "text-orange-400",
    iconBg: "bg-orange-500/15",
    tag: "Notebooks",
    path: "/tutorials/jupyter",
  },
  {
    icon: Activity,
    title: "Nvidia SMI",
    description: "Check GPU status, monitor memory usage, inspect active processes, and verify GPU allocation.",
    color: "from-green-500/20 to-lime-500/10",
    border: "border-green-500/30",
    glow: "shadow-green-500/10",
    iconColor: "text-green-400",
    iconBg: "bg-green-500/15",
    tag: "GPU Monitoring",
    path: "/tutorials/nvidia-smi",
  },
  {
    icon: Box,
    title: "Containers",
    description: "Learn the basics of containerized computing environments and why they're essential for reproducible research.",
    color: "from-sky-500/20 to-blue-500/10",
    border: "border-sky-500/30",
    glow: "shadow-sky-500/10",
    iconColor: "text-sky-400",
    iconBg: "bg-sky-500/15",
    tag: "Infrastructure",
    path: "/tutorials/containers",
  },
  {
    icon: Container,
    title: "Docker",
    description: "Run, manage, and deploy containerized applications using Docker on the data center infrastructure.",
    color: "from-cyan-500/20 to-teal-500/10",
    border: "border-cyan-500/30",
    glow: "shadow-cyan-500/10",
    iconColor: "text-cyan-400",
    iconBg: "bg-cyan-500/15",
    tag: "DevOps",
    path: "/tutorials/docker",
  },
];

export function TopicsSection() {
  return (
    <section id="topics" className="relative px-6 py-24 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="text-center mb-16">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-blue-500/30 bg-blue-500/10 mb-5">
          <span className="text-blue-300 text-xs font-medium tracking-wider uppercase">
            Tutorial Topics
          </span>
        </div>
        <h2
          className="text-white mb-4"
          style={{ fontSize: "clamp(1.8rem, 4vw, 2.8rem)", fontWeight: 700 }}
        >
          Explore What You Can Learn
        </h2>
        <p className="text-slate-400 max-w-xl mx-auto" style={{ lineHeight: 1.7 }}>
          Each topic comes with step-by-step walkthroughs designed specifically for
          students and researchers new to high-performance computing.
        </p>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
        {topics.map((topic) => {
          const Icon = topic.icon;
          return (
            <Link
              key={topic.title}
              to={topic.path}
              className={`group relative rounded-2xl border ${topic.border} bg-gradient-to-br ${topic.color} bg-[#0a1628]/60 backdrop-blur-sm p-6 cursor-pointer hover:-translate-y-1.5 hover:shadow-xl ${topic.glow} transition-all duration-300 overflow-hidden`}
            >
              {/* Background glow on hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white/[0.02] rounded-2xl" />

              {/* Tag */}
              <div className="flex items-center justify-between mb-5">
                <span className="text-[10px] font-semibold tracking-wider uppercase text-slate-500 bg-slate-800/60 px-2.5 py-1 rounded-full border border-slate-700/50">
                  {topic.tag}
                </span>
                <ArrowRight
                  size={14}
                  className={`${topic.iconColor} opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all duration-300`}
                />
              </div>

              {/* Icon */}
              <div className={`w-11 h-11 rounded-xl ${topic.iconBg} flex items-center justify-center mb-4`}>
                <Icon size={20} className={topic.iconColor} />
              </div>

              {/* Content */}
              <h3
                className="text-white mb-2"
                style={{ fontWeight: 600, fontSize: "1.05rem" }}
              >
                {topic.title}
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed">{topic.description}</p>
            </Link>
          );
        })}

        {/* Spacer card - "More coming soon" */}
        <div className="relative rounded-2xl border border-dashed border-slate-700/50 bg-slate-900/20 p-6 flex flex-col items-center justify-center text-center gap-2 opacity-60">
          <div className="w-8 h-8 rounded-full border border-slate-600 flex items-center justify-center text-slate-500 text-xl mb-1">
            +
          </div>
          <p className="text-slate-500 text-sm font-medium">More topics coming soon</p>
        </div>
      </div>
    </section>
  );
}
