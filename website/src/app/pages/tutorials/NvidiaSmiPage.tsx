import { TutorialLayout, Step, Code, InfoBox } from "../../components/TutorialLayout";

export default function NvidiaSmiPage() {
  return (
    <TutorialLayout
      tag="GPU Monitoring"
      tagColor="border-green-500/30 bg-green-500/10 text-green-400"
      title="Basics of Nvidia SMI"
      subtitle="Monitor GPU usage, check memory allocation, view active processes, and target specific GPUs for your workloads."
    >
      <Step number="01" title="Install gpustat">
        In your terminal on the server, install the <code className="text-green-300">gpustat</code> tool. This allows you to download and view all GPUs in the server:
        <Code>pip3 install gpustat</Code>
        <div className="mt-3 p-4 rounded-xl bg-[#0a0a1a] border border-[#1e3a5f]/60 font-mono text-xs text-slate-400 leading-relaxed">
          Collecting gpustat<br />
          &nbsp;&nbsp;Downloading gpustat-1.1.1.tar.gz (98 kB)<br />
          <span className="text-green-400">━━━━━━━━━━━━━━━━━━━━ 98.1/98.1 kB 4.0 MB/s eta 0:00:00</span><br />
          Installing build dependencies ... done
        </div>
      </Step>

      <Step number="02" title="View all GPUs with gpustat -c">
        Run the following command to see all available GPUs and their current status:
        <Code>gpustat -c</Code>
        This displays critical information for each GPU:
        <ul className="mt-3 flex flex-col gap-2">
          {[
            "GPU utilization percentage",
            "Memory usage (used / total MB)",
            "Temperature (°C)",
            "Power consumption",
            "Active processes with their memory usage",
          ].map((item) => (
            <li key={item} className="flex items-center gap-2 text-sm">
              <div className="w-1.5 h-1.5 rounded-full bg-green-400 flex-shrink-0" />
              {item}
            </li>
          ))}
        </ul>
        <div className="mt-4 p-4 rounded-xl bg-[#0a0a1a] border border-[#1e3a5f]/60 font-mono text-xs text-slate-400 leading-relaxed">
          <span className="text-white">dgxa100</span> &nbsp;Tue Jun 10 15:14:51 2025<br />
          <span className="text-green-400">[0]</span> NVIDIA A100-SXM4-80GB | <span className="text-yellow-300">42°C</span>, <span className="text-red-400">86 %</span> | 4046 / 81920 MB | python(1804M) python(2228M)<br />
          <span className="text-green-400">[1]</span> NVIDIA A100-SXM4-80GB | <span className="text-green-300">35°C</span>, <span className="text-green-300">17 %</span> | 4678 / 81920 MB | python(1948M) python(2716M)<br />
          <span className="text-green-400">[4]</span> NVIDIA A100-SXM4-80GB | <span className="text-yellow-300">44°C</span>, <span className="text-slate-400">&nbsp;0 %</span> | <span className="text-cyan-300">77630 / 81920 MB</span> | python3(74900M)
        </div>
      </Step>

      <Step number="03" title="Target a specific GPU for your script">
        Use the <code className="text-green-300">CUDA_VISIBLE_DEVICES</code> environment variable to make only one GPU visible to your program. Replace <code className="text-green-300">1</code> with the GPU index you want to use (from the list above):
        <Code>CUDA_VISIBLE_DEVICES=1 python my_script.py</Code>
      </Step>

      <InfoBox>
        Always check <code className="text-white font-mono">gpustat -c</code> before running a job to find a GPU with low utilization and enough free memory for your workload. GPUs at 0% utilization are available.
      </InfoBox>
    </TutorialLayout>
  );
}
