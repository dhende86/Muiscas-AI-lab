import { ExternalLink, Download, Github } from "lucide-react";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";

interface ResourceCardProps {
  title: string;
  description: string;
  href: string;
  icon: React.ReactNode;
  label: string;
  tag: string;
  tagColor: string;
}

function ResourceCard({ title, description, href, icon, label, tag, tagColor }: ResourceCardProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex flex-col gap-4 p-6 rounded-2xl border border-[#1e3a5f]/60 bg-[#0a1628]/60 hover:border-cyan-500/40 hover:bg-[#0a1628]/80 transition-all duration-200"
    >
      <div className="flex items-start justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500/20 to-blue-600/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
            {icon}
          </div>
          <div>
            <span className={`inline-block px-2 py-0.5 rounded-full text-xs font-semibold tracking-widest uppercase border mb-1 ${tagColor}`}>
              {tag}
            </span>
            <h3 className="text-white font-semibold text-base leading-tight">{title}</h3>
          </div>
        </div>
        <ExternalLink size={16} className="text-slate-500 group-hover:text-cyan-400 transition-colors duration-200 flex-shrink-0 mt-1" />
      </div>
      <p className="text-slate-400 text-sm leading-relaxed">{description}</p>
      <span className="text-cyan-400 text-sm font-medium group-hover:underline">{label} →</span>
    </a>
  );
}

export default function ResourcesPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-28 pb-20 px-6">
        <div className="max-w-3xl mx-auto">

          {/* Header */}
          <div className="mb-12">
            <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold tracking-widest uppercase border border-cyan-500/30 bg-cyan-500/10 text-cyan-400 mb-4">
              Resources
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
              Downloads &amp; Links
            </h1>
            <p className="text-slate-400 text-lg leading-relaxed">
              Everything you need to get connected and set up: VPN clients, Linux tools, and more.
            </p>
          </div>

          {/* Divider */}
          <div className="h-px bg-gradient-to-r from-transparent via-[#1e3a5f]/60 to-transparent mb-12" />

          {/* KSU VPN Section */}
          <section className="mb-12">
            <h2 className="text-white text-2xl font-bold mb-2">KSU VPN</h2>
            <p className="text-slate-400 text-sm mb-6">
              Download the official GlobalProtect VPN client from KSU's portal. You will need your KSU NetID credentials to log in and download.
            </p>
            <ResourceCard
              href="https://vpn.kennesaw.edu/global-protect/getsoftwarepage.esp"
              title="GlobalProtect VPN | KSU Portal"
              description="Official KSU download page for the GlobalProtect VPN client. Supports Windows, macOS, iOS, and Android."
              icon={<Download size={18} />}
              label="Go to download page"
              tag="Official"
              tagColor="border-emerald-500/30 bg-emerald-500/10 text-emerald-400"
            />
          </section>

          {/* Linux Section */}
          <section className="mb-12">
            <h2 className="text-white text-2xl font-bold mb-2">Linux</h2>
            <p className="text-slate-400 text-sm mb-6">
              GlobalProtect does not officially support Linux. Use the open-source client below as an alternative.
            </p>
            <ResourceCard
              href="https://github.com/yuezk/GlobalProtect-openconnect"
              title="GlobalProtect-openconnect"
              description="A GlobalProtect VPN client for Linux, built on OpenConnect. Supports GUI and CLI modes. Packages available for major distros including Ubuntu, Fedora, and Arch."
              icon={<Github size={18} />}
              label="View on GitHub"
              tag="Linux"
              tagColor="border-violet-500/30 bg-violet-500/10 text-violet-400"
            />
          </section>

        </div>
      </main>
      <Footer />
    </>
  );
}
