import { useEffect, useLayoutEffect, useRef, useState } from "react";

const logos: { file: string; name: string }[] = [
  { file: "adidas.png", name: "Adidas" },
  { file: "avon.png", name: "Avon" },
  { file: "ed.png", name: "Ed" },
  { file: "itau.png", name: "Itaú" },
  { file: "nec.png", name: "NEC" },
  { file: "planoeplano.png", name: "Plano&Plano" },
  { file: "sme.png", name: "SME" },
  { file: "tp.png", name: "TP" },
  { file: "trybe.png", name: "Trybe" },
];

export default function LogoCarousel() {
  const viewportRef = useRef<HTMLDivElement>(null);
  const baseRef = useRef<HTMLDivElement>(null);
  const [repeat, setRepeat] = useState(3); // fallback inicial

  // mede e calcula quantas repetições precisa
  const recalc = () => {
    const viewportW = viewportRef.current?.offsetWidth ?? 0;
    const baseW = baseRef.current?.scrollWidth ?? 0;
    if (!viewportW || !baseW) return;

    // queremos cobrir 2x a viewport para garantir continuidade + 1 bloco
    const needed = Math.max(2, Math.ceil((viewportW * 2) / baseW) + 1);
    setRepeat(needed);

    // anima exatamente a largura de UM bloco base
    viewportRef.current!.style.setProperty("--marquee-width", `${baseW}px`);
  };

  // recalcula quando montar e quando imagens carregarem / viewport mudar
  useLayoutEffect(() => {
    recalc();
  }, []);

  useEffect(() => {
    const ro = new ResizeObserver(recalc);
    if (viewportRef.current) ro.observe(viewportRef.current);
    // (opcional) observar o baseRef para mudanças de largura
    if (baseRef.current) ro.observe(baseRef.current);

    // se quiser ser rigoroso, aguarda carregamento das imagens
    const imgs = baseRef.current?.querySelectorAll("img") ?? [];
    let pending = imgs.length;
    const onImg = () => {
      pending -= 1;
      if (pending <= 0) recalc();
    };
    imgs.forEach((img) => {
      if (img.complete) pending -= 1;
      else img.addEventListener("load", onImg, { once: true });
    });
    if (pending <= 0) recalc();

    return () => {
      ro.disconnect();
      imgs.forEach((img) => img.removeEventListener("load", onImg));
    };
  }, []);

  // uma sequência base para medir
  // Só o bloco medido é exposto a leitores de tela; as cópias são decorativas.
  const Base = ({ withRef = false }: { withRef?: boolean }) => (
    <div
      ref={withRef ? baseRef : undefined}
      className="flex"
      style={{ width: "max-content" }}
      aria-hidden={withRef ? undefined : true}
    >
      {logos.map((logo) => (
        <img
          key={logo.file}
          src={`/assets/logo-cliente/${logo.file}`} // em public/assets/logo-cliente/...
          alt={withRef ? logo.name : ""}
          className="h-[32px] mx-12 select-none pointer-events-none opacity-70"
          draggable={false}
          loading={withRef ? "eager" : "lazy"}
          decoding="async"
        />
      ))}
    </div>
  );

  return (
    <div
      ref={viewportRef}
      className="relative overflow-hidden w-screen -mx-[calc((100vw-100%)/2)]"
    >
      <div className="marquee-track">
        {/* Primeiro bloco é o “base” medido */}
        <Base withRef />
        {/* Repete dinamicamente o suficiente */}
        {Array.from({ length: repeat - 1 }).map((_, idx) => (
          <Base key={idx} />
        ))}
      </div>
    </div>
  );
}
