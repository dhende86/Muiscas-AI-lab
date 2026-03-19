import { useState } from "react";
import { Menu, X, Cpu } from "lucide-react";

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = ["Home", "Tutorials", "Resources", "Contact"];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#050b1f]/80 backdrop-blur-md border-b border-[#1e3a5f]/50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center shadow-lg shadow-cyan-500/30">
            <Cpu size={18} className="text-white" />
          </div>
          <span className="text-white font-semibold text-lg tracking-tight">
            DC<span className="text-cyan-400">Hub</span>
          </span>
        </div>

        {/* Desktop Links */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link}>
              <a
                href="#"
                className="text-slate-300 hover:text-cyan-400 transition-colors duration-200 text-sm tracking-wide"
              >
                {link}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <div className="hidden md:block">
          <button className="px-5 py-2 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-sm font-medium shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:scale-105 transition-all duration-200">
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
          {navLinks.map((link) => (
            <a
              key={link}
              href="#"
              className="text-slate-300 hover:text-cyan-400 transition-colors duration-200 py-1"
            >
              {link}
            </a>
          ))}
          <button className="mt-2 px-5 py-2 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-sm font-medium w-fit">
            Get Started
          </button>
        </div>
      )}
    </nav>
  );
}
