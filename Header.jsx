export default function Header({ activeSection }) {
  const links = [
    { id: "projects", label: "Projetos" },
    { id: "about", label: "Tecnologias" }, // no template aparece "Tecnologias" no topo
    { id: "contact", label: "Sobre mim" },
  ];

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (!el) return;
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <header className="header">
      <div className="container header__inner">
        <div className="brand" onClick={() => scrollTo("home")} role="button" tabIndex={0}>
          <span className="brand__dot" />
          <span className="brand__name">Template 02</span>
        </div>

        <nav className="nav">
          {links.map((l) => (
            <button
              key={l.id}
              className={`nav__link ${activeSection === l.id ? "is-active" : ""}`}
              onClick={() => scrollTo(l.id)}
            >
              {l.label}
            </button>
          ))}
        </nav>

        <div className="social">
          <a className="iconbtn" href="https://github.com/" target="_blank" rel="noreferrer" aria-label="GitHub">
            <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
              <path
                fill="currentColor"
                d="M12 2a10 10 0 0 0-3.16 19.48c.5.09.68-.22.68-.48v-1.68c-2.77.6-3.36-1.17-3.36-1.17-.45-1.15-1.1-1.46-1.1-1.46-.9-.62.06-.61.06-.61 1 .07 1.53 1.03 1.53 1.03.9 1.53 2.36 1.09 2.94.83.09-.65.35-1.09.64-1.34-2.21-.25-4.54-1.11-4.54-4.95 0-1.09.39-1.98 1.03-2.67-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.02A9.5 9.5 0 0 1 12 6.8c.85 0 1.7.11 2.5.33 1.9-1.29 2.74-1.02 2.74-1.02.56 1.38.21 2.4.1 2.65.64.69 1.03 1.58 1.03 2.67 0 3.85-2.34 4.7-4.57 4.95.36.31.68.93.68 1.87v2.77c0 .27.18.58.69.48A10 10 0 0 0 12 2Z"
              />
            </svg>
          </a>

          <a className="iconbtn" href="https://www.linkedin.com/" target="_blank" rel="noreferrer" aria-label="LinkedIn">
            <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
              <path
                fill="currentColor"
                d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.05-1.86-3.05-1.86 0-2.14 1.45-2.14 2.95v5.67H9.35V9h3.4v1.56h.05c.47-.9 1.62-1.86 3.33-1.86 3.56 0 4.22 2.34 4.22 5.38v6.37ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.11 20.45H3.56V9h3.55v11.45Z"
              />
            </svg>
          </a>
        </div>
      </div>
    </header>
  );
}
