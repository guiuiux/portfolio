import { Link } from "react-router";
import { ArrowUpRight } from "lucide-react";
import { CASES, type CaseKey } from "@/components/case-study/CaseBreadcrumb";
import { logEvent } from "@/utils/gaEvents";

/** Link para o outro case no fim da página: hoje há só dois, então é sempre "o outro". */
export default function NextCase({ current }: { current: CaseKey }) {
  const next = CASES.find((c) => c.key !== current)!;

  return (
    <section aria-labelledby="next-case" className="w-full">
      <Link
        to={next.to}
        onClick={() => logEvent("case_view", { case_id: next.key, from: "next_case" })}
        className="flex items-center justify-between gap-4 rounded-3xl bg-surface-container-low p-6 transition-colors hover:bg-surface-container focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 outline-none"
      >
        <span className="flex flex-col gap-1">
          <span id="next-case" className="text-on-surface-variant">
            Próximo case
          </span>
          <span className="type-headline font-var-wide text-on-surface">
            {next.label}
          </span>
        </span>
        <ArrowUpRight className="size-8 shrink-0 text-primary" aria-hidden="true" />
      </Link>
    </section>
  );
}
