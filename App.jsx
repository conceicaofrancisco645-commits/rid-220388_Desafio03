import { useEffect, useMemo, useState } from "react";
import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import Projects from "./components/Projects.jsx";
import About from "./components/About.jsx";
import Footer from "./components/Footer.jsx";
import FloatingButton from "./components/FloatingButton.jsx";
import ProjectModal from "./components/ProjectModal.jsx";

import { projects } from "./data/projects.js";

export default function App() {
  // ✅ useState (obrigatório)
  const [activeSection, setActiveSection] = useState("home");
  const [selectedProject, setSelectedProject] = useState(null);

  const sectionIds = useMemo(() => ["home", "projects", "about", "contact"], []);

  // ✅ useEffect (obrigatório): scroll spy (marca a seção ativa no menu)
  useEffect(() => {
    const handler = () => {
      const y = window.scrollY + 120;

      let current = "home";
      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (!el) continue;
        const top = el.offsetTop;
        const height = el.offsetHeight;
        if (y >= top && y < top + height) {
          current = id;
          break;
        }
      }
      setActiveSection(current);
    };

    handler();
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, [sectionIds]);

  const onOpenProject = (project) => setSelectedProject(project);
  const onCloseProject = () => setSelectedProject(null);

  return (
    <>
      <Header activeSection={activeSection} />

      <main className="page">
        <section id="home" className="section">
          <Hero />
        </section>

        <section id="projects" className="section">
          <Projects items={projects} onOpenProject={onOpenProject} />
        </section>

        <section id="about" className="section">
          <About />
        </section>

        <section id="contact" className="section section--contact">
          <Footer />
        </section>
      </main>

      <FloatingButton />

      {selectedProject && (
        <ProjectModal project={selectedProject} onClose={onCloseProject} />
      )}
    </>
  );
}
