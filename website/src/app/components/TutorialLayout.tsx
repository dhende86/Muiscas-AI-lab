import { ArrowLeft } from "lucide-react";
import { Link } from "react-router";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";

interface TutorialLayoutProps {
  tag: string;
  tagColor: string;
  title: string;
  subtitle: string;
  children: React.ReactNode;
}

export function TutorialLayout({ tag, tagColor, title, subtitle, children }: TutorialLayoutProps) {
  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-28 pb-20 px-6">
        <div className="max-w-3xl mx-auto">

          {/* Back link */}
          <Link
            to="/#topics"
            className="inline-flex items-center gap-2 text-slate-400 hover:text-cyan-400 text-sm mb-10 transition-colors duration-200"
          >
            <ArrowLeft size={14} />
            Back to Tutorials
          </Link>

          {/* Header */}
          <div className="mb-12">
            <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold tracking-widest uppercase border mb-4 ${tagColor}`}>
              {tag}
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
              {title}
            </h1>
            <p className="text-slate-400 text-lg leading-relaxed">{subtitle}</p>
          </div>

          {/* Divider */}
          <div className="h-px bg-gradient-to-r from-transparent via-[#1e3a5f]/60 to-transparent mb-12" />

          {/* Page-specific content */}
          {children}
        </div>
      </main>
      <Footer />
    </>
  );
}

/** Reusable step block */
export function Step({ number, title, children }: { number: string; title: string; children: React.ReactNode }) {
  return (
    <div className="flex gap-5 mb-10">
      <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-br from-cyan-500/30 to-blue-600/20 border border-cyan-500/40 flex items-center justify-center text-cyan-400 font-bold text-sm">
        {number}
      </div>
      <div className="flex-1 pt-1.5">
        <h3 className="text-white font-semibold text-lg mb-2">{title}</h3>
        <div className="text-slate-400 leading-relaxed">{children}</div>
      </div>
    </div>
  );
}

/** Reusable code block */
export function Code({ children }: { children: string }) {
  return (
    <code className="block bg-[#0a1628] border border-[#1e3a5f]/60 rounded-xl px-5 py-4 text-cyan-300 font-mono text-sm my-3 whitespace-pre-wrap">
      {children}
    </code>
  );
}

/** Inline code */
export function InlineCode({ children }: { children: string }) {
  return (
    <code className="bg-[#0a1628] border border-[#1e3a5f]/60 rounded px-2 py-0.5 text-cyan-300 font-mono text-sm">
      {children}
    </code>
  );
}

/** Info callout */
export function InfoBox({ children }: { children: React.ReactNode }) {
  return (
    <div className="border border-blue-500/30 bg-blue-500/10 rounded-xl px-5 py-4 text-blue-200 text-sm leading-relaxed my-4">
      {children}
    </div>
  );
}
