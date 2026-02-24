export default function Hero() {
  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="container hero">
      <div className="hero__copy">
        <h1 className="hero__title">Seu nome aqui (ex: Francisco Conceição)</h1>
        <p className="hero__text">
          Substitua este texto por uma descrição curta e forte: área, foco (ex: Dados, BI, Front-end),
          e o tipo de valor que você entrega.
        </p>

        <button className="btn btn--primary" onClick={scrollToProjects}>
          Saber mais
        </button>
      </div>

      <div className="hero__glow" aria-hidden="true" />
    </div>
  );
}
