# Muiscas AI Lab

Muiscas AI Lab is an onboarding website for students who use the GPU compute servers in Kennesaw State University's Research Data Center. New researchers often get stuck on setup before they ever run a model, so I built step by step guides that walk them from connecting to the campus VPN all the way to running Docker containers on the servers.

The site is hosted on the university network, so it is only reachable from inside the KSU VPN.

## What's inside

- **Beginner path:** a guided sequence from VPN → SSH → virtual environments → Jupyter → GPU monitoring → Docker
- **Tutorials:** GlobalProtect VPN setup, SSH access to the GPU servers, Python `venv`, Jupyter Lab over SSH port forwarding, checking GPUs with `nvidia-smi`, containers and Docker
- **Resources and Contact pages**, plus connection guides linked directly to the VPN setup
- Animated hero section, responsive layout, and custom SVG circuit background

## Tech stack

React 18, TypeScript, Vite, Tailwind CSS 4, Radix UI, Framer Motion

## Run it locally

The site lives in [`website/`](./website/).

```bash
cd website
npm install
npm run dev      # http://localhost:5173
```

See the [website README](./website/README.md) for build and deploy details.
