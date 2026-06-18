"use client";

import dynamic from "next/dynamic";
import { motion, useScroll, useSpring } from "framer-motion";
import { Navbar } from "@/components/sections/navbar";
import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { Skills } from "@/components/sections/skills";
import { Projects } from "@/components/sections/projects";
import { Experience } from "@/components/sections/experience";
import { Contact } from "@/components/sections/contact";
import { Footer } from "@/components/sections/footer";

const ParticleBackground = dynamic(
  () =>
    import("@/components/three/particle-background").then(
      (m) => m.ParticleBackground,
    ),
  { ssr: false },
);

export default function Home() {
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <div className="relative min-h-screen flex flex-col">
      {/* Fixed 3D particle background */}
      <ParticleBackground />

      {/* Cyber grid overlay */}
      <div className="fixed inset-0 -z-[5] pointer-events-none cyber-grid opacity-40" />
      <div className="fixed inset-0 -z-[5] pointer-events-none cyber-grid-fine opacity-30" />

      {/* Vignette */}
      <div
        className="fixed inset-0 -z-[5] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at center, transparent 0%, oklch(0.06 0.02 285 / 40%) 70%, oklch(0.06 0.02 285 / 80%) 100%)",
        }}
      />

      {/* Scroll progress bar */}
      <motion.div
        style={{ scaleX: progress }}
        className="fixed top-0 left-0 right-0 h-1 z-[100] origin-left bg-gradient-to-r from-[oklch(0.7_0.32_350)] via-[oklch(0.62_0.28_295)] to-[oklch(0.78_0.18_195)]"
      />

      <Navbar />

      <main className="flex-1 relative z-10">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}
