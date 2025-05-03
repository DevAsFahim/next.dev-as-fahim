"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ExternalLink, Github, ArrowRight } from "lucide-react"
import Link from "next/link"

const projectsData = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description:
      "A full-featured e-commerce platform with product listings, cart functionality, user authentication, and payment integration.",
    image: "/placeholder.svg?height=600&width=800",
    category: "fullstack",
    technologies: ["React", "Node.js", "Next.js", "MongoDB", "Stripe"],
    liveUrl: "https://example.com/ecommerce",
    githubUrl: "https://github.com/yourusername/ecommerce",
    featured: true,
  },
  {
    id: 2,
    title: "Task Management App",
    description:
      "A collaborative task management application with real-time updates, task assignments, and progress tracking.",
    image: "/placeholder.svg?height=600&width=800",
    category: "fullstack",
    technologies: ["Vue.js", "Firebase", "Tailwind CSS"],
    liveUrl: "https://example.com/taskmanager",
    githubUrl: "https://github.com/yourusername/taskmanager",
    featured: true,
  },
  {
    id: 3,
    title: "Weather Dashboard",
    description: "A weather dashboard that displays current and forecasted weather data for multiple locations.",
    image: "/placeholder.svg?height=600&width=800",
    category: "frontend",
    technologies: ["React", "OpenWeather API", "Chart.js"],
    liveUrl: "https://example.com/weather",
    githubUrl: "https://github.com/yourusername/weather",
    featured: false,
  },
  {
    id: 4,
    title: "Blog Platform",
    description:
      "A content management system for creating and managing blog posts with categories, tags, and user comments.",
    image: "/placeholder.svg?height=600&width=800",
    category: "fullstack",
    technologies: ["Next.js", "MongoDB", "Tailwind CSS"],
    liveUrl: "https://example.com/blog",
    githubUrl: "https://github.com/yourusername/blog",
    featured: true,
  },
  {
    id: 5,
    title: "Portfolio Website",
    description: "A responsive portfolio website to showcase projects and skills.",
    image: "/placeholder.svg?height=600&width=800",
    category: "frontend",
    technologies: ["HTML", "CSS", "JavaScript"],
    liveUrl: "https://example.com/portfolio",
    githubUrl: "https://github.com/yourusername/portfolio",
    featured: false,
  },
  {
    id: 6,
    title: "Recipe Finder",
    description:
      "An application that allows users to search for recipes based on ingredients, dietary restrictions, and meal types.",
    image: "/placeholder.svg?height=600&width=800",
    category: "frontend",
    technologies: ["React", "Spoonacular API", "CSS"],
    liveUrl: "https://example.com/recipes",
    githubUrl: "https://github.com/yourusername/recipes",
    featured: false,
  },
  {
    id: 7,
    title: "Chat Application",
    description: "A real-time chat application with private messaging, group chats, and file sharing capabilities.",
    image: "/placeholder.svg?height=600&width=800",
    category: "fullstack",
    technologies: ["React", "Socket.io", "Next.js", "MongoDB"],
    liveUrl: "https://example.com/chat",
    githubUrl: "https://github.com/yourusername/chat",
    featured: true,
  },
  {
    id: 8,
    title: "Movie Database",
    description: "A movie database application that displays information about movies, actors, and directors.",
    image: "/placeholder.svg?height=600&width=800",
    category: "frontend",
    technologies: ["Vue.js", "TMDB API", "CSS"],
    liveUrl: "https://example.com/movies",
    githubUrl: "https://github.com/yourusername/movies",
    featured: false,
  },
  {
    id: 9,
    title: "Fitness Tracker",
    description: "A fitness tracking application that allows users to log workouts, track progress, and set goals.",
    image: "/placeholder.svg?height=600&width=800",
    category: "fullstack",
    technologies: ["React", "Node.js", "Next.js", "MongoDB"],
    liveUrl: "https://example.com/fitness",
    githubUrl: "https://github.com/yourusername/fitness",
    featured: false,
  },
]

export default function Projects() {
  const [activeTab, setActiveTab] = useState("all")

  const filteredProjects =
    activeTab === "all"
      ? projectsData
      : activeTab === "featured"
        ? projectsData.filter((project) => project.featured)
        : projectsData.filter((project) => project.category === activeTab)

  return (
    <section id="projects" className="py-16 md:py-24 relative">
      <div className="section-container">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="section-title"
        >
          My Projects
        </motion.h2>

        <Tabs defaultValue="all" className="w-full" onValueChange={setActiveTab}>
          <div className="flex justify-center mb-8">
            <TabsList className="bg-muted">
              <TabsTrigger value="all">All Projects</TabsTrigger>
              <TabsTrigger value="featured">Featured</TabsTrigger>
              <TabsTrigger value="fullstack">Full Stack</TabsTrigger>
              <TabsTrigger value="frontend">Frontend</TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value={activeTab} className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="overflow-hidden h-full flex flex-col project-card">
                    <div className="relative overflow-hidden aspect-video">
                      <img
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                      />
                    </div>
                    <CardContent className="p-6 flex-grow flex flex-col">
                      <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                      <p className="text-foreground/70 mb-4 flex-grow">{project.description}</p>
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
                        <Button asChild variant="outline" size="sm" className="border-primary hover:bg-primary/10">
                          <Link href={`/projects/${project.id}`}>
                            Details <ArrowRight className="ml-1 h-3 w-3" />
                          </Link>
                        </Button>
                        <div className="flex space-x-2">
                          <Button asChild variant="ghost" size="icon" className="h-8 w-8">
                            <a
                              href={project.githubUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              aria-label="GitHub Repository"
                            >
                              <Github className="h-4 w-4" />
                            </a>
                          </Button>
                          <Button asChild variant="ghost" size="icon" className="h-8 w-8">
                            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" aria-label="Live Demo">
                              <ExternalLink className="h-4 w-4" />
                            </a>
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </TabsContent>
        </Tabs>

        <div className="mt-12 text-center">
          <Button asChild className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-opacity">
            <Link href="/projects">
              View All Projects <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
