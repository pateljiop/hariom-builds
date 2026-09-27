import BootSequence from './components/BootSequence';
import HeroSection from './components/HeroSection';
import ServicesBento from './components/ServicesBento';
import MeetBuilder from './components/MeetBuilder';
import SystemsBlueprint from './components/SystemsBlueprint';
import ProjectsSection from './components/ProjectsSection';
import DevTerminal from './components/DevTerminal';
import TechMatrix from './components/TechMatrix';
import PricingTiers from './components/PricingTiers';
import SmoothScroll from './components/SmoothScroll';
import Footer from './components/Footer';

export default function HomePage() {
  return (
    <>
      <SmoothScroll />
      <BootSequence />
      <header className="studio-nav">
        <div className="studio-shell nav-inner">
          <a className="nav-brand" href="#hero">HARIOM<span>.</span>BUILDS</a>
          <nav aria-label="Primary navigation">
            <a href="#services">Services</a>
            <a href="#systems">Systems</a>
            <a href="#projects">Builds</a>
            <a href="#terminal">CLI</a>
            <a href="#contact">Contact</a>
          </nav>
          <a className="nav-status" href="#contact"><span className="status-dot" /> ONLINE</a>
        </div>
      </header>

      <main>
        <HeroSection />
        <ServicesBento />
        <MeetBuilder />
        <SystemsBlueprint />
        <ProjectsSection />
        <DevTerminal />
        <TechMatrix />
        <PricingTiers />
      </main>

      <Footer />
    </>
  );
}
