import { useEffect } from "react";

export default function ProjectModal({ project, onClose }) {
  // usa useEffect extra: ESC para fechar
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  return (
    <div className="modal__backdrop" onMouseDown={onClose} role="dialog" aria-modal="true">
      <div className="modal" onMouseDown={(e) => e.stopPropagation()}>
        <div className="modal__head">
          <h3 className="modal__title">{project.title}</h3>
          <button className="iconbtn" onClick={onClose} aria-label="Fechar">
            ✕
          </button>
        </div>

        <p className="modal__text">{project.longDescription}</p>

        <div className="badges">
          {project.tags.map((t) => (
            <span key={t} className="badge">
              {t}
            </span>
          ))}
        </div>

        <div className="modal__actions">
          <a className="btn btn--primary" href={project.link} target="_blank" rel="noreferrer">
            Abrir projeto
          </a>
          <button className="btn btn--ghost" onClick={onClose}>
            Voltar
          </button>
        </div>
      </div>
    </div>
  );
}
