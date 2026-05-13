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

      <h2 className="text-white text-2xl font-bold mt-10 mb-6">Step 1: Installation</h2>
      <p className="text-slate-400 mb-4">
        The KSU VPN is a client based system. Download and install the <strong className="text-white">GlobalProtect</strong> VPN software on the device you will use to remotely access campus services.
      </p>

      <a
        href="https://vpn.kennesaw.edu/global-protect/getsoftwarepage.esp"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-between p-4 rounded-xl border border-[#1e3a5f]/60 bg-[#0a1628]/60 hover:border-cyan-500/40 transition-all duration-200 mb-8"
      >
        <span className="text-slate-300 text-sm">GlobalProtect VPN | KSU Portal</span>
        <span className="text-cyan-400 text-sm font-medium">Go to download page →</span>
      </a>

      <h2 className="text-white text-2xl font-bold mt-10 mb-6">Step 2: Connect to the Network</h2>
      <p className="text-slate-400 mb-4">
        Once GlobalProtect is installed, use these guides to log in and access campus services from off campus, just as you would while on campus.
      </p>

      <div className="flex flex-col gap-3 mb-8">
        <div className="p-4 rounded-xl border border-[#1e3a5f]/60 bg-[#0a1628]/60 text-slate-300 text-sm">
          Connecting to KSU Network from off campus, PC:{" "}
          <a
            href="https://kennesaw.service-now.com/sp?id=kb_article_view&sysparm_article=KB0013387"
            target="_blank"
            rel="noopener noreferrer"
            className="text-cyan-400 hover:underline"
          >
            Guide
          </a>
          {" | "}
          <a
            href="https://mediaspace.kennesaw.edu/media/GlobalProtect+VPN+Network+Access+on+PC/1_3yqnkd8r"
            target="_blank"
            rel="noopener noreferrer"
            className="text-cyan-400 hover:underline"
          >
            Video
          </a>
        </div>
        <div className="p-4 rounded-xl border border-[#1e3a5f]/60 bg-[#0a1628]/60 text-slate-300 text-sm">
          Connecting to KSU Network from off campus, Mac:{" "}
          <a
            href="https://kennesaw.service-now.com/sp?id=kb_article_view&sysparm_article=KB0012904"
            target="_blank"
            rel="noopener noreferrer"
            className="text-cyan-400 hover:underline"
          >
            Guide
          </a>
          {" | "}
          <a
            href="https://mediaspace.kennesaw.edu/media/2_KSU_VPN_Client_Installation_MacOS/1_3remo7ux"
            target="_blank"
            rel="noopener noreferrer"
            className="text-cyan-400 hover:underline"
          >
            Video
          </a>
        </div>
      </div>

      <InfoBox>
        If you were added to <strong>vpn-groups</strong>, follow the instructions for adding Portal Connections to GlobalProtect after initial setup.
      </InfoBox>
    </TutorialLayout>
  );
}
