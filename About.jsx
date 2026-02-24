import { timeline } from "../data/timeline.js";

export default function About() {
  return (
    <div className="container">
      <h2 className="section__title">Sobre mim</h2>

      <div className="timeline">
        {timeline.map((item) => (
          <div key={item.year} className="timeline__item">
            <div className="timeline__year">{item.year}</div>
            <div className="timeline__text">{item.text}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
