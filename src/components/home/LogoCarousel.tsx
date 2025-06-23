const logos = [
  "adidas.png",
  "dthh.png",
  "ed-comunicacao.png",
  "itau.png",
  "nec.png",
  "planoeplano.png",
  "sme.png",
  "trybe.png",
];

export default function LogoCarousel() {
  const repeatedLogos = [...logos, ...logos]; // apenas duplicado!

  return (
    <div className="relative overflow-hidden fade-edges w-full">
      <div
        className="flex animate-conveyor-belt gap-10"
        style={{ width: "max-content" }} // deixa o flex crescer natural
      >
        {repeatedLogos.map((logo, i) => (
          <img
            key={i}
            src={`/assets/logo-carousel/${logo}`}
            alt={`Logo ${logo.replace(".png", "")}`}
            className="h-[32px] mx-4 select-none pointer-events-none opacity-70"
            draggable={false}
          />
        ))}
      </div>
    </div>
  );
}
