import { About } from "@/components/About";
import { ContactModal } from "@/components/ContactModal";
import { ContactProvider } from "@/components/ContactProvider";
import { FAQ } from "@/components/FAQ";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Navbar } from "@/components/Navbar";
import { Process } from "@/components/Process";
import { Projects } from "@/components/Projects";
import { Services } from "@/components/Services";
import { SmoothScroll } from "@/components/SmoothScroll";
import { Testimonials } from "@/components/Testimonials";

export default function Home() {
  return (
    <ContactProvider>
      <SmoothScroll>
        <Navbar />
        <main className="pb-1 md:pb-1.5">
          <Hero />
          <About />
          <Projects />
          <Testimonials />
          <Services />
          <Process />
          <FAQ />
          <Footer />
        </main>
        <ContactModal />
      </SmoothScroll>
    </ContactProvider>
  );
}
