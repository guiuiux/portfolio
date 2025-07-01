"use client";

import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

type ProjectType = "project" | "case-study";

interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  type: ProjectType;
  liveUrl?: string;
  githubUrl?: string;
  year: string;
}

const projects: Project[] = [
  {
    id: "1",
    title: "E-commerce Platform",
    description:
      "A modern e-commerce solution built with Next.js and Stripe integration. Features include real-time inventory, advanced filtering, and seamless checkout experience.",
    image: "/placeholder.svg?height=300&width=400",
    tags: ["Next.js", "TypeScript", "Stripe", "Tailwind"],
    type: "project",
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    year: "2024",
  },
  {
    id: "2",
    title: "SaaS Dashboard Redesign",
    description:
      "Complete UX/UI overhaul of a B2B analytics dashboard. Improved user engagement by 40% and reduced task completion time by 60% through strategic design decisions.",
    image: "/placeholder.svg?height=300&width=400",
    tags: ["Figma", "User Research", "Prototyping", "Analytics"],
    type: "case-study",
    liveUrl: "https://example.com",
    year: "2024",
  },
  {
    id: "3",
    title: "AI Content Generator",
    description:
      "Full-stack application leveraging OpenAI's API to generate marketing content. Built with React, Node.js, and PostgreSQL with real-time collaboration features.",
    image: "/placeholder.svg?height=300&width=400",
    tags: ["React", "Node.js", "OpenAI", "PostgreSQL"],
    type: "project",
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    year: "2023",
  },
  {
    id: "4",
    title: "Mobile Banking UX Study",
    description:
      "Comprehensive user experience research and design for a mobile banking application. Conducted user interviews, usability testing, and created high-fidelity prototypes.",
    image: "/placeholder.svg?height=300&width=400",
    tags: ["Mobile Design", "User Testing", "Prototyping", "Banking"],
    type: "case-study",
    liveUrl: "https://example.com",
    year: "2023",
  },
  {
    id: "5",
    title: "Real-time Chat Application",
    description:
      "Scalable chat application with WebSocket integration, file sharing, and end-to-end encryption. Supports thousands of concurrent users with optimized performance.",
    image: "/placeholder.svg?height=300&width=400",
    tags: ["WebSocket", "React", "Node.js", "Redis"],
    type: "project",
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    year: "2023",
  },
  {
    id: "6",
    title: "Healthcare App Accessibility Audit",
    description:
      "Comprehensive accessibility audit and redesign of a healthcare management application. Achieved WCAG 2.1 AA compliance and improved usability for users with disabilities.",
    image: "/placeholder.svg?height=300&width=400",
    tags: ["Accessibility", "WCAG", "Healthcare", "Audit"],
    type: "case-study",
    liveUrl: "https://example.com",
    year: "2022",
  },
];

export default function Component() {
  const [activeFilter, setActiveFilter] = useState<ProjectType | "all">("all");

  const filteredProjects = projects.filter(
    (project) => activeFilter === "all" || project.type === activeFilter
  );

  return (
    <div className="min-h-screen bg-zinc-50">
      <div className="container mx-auto px-4 py-16 max-w-6xl">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-zinc-900 mb-4">
            Selected Work
          </h1>
          <p className="text-lg text-zinc-600 max-w-2xl mx-auto">
            A collection of projects and case studies showcasing my approach to
            <span className="bg-amber-200 px-1 rounded">
              {" "}
              problem-solving
            </span>{" "}
            and
            <span className="bg-amber-200 px-1 rounded"> design thinking</span>.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex bg-zinc-100 rounded-lg p-1">
            <Button
              variant={activeFilter === "all" ? "default" : "ghost"}
              onClick={() => setActiveFilter("all")}
              className={`px-6 py-2 text-sm font-medium transition-all ${
                activeFilter === "all"
                  ? "bg-white text-zinc-900 shadow-sm"
                  : "text-zinc-600 hover:text-zinc-900"
              }`}
            >
              All Work
            </Button>
            <Button
              variant={activeFilter === "project" ? "default" : "ghost"}
              onClick={() => setActiveFilter("project")}
              className={`px-6 py-2 text-sm font-medium transition-all ${
                activeFilter === "project"
                  ? "bg-white text-zinc-900 shadow-sm"
                  : "text-zinc-600 hover:text-zinc-900"
              }`}
            >
              Projects
            </Button>
            <Button
              variant={activeFilter === "case-study" ? "default" : "ghost"}
              onClick={() => setActiveFilter("case-study")}
              className={`px-6 py-2 text-sm font-medium transition-all ${
                activeFilter === "case-study"
                  ? "bg-white text-zinc-900 shadow-sm"
                  : "text-zinc-600 hover:text-zinc-900"
              }`}
            >
              Case Studies
            </Button>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <Card
              key={project.id}
              className="group overflow-hidden border-0 shadow-sm hover:shadow-lg transition-all duration-300 bg-white"
            >
              <div className="relative overflow-hidden">
                {/* <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  width={400}
                  height={300}
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                /> */}
                <div className="absolute top-4 left-4">
                  <Badge
                    variant="secondary"
                    className={`text-xs font-medium ${
                      project.type === "case-study"
                        ? "bg-amber-100 text-amber-800 border-amber-200"
                        : "bg-zinc-100 text-zinc-700 border-zinc-200"
                    }`}
                  >
                    {project.type === "case-study" ? "Case Study" : "Project"}
                  </Badge>
                </div>
                <div className="absolute top-4 right-4 text-xs font-medium text-zinc-500 bg-white/90 px-2 py-1 rounded">
                  {project.year}
                </div>
              </div>

              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-zinc-900 mb-3 group-hover:text-zinc-700 transition-colors">
                  {project.title}
                </h3>
                <p className="text-zinc-600 text-sm leading-relaxed mb-4">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <Badge
                      key={tag}
                      variant="outline"
                      className="text-xs text-zinc-600 border-zinc-200 hover:border-zinc-300"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  {project.liveUrl && (
                    <Button
                      asChild
                      size="sm"
                      className="bg-zinc-900 hover:bg-zinc-800 text-white"
                    >
                      {/* <Link
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="w-4 h-4 mr-2" />
                        View Live
                      </Link> */}
                    </Button>
                  )}
                  {project.githubUrl && (
                    <Button
                      asChild
                      variant="outline"
                      size="sm"
                      className="border-zinc-200 text-zinc-700 hover:bg-zinc-50"
                    >
                      {/* <Link
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github className="w-4 h-4 mr-2" />
                        Code
                      </Link> */}
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-16">
            <p className="text-zinc-500">
              No{" "}
              {activeFilter === "all" ? "work" : activeFilter.replace("-", " ")}{" "}
              found.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
