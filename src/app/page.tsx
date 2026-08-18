import { Certificates } from "@/components/Certificates";
import { ClickSoundProvider } from "@/components/ClickSoundProvider";
import { Experience } from "@/components/Experience";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { LanguageProvider } from "@/components/LanguageProvider";
import { Navbar } from "@/components/Navbar";
import { Projects } from "@/components/Projects";
import { Skills } from "@/components/Skills";
import { SmoothScroll } from "@/components/SmoothScroll";
import { Speaking } from "@/components/Speaking";
import { Writings } from "@/components/Writings";

export default function Home() {
  return (
    <ClickSoundProvider>
      <LanguageProvider>
        <SmoothScroll>
          <Navbar />
          <main className="pb-1 md:pb-1.5">
            <Hero />
            <Experience />
            <Projects />
            <Speaking />
            <Writings />
            <Skills />
            <Certificates />
            <Footer />
          </main>
        </SmoothScroll>
      </LanguageProvider>
    </ClickSoundProvider>
  );
}
