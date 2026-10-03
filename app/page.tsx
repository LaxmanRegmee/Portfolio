"use client";

import { useState } from "react";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { ProjectsSection } from "@/components/ProjectsSection";
import { ChatWidget } from "@/components/ChatWidget";
import { Footer } from "@/components/Footer";

export default function Home() {
  const [isChatOpen, setIsChatOpen] = useState(false);

  const openChat = () => setIsChatOpen(true);
  const closeChat = () => setIsChatOpen(false);

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100 flex flex-col">
      <Header onChatClick={openChat} />

      <main className="flex-1">
        <Hero onChatClick={openChat} />
        <ProjectsSection />

        {/* Fun Section Placeholder */}
        <section
          id="fun"
          className="py-20 sm:py-28 lg:py-32"
          aria-labelledby="fun-heading"
        >
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2
                id="fun-heading"
                className="text-3xl sm:text-4xl font-bold text-neutral-100 mb-4"
              >
                Fun & Experiments
              </h2>
              <p className="text-neutral-400 max-w-2xl mx-auto">
                Side projects, experiments, and creative explorations.
              </p>
            </div>
            <div className="text-center py-16">
              <p className="text-neutral-400">Coming soon...</p>
            </div>
          </div>
        </section>

        {/* About Section Placeholder */}
        <section
          id="about"
          className="py-20 sm:py-28 lg:py-32"
          aria-labelledby="about-heading"
        >
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2
                id="about-heading"
                className="text-3xl sm:text-4xl font-bold text-neutral-100 mb-4"
              >
                About Me
              </h2>
            </div>
            <div className="max-w-3xl mx-auto text-center">
              <p className="text-neutral-300 text-lg leading-relaxed mb-6">
                I'm Laxman Regmi, a Product & UI/UX Designer with 5+ years of
                experience crafting digital products that people love to use.
              </p>
              <p className="text-neutral-400 leading-relaxed mb-6">
                My journey started with a curiosity about how things work and
                evolved into a passion for solving complex problems through
                design. I believe the best products come from deep empathy for
                users and a relentless focus on details.
              </p>
              <p className="text-neutral-400 leading-relaxed">
                When I'm not designing, you'll find me exploring new
                technologies, reading about psychology, or experimenting with AI
                tools.
              </p>
            </div>
          </div>
        </section>

        {/* Resume Section Placeholder */}
        <section
          id="resume"
          className="py-20 sm:py-28 lg:py-32"
          aria-labelledby="resume-heading"
        >
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2
                id="resume-heading"
                className="text-3xl sm:text-4xl font-bold text-neutral-100 mb-4"
              >
                Experience
              </h2>
              <p className="text-neutral-400 max-w-2xl mx-auto">
                My professional journey and the teams I've had the privilege to
                work with.
              </p>
            </div>
            <div className="text-center py-16">
              <p className="text-neutral-400">Coming soon...</p>
            </div>
          </div>
        </section>
      </main>

      <Footer />

      <ChatWidget isOpen={isChatOpen} onClose={closeChat} />
    </div>
  );
}
