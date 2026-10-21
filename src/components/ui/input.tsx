import * as React from "react";
import { cn } from "@/lib/utils";

type Props = React.ComponentProps<"input">;

const Input = React.forwardRef<HTMLInputElement, Props>(
  ({ className, type = "text", ...props }, ref) => {
    return (
      <input
        ref={ref}
        type={type}
        data-slot="input"
        className={cn(
          // reset total de UA + tailwind/forms
          "appearance-none outline-none border-0 ring-0",
          // base
          "flex h-9 w-full min-w-0 rounded-md px-3 py-1 text-base md:text-sm",
          "bg-surface-container-highest placeholder:text-muted-foreground",
          "file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium",
          "disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50",

          // sua borda base (M3 outline)
          "border border-outline-variant",

          // foco (M3 expressive: 3px ring + troca de cor da borda)
          "focus-visible:ring-[3px] focus-visible:ring-primary-container/50",
          "focus-visible:ring-offset-2 focus-visible:ring-offset-surface",
          "focus-visible:border-primary-container",

          // estado de erro via aria-invalid
          "aria-invalid:border-secondary-container",
          "aria-invalid:focus-visible:ring-secondary-container/40",

          className
        )}
        {...props}
      />
    );
  }
);
Input.displayName = "Input";

export { Input };
