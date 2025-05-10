"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ExternalLink, Github, ArrowRight } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { IProjects } from "@/types/types";
import Image from "next/image";

const AllProjects = () => {
  const [projects, setProjects] = useState<IProjects[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/projects.json");
        const data = await response.json();
        setProjects(data);
      } catch (err) {
        console.log("Project is not found", err);
      }
    };
    fetchData();
  });

  return (
    <main className="min-h-screen bg-gradient-to-br from-background to-background/90 relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-violet-500/5 rounded-full blur-3xl" />

        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8884_1px,transparent_1px),linear-gradient(to_bottom,#8884_1px,transparent_1px)] bg-[size:50px_50px]" />

        <div className="stars absolute inset-0" />
      </div>

      <div className="relative z-10">
        <Navbar />

        <div className="section-container pt-32">
          <h1 className="text-4xl font-bold mb-8 text-center">All Projects</h1>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
              <Card
                key={project.id}
                className="overflow-hidden h-full flex flex-col project-card"
              >
                <div className="relative overflow-hidden aspect-video">
                  <Image
                    width={300}
                    height={200}
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
                <CardContent className="p-6 flex-grow flex flex-col">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-foreground/70 mb-4 flex-grow">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-2 py-1 rounded-full text-xs font-medium bg-muted text-foreground/80"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex justify-between items-center">
                    <Button
                      asChild
                      variant="outline"
                      size="sm"
                      className="border-primary hover:bg-primary/10"
                    >
                      <Link href={`/projects/${project.id}`}>
                        Details <ArrowRight className="ml-1 h-3 w-3" />
                      </Link>
                    </Button>
                    <div className="flex space-x-2">
                      <Button
                        asChild
                        variant="ghost"
                        size="icon"
                        className="h-8 w-8"
                      >
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label="GitHub Repository"
                        >
                          <Github className="h-4 w-4" />
                        </a>
                      </Button>
                      <Button
                        asChild
                        variant="ghost"
                        size="icon"
                        className="h-8 w-8"
                      >
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label="Live Demo"
                        >
                          <ExternalLink className="h-4 w-4" />
                        </a>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <Footer />
      </div>
    </main>
  );
};

export default AllProjects;
