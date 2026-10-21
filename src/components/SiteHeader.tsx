import type { ReactNode } from "react";
import NavBar from "@/components/NavBar";
import { cn } from "@/lib/utils";

interface SiteHeaderProps {
  /** Largura máxima da página: home usa 1240px, as demais 1080px */
  wide?: boolean;
  /** Conteúdo extra abaixo da navegação (ex.: breadcrumb) */
  children?: ReactNode;
}

export default function SiteHeader({ wide = false, children }: SiteHeaderProps) {
  return (
    <header
      className={cn(
        "flex w-full flex-col gap-2 px-4 pt-2 md:px-10 lg:px-4",
        wide ? "max-w-[1240px] mb-6" : "max-w-[1080px] mb-8"
      )}
    >
      <NavBar />
      {children}
    </header>
  );
}
