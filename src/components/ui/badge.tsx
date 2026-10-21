import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const badgeVariants = cva(
  // Base M3 expressive
  "inline-flex items-center justify-center rounded-full border transition-colors duration-200 ease-[cubic-bezier(0.2,0,0,1)] text-sm font-medium w-fit whitespace-nowrap shrink-0 gap-1 overflow-hidden px-3 py-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-primary text-on-primary hover:bg-primary-fixed hover:text-on-primary-fixed active:bg-primary-fixed-dim",
        caseCard:
          "border-transparent bg-secondary-container text-on-secondary-container hover:bg-secondary-fixed hover:text-on-secondary-fixed active:bg-secondary",
        visualCard:
          "border-transparent bg-tertiary-container text-on-tertiary-container hover:bg-tertiary-fixed hover:text-on-tertiary-fixed active:bg-tertiary",
        secondary:
          "border-transparent bg-secondary text-on-secondary hover:bg-secondary-fixed hover:text-on-secondary-fixed active:bg-secondary-fixed-dim",
        destructive:
          "border-transparent bg-error text-on-error hover:bg-error-container hover:text-on-error-container active:bg-error",
        outline:
          "border-outline text-on-surface hover:bg-surface-container-highest active:bg-surface-container-high",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

function Badge({
  className,
  variant,
  asChild = false,
  ...props
}: React.ComponentProps<"span"> &
  VariantProps<typeof badgeVariants> & { asChild?: boolean }) {
  const Comp = asChild ? Slot : "span";

  return (
    <Comp
      data-slot="badge"
      className={cn(badgeVariants({ variant }), className)}
      {...props}
    />
  );
}

export { Badge, badgeVariants };
