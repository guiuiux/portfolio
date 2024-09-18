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

export default function CaseStudyTemplate() {
  const t = useTranslations();
  const skillArray: string[] = t.raw("project.livrodigital.skills");
  const projectDescription = t("project.livrodigital.projectDescription").split(
    "\n\n"
  );

  // Links to App Stores
  const appLinks = [
    {
      href: "https://apps.apple.com/br/app/sme-digital-livro/id1445575692",
      label: "App Store (iOS)",
    },
    {
      href: "https://play.google.com/store/apps/details?id=com.example.android",
      label: "Play Store (Android)",
    },
  ];

  // Project Images
  const projectMedia = [
    "/img/projects/livrodigital/image-01.png",
    "/img/projects/livrodigital/logo-design.png",
    "/img/projects/livrodigital/logo-mockup.png",
    "/img/projects/livrodigital/icon-pack.png",
    "/img/projects/livrodigital/image-02.png",
    "/img/projects/livrodigital/image-03.png",
    "/img/projects/livrodigital/image-04.png",
    "/img/projects/livrodigital/image-05.png",
    "/img/projects/livrodigital/image-06.png",
    "/img/projects/livrodigital/image-07.png",
    "/img/projects/livrodigital/image-08.png",
    "/img/projects/livrodigital/image-09.png",
    "/img/projects/livrodigital/image-10.png",
    "/img/projects/livrodigital/image-11.png",
    "/img/projects/livrodigital/image-12.png",
    // Add all other image paths here
  ];

  return (
    <div>
      <main className="bg-black flex flex-col items-center min-w-full p-4">
        <Header />

        <div className="flex flex-col gap-10 max-w-gui w-full">
          {/* Project Thumbnail */}
          <Image
            className="w-full rounded-lg transition-image"
            src="/img/projects/livrodigital/thumbnail.png"
            height={100}
            width={1000}
            quality={100}
            alt={t("project.livrodigital.title")}
          />

          {/* Project Title */}
          <h1 className="text-3xl font-semibold text-zinc-50">
            {t("project.livrodigital.title")}
          </h1>

          {/* App Links */}
          <div className="flex flex-col pt-4">
            <h2 className="font-supplysans text-lg font-light text-zinc-50">
              App Link
            </h2>
            {appLinks.map((link, index) => (
              <Link
                key={index}
                href={link.href}
                className="border-b-[1px] w-fit border-indigo-500 text-indigo-500 hover:text-indigo-300 transition-colors duration-200 flex flex-row items-center gap-2"
              >
                {link.label}
                <ExternalIcon
                  style={{ color: "rgb(99 102 241)", width: 16, height: 16 }}
                />
              </Link>
            ))}
          </div>

          {/* Skills Section */}
          <div className="flex flex-col pt-4">
            <h2 className="font-supplysans text-lg font-light text-zinc-50">
              Skills
            </h2>
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
            <h2 className="font-supplysans text-lg font-light text-zinc-50">
              Stack
            </h2>
            <div className="text-sm font-light text-zinc-300">
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

          {/* About Project Accordion */}
          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger>
                <span className="flex flex-row gap-2 items-center">
                  {t("project.livrodigital.about.text")}
                  <span className="text-sm flex items-center flex-row gap-1 font-light text-zinc-400">
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

          {/* Project Images and Videos */}
          {projectMedia.map((src, index) => {
            const isVideo = src.endsWith(".webm"); // Check if the file is a video

            return isVideo ? (
              <video
                key={index}
                className="w-full rounded-lg"
                src={src}
                controls
                autoPlay
                loop
                muted
                playsInline
                width={480}
                height={1080}
              />
            ) : (
              <Image
                key={index}
                className="w-full rounded-lg"
                src={src}
                height={100}
                width={1000}
                alt={t("project.livrodigital.title")}
                quality={100}
              />
            );
          })}
        </div>
      </main>

      <footer className="flex flex-col items-center min-w-full p-4">
        <div className="flex flex-col gap-10 max-w-gui w-full">
          <Footer />
        </div>
      </footer>
    </div>
  );
}
