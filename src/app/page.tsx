import { About } from "@/components/About";
import { ContactModal } from "@/components/ContactModal";
import { Faq } from "@/components/Faq";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { HowIWork } from "@/components/HowIWork";
import { Insights } from "@/components/Insights";
import { NavMenu } from "@/components/NavMenu";
import { Now } from "@/components/Now";
import { PageLoader } from "@/components/PageLoader";
import { Portfolio } from "@/components/Portfolio";
import { ProjectModal } from "@/components/ProjectModal";
import { Skills } from "@/components/Skills";
import { Stats } from "@/components/Stats";
import { Testimonials } from "@/components/Testimonials";

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
        <Now />
        <About />
        <Portfolio />
        <HowIWork />
        <Insights />
        <Testimonials />
        <Skills />
        <Stats />
        <Faq />
      </main>
      <Footer />
      <NavMenu />
      <ContactModal />
      <ProjectModal />
    </>
  );
}
