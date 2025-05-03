import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ExternalLink, Github, ArrowLeft } from "lucide-react"
import Link from "next/link"

// Sample project data - replace with your actual projects
const projectsData = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description:
      "A full-featured e-commerce platform with product listings, cart functionality, user authentication, and payment integration.",
    longDescription:
      "This e-commerce platform provides a comprehensive solution for online retail. It features a responsive product catalog with filtering and search capabilities, a shopping cart with persistent storage, user authentication and profile management, secure checkout with Stripe integration, and an admin dashboard for inventory management. The application is built with React for the frontend, Node.js and Next.js API routes for the backend, and MongoDB for data storage. It implements best practices for security, performance, and user experience.",
    image: "/placeholder.svg?height=600&width=800",
    gallery: [
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
    ],
    category: "fullstack",
    technologies: ["React", "Node.js", "Next.js", "MongoDB", "Stripe"],
    features: [
      "Responsive product catalog with filtering and search",
      "Shopping cart with persistent storage",
      "User authentication and profile management",
      "Secure checkout with Stripe integration",
      "Admin dashboard for inventory management",
    ],
    challenges: [
      "Implementing secure payment processing",
      "Optimizing database queries for performance",
      "Building a responsive UI for all device sizes",
    ],
    solutions: [
      "Used Stripe's secure API for payment processing",
      "Implemented database indexing and query optimization",
      "Utilized Tailwind CSS for responsive design",
    ],
    liveUrl: "https://example.com/ecommerce",
    githubUrl: "https://github.com/yourusername/ecommerce",
    featured: true,
  },
  // ... include all 9 projects here
]

export default function ProjectPage({ params }: { params: { id: string } }) {
  const project = projectsData.find((p) => p.id === Number.parseInt(params.id))

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
    )
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
                  <span key={index} className="px-3 py-1 rounded-full text-sm font-medium bg-primary/10 text-primary">
                    {tech}
                  </span>
                ))}
              </div>
              <p className="text-foreground/80 mb-8">{project.longDescription}</p>

              <div className="flex gap-4 mb-8">
                <Button
                  asChild
                  className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-opacity"
                >
                  <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                    Live Demo <ExternalLink className="ml-2 h-4 w-4" />
                  </a>
                </Button>
                <Button asChild variant="outline" className="border-primary hover:bg-primary/10">
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                    GitHub <Github className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-lg">
              <img
                src={project.image || "/placeholder.svg"}
                alt={project.title}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
            <Card>
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold mb-4">Features</h2>
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

            <div className="space-y-6">
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
          </div>

          <h2 className="text-2xl font-bold mb-6">Project Gallery</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {project.gallery.map((image, index) => (
              <div key={index} className="relative overflow-hidden rounded-lg aspect-video">
                <img
                  src={image || "/placeholder.svg"}
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
  )
}
