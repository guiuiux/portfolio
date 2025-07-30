import { useTranslation, Trans } from "react-i18next";

// ShadCN Components
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

// Design Tokens
import { color } from "@/lib/design-tokens";

// Icons
import { ArrowRight } from "lucide-react";

// TRANSITION AND MOTION
import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

interface CaseStudyProps {
  project: string;
  imgPosition?: "left" | "right";
}

export default function CaseStudy({ project }: CaseStudyProps) {
  const { t } = useTranslation();

  // typescript + react;
  const whatArray = t(`case-study.${project}.home-card.what`, {
    returnObjects: true,
  }) as string[];
  console.log(whatArray);

  //para animação
  const containerRef = useRef(null);
  const resultRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current || !resultRef.current) return;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 55%", // começa quando 25% do componente entrou na viewport
        toggleActions: "play none none reverse", // anima ao entrar, reverte ao sair
        once: false, // se quiser animar só uma vez, use "once: true"
      },
    });

    tl.fromTo(
      resultRef.current,
      {
        fontSize: 24,
        color: color.light.onSurface,
      },
      {
        fontSize: 25,
        color: color.light.primary,

        duration: 0.4,
        ease: "power3.out",
        yoyo: true,
        repeat: 1,
        onComplete: () => {
          gsap.to(resultRef.current, {
            scale: 1,
            fontSize: 24,
            color: color.light.onSurface,
            fontWeight: 800,
            duration: 0.18,
            ease: "power2.out",
          });
        },
      }
    );

    return () => {
      tl.kill();
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div ref={containerRef} className="flex flex-col md:flex-row w-full gap-1">
      {/* Imagem */}
      <div className="w-full md:w-fit h-full aspect-video md:aspect-auto ">
        <img
          src={"/assets/img/case-study/" + project + "/case-cover.png"}
          alt="Case Study"
          className="h-full object-cover rounded-t-2xl rounded-b-sm w-full"
        />
      </div>
      {/* Content + CTA */}
      <div className="flex flex-col w-full gap-1">
        {/* Content */}
        <div
          className="flex flex-col gap-4 p-4 rounded-sm"
          style={{
            backgroundColor: color.light.surfaceContainer,
            color: color.light.onSurfaceVariant,
          }}
        >
          <span className="text-2xl font-medium tracking-tighter">
            <Trans
              i18nKey={`case-study.${project}.home-card.title`}
              components={{
                what: (
                  <span
                    className="rounded-xs font-semibold"
                    style={{ color: color.light.onSurface }}
                  />
                ),
                result: (
                  <span
                    ref={resultRef}
                    className="rounded-xs font-black"
                    style={{
                      color: color.light.onSurface,
                      transition: "all 0.3s",
                    }}
                  />
                ),
              }}
            />
          </span>
          <div className="flex flex-col gap-4">
            {/* Content - QUEM */}
            <div className="flex flex-row gap-6 text-sm">
              <div
                className="uppercase tracking-tighter font-bold w-14"
                style={{
                  color: color.light.onSurfaceVariant,
                }}
              >
                {t(`home.case-study.who`)}
              </div>
              <span
                className="text-sm uppercase font-medium "
                style={{
                  color: color.light.onSurface,
                }}
              >
                {t(`case-study.${project}.home-card.who`)}
              </span>
            </div>
            <Separator
              className="mb-1"
              style={{
                backgroundColor: color.light.outlineVariant,
              }}
            />
            {/* Content - O QUE */}
            <div className="flex flex-row gap-8 text-sm h-fit">
              <div
                className="uppercase tracking-tighter font-bold w-14"
                style={{
                  color: color.light.onSurfaceVariant,
                }}
              >
                {t(`home.case-study.what`)}
              </div>
              <div className="flex flex-wrap tracking gap-1 w-full h-fit">
                {whatArray.map((item, idx) => (
                  <Badge
                    key={idx}
                    className="text-xs uppercase font-medium px-2 rounded-full"
                    style={{
                      color: color.light.onSecondary,
                      backgroundColor: color.light.secondary,
                    }}
                  >
                    {item}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="flex flex-row ">
          <Button
            size={"expressive"}
            className="w-full font-semibold tracking-tight uppercase justify-between rounded-b-3xl rounded-t-sm text-lg h-fit"
            style={{
              backgroundColor: color.light.primary,

              color: color.light.onPrimary,
            }}
          >
            <span>Case Study Completo</span>{" "}
            <ArrowRight style={{ width: "24px", height: "24px" }} />
          </Button>
        </div>
      </div>
    </div>
  );
}
