import Header from "@/components/Header";
import { useTranslations } from "next-intl";
import Footer from "@/components/Footer";
import Image from "next/image";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Stack from "@/components/Stack";
import TimeIcon from "../../../icons/time.svg";
import ExternalIcon from "../../../icons/external.svg";
import Link from "next/link";

export default function LivroDigital() {
  const t = useTranslations();
  const skillArray: string[] = t.raw("project.livrodigital.skills");
  const projectDescription = t("project.livrodigital.projectDescription").split(
    "\n\n"
  );

  return (
    <div>
      <main className="bg-black flex flex-col items-center min-w-full p-4">
        {/* Header */}
        <Header />

        <div className="flex flex-col gap-10 max-w-gui w-full">
          <Image
            className="w-full rounded-lg"
            src="/img/projects/livrodigital/thumbnail.png"
            height={100}
            width={1000}
            quality={100}
            alt={"hello"}
          />
          {/* Title */}
          <p className="text-3xl font-semibold text-zinc-50">
            {t("project.livrodigital.title")}
          </p>
          {/* App Link */}
          <div className="flex flex-col pt-4">
            <p className="font-supplysans text-lg font-light text-zinc-50">
              App Link
            </p>

            <Link
              href="https://apps.apple.com/br/app/sme-digital-livro/id1445575692"
              className="border-b-[1px] w-fit border-indigo-500 text-indigo-500 hover:text-indigo-300 transition-colors duration-200 flex flex-row items-center gap-2"
            >
              App Store (iOS)
              <ExternalIcon
                className
                style={{
                  color: "rgb(99 102 241)",
                  width: 16,
                  height: 16,
                }}
              />
            </Link>
            <Link
              href="https://apps.apple.com/br/app/sme-digital-livro/id1445575692"
              className="border-b-[1px] w-fit border-indigo-500 text-indigo-500 hover:text-indigo-300 transition-colors duration-200 flex flex-row items-center gap-2"
            >
              Play Store (Android)
              <ExternalIcon
                className
                style={{
                  color: "rgb(99 102 241)",
                  width: 16,
                  height: 16,
                }}
              />
            </Link>
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

          {/* Stack Section */}
          <div className="flex flex-col">
            <p className="font-supplysans text-lg font-light text-zinc-50">
              Stack
            </p>
            <div className="text-smww-full font-light text-zinc-300">
              <Stack
                selectedStack={[
                  "HTML5",
                  "CSS",
                  "JavaScript",
                  "Lottie",
                  "ProtoPie",
                  "GitHub",
                  "Sass",
                  "Notion",
                  "React",
                  "Adobe CC",
                  "Figma",
                ]}
              />
            </div>
          </div>

          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger>
                <span className="flex  flex-row gap-2 items-center">
                  {t("project.livrodigital.about.text")}
                  <span className=" text-sm flex items-center flex-row gap-1 font-light text-zinc-400">
                    <TimeIcon
                      style={{
                        color: "rgb(161 161 170)",
                        width: 16,
                        height: 16,
                      }}
                    />
                    {t("project.livrodigital.about.time")}
                  </span>
                </span>
              </AccordionTrigger>
              <AccordionContent className="font-light">
                {projectDescription.map((paragraph, index) => (
                  <p key={index} className="mb-4">
                    {paragraph}
                  </p>
                ))}
              </AccordionContent>
            </AccordionItem>
          </Accordion>

          {/* Project Images */}
          <Image
            className="w-full rounded-lg"
            src="/img/projects/livrodigital/image-01.png"
            height={100}
            width={1000}
            alt={"hello"}
            quality={100}
          />
          <Image
            className="w-full rounded-lg"
            src="/img/projects/livrodigital/image-02.png"
            height={100}
            width={1000}
            alt={"hello"}
            quality={100}
          />
          <Image
            className="w-full rounded-lg"
            src="/img/projects/livrodigital/image-03.png"
            height={100}
            width={1000}
            alt={"hello"}
            quality={100}
          />
          <Image
            className="w-full rounded-lg"
            src="/img/projects/livrodigital/image-04.png"
            height={100}
            width={1000}
            alt={"hello"}
            quality={100}
          />
          <Image
            className="w-full rounded-lg"
            src="/img/projects/livrodigital/image-05.png"
            height={100}
            width={1000}
            quality={100}
            alt={"hello"}
          />
          <Image
            className="w-full rounded-lg"
            src="/img/projects/livrodigital/image-06.png"
            height={100}
            width={1000}
            alt={"hello"}
            quality={100}
          />
          <Image
            className="w-full rounded-lg"
            src="/img/projects/livrodigital/image-07.png"
            height={100}
            width={1000}
            alt={"hello"}
            quality={100}
          />
          <Image
            className="w-full rounded-lg"
            src="/img/projects/livrodigital/image-08.png"
            height={100}
            width={1000}
            alt={"hello"}
            quality={100}
          />
          {/* <Image
            className="w-full rounded-lg"
            src="/img/projects/livrodigital/image-09.png"
            height={100}
            width={1000}
            alt={"hello"}
            quality={100}
          /> */}
          <Image
            className="w-full rounded-lg"
            src="/img/projects/livrodigital/image-10.png"
            height={100}
            width={1000}
            quality={100}
            alt={"hello"}
          />
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
