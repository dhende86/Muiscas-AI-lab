import { TutorialLayout, Step, Code, InfoBox } from "../../components/TutorialLayout";

export default function DockerPage() {
  return (
    <TutorialLayout
      tag="DevOps"
      tagColor="border-cyan-500/30 bg-cyan-500/10 text-cyan-400"
      title="Docker"
      subtitle="Run, manage, and access containerized applications on the data center servers using Docker and SSH port forwarding."
    >
      <InfoBox>
        Make sure you are already connected to the server via SSH before starting. See the <strong className="text-white">Connect to A100/DGX</strong> tutorial if needed.
      </InfoBox>

      <h2 className="text-white text-2xl font-bold mt-10 mb-6">Part 1: Run a Docker Container</h2>

      <Step number="01" title="Launch a container in the background">
        Run the following command on the server. This starts an nginx container mapped to port 8080:
        <Code>{`docker run -d -p 8080:80 --name my-nginx nginx`}</Code>
        <div className="flex flex-col gap-2 mt-3 text-slate-400 text-sm">
          {[
            { flag: "-d", desc: "runs the container in the background (detached)" },
            { flag: "-p 8080:80", desc: "maps host port 8080 → container port 80" },
            { flag: "--name my-nginx", desc: "names the container for easy reference" },
            { flag: "nginx", desc: "specifies the Docker image to use" },
          ].map(({ flag, desc }) => (
            <div key={flag} className="flex items-start gap-3">
              <code className="text-cyan-300 font-mono text-xs bg-[#0a1628] border border-[#1e3a5f]/60 rounded px-2 py-0.5 flex-shrink-0">{flag}</code>
              <span>{desc}</span>
            </div>
          ))}
        </div>
      </Step>

      <h2 className="text-white text-2xl font-bold mt-10 mb-6">Part 2: Forward the Port to Your Machine</h2>

      <Step number="02" title="Open a new terminal and forward port 8080">
        On your <strong className="text-white">local machine</strong>, open a second terminal and run:
        <Code>ssh -L 8080:localhost:8080 netid@your-server-ip</Code>
        Make sure to use the proper credentials and IP address for the server you are working on. Example:
        <Code>ssh -L 8080:localhost:8080 jsmith@10.96.50.180</Code>
      </Step>

      <h2 className="text-white text-2xl font-bold mt-10 mb-6">Part 3: View in Your Browser</h2>

      <Step number="03" title="Open localhost:8080 in your browser">
        With the port forwarding active, open your web browser and go to:
        <Code>localhost:8080</Code>
        You should see the <strong className="text-white">Welcome to nginx!</strong> page, confirming the container is running successfully through the tunnel.
      </Step>

      <InfoBox>
        Keep the second terminal (port forwarding) open while using the container. To stop the container on the server, run: <code className="text-white font-mono">docker stop my-nginx</code>
      </InfoBox>
    </TutorialLayout>
  );
}
