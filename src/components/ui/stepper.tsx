// src/components/SoftBarrierStepper.tsx
import { motion } from "framer-motion";
import {
  Tooltip,
  TooltipTrigger,
  TooltipContent,
  TooltipProvider,
} from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";

interface Step {
  id: number;
  label: string;
  tooltip: string;
}

interface StepperProps {
  steps: Step[];
  current: number; // índice do passo atual (0-based)
  onStepClick?: (index: number) => void;
  accessibleSteps?: number; // até qual índice o usuário pode navegar
}

export function Stepper({
  steps,
  current,
  onStepClick,
  accessibleSteps = 0,
}: StepperProps) {
  const total = steps.length;
  const progressRatio = current / (total - 1);

  return (
    <TooltipProvider>
      <div className="relative w-full flex items-center h-6">
        {/* Active e Track */}
        <div
          className={cn(
            "flex w-full h-2 items-center",
            current === total - 1 ? "gap-0" : "gap-1"
          )}
        >
          <motion.div
            className="h-2 rounded-full bg-primary-container"
            style={{
              flexBasis:
                current === 0
                  ? "1%" // valor mínimo pra evitar pixel fantasma
                  : current === total - 1
                  ? "100%"
                  : `${(current / (total - 1)) * 102}%`,
            }}
            initial={{ flexBasis: "1%" }}
            animate={{
              flexBasis:
                current === 0
                  ? "1%"
                  : current === total - 1
                  ? "100%"
                  : `${(current / (total - 1)) * 102}%`,
            }}
            transition={{
              type: "spring",
              stiffness: 200,
              damping: 25,
              mass: 0.5,
            }}
          />
          {/* Track */}
          <div
            className="h-2 rounded-full bg-primary-fixed-dim flex-grow"
            style={{
              flexBasis:
                current === total - 1
                  ? "0%" // quando no último passo, Track some
                  : `${(1 - progressRatio) * 100}%`,
            }}
          ></div>
        </div>

        {/* Container dos stop indicators */}
        <div className="absolute inset-0 flex w-full items-center">
          {steps.map((step, i) => {
            if (i === 0) return null; // remove o primeiro stop
            const hasPassed = i <= current;
            const stopColor = hasPassed ? "bg-primary" : "bg-primary-container";

            return (
              <div
                key={step.id}
                className="flex flex-1 justify-end items-center"
              >
                <Tooltip>
                  <TooltipTrigger asChild>
                    <button
                      type="button"
                      disabled={i > accessibleSteps}
                      onClick={() => i <= accessibleSteps && onStepClick?.(i)}
                      className={cn(
                        "w-1 h-1 rounded-full transition-colors mr-0.5",
                        stopColor
                      )}
                    >
                      <span className="sr-only">{step.label}</span>
                    </button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>{step.tooltip}</p>
                  </TooltipContent>
                </Tooltip>
              </div>
            );
          })}
        </div>
      </div>
    </TooltipProvider>
  );
}
