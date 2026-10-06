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
    <div className="min-h-screen bg-white text-black flex flex-col">
      <Header onChatClick={openChat} />

      <main className="flex-1">
      
        <div className="relative mx-auto px-6 py-6 w-full">
          <Hero onChatClick={openChat} />
          <ProjectsSection />
        </div>
      </main>

      <Footer />

      <ChatWidget isOpen={isChatOpen} onClose={closeChat} />
    </div>
  );
}
