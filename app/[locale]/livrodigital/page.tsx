"use client";

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
import Carousel from "@/components/Carousel"; // <-- Moved to the top
import ZoomImage from "@/components/ZoomImage";

interface ProjectDescription {
  introduction: string;
  problemStatement: string;
  solution: {
    text: string;
    bullets: string[];
  };
  impact: {
    text: string;
    bullets: string[];
  };
  learningAndRefinement: {
    text: string;
    refinements: string[];
  };
}

export default function CaseStudyTemplate() {
  const t = useTranslations();
  const skillArray: string[] = t.raw("project.livrodigital.skills");
  const projectDescription: ProjectDescription = t.raw(
    "project.livrodigital.projectDescription"
  );

  console.log("Project Description:", projectDescription);

  // Links to App Stores
  const appLinks = [
    {
      href: "https://apps.apple.com/br/app/sme-digital-livro/id1445575692",
      label: "App Store (iOS)",
    },
    {
      href: "https://play.google.com/store/apps/details?id=com.sme.livroDigital",
      label: "Play Store (Android)",
    },
  ];

  const projectMedia = [
    { type: "video", src: "/img/projects/livrodigital/logo-loop-c.webm" },
    { type: "image", src: "/img/projects/livrodigital/image-01.webp" },
    {
      type: "text",
      title: t("project.livrodigital.cards.card-01.title"),
      text: t("project.livrodigital.cards.card-01.text"),
    },
    {
      type: "carousel",
      image: [
        "/img/projects/livrodigital/logo-design.webp",
        "/img/projects/livrodigital/logo-idea.webp",
      ],
    },
    { type: "image", src: "/img/projects/livrodigital/image-02.webp" },
    { type: "image", src: "/img/projects/livrodigital/image-03.webp" },
    { type: "image", src: "/img/projects/livrodigital/image-04.webp" },
    { type: "image", src: "/img/projects/livrodigital/image-05.webp" },
    { type: "image", src: "/img/projects/livrodigital/image-06.webp" },
    {
      type: "text",
      title: t("project.livrodigital.cards.card-02.title"),
      text: t("project.livrodigital.cards.card-02.text"),
    },

    { type: "image", src: "/img/projects/livrodigital/image-07.webp" },
    { type: "image", src: "/img/projects/livrodigital/image-08.webp" },
    {
      type: "text",
      title: t("project.livrodigital.cards.card-03.title"),
      text: t("project.livrodigital.cards.card-03.text"),
    },
    { type: "image", src: "/img/projects/livrodigital/image-09.webp" },
    {
      type: "text",
      title: t("project.livrodigital.cards.card-04.title"),
      text: t("project.livrodigital.cards.card-04.text"),
    },
  ];

  return (
    <div>
      <main className="bg-black flex flex-col items-center min-w-full p-4">
        <Header />

        <div className="flex flex-col gap-10 max-w-gui w-full">
          {/* Project Thumbnail */}
          <Image
            className="w-full rounded-lg transition-image"
            src="/img/projects/livrodigital/thumbnail.webp"
            height={100}
            width={1000}
            quality={100}
            alt={t("project.livrodigital.title")}
          />

          {/* Project Title */}
          <div>
            <h1 className="text-3xl font-supplysans font-light text-zinc-50">
              {"// "} {t("project.livrodigital.title")}
            </h1>
            <h2 className="text-xl  font-light text-zinc-300">
              {t("project.livrodigital.subtitle")}
            </h2>
          </div>
          {/* App Links */}
          <div className="flex flex-col pt-4">
            <div className="font-supplysans text-xl font-light text-zinc-400">
              {t("project.livrodigital.cta")}
            </div>
            {appLinks.map((link, index) => (
              <Link
                key={index}
                href={link.href}
                className="border-b-[1px] border-[black]  w-fit hover:border-indigo-400 text-zinc-50 hover:text-indigo-500 transition-colors duration-200 flex flex-row items-center gap-2"
              >
                {link.label}
                <ExternalIcon
                  style={{ color: "rgb(99 102 241)", width: 16, height: 16 }}
                />
              </Link>
            ))}
          </div>
          {/* Visão Geral do Projeto */}
          <div className="flex flex-col gap-6">
            {/* Papel no Projeto */}
            <div>
              <h3 className="  font-supplysans text-zinc-500">
                {t("project.livrodigital.role")}
              </h3>
              <p className=" font-light text-zinc-50">Design Lead</p>
            </div>

            {/* Cliente */}
            <div>
              <h3 className=" font-supplysans text-zinc-500">
                {t("project.livrodigital.client")}
              </h3>

              <Link
                href={"http://mackenzie.br"}
                className="border-b-[1px] w-fit border-[black] hover:border-indigo-400 text-zinc-50 hover:text-indigo-400 transition-all duration-200  flex flex-row items-center gap-2"
              >
                Instituto Presbiteriano Mackenzie
                <ExternalIcon
                  style={{ color: "rgb(99 102 241)", width: 16, height: 16 }}
                />
              </Link>
            </div>

            {/* Equipe */}
            <div>
              <h3 className=" font-supplysans text-zinc-500">
                {t("project.livrodigital.platforms")}
              </h3>
              <p className="text-base font-light text-zinc-50">
                Web / Android / iOS
              </p>
            </div>

            <ZoomImage
              src={"/img/projects/livrodigital/main.webp"}
              alt={t("project.livrodigital.title")}
              width={1000}
              height={600}
            />
          </div>

          {/* Skills Section */}
          <div className="flex flex-col pt-4">
            <h2 className="font-supplysans text-zinc-500">Skills</h2>
            <ul className="list-none text-sm font-light text-zinc-50 space-y-1">
              {skillArray.map((item, index) => (
                <li key={index} className="flex items-center">
                  <span className="mr-2">→</span> {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Short Bio */}

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
                <div className="flex flex-row gap-2 items-center text-zinc-50">
                  {t("project.livrodigital.about.text")}
                  <div className="font-base flex items-center flex-row gap-1 font-light text-zinc-50">
                    <TimeIcon
                      style={{
                        color: "rgb(161 161 170)",
                        width: 16,
                        height: 16,
                      }}
                    />
                    {t("project.livrodigital.about.time")}
                  </div>
                </div>
              </AccordionTrigger>
              <AccordionContent className="font-light text-zinc-300">
                {/* Render Introduction */}
                <section>
                  <h3 className="text-lg font-supplysans text-zinc-500">
                    {t("project.livrodigital.titles.introduction")}
                  </h3>
                  <p className="mb-4">{projectDescription?.introduction}</p>
                </section>

                {/* Render Problem Statement */}
                <section>
                  <h3 className="text-lg font-supplysans text-zinc-500">
                    {t("project.livrodigital.titles.problemStatement")}
                  </h3>
                  <p className="mb-4">{projectDescription?.problemStatement}</p>
                </section>

                {/* Render Solution */}
                <section>
                  <h3 className="text-lg font-supplysans text-zinc-500">
                    {t("project.livrodigital.titles.solution")}
                  </h3>
                  {projectDescription?.solution && (
                    <>
                      <p className="mb-4">{projectDescription.solution.text}</p>
                      <ul className="list-disc pl-5 mb-4">
                        {projectDescription.solution.bullets?.map(
                          (bullet, index) => (
                            <li key={index}>{bullet}</li>
                          )
                        )}
                      </ul>
                    </>
                  )}
                </section>

                {/* Render Impact */}
                <section>
                  <div className="text-lg font-supplysans text-zinc-500">
                    {t("project.livrodigital.titles.impact")}
                  </div>
                  {projectDescription?.impact && (
                    <>
                      <p className="mb-4">{projectDescription.impact.text}</p>
                      <ul className="list-disc pl-5 mb-4">
                        {projectDescription.impact.bullets?.map(
                          (bullet, index) => (
                            <li key={index}>{bullet}</li>
                          )
                        )}
                      </ul>
                    </>
                  )}
                </section>

                {/* Render Learning and Refinement */}
                <section>
                  <div className="text-lg font-supplysans text-zinc-500">
                    {t("project.livrodigital.titles.learningAndRefinement")}
                  </div>
                  {projectDescription?.learningAndRefinement && (
                    <>
                      <p className="mb-4">
                        {projectDescription.learningAndRefinement.text}
                      </p>
                      <ul className="list-disc pl-5 mb-4">
                        {projectDescription.learningAndRefinement.refinements?.map(
                          (refinement, index) => (
                            <li key={index}>{refinement}</li>
                          )
                        )}
                      </ul>
                    </>
                  )}
                </section>
              </AccordionContent>
            </AccordionItem>
          </Accordion>

          <div className="flex flex-col gap-8">
            {projectMedia.map((media, index) => {
              if (media.type === "image") {
                return (
                  <ZoomImage
                    key={index}
                    src={media.src as string}
                    alt={t("project.livrodigital.title")}
                    width={1000}
                    height={600}
                  />
                );
              } else if (media.type === "video") {
                return (
                  <video
                    key={index}
                    className="w-full rounded-lg"
                    src={media.src}
                    autoPlay
                    loop
                    muted
                    playsInline
                    width={480}
                    height={1080}
                  />
                );
              } else if (media.type === "text") {
                return (
                  <div
                    key={index}
                    className="flex flex-col gap-2  p-6 border-[1px]  border-zinc-800  rounded-2xl "
                  >
                    <h3 className="font-supplysans font-light  text-zinc-400 rounded-lg tracking-wider w-fit text-[14px] uppercase ">
                      {"// "}
                      {media.title}
                    </h3>
                    <p className="text-base font-light text-zinc-50">
                      {media.text}
                    </p>
                  </div>
                );
              } else if (media.type === "carousel") {
                return (
                  <div key={index} className="my-2">
                    <Carousel images={media.image || []} />
                  </div>
                );
              }

              return null; // Fallback for unhandled types
            })}
          </div>
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
