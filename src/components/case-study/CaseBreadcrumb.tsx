import { Link } from "react-router";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";

export const CASES = [
  { key: "mackensina", label: "Hub MackEnsina", to: "/case/mackensina" },
  { key: "livro-digital", label: "SME Digital: Livro", to: "/case/livro-digital" },
] as const;

export type CaseKey = (typeof CASES)[number]["key"];

export default function CaseBreadcrumb({ current }: { current: CaseKey }) {
  const currentCase = CASES.find((c) => c.key === current)!;

  return (
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink asChild className="underline">
            <Link to="/">Home</Link>
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>Case Study</BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button
                type="button"
                className="cursor-pointer rounded-sm py-1 text-primary font-var-chub"
              >
                {currentCase.label} ▾
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start">
              {CASES.map((c) => (
                <DropdownMenuItem key={c.key} asChild>
                  <Link
                    to={c.to}
                    aria-current={c.key === current ? "page" : undefined}
                  >
                    {c.label}
                  </Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  );
}
