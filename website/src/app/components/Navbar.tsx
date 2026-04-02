import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { Link } from "react-router";
import owlImage from "../../assets/ksu-owl.png";

const tutorialLinks = [
  { label: "VPN Setup", to: "/tutorials/vpn" },
  { label: "Connect to A100 / DGX", to: "/tutorials/a100-dgx" },
  { label: "Virtual Environments", to: "/tutorials/venv" },
  { label: "Launch Jupyter", to: "/tutorials/jupyter" },
  { label: "Nvidia SMI", to: "/tutorials/nvidia-smi" },
  { label: "Containers", to: "/tutorials/containers" },
  { label: "Docker", to: "/tutorials/docker" },
];

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#050b1f]/80 backdrop-blur-md border-b border-[#1e3a5f]/50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <img src={owlImage} alt="KSU Owl" className="w-9 h-9 object-contain" />
          <span className="text-white font-semibold text-lg tracking-tight">
            DC<span className="text-cyan-400">Hub</span>
          </span>
        </Link>

        {/* Desktop Links */}
        <ul className="hidden md:flex items-center gap-8">
          <li>
            <Link to="/" className="text-slate-300 hover:text-cyan-400 transition-colors duration-200 text-sm tracking-wide">
              Home
            </Link>
          </li>

          {/* Tutorials dropdown */}
          <li className="relative">
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              onBlur={() => setTimeout(() => setDropdownOpen(false), 150)}
              className="flex items-center gap-1 text-slate-300 hover:text-cyan-400 transition-colors duration-200 text-sm tracking-wide"
            >
              Tutorials
              <ChevronDown size={14} className={`transition-transform duration-200 ${dropdownOpen ? "rotate-180" : ""}`} />
            </button>

            {dropdownOpen && (
              <div className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-56 rounded-xl border border-[#1e3a5f]/60 bg-[#050b1f]/95 backdrop-blur-md shadow-xl shadow-black/40 py-2 z-50">
                {tutorialLinks.map(({ label, to }) => (
                  <Link
                    key={to}
                    to={to}
                    className="block px-4 py-2.5 text-slate-300 hover:text-cyan-400 hover:bg-cyan-500/5 text-sm transition-colors duration-150"
                    onClick={() => setDropdownOpen(false)}
                  >
                    {label}
                  </Link>
                ))}
              </div>
            )}
          </li>

          <li>
            <Link to="/resources" className="text-slate-300 hover:text-cyan-400 transition-colors duration-200 text-sm tracking-wide">
              Resources
            </Link>
          </li>
          <li>
            <Link to="/contact" className="text-slate-300 hover:text-cyan-400 transition-colors duration-200 text-sm tracking-wide">
              Contact
            </Link>
          </li>
        </ul>

        {/* CTA */}
        <div className="hidden md:block">
          <button
            onClick={() => document.getElementById("beginner-path")?.scrollIntoView({ behavior: "smooth" })}
            className="px-5 py-2 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-sm font-medium shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:scale-105 transition-all duration-200"
          >
            Get Started
          </button>
        </div>



        {/* Mobile Toggle */}
        <button
          className="md:hidden text-slate-300 hover:text-white"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#050b1f]/95 backdrop-blur-md border-t border-[#1e3a5f]/50 px-6 py-4 flex flex-col gap-4">
          <Link to="/" className="text-slate-300 hover:text-cyan-400 transition-colors duration-200 py-1" onClick={() => setMenuOpen(false)}>
            Home
          </Link>

          {/* Mobile Tutorials accordion */}
          <div>
            <button
              className="flex items-center gap-1 text-slate-300 hover:text-cyan-400 transition-colors duration-200 py-1 w-full text-left"
              onClick={() => setMobileDropdownOpen(!mobileDropdownOpen)}
            >
              Tutorials
              <ChevronDown size={14} className={`ml-1 transition-transform duration-200 ${mobileDropdownOpen ? "rotate-180" : ""}`} />
            </button>
            {mobileDropdownOpen && (
              <div className="mt-2 ml-4 flex flex-col gap-2">
                {tutorialLinks.map(({ label, to }) => (
                  <Link
                    key={to}
                    to={to}
                    className="text-slate-400 hover:text-cyan-400 text-sm transition-colors duration-150 py-1"
                    onClick={() => { setMenuOpen(false); setMobileDropdownOpen(false); }}
                  >
                    {label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link to="/resources" className="text-slate-300 hover:text-cyan-400 transition-colors duration-200 py-1" onClick={() => setMenuOpen(false)}>
            Resources
          </Link>
          <Link to="/contact" className="text-slate-300 hover:text-cyan-400 transition-colors duration-200 py-1" onClick={() => setMenuOpen(false)}>
            Contact
          </Link>

          <button
            onClick={() => { setMenuOpen(false); document.getElementById("beginner-path")?.scrollIntoView({ behavior: "smooth" }); }}
            className="mt-2 px-5 py-2 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-sm font-medium w-fit"
          >
            Get Started
          </button>
        </div>


      )}
    </nav>
  );
}
