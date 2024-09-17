import Header from "@/components/Header";
import { useTranslations } from "next-intl";
import Footer from "@/components/Footer";

export default function LivroDigital() {
  const t = useTranslations();
  const stackArray: string[] = t.raw("project.livrodigital.stack");
  const skillArray: string[] = t.raw("project.livrodigital.skills");

  return (
    <div>
      <main className="bg-black flex flex-col items-center min-w-full p-4">
        {/* Header */}
        <Header />

        <div className="flex flex-col gap-10 max-w-gui w-full">
          {/* Title */}
          <p className="text-3xl font-semibold text-zinc-50">
            {t("project.livrodigital.title")}
          </p>

          {/* Stack Section */}
          <div className="flex flex-col">
            <p className="font-supplysans text-lg font-light text-zinc-50">
              Stack
            </p>
            <div className="text-sm font-light text-zinc-300">
              {stackArray.map((item, index) => (
                <span key={index}>
                  {item}
                  {index < stackArray.length - 1 && ", "}
                </span>
              ))}
            </div>
          </div>

          {/* Skills Section */}
          <div className="flex flex-col pt-4">
            <p className="font-supplysans text-lg font-light text-zinc-50">
              Skills
            </p>
            <ul className="list-none text-sm font-light text-zinc-300 space-y-1">
              {skillArray.map((item, index) => (
                <li key={index} className="flex items-center">
                  <span className="mr-2">→</span> {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Short Bio */}
          <p className="font-light text-zinc-300">
            {t("project.livrodigital.shortBio")}
          </p>
        </div>
      </main>

      {/* Footer */}
      <footer className="flex flex-col items-center min-w-full p-4">
        <div className="flex flex-col gap-10 max-w-gui w-full">
          <Footer />
        </div>
      </footer>
    </div>
  );
}
