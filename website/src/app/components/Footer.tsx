import { Cpu, Mail } from "lucide-react";
import { Link } from "react-router";

export function Footer() {
  return (
    <footer className="relative border-t border-[#1e3a5f]/40 bg-[#040c1e]/80 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-6 py-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center shadow-lg shadow-cyan-500/20">
                <Cpu size={18} className="text-white" />
              </div>
              <span className="text-white font-semibold text-lg">
                Data Center <span className="text-cyan-400">Learning Hub</span>
              </span>
            </div>
            <p className="text-slate-500 text-sm leading-relaxed max-w-xs">
              A beginner-friendly educational platform for university data center tools,
              compute infrastructure, and research workflows.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-slate-300 text-sm font-semibold mb-4 uppercase tracking-wider">
              Quick Links
            </h4>
            <ul className="space-y-2.5">
              {[
                { label: "Home", to: "/" },
                { label: "Tutorials", to: "/#topics" },
                { label: "Beginner Path", to: "/#beginner-path" },
                { label: "Resources", to: "/resources" },
                { label: "Contact", to: "/contact" },
              ].map(({ label, to }) => (
                <li key={label}>
                  <Link
                    to={to}
                    className="text-slate-500 hover:text-cyan-400 text-sm transition-colors duration-200 flex items-center gap-1.5"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-slate-300 text-sm font-semibold mb-4 uppercase tracking-wider">
              Get Help
            </h4>
            <div className="space-y-3">
              <a
                href="mailto:pordonez@kennesaw.edu"
                className="flex items-center gap-3 text-slate-500 hover:text-cyan-400 text-sm transition-colors duration-200"
              >
                <Mail size={14} className="text-slate-600" />
                pordonez@kennesaw.edu
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-[#1e3a5f]/30 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-slate-600 text-xs">
            © 2025 Data Center Learning Hub | University Research Infrastructure
          </p>
          <p className="text-slate-700 text-xs">
            Built to make HPC accessible for everyone
          </p>
        </div>
      </div>
    </footer>
  );
}
