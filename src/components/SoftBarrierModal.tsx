// src/components/SoftBarrierModal.tsx
import { FaWhatsapp } from "react-icons/fa";
import * as React from "react";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogClose,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Stepper } from "@/components/ui/stepper"; // ← nova importação
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import {
  Tooltip,
  TooltipProvider,
  TooltipTrigger,
  TooltipContent,
} from "@/components/ui/tooltip";
import { RadioGroup } from "@/components/ui/radio-group";
import {
  Building2,
  UserSearch,
  Palette,
  MessageCircle,
  ArrowUpRight,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { cubicBezier } from "framer-motion";
import { AnimatePresence, motion } from "framer-motion";
import type { TargetAndTransition, Transition } from "framer-motion";

import { logEvent } from "@/utils/gaEvents";

import { useTranslation } from "react-i18next";

type PerfilKey = "perfil_empresa" | "perfil_recrutador" | "perfil_designer";
type ObjetivoKey =
  | "pedido_diag"
  | "pedido_sessao"
  | "pedido_amostra"
  | "pedido_outro";
type JanelaKey = "asap_2w" | "1_2m" | "3m_plus";
type StepIndex = 1 | 2 | 3 | 4;
type AnimatedKeys =
  | "borderRadius"
  | "opacity"
  | "height"
  | "paddingLeft"
  | "paddingRight";

type OptionWithHint<TId> = { id: TId; label: string; hint?: string };

type PerPropTransition = Partial<Record<AnimatedKeys, Transition>>;
// easing p/ opacidade/padding (sem overshoot)
const EASE_EMPHASIZED_IN_OUT = cubicBezier(0.2, 0.0, 0.0, 1);

interface SoftBarrierModalProps {
  variant?: "default" | "footer";
}

const PERFIL = (t: ReturnType<typeof useTranslation>["t"]) => [
  {
    id: "perfil_empresa" as const,
    label: t("contactMe.perfil.perfil_empresa.label"),
    hint: t("contactMe.perfil.perfil_empresa.hint"),
    icon: Building2,
  },
  {
    id: "perfil_recrutador" as const,
    label: t("contactMe.perfil.perfil_recrutador.label"),
    hint: t("contactMe.perfil.perfil_recrutador.hint"),
    icon: UserSearch,
  },
  {
    id: "perfil_designer" as const,
    label: t("contactMe.perfil.perfil_designer.label"),
    hint: t("contactMe.perfil.perfil_designer.hint"),
    icon: Palette,
  },
];

const OBJETIVO = (t: ReturnType<typeof useTranslation>["t"]) => [
  {
    id: "pedido_diag" as const,
    label: t("contactMe.objetivo.pedido_diag.label"),
    hint: t("contactMe.objetivo.pedido_diag.hint"),
  },
  {
    id: "pedido_sessao" as const,
    label: t("contactMe.objetivo.pedido_sessao.label"),
    hint: t("contactMe.objetivo.pedido_sessao.hint"),
  },
  {
    id: "pedido_amostra" as const,
    label: t("contactMe.objetivo.pedido_amostra.label"),
    hint: t("contactMe.objetivo.pedido_amostra.hint"),
  },
  {
    id: "pedido_outro" as const,
    label: t("contactMe.objetivo.pedido_outro.label"),
    hint: t("contactMe.objetivo.pedido_outro.hint"),
  },
];

const JANELA: OptionWithHint<JanelaKey>[] = [
  { id: "asap_2w", label: "≤ 2 semanas" },
  { id: "1_2m", label: "1–2 meses" },
  { id: "3m_plus", label: "3+ meses / explorando" },
];

const labelFromPerfil = (
  k: PerfilKey | null,
  t: ReturnType<typeof useTranslation>["t"]
) => PERFIL(t).find((p) => p.id === k)?.label ?? "";

const labelFromObjetivo = (
  k: ObjetivoKey | null,
  t: ReturnType<typeof useTranslation>["t"]
) => OBJETIVO(t).find((o) => o.id === k)?.label ?? "";

const labelFromJanela = (k: JanelaKey | null) =>
  JANELA.find((j) => j.id === k)?.label ?? "";

const PHONE_E164 = "5511947206482";

export default function SoftBarrierModal({
  variant = "default",
}: SoftBarrierModalProps) {
  const [open, setOpen] = React.useState(false);
  const [step, setStep] = React.useState<StepIndex>(1);
  const [perfil, setPerfil] = React.useState<PerfilKey | null>(null);
  const [objetivo, setObjetivo] = React.useState<ObjetivoKey | null>(null);
  const [objetivoOutro, setObjetivoOutro] = React.useState("");
  const [janela, setJanela] = React.useState<JanelaKey | null>(null);
  const [error, setError] = React.useState("");
  const [loading, setLoading] = React.useState(false);
  const titleRef = React.useRef<HTMLHeadingElement>(null);
  const { t } = useTranslation();
  // depois dos useState existentes
  const prevPerfilRef = React.useRef<PerfilKey | null>(null);
  React.useEffect(() => {
    prevPerfilRef.current = perfil;
  }, [perfil]);

  // botão sendo pressionado (para "hold" do overshoot 16->50)
  const [pressedId, setPressedId] = React.useState<PerfilKey | null>(null);

  const isStep1Valid = !!perfil;
  const isStep2Valid =
    !!objetivo && (objetivo !== "pedido_outro" || !!objetivoOutro.trim());
  const isStep3Valid = !!janela;
  const isAllValid = isStep1Valid && isStep2Valid && isStep3Valid;

  const canAccess = (target: StepIndex) => {
    if (target === 1) return true;
    if (target === 2) return isStep1Valid;
    if (target === 3) return isStep1Valid && isStep2Valid;
    if (target === 4) return isAllValid;
    return false;
  };

  const buildText = () => {
    const objetivoLabel =
      objetivo === "pedido_outro"
        ? objetivoOutro.trim()
        : labelFromObjetivo(objetivo, t);

    return t("contactMe.message.whatsapp", {
      perfil: labelFromPerfil(perfil, t),
      objetivo: objetivoLabel,
      janela: labelFromJanela(janela),
    });
  };

  const next = () => {
    const valid =
      (step === 1 && isStep1Valid) ||
      (step === 2 && isStep2Valid) ||
      (step === 3 && isStep3Valid);
    if (!valid) {
      setError(t("contactMe.error.answer"));
      return;
    }
    setError("");
    if (step < 4) setStep((s) => (s + 1) as StepIndex);
  };

  const back = () => setStep((s) => Math.max(1, s - 1) as StepIndex);

  const submit = () => {
    if (!isAllValid) return;
    setLoading(true);
    const text = buildText();
    const url = `https://wa.me/${PHONE_E164}?text=${encodeURIComponent(text)}`;

    // 🔹 TRACKING GA4
    logEvent("contact_click", { method: "whatsapp", variant });
    logEvent("contact_initiated", {
      method: "whatsapp",
      variant,
      perfil,
      objetivo,
      janela,
    });

    setTimeout(() => {
      setLoading(false);
      window.open(url, "_blank", "noopener");
      setOpen(false);
    }, 800);
  };

  const steps = [
    {
      id: 1,
      label: t("contactMe.steps.1.label"),
      tooltip: t("contactMe.steps.1.tooltip"),
    },
    {
      id: 2,
      label: t("contactMe.steps.2.label"),
      tooltip: t("contactMe.steps.2.tooltip"),
    },
    {
      id: 3,
      label: t("contactMe.steps.3.label"),
      tooltip: t("contactMe.steps.3.tooltip"),
    },
    {
      id: 4,
      label: t("contactMe.steps.4.label"),
      tooltip: t("contactMe.steps.4.tooltip"),
    },
  ];

  // helpers dentro do componente (acima do return)
  const toCorners = (index: number, selected: boolean, total: number) => {
    if (selected) return [50, 50, 50, 50];

    if (isMobile) {
      // layout vertical
      if (index === 0) return [16, 16, 16, 16]; // topo
      if (index === total - 1) return [16, 16, 16, 16]; // base
      return [16, 16, 16, 16]; // meio
    } else {
      // layout horizontal (como já estava)
      if (index === 0) return [50, 16, 16, 50]; // esquerda
      if (index === total - 1) return [16, 50, 50, 16]; // direita
      return [16, 16, 16, 16]; // meio
    }
  };

  const cornersToStr = (c: number[]) =>
    `${c[0]}px ${c[1]}px ${c[2]}px ${c[3]}px`;

  const overshootForCorners = (c: number[]) =>
    c.map((v) => (v === 50 ? 50 : 8)); // 50 fica 50; 16 vira 8

  const SELECTED_4 = [50, 50, 50, 50];
  const isMobile = typeof window !== "undefined" && window.innerWidth < 768;
  return (
    <TooltipProvider>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          {variant === "footer" ? (
            <Button
              size="hero"
              className="text-lg bg-primary text-on-primary gap-2 rounded-full"
            >
              {t("footer.cta-call")}
              <ArrowUpRight className="size-5" />
            </Button>
          ) : (
            <Button
              size="stepper"
              className="bg-primary-container text-on-surface rounded-full w-full text-lg px-5"
            >
              {t("footer.cta-call")} <FaWhatsapp />
            </Button>
          )}
        </DialogTrigger>

        <DialogContent
          className="p-0 sm:max-w-[560px] sm:rounded-3xl bg-surface-container-high"
          onOpenAutoFocus={(e) => {
            e.preventDefault(); // impede foco automático padrão
            titleRef.current?.focus(); // foca no título (não abre tooltip)
          }}
        >
          <div className="relative pt-6 px-6">
            <DialogHeader>
              <DialogTitle
                ref={titleRef}
                tabIndex={-1} // foco programático permite foco aqui
                className="text-on-surface text-xl font-bold"
              >
                {t("contactMe.title")}
              </DialogTitle>
              <DialogDescription className="text-on-surface-variant">
                {t("contactMe.description")}
              </DialogDescription>
            </DialogHeader>
            <DialogClose asChild />
            <Stepper
              steps={steps}
              current={step - 1} // começa em 0
              onStepClick={(i: number) =>
                canAccess((i + 1) as StepIndex) && setStep((i + 1) as StepIndex)
              }
            />
          </div>

          <motion.div className="px-6">
            {error && (
              <div className="text-error text-sm" aria-live="polite">
                {error}
              </div>
            )}

            {step === 1 && (
              <section>
                <p className="text-on-surface mb-2">
                  {t("contactMe.step1.pergunta")}{" "}
                </p>

                <RadioGroup
                  value={perfil ?? ""}
                  onValueChange={(val: PerfilKey) => {
                    setPerfil(val);
                    setError("");
                    logEvent("perfil_selected", { perfil: val });
                  }}
                  className="flex flex-col md:flex-row items-center w-full gap-0.5"
                >
                  {PERFIL(t).map((opt, index) => {
                    const total = PERFIL(t).length;
                    const selected = perfil === opt.id;
                    const wasSelected = prevPerfilRef.current === opt.id;
                    const perfilChanged = prevPerfilRef.current !== perfil;
                    const justSelected = selected && perfilChanged;
                    const justDeselected =
                      wasSelected && !selected && perfilChanged;

                    // destinos (por canto)
                    const targetCorners = toCorners(index, selected, total);
                    const targetRadiusStr = cornersToStr(targetCorners);

                    // overshoot por canto (50 fica 50; 16 -> 8)
                    const overToTarget = overshootForCorners(targetCorners); // para deselection
                    const overFromCurrent = overshootForCorners(
                      toCorners(index, false, total)
                    ); // para selection (partindo do shape não selecionado)
                    const overToTargetStr = cornersToStr(overToTarget);
                    const selectedStr = cornersToStr(SELECTED_4);
                    const overFromCurrentStr = cornersToStr(overFromCurrent);

                    // “press & hold” só em não-selecionado (segura em overshoot 8 nos cantos 16)
                    const pressingThis = pressedId === opt.id;

                    // Animação somente de SHAPE (sem alterar largura/padding)
                    let animate: TargetAndTransition = {
                      opacity: 1,
                      borderRadius: targetRadiusStr,
                    };
                    let transitionMap: PerPropTransition | undefined =
                      undefined;

                    if (pressingThis) {
                      const overshootCorners =
                        overshootForCorners(targetCorners);
                      animate = {
                        opacity: 1,
                        borderRadius: cornersToStr(overshootCorners),
                      };
                      transitionMap = {
                        borderRadius: {
                          duration: 0.12,
                          ease: EASE_EMPHASIZED_IN_OUT,
                        },
                        opacity: {
                          duration: 0.12,
                          ease: EASE_EMPHASIZED_IN_OUT,
                        },
                      };
                    } else if (justSelected) {
                      // ENTRADA: (16→8 por canto) → 50 (por canto) — cantos 50 NUNCA mudam
                      animate = {
                        opacity: 1,
                        borderRadius: [overFromCurrentStr, selectedStr],
                      };
                      transitionMap = {
                        borderRadius: {
                          type: "spring",
                          stiffness: 560,
                          damping: 32,
                          mass: 0.9,
                          restDelta: 0.001,
                        },
                        opacity: {
                          duration: 0.2,
                          ease: EASE_EMPHASIZED_IN_OUT,
                        },
                      };
                    } else if (justDeselected) {
                      // SAÍDA: 50 → (overshoot por canto: 8 onde alvo é 16; 50 onde alvo é 50) → alvo
                      animate = {
                        opacity: 1,
                        borderRadius: [
                          selectedStr,
                          overToTargetStr,
                          targetRadiusStr,
                        ],
                      };
                      transitionMap = {
                        borderRadius: {
                          times: [0, 0.45, 1],
                          duration: 0.24,
                          ease: EASE_EMPHASIZED_IN_OUT,
                        },
                        opacity: {
                          duration: 0.2,
                          ease: EASE_EMPHASIZED_IN_OUT,
                        },
                      };
                    }
                    // estado estável: somente mantém targetRadiusStr

                    return (
                      <Tooltip key={opt.id}>
                        <TooltipTrigger asChild>
                          <Button
                            // Toggle: se já está ativo e clicar de novo, volta ao estado inicial (sem seleção)
                            onClick={() => {
                              setPressedId(null);
                              if (selected) {
                                setPerfil(null); // toggle off
                              } else {
                                setPerfil(opt.id);
                              }
                              setError("");
                            }}
                            // suporte a “press & hold” (apenas visual)
                            onPointerDown={() => setPressedId(opt.id)}
                            onPointerUp={() => setPressedId(null)}
                            onPointerCancel={() => setPressedId(null)}
                            onPointerLeave={() => setPressedId(null)}
                            size="lead"
                            variant={selected ? "radioActive" : "radioInactive"}
                            animate={animate}
                            transition={transitionMap as Transition}
                            // fallback static (reduced motion)
                            animateRadius={targetRadiusStr}
                            className={cn(
                              "transition-colors w-full",
                              selected
                                ? "rounded-[50px]"
                                : index === 0
                                ? "rounded-[50px_16px_16px_50px]"
                                : index === PERFIL.length - 1
                                ? "rounded-[16px_50px_50px_16px]"
                                : "rounded-[16px]"
                            )}
                            style={{ willChange: "border-radius" }}
                          >
                            <opt.icon className="w-5 h-5" />
                            {opt.label}
                          </Button>
                        </TooltipTrigger>
                        <TooltipContent>{opt.hint}</TooltipContent>
                      </Tooltip>
                    );
                  })}
                </RadioGroup>
              </section>
            )}

            {step === 2 && (
              <section>
                <h3 className="text-on-surface font-medium mb-2">
                  {t("contactMe.step2.pergunta")}
                </h3>

                {/* Grupo de opções */}
                <RadioGroup
                  value={objetivo ?? ""}
                  onValueChange={(val: ObjetivoKey) => {
                    setObjetivo(val);
                    setError("");
                    logEvent("objetivo_selected", { objetivo: val });
                  }}
                  className="flex flex-wrap gap-1"
                >
                  {OBJETIVO(t).map((opt) => (
                    <Tooltip key={opt.id}>
                      <TooltipTrigger asChild>
                        <Button
                          onClick={() => setObjetivo(opt.id)}
                          variant={
                            objetivo === opt.id
                              ? "radioActive"
                              : "radioInactive"
                          }
                          size="stepper"
                          className="justify-between"
                        >
                          {opt.label.split(" — ")[0]}
                        </Button>
                      </TooltipTrigger>
                      <TooltipContent>{opt.hint}</TooltipContent>
                    </Tooltip>
                  ))}
                </RadioGroup>

                {/* Campo "Outro" ABAIXO (fora do wrap) com transição suave */}
                <AnimatePresence initial={false} mode="wait">
                  {objetivo === "pedido_outro" && (
                    <motion.div
                      key="objetivo-outro"
                      className="mt-3"
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{
                        opacity: {
                          duration: 0.2,
                          ease: EASE_EMPHASIZED_IN_OUT,
                        },
                        height: {
                          duration: 0.28,
                          ease: EASE_EMPHASIZED_IN_OUT,
                        },
                      }}
                      layout
                    >
                      <Label
                        htmlFor="objetivo-outro"
                        className="text-xs text-on-surface-variant"
                      >
                        {t("contactMe.step2.outro.label")}
                      </Label>
                      <Input
                        id="objetivo-outro"
                        value={objetivoOutro}
                        onChange={(e) => {
                          const v = e.target.value;
                          if (v.length <= 60) setObjetivoOutro(v);
                        }}
                        maxLength={60}
                        className="mt-1 w-full"
                        aria-describedby="objetivo-outro-hint"
                      />
                      <p
                        id="objetivo-outro-hint"
                        className="mt-1 text-xs text-on-surface-variant"
                      >
                        {t("contactMe.step2.outro.hint")}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </section>
            )}

            {step === 3 && (
              <section>
                <h3 className="text-on-surface font-medium mb-2">
                  {t("contactMe.step3.pergunta")}
                </h3>

                {/* Grupo de opções — consistente com o Step 2 */}
                <RadioGroup
                  value={janela ?? ""}
                  onValueChange={(val: JanelaKey) => {
                    setJanela(val);
                    setError("");
                    logEvent("janela_selected", { janela: val });
                  }}
                  className="flex flex-wrap gap-1"
                >
                  {JANELA.map((opt) => (
                    <Tooltip key={opt.id}>
                      <TooltipTrigger asChild>
                        <Button
                          onClick={() => setJanela(opt.id)}
                          variant={
                            janela === opt.id ? "radioActive" : "radioInactive"
                          }
                          size="stepper"
                          className="justify-between"
                        >
                          {opt.label.split(" — ")[0]}
                        </Button>
                      </TooltipTrigger>
                      {opt.hint && <TooltipContent>{opt.hint}</TooltipContent>}
                    </Tooltip>
                  ))}
                </RadioGroup>
              </section>
            )}

            {step === 4 && (
              <section className="space-y-4">
                <header>
                  <h3 className="text-on-surface text-lg font-semibold">
                    {t("contactMe.step4.title")}
                  </h3>
                  <p className="text-on-surface-variant text-sm">
                    {t("contactMe.step4.description")}
                  </p>
                </header>

                {/* 3 cards M3 — surface-container-low, gap-1 entre eles */}
                <div className="flex flex-col gap-1">
                  {/* Perfil */}
                  <div className="rounded-2xl bg-surface-container-low hover:bg-surface-container hover:font-var-chub p-4 sm:p-5">
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <p className="text-on-surface-variant text-xs font-medium tracking-wide uppercase">
                          {t("contactMe.step4.perfil")}
                        </p>
                        <p className="text-on-surface text-sm sm:text-base">
                          {perfil ? labelFromPerfil(perfil, t) : "—"}
                        </p>
                      </div>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => setStep(1 as StepIndex)}
                        aria-label="Editar perfil"
                        className="text-primary"
                      >
                        {t("contactMe.buttons.editar")}
                      </Button>
                    </div>
                  </div>

                  {/* Objetivo */}
                  <div className="rounded-2xl bg-surface-container-low hover:bg-surface-container hover:font-var-chub p-4 sm:p-5">
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <p className="text-on-surface-variant text-xs font-medium tracking-wide uppercase">
                          {t("contactMe.step4.objetivo")}
                        </p>
                        <p className="text-on-surface text-sm sm:text-base">
                          {objetivo === "pedido_outro"
                            ? objetivoOutro?.trim() || "—"
                            : objetivo
                            ? labelFromObjetivo(objetivo, t)
                            : "—"}
                        </p>
                      </div>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => setStep(2 as StepIndex)}
                        aria-label="Editar objetivo"
                        className="text-primary"
                      >
                        {t("contactMe.buttons.editar")}
                      </Button>
                    </div>
                  </div>

                  {/* Início */}
                  <div className="rounded-2xl bg-surface-container-low hover:bg-surface-container hover:font-var-chub p-4 sm:p-5">
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <p className="text-on-surface-variant text-xs font-medium tracking-wide uppercase">
                          {t("contactMe.step3.pergunta")}
                        </p>
                        <p className="text-on-surface text-sm sm:text-base">
                          {janela ? labelFromJanela(janela) : "—"}
                        </p>
                      </div>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => setStep(3 as StepIndex)}
                        aria-label="Editar início"
                        className="text-primary"
                      >
                        {t("contactMe.buttons.editar")}
                      </Button>
                    </div>
                  </div>
                </div>
              </section>
            )}
          </motion.div>

          {/* Footer — linha de botões */}
          <div className="px-6 pt-4 pb-2 flex items-center justify-between">
            {step < 4 ? (
              <Button
                variant="ghost"
                size="stepper"
                onClick={back}
                disabled={step === 1}
              >
                {t("contactMe.buttons.voltar")}
              </Button>
            ) : (
              ""
            )}

            {step < 4 ? (
              <Button
                size="stepper"
                onClick={next}
                disabled={
                  (step === 1 && !isStep1Valid) ||
                  (step === 2 && !isStep2Valid) ||
                  (step === 3 && !isStep3Valid)
                }
              >
                {t("contactMe.buttons.continuar")}
              </Button>
            ) : (
              <Button
                onClick={submit}
                disabled={!isAllValid || loading}
                size={"stepper"}
                variant="ghost"
                className={cn(
                  "group inline-flex items-center justify-center gap-2 rounded-full px-5 py-4 text-base font-medium w-full",
                  // tonal (tertiary) do seu DS
                  "bg-[var(--theme-tertiary-container)] text-[var(--theme-on-tertiary-container)]",
                  "hover:bg-[var(--theme-tertiary-fixed)] hover:text-[var(--theme-on-tertiary-fixed)]",
                  "active:bg-[var(--theme-tertiary-fixed-dim)]",
                  "focus-visible:ring-2 focus-visible:ring-[var(--theme-tertiary-fixed)]",
                  "focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--theme-tertiary)]",
                  "disabled:opacity-50 disabled:pointer-events-none"
                )}
                aria-label={
                  loading ? "Abrindo o WhatsApp" : "Abrir WhatsApp em nova aba"
                }
              >
                {loading ? (
                  <span className="inline-flex items-center gap-2">
                    <MessageCircle
                      className="size-5 animate-pulse"
                      aria-hidden="true"
                    />
                    {t("contactMe.buttons.abrindo")}
                  </span>
                ) : (
                  <span className="inline-flex items-center justify-center gap-2">
                    <MessageCircle className="size-5" aria-hidden="true" />
                    {t("contactMe.buttons.finalizar")}
                    <ArrowUpRight
                      className="size-4 transition-transform duration-200 ease-out translate-x-0 translate-y-0 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      aria-hidden="true"
                    />
                  </span>
                )}
              </Button>
            )}
          </div>

          {/* Disclaimers — faixa inteira abaixo dos botões */}
          {step === 4 && (
            <div className="px-6 pb-4 w-full transition-all">
              <p className="text-xs leading-snug text-on-surface-variant ">
                <a
                  href={`mailto:gferreira.uiux@gmail.com?subject=${encodeURIComponent(
                    "Contato via site"
                  )}&body=${encodeURIComponent(buildText())}`}
                  className="text-primary underline underline-offset-4 hover:text-on-surface hover:font-var-fat"
                  onClick={() => {
                    logEvent("contact_click", { method: "email", variant });
                    logEvent("contact_initiated", {
                      method: "email",
                      variant,
                      perfil,
                      objetivo,
                      janela,
                    });
                  }}
                >
                  {t("contactMe.disclaimer.email")}
                </a>

                <span> — {t("contactMe.disclaimer.privacidade")}</span>
              </p>
              <p className="mt-1 text-[11px] text-center leading-snug text-on-surface-variant/70">
                {t("contactMe.disclaimer.envio")}
              </p>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </TooltipProvider>
  );
}
