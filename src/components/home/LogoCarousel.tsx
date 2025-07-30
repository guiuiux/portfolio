const logos = [
  "adidas.png",
  "dthh.png",
  "ed-comunicacao.png",
  "teleperformance.png",
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
        className="flex sm:animate-conveyor animate-conveyor-fast gap-16"
        style={{ width: "max-content" }} // deixa o flex crescer natural
      >
        {repeatedLogos.map((logo) => (
          <img
            src={`/assets/logo-carousel/${logo}`}
            alt={`Logo ${logo.replace(".png", "")}`}
            className="h-[32px] mx-4 select-none pointer-events-none opacity-70"
            style={{
              filter:
                "brightness(0) saturate(100%) invert(41%) sepia(88%) saturate(2736%) hue-rotate(7deg) brightness(99%) contrast(101%)",
            }}
            draggable={false}
          />
        ))}
      </div>
    </div>
  );
}
