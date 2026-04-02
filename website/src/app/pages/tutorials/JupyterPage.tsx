import { TutorialLayout, Step, Code, InfoBox } from "../../components/TutorialLayout";

export default function JupyterPage() {
  return (
    <TutorialLayout
      tag="Notebooks"
      tagColor="border-orange-500/30 bg-orange-500/10 text-orange-400"
      title="Launching Jupyter Lab"
      subtitle="Start a Jupyter Lab session on the remote GPU server and connect to it through your local browser using SSH port forwarding."
    >
      <InfoBox>
        This requires <strong className="text-white">two terminal windows</strong> open at the same time — one for the server session, one for port forwarding.
      </InfoBox>

      <h2 className="text-white text-2xl font-bold mt-10 mb-2">Part 1 — Start Jupyter on the Server</h2>

      <Step number="01" title="SSH into the server">
        Open a terminal and log into the server using your credentials. Replace <code className="text-orange-300">username</code> with your NetID:
        <Code>ssh username@10.96.50.100</Code>
      </Step>

      <Step number="02" title="Launch Jupyter Lab (no browser)">
        In the same terminal, start Jupyter Lab without opening a browser:
        <Code>jupyter-lab --no-browser</Code>
        Jupyter will start and display output including a <strong className="text-white">URL with a token</strong>. Copy that URL — you will need it in Part 2.
        <div className="mt-3 p-4 rounded-xl bg-[#0a0a1a] border border-[#1e3a5f]/60 font-mono text-xs text-slate-400 leading-relaxed">
          <span className="text-green-400">ServerApp</span> Jupyter Server is running at:<br />
          <span className="text-cyan-300">http://localhost:8889/lab?token=545f9b64b7de2e36fe2fb38e0dc344...</span>
          <br />
          <span className="text-yellow-400 mt-2 block">↑ Copy this URL with the token</span>
        </div>
      </Step>

      <h2 className="text-white text-2xl font-bold mt-10 mb-2">Part 2 — Set Up Port Forwarding</h2>

      <Step number="03" title="Open a second terminal and forward the port">
        Open a <strong className="text-white">new terminal window</strong> on your local machine (do not close the first one). Run SSH port forwarding using port 8889:
        <Code>ssh -L 8889:localhost:8889 username@10.96.50.100</Code>
        <p className="text-sm mt-2 text-slate-500">Note: the port number may be different — check the URL printed in Part 1 and use that port.</p>
      </Step>

      <Step number="04" title="Open Jupyter in your browser">
        Go back to the first terminal and copy the full URL including the token. Paste it into your browser:
        <Code>http://localhost:8889/lab?token=545f9b64b7de2e36fe2fb38e0dc344...</Code>
        Jupyter Lab will open in your browser, running on the remote server.
      </Step>

      <InfoBox>
        Keep <strong className="text-white">both terminals open</strong> while you work. Closing either will disconnect your session. Use <strong className="text-white">Ctrl+C</strong> in the first terminal to shut down Jupyter when done.
      </InfoBox>
    </TutorialLayout>
  );
}
