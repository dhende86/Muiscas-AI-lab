import { TutorialLayout, InfoBox } from "../../components/TutorialLayout";

const vmPoints = [
  "Can run a completely different operating system",
  "Needs its own CPU, memory, and storage",
  "Generally slow to start up (boots like a computer)",
  "One essentially hosts multiple computers inside of one computer",
];

const containerPoints = [
  "Shares your computer's kernel",
  "Generally starts up very fast",
  "Can run on many things such as your laptop or a cloud server (like the ones you've connected to)",
  "Uses minimal CPU and memory",
  "Only has applications and its dependencies inside of it",
];

export default function ContainersPage() {
  return (
    <TutorialLayout
      tag="Infrastructure"
      tagColor="border-sky-500/30 bg-sky-500/10 text-sky-400"
      title="Containers"
      subtitle="Understand the difference between Virtual Machines and Containers, and why containers are the standard for reproducible research environments."
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
        {/* Virtual Machines */}
        <div className="p-6 rounded-2xl border border-slate-700/50 bg-[#0a1628]/60">
          <h2 className="text-white text-xl font-bold mb-4">Virtual Machines</h2>
          <ul className="flex flex-col gap-3">
            {vmPoints.map((pt) => (
              <li key={pt} className="flex items-start gap-2 text-slate-400 text-sm leading-relaxed">
                <div className="w-1.5 h-1.5 rounded-full bg-slate-500 flex-shrink-0 mt-1.5" />
                {pt}
              </li>
            ))}
          </ul>
        </div>

        {/* Containers */}
        <div className="p-6 rounded-2xl border border-sky-500/30 bg-sky-500/10">
          <h2 className="text-white text-xl font-bold mb-4">Containers</h2>
          <ul className="flex flex-col gap-3">
            {containerPoints.map((pt) => (
              <li key={pt} className="flex items-start gap-2 text-sky-200 text-sm leading-relaxed">
                <div className="w-1.5 h-1.5 rounded-full bg-sky-400 flex-shrink-0 mt-1.5" />
                {pt}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Docker callout */}
      <div className="p-6 rounded-2xl border border-cyan-500/30 bg-[#0a1628]/60 mb-8">
        <h3 className="text-white font-bold text-lg mb-2">Docker</h3>
        <p className="text-slate-400 leading-relaxed">
          Docker is a platform that lets you package an application and all of its dependencies into a lightweight, portable <strong className="text-white">"container"</strong>. Containers can run identically on your laptop, a colleague's machine, or the university's GPU servers — making research fully reproducible.
        </p>
      </div>

      <InfoBox>
        The key difference: a Virtual Machine virtualizes the <strong className="text-white">hardware</strong>, while a Container virtualizes the <strong className="text-white">operating system</strong>. Containers are much lighter and faster to spin up.
      </InfoBox>
    </TutorialLayout>
  );
}
