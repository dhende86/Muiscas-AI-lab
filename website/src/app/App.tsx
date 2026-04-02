import { Routes, Route } from "react-router";
import HomePage from "./pages/HomePage";
import ContactPage from "./pages/ContactPage";
import VpnPage from "./pages/tutorials/VpnPage";
import A100Page from "./pages/tutorials/A100Page";
import VenvPage from "./pages/tutorials/VenvPage";
import JupyterPage from "./pages/tutorials/JupyterPage";
import NvidiaSmiPage from "./pages/tutorials/NvidiaSmiPage";
import ContainersPage from "./pages/tutorials/ContainersPage";
import DockerPage from "./pages/tutorials/DockerPage";

/**
 * Main Application Component — router shell for Muiscas AI Lab Website.
 * Wraps all pages in the shared animated background.
 * Add new <Route> entries here as you create new pages.
 */
export default function App() {
  return (
    <div className="min-h-screen relative overflow-x-hidden bg-[#050b1f]">
      {/* ── Global Background (shared across all pages) ── */}
      <div className="fixed inset-0 pointer-events-none z-0">
        {/* Deep base gradient */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_#0d1f40_0%,_#050b1f_60%)]" />

        {/* Animated gradient blobs */}
        <div className="absolute top-[-5%] right-[10%] w-[600px] h-[600px] rounded-full bg-gradient-to-br from-blue-600/25 to-cyan-400/15 blur-[130px] animate-pulse" />
        <div
          className="absolute bottom-[10%] left-[-5%] w-[700px] h-[700px] rounded-full bg-gradient-to-tr from-indigo-600/20 to-blue-400/10 blur-[150px] animate-pulse"
          style={{ animationDelay: "1.5s" }}
        />
        <div
          className="absolute top-[40%] right-[-5%] w-[500px] h-[500px] rounded-full bg-gradient-to-bl from-cyan-500/15 to-sky-400/10 blur-[120px] animate-pulse"
          style={{ animationDelay: "3s" }}
        />

        {/* Circuit board SVG pattern */}
        <div className="absolute inset-0 opacity-[0.15]">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="circuit" x="0" y="0" width="200" height="200" patternUnits="userSpaceOnUse">
                <line x1="0" y1="50" x2="80" y2="50" stroke="#38bdf8" strokeWidth="1.5" />
                <line x1="120" y1="50" x2="200" y2="50" stroke="#38bdf8" strokeWidth="1.5" />
                <line x1="80" y1="0" x2="80" y2="50" stroke="#38bdf8" strokeWidth="1.5" />
                <line x1="120" y1="50" x2="120" y2="100" stroke="#38bdf8" strokeWidth="1.5" />
                <circle cx="80" cy="50" r="3.5" fill="#38bdf8" />
                <circle cx="120" cy="50" r="3.5" fill="#38bdf8" />
                <circle cx="80" cy="50" r="1.5" fill="#fff" />
                <circle cx="120" cy="50" r="1.5" fill="#fff" />
                <line x1="0" y1="120" x2="60" y2="120" stroke="#38bdf8" strokeWidth="1.5" />
                <line x1="100" y1="120" x2="200" y2="120" stroke="#38bdf8" strokeWidth="1.5" />
                <line x1="60" y1="80" x2="60" y2="120" stroke="#38bdf8" strokeWidth="1.5" />
                <line x1="100" y1="120" x2="100" y2="160" stroke="#38bdf8" strokeWidth="1.5" />
                <circle cx="60" cy="120" r="3.5" fill="#38bdf8" />
                <circle cx="100" cy="120" r="3.5" fill="#38bdf8" />
                <circle cx="60" cy="120" r="1.5" fill="#fff" />
                <circle cx="100" cy="120" r="1.5" fill="#fff" />
                <line x1="140" y1="30" x2="140" y2="80" stroke="#38bdf8" strokeWidth="1.5" />
                <line x1="140" y1="30" x2="180" y2="30" stroke="#38bdf8" strokeWidth="1.5" />
                <circle cx="140" cy="30" r="3.5" fill="#38bdf8" />
                <circle cx="140" cy="30" r="1.5" fill="#fff" />
                <line x1="30" y1="150" x2="80" y2="150" stroke="#38bdf8" strokeWidth="1.5" />
                <line x1="30" y1="100" x2="30" y2="150" stroke="#38bdf8" strokeWidth="1.5" />
                <circle cx="30" cy="150" r="3.5" fill="#38bdf8" />
                <circle cx="30" cy="150" r="1.5" fill="#fff" />
                <rect x="155" y="85" width="12" height="8" rx="1" fill="none" stroke="#38bdf8" strokeWidth="1" />
                <rect x="20" y="55" width="12" height="8" rx="1" fill="none" stroke="#38bdf8" strokeWidth="1" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#circuit)" />
          </svg>
        </div>

        {/* Very subtle grid overlay */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(#38bdf8 1px, transparent 1px), linear-gradient(90deg, #38bdf8 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />
      </div>

      {/* ── Page Content ── */}
      <div className="relative z-10">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/tutorials/vpn" element={<VpnPage />} />
          <Route path="/tutorials/a100-dgx" element={<A100Page />} />
          <Route path="/tutorials/venv" element={<VenvPage />} />
          <Route path="/tutorials/jupyter" element={<JupyterPage />} />
          <Route path="/tutorials/nvidia-smi" element={<NvidiaSmiPage />} />
          <Route path="/tutorials/containers" element={<ContainersPage />} />
          <Route path="/tutorials/docker" element={<DockerPage />} />
        </Routes>
      </div>
    </div>
  );
}
