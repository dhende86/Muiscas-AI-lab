# Muiscas AI Lab - Website

This subdirectory contains the codebase for the Muiscas AI Lab modernized website front-end. The interface is meticulously crafted with a futuristic, animated aesthetic and a highly interactive user experience.

## ✨ Tech Stack

- **Framework:** React 18, Vite
- **Styling:** TailwindCSS 4, Radix UI, Framer Motion, Emotion
- **UI Icons:** Lucide React, MUI Icons
- **Animation:** Canvas Confetti, Framer Motion

## 📂 Code Organization

- `src/main.tsx`: Application bootstrap and React DOM rendering context.
- `src/app/App.tsx`: The core layout wrapper, consisting of global animated backgrounds (e.g. SVG circuit patterns) and section components.
- `src/app/components/`: Modular building blocks (e.g., `Hero`, `Navbar`, `TopicsSection`, `WhySection`, `BeginnerPath`, `Footer`).
- `src/styles/`: Global CSS and utility stylesheets.

## 🚀 Getting Started

1. **Install Dependencies:**
   Make sure you have Node.js installed. In this directory (`website/`), run:
   ```bash
   npm install
   ```

2. **Run the Development Server:**
   ```bash
   npm run dev
   ```
   This will spin up the Vite development server on `http://localhost:5173/` by default.

3. **Build for Production:**
   ```bash
   npm run build
   ```
   This compiles the application and optimizations outputting into the `dist/` folder.