export default function Projects({ items, onOpenProject }) {
  return (
    <div className="container">
      <h2 className="section__title">Projetos</h2>

      <div className="grid">
        {items.map((p) => (
          <article key={p.id} className="card">
            <div className="card__thumb">
              {/* imagem fake estilo do template */}
              <div className="thumb__mock">
                <div className="mock__topbar">
                  <span />
                  <span />
                  <span />
                </div>
                <div className="mock__content">
                  <div className="mock__line" />
                  <div className="mock__line short" />
                  <div className="mock__line" />
                  <div className="mock__chip">G</div>
                </div>
              </div>
            </div>

            <h3 className="card__title">{p.title}</h3>
            <p className="card__text">{p.description}</p>

            <div className="card__actions">
              <button className="btn btn--ghost" onClick={() => onOpenProject(p)}>
                Clique aqui
              </button>
              <a className="btn btn--link" href={p.link} target="_blank" rel="noreferrer">
                Ver online →
              </a>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
