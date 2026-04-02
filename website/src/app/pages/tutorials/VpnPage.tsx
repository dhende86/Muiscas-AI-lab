import { TutorialLayout, Step, Code, InfoBox } from "../../components/TutorialLayout";

export default function VpnPage() {
  return (
    <TutorialLayout
      tag="Networking"
      tagColor="border-emerald-500/30 bg-emerald-500/10 text-emerald-400"
      title="Connecting to KSU's VPN"
      subtitle="Install and configure GlobalProtect to securely access the university network and data center from anywhere off campus."
    >
      <InfoBox>
        Full VPN documentation is available at the KSU UITS Security page. You will need your KSU NetID credentials to complete setup.
      </InfoBox>

      <h2 className="text-white text-2xl font-bold mt-10 mb-6">Step 1 — Installation</h2>
      <p className="text-slate-400 mb-4">
        The KSU VPN is a client-based system. Download and install the <strong className="text-white">GlobalProtect</strong> VPN software on the device you will use to remotely access campus services.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
        {[
          "Windows 10",
          "Windows 11",
          "Mac OS",
          "Android",
          "iOS",
        ].map((os) => (
          <div
            key={os}
            className="flex items-center gap-3 p-4 rounded-xl border border-[#1e3a5f]/60 bg-[#0a1628]/60"
          >
            <div className="w-2 h-2 rounded-full bg-emerald-400 flex-shrink-0" />
            <span className="text-slate-300 text-sm font-medium">{os}</span>
          </div>
        ))}
      </div>

      <h2 className="text-white text-2xl font-bold mt-10 mb-6">Step 2 — Connect to the Network</h2>
      <p className="text-slate-400 mb-4">
        Once GlobalProtect is installed, use these guides to log in and access campus services from off campus, just as you would while on campus.
      </p>

      <div className="flex flex-col gap-3 mb-8">
        <div className="p-4 rounded-xl border border-[#1e3a5f]/60 bg-[#0a1628]/60 text-slate-300 text-sm">
          Connecting to KSU Network from off campus — <span className="text-slate-500">PC: Guide | Video</span>
        </div>
        <div className="p-4 rounded-xl border border-[#1e3a5f]/60 bg-[#0a1628]/60 text-slate-300 text-sm">
          Connecting to KSU Network from off campus — <span className="text-slate-500">Mac: Guide | Video</span>
        </div>
      </div>

      <InfoBox>
        If you were added to <strong>vpn-groups</strong>, follow the instructions for adding Portal Connections to GlobalProtect after initial setup.
      </InfoBox>
    </TutorialLayout>
  );
}
