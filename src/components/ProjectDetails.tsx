"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ExternalLink, Github, ArrowLeft, ImageIcon, Film } from "lucide-react";
import Link from "next/link";
import ImageSlider from "@/components/ImageSlider";
import { IProjects } from "@/types/types";
import Image from "next/image";

const ProjectDetails = () => {
  const [projects, setProjects] = useState<IProjects[]>([]);

  useEffect(() => {
    const fetchProject = async () => {
      try {
        const res = await fetch("/projects.json");
        const data = await res.json();
        setProjects(data);
      } catch (err) {
        console.log("Projects are not found", err);
      }
    };

    fetchProject();
  });

  const params = useParams();
  const id = typeof params.id === "string" ? Number(params.id) : params.id;
  const project = projects.find((p) => p.id === id);

  const [displayMode, setDisplayMode] = useState<"single" | "slider">("slider");

  if (!project) {
    return (
      <main className="min-h-screen bg-gradient-to-br from-background to-background/90 relative overflow-hidden">
        <Navbar />
        <div className="section-container pt-32 text-center">
          <h1 className="text-4xl font-bold mb-8">Project Not Found</h1>
          <Button asChild>
            <Link href="/projects">
              <ArrowLeft className="mr-2 h-4 w-4" /> Back to Projects
            </Link>
          </Button>
        </div>
        <Footer />
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-background to-background/90 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-violet-500/5 rounded-full blur-3xl" />

        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8884_1px,transparent_1px),linear-gradient(to_bottom,#8884_1px,transparent_1px)] bg-[size:50px_50px]" />

        {/* Stars */}
        <div className="stars absolute inset-0" />
      </div>

      <div className="relative z-10">
        <Navbar />

        <div className="section-container pt-32">
          <Button asChild variant="outline" className="mb-8">
            <Link href="/projects">
              <ArrowLeft className="mr-2 h-4 w-4" /> Back to Projects
            </Link>
          </Button>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
            <div>
              <h1 className="text-4xl font-bold mb-4">{project.title}</h1>
              <div className="flex flex-wrap gap-2 mb-6">
                {project.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 rounded-full text-sm font-medium bg-primary/10 text-primary"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <p className="text-foreground/80 mb-8">
                {project.longDescription}
              </p>

              <div className="flex gap-4 mb-8">
                <Button
                  asChild
                  className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-opacity"
                >
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Live Demo <ExternalLink className="ml-2 h-4 w-4" />
                  </a>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="border-primary hover:bg-primary/10"
                >
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub <Github className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -top-12 right-0 flex space-x-2">
                <Button
                  variant={displayMode === "single" ? "default" : "outline"}
                  size="sm"
                  onClick={() => setDisplayMode("single")}
                  className="flex items-center"
                >
                  <ImageIcon className="h-4 w-4 mr-2" />
                  Single Image
                </Button>
                <Button
                  variant={displayMode === "slider" ? "default" : "outline"}
                  size="sm"
                  onClick={() => setDisplayMode("slider")}
                  className="flex items-center"
                >
                  <Film className="h-4 w-4 mr-2" />
                  Image Slider
                </Button>
              </div>

              {displayMode === "single" ? (
                <div className="relative overflow-hidden rounded-lg aspect-video">
                  <Image
                    height={300}
                    width={500}
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              ) : (
                <ImageSlider images={project.gallery} />
              )}
            </div>
          </div>

          <Tabs defaultValue="features" className="w-full mb-12">
            <TabsList className="w-full justify-start mb-6">
              <TabsTrigger value="features">Features</TabsTrigger>
              <TabsTrigger value="challenges">
                Challenges & Solutions
              </TabsTrigger>
              <TabsTrigger value="technical">Technical Details</TabsTrigger>
            </TabsList>

            <TabsContent value="features">
              <Card>
                <CardContent className="p-6">
                  <h2 className="text-2xl font-bold mb-4">Key Features</h2>
                  <ul className="space-y-2">
                    {project.features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <span className="mr-2 text-primary">•</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="challenges">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card>
                  <CardContent className="p-6">
                    <h2 className="text-2xl font-bold mb-4">Challenges</h2>
                    <ul className="space-y-2">
                      {project.challenges.map((challenge, index) => (
                        <li key={index} className="flex items-start">
                          <span className="mr-2 text-primary">•</span>
                          <span>{challenge}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <h2 className="text-2xl font-bold mb-4">Solutions</h2>
                    <ul className="space-y-2">
                      {project.solutions.map((solution, index) => (
                        <li key={index} className="flex items-start">
                          <span className="mr-2 text-primary">•</span>
                          <span>{solution}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="technical">
              <Card>
                <CardContent className="p-6">
                  <h2 className="text-2xl font-bold mb-4">
                    Technical Implementation
                  </h2>
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Frontend</h3>
                      <p className="text-foreground/80">
                        The frontend is built with React and Next.js, utilizing
                        server components for improved performance and SEO. The
                        UI is designed with Tailwind CSS for responsive layouts
                        and custom styling.
                      </p>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Backend</h3>
                      <p className="text-foreground/80">
                        The backend uses Next.js API routes to handle
                        server-side logic and API endpoints. Data is stored in
                        MongoDB with Mongoose for schema validation and data
                        modeling.
                      </p>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Deployment</h3>
                      <p className="text-foreground/80">
                        The application is deployed on Vercel for seamless
                        integration with Next.js and automatic deployments from
                        GitHub.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>

          <h2 className="text-2xl font-bold mb-6">More Project Images</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {project.gallery.slice(0, 3).map((image, index) => (
              <div
                key={index}
                className="relative overflow-hidden rounded-lg aspect-video"
              >
                <Image
                  width={200}
                  height={200}
                  src={image}
                  alt={`${project.title} screenshot ${index + 1}`}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
            ))}
          </div>
        </div>

        <Footer />
      </div>
    </main>
  );
};

export default ProjectDetails;
