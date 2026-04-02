import { TutorialLayout, Step, Code, InfoBox } from "../../components/TutorialLayout";

export default function VenvPage() {
  return (
    <TutorialLayout
      tag="Python"
      tagColor="border-violet-500/30 bg-violet-500/10 text-violet-400"
      title="Activate Virtual Environment"
      subtitle="Create an isolated Python environment on the server to keep your project dependencies organized and conflict-free."
    >
      <InfoBox>
        This tutorial assumes you are already connected to the A100 or DGX server via SSH. See the <strong className="text-white">Connect to A100/DGX</strong> tutorial first.
      </InfoBox>

      <h2 className="text-white text-2xl font-bold mt-10 mb-2">Part 1 — Create a Project Directory</h2>
      <p className="text-slate-400 mb-6">
        Once you are in the server, create a directory where your project files will be stored. Make sure to change into the directory you just made.
      </p>

      <Step number="01" title="Create and enter your project folder">
        <Code>mkdir -p ~/my_project && cd ~/my_project</Code>
      </Step>

      <Step number="02" title="Create the virtual environment">
        Run the following command inside your project directory to create a virtual environment named <code className="text-violet-300">myenv</code>:
        <Code>python3 -m venv myenv</Code>
      </Step>

      <h2 className="text-white text-2xl font-bold mt-10 mb-2">Part 2 — Activate and Deactivate</h2>
      <p className="text-slate-400 mb-6">
        Now activate the virtual environment and install packages using pip. To deactivate, simply type <code className="text-violet-300">deactivate</code> in the terminal.
      </p>

      <Step number="03" title="Activate the virtual environment">
        <Code>source myenv/bin/activate</Code>
        Once activated, your prompt will show <code className="text-violet-300">(myenv)</code> at the start, confirming it is active.
      </Step>

      <Step number="04" title="Install packages with pip">
        With the environment active, install any packages you need:
        <Code>pip install numpy pandas</Code>
        Any packages installed here are isolated to this project — they won't affect other projects on the server.
      </Step>

      <Step number="05" title="Deactivate when done">
        When you are finished working, deactivate the environment:
        <Code>deactivate</Code>
      </Step>

      <InfoBox>
        Always activate your virtual environment before running your scripts. If you log out and log back in, you will need to run <strong className="text-white">source myenv/bin/activate</strong> again.
      </InfoBox>
    </TutorialLayout>
  );
}
