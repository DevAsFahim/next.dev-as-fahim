"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, Calendar } from "lucide-react"
import Link from "next/link"

const blogPosts = [
  {
    id: 1,
    title: "Getting Started with the MERN Stack",
    excerpt: "Learn how to set up a full-stack application using MongoDB, Express, React, and Node.js.",
    date: "May 15, 2024",
    image: "/placeholder.svg?height=400&width=600",
    category: "Development",
  },
  {
    id: 2,
    title: "Optimizing React Performance",
    excerpt: "Tips and tricks to improve the performance of your React applications.",
    date: "April 28, 2024",
    image: "/placeholder.svg?height=400&width=600",
    category: "React",
  },
  {
    id: 3,
    title: "Building Responsive UIs with Tailwind CSS",
    excerpt: "A comprehensive guide to creating responsive user interfaces using Tailwind CSS.",
    date: "April 10, 2024",
    image: "/placeholder.svg?height=400&width=600",
    category: "CSS",
  },
]

export default function BlogSection() {
  return (
    <section id="blog" className="py-16 md:py-24 relative">
      <div className="section-container">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="section-title"
        >
          Latest Blog Posts
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogPosts.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="overflow-hidden h-full flex flex-col hover:shadow-lg hover:shadow-primary/20 transition-all duration-300 hover:-translate-y-1">
                <div className="relative overflow-hidden aspect-video">
                  <img
                    src={post.image || "/placeholder.svg"}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                  <div className="absolute top-2 right-2 bg-background/80 backdrop-blur-sm px-2 py-1 rounded text-xs font-medium">
                    {post.category}
                  </div>
                </div>
                <CardContent className="p-6 flex-grow flex flex-col">
                  <div className="flex items-center text-sm text-foreground/60 mb-2">
                    <Calendar className="h-4 w-4 mr-1" />
                    {post.date}
                  </div>
                  <h3 className="text-xl font-bold mb-2">{post.title}</h3>
                  <p className="text-foreground/70 mb-4 flex-grow">{post.excerpt}</p>
                  <Button asChild variant="ghost" className="justify-start p-0 hover:bg-transparent hover:text-primary">
                    <Link href={`/blog/${post.id}`}>
                      Read More <ArrowRight className="ml-1 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button asChild className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-opacity">
            <Link href="/blog">
              View All Posts <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
