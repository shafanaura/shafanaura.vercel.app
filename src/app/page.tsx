import { About } from "@/components/About";
import { ContactModal } from "@/components/ContactModal";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { NavMenu } from "@/components/NavMenu";
import { PageLoader } from "@/components/PageLoader";
import { Portfolio } from "@/components/Portfolio";
import { ProcessStrip } from "@/components/ProcessStrip";
import { ProjectModal } from "@/components/ProjectModal";
import { Skills } from "@/components/Skills";
import { Stats } from "@/components/Stats";

export default function Home() {
  return (
    <>
      <a href="#main" className="skip-link">
        Skip to content
      </a>
      <PageLoader />
      <Header />
      <main id="main">
        <Hero />
        <About />
        <ProcessStrip />
        <Portfolio />
        <Skills />
        <Stats />
      </main>
      <Footer />
      <NavMenu />
      <ContactModal />
      <ProjectModal />
    </>
  );
}
