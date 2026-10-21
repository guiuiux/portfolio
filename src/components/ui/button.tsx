// src/components/ui/button.tsx
import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import {
  motion,
  useReducedMotion,
  cubicBezier,
  type HTMLMotionProps,
  type Transition,
} from "framer-motion";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 ",
  {
    variants: {
      variant: {
        default:
          "bg-primary-container text-on-primary-container hover:bg-primary-fixed hover:text-on-primary-fixed active:bg-primary-fixed-dim active:text-on-primary-fixed focus-visible:bg-primary-fixed focus-visible:text-on-primary-fixed hover:font-var-chub transition-all hover:cursor-pointer ",
        secondary:
          "bg-secondary-container text-on-secondary-container hover:bg-secondary-fixed hover:text-on-secondary-fixed active:bg-secondary-fixed-dim active:text-on-secondary-fixed focus-visible:bg-secondary-fixed focus-visible:text-on-secondary-fixed hover:cursor-pointer",
        outline:
          "border border-outline bg-transparent text-primary hover:border-primary hover:bg-primary/8 hover:text-primary active:bg-primary/12 focus-visible:bg-primary/12",
        ghost:
          "bg-transparent text-on-surface hover:bg-primary/8 hover:text-primary active:bg-primary/12 focus-visible:bg-primary/12",
        destructive:
          "bg-error text-on-error hover:bg-error-fixed hover:text-on-error-fixed active:bg-error-fixed-dim active:text-on-error-fixed focus-visible:bg-error-fixed focus-visible:text-on-error-fixed",
        link: "text-primary underline-offset-4 hover:text-primary-fixed active:text-primary-fixed-dim focus-visible:text-primary-fixed",
        radioInactive:
          "bg-surface hover:bg-secondary-fixed-dim hover:font-var-chub text-on-surface-variant hover:text-on-surface active:bg-secondary-fixed active:text-on-surface-container focus-visible:bg-surface-container focus-visible:text-on-surface-container",
        radioActive:
          "bg-secondary-container text-on-secondary-fixed font-var-fat hover:bg-secondary-fixed-dim hover:text-on-secondary-fixed active:bg-secondary-fixed active:text-on-secondary-fixed focus-visible:bg-secondary-fixed focus-visible:text-on-secondary-fixed",
      },
      size: {
        default: "h-9 px-4 py-2 has-[>svg]:px-3",
        sm: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
        lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
        icon: "size-9",
        hero: "px-6 py-4 h-fit w-fit",
        card: "p-6",
        cookies: "p-4 text-sm w-full md:max-w-[128px] md:min-w-[120px]",
        lead: "px-6 py-8 h-fit w-fit text-lg transition-all duration-300 ease-in-out tracking-[-0.1px]",
        stepper: "px-6 py-4 h-fit w-fit rounded-full ",
        steppercta: "px-6 py-6 h-fit w-fit rounded-full ",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

type ButtonBaseProps = React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
    /** Alvo de raio animado (ex.: "9999px", "240px 0 0 240px") */
    animateRadius?: string | number;
  };

type ButtonProps = ButtonBaseProps & HTMLMotionProps<"button">;

const MotionButtonBase = motion.button;

// Easing tokens (M3): usar funções, não arrays de number
const EASE_EMPHASIZED_IN_OUT = cubicBezier(0.2, 0.0, 0.0, 1);

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant,
      size,
      asChild = false,
      animateRadius,
      animate,
      initial,
      exit,
      transition,
      whileHover,
      whileTap,
      ...props
    },
    ref
  ) => {
    const prefersReduced = useReducedMotion();

    // Shape: spring com leve overshoot (Expressive)
    const shapeTransition: Transition = prefersReduced
      ? { duration: 0 }
      : {
          type: "spring",
          stiffness: 560,
          damping: 32,
          mass: 0.9,
          restDelta: 0.001,
        };

    // Opacidade: easing sem overshoot
    const opacityTransition: Transition = prefersReduced
      ? { duration: 0 }
      : {
          duration: 0.22,
          ease: EASE_EMPHASIZED_IN_OUT,
        };

    const computedAnimate = animate ?? {
      borderRadius: animateRadius, // se não passar, não anima shape
      opacity: props.disabled ? 0.5 : 1,
    };

    const computedTransition: Transition = transition ?? {
      // transitions específicas por propriedade
      borderRadius: shapeTransition,
      opacity: opacityTransition,
    };

    const computedWhileTap =
      whileTap ??
      (prefersReduced
        ? undefined
        : { scale: 0.98, transition: { duration: 0.08 } });

    // asChild entrega o estilo a um filho (ex.: <Link>) sem as props de motion,
    // que não existem em elementos DOM comuns.
    if (asChild) {
      return (
        <Slot
          ref={ref as React.Ref<HTMLElement>}
          data-slot="button"
          className={cn(buttonVariants({ variant, size, className }))}
          {...(props as React.HTMLAttributes<HTMLElement>)}
        />
      );
    }

    return (
      <MotionButtonBase
        ref={ref as React.Ref<HTMLButtonElement>}
        data-slot="button"
        className={cn(buttonVariants({ variant, size, className }))}
        animate={computedAnimate}
        initial={initial}
        exit={exit}
        transition={computedTransition}
        whileHover={whileHover}
        whileTap={computedWhileTap}
        {...props}
      />
    );
  }
);

Button.displayName = "Button";

export { Button, buttonVariants };
