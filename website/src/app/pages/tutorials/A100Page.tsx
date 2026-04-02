import { TutorialLayout, Step, Code, InfoBox } from "../../components/TutorialLayout";

export default function A100Page() {
  return (
    <TutorialLayout
      tag="GPU Compute"
      tagColor="border-blue-500/30 bg-blue-500/10 text-blue-400"
      title="Connecting to the A100 or DGX"
      subtitle="SSH into the university's high-performance GPU servers. You should already have an account registered — let's connect."
    >
      <InfoBox>
        Make sure you are connected to the <strong className="text-white">KSU VPN</strong> before attempting to connect to either server. See the VPN tutorial first if needed.
      </InfoBox>

      <div className="flex flex-col sm:flex-row gap-4 my-8">
        <div className="flex-1 p-5 rounded-2xl border border-blue-500/30 bg-blue-500/10">
          <p className="text-blue-300 text-xs font-semibold tracking-widest uppercase mb-1">A100</p>
          <p className="text-white font-mono text-lg font-bold">10.96.50.180</p>
        </div>
        <div className="flex-1 p-5 rounded-2xl border border-cyan-500/30 bg-cyan-500/10">
          <p className="text-cyan-300 text-xs font-semibold tracking-widest uppercase mb-1">DGX</p>
          <p className="text-white font-mono text-lg font-bold">10.96.50.100</p>
        </div>
      </div>

      <Step number="01" title="Open a terminal">
        Open a terminal on your chosen operating system (Terminal on Mac/Linux, Windows Terminal or PowerShell on Windows).
      </Step>

      <Step number="02" title="SSH into your assigned server">
        Connect to your assigned server by typing the command below. Replace <code className="text-cyan-300">YourNetID</code> with your KSU NetID and <code className="text-cyan-300">IPAddress</code> with the server IP above.
        <Code>ssh YourNetID@IPAddress</Code>
        <p className="mt-2 text-sm">Example for A100:</p>
        <Code>ssh jsmith@10.96.50.180</Code>
      </Step>

      <Step number="03" title="Enter your password">
        When prompted, provide the password for your account. Your password should be the same as your KSU NetID password.
        <Code>{`jsmith@10.96.50.180's password: _`}</Code>
      </Step>

      <InfoBox>
        If you connect successfully, you will see a command prompt like <strong className="text-white font-mono">jsmith@dgxa100:~$</strong> — you are now inside the server.
      </InfoBox>
    </TutorialLayout>
  );
}
