import { useEffect, useState } from "react";

export default function FloatingButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > 240);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const goTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <button
      className={`float ${visible ? "is-visible" : ""}`}
      onClick={goTop}
      aria-label="Voltar ao topo"
      title="Topo"
    >
      ⤴
    </button>
  );
}
