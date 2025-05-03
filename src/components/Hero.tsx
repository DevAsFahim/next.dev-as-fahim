"use client"

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { ArrowRight, Download, Github, Linkedin, Mail, Twitter } from "lucide-react"
import Link from "next/link"

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-16 overflow-hidden">
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center lg:text-left"
          >
            <span className="inline-block px-3 py-1 rounded-full bg-muted text-foreground/80 text-sm font-medium mb-4">
              MERN Stack Developer
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              <span className="block">Transforming Ideas into</span>
              <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                Digital Experiences
              </span>
            </h1>
            <p className="text-lg text-foreground/80 mb-8 max-w-xl mx-auto lg:mx-0">
              With over 3 years of experience in web development, I specialize in creating responsive, user-friendly
              applications using modern technologies.
            </p>
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
              <Button
                asChild
                className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-opacity"
              >
                <Link href="#projects">
                  View My Work <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" className="border-primary hover:bg-primary/10">
                <a href="/resume.pdf" download>
                  Download CV <Download className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </div>
            <div className="mt-8 flex gap-4 justify-center lg:justify-start">
              <Button variant="ghost" size="icon" asChild>
                <a href="https://github.com/DevAsFahim" target="_blank" rel="noopener noreferrer">
                  <Github className="h-5 w-5" />
                  <span className="sr-only">GitHub</span>
                </a>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <a href="https://linkedin.com/in/dev-as-fahim" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="h-5 w-5" />
                  <span className="sr-only">LinkedIn</span>
                </a>
              </Button>
              {/* <Button variant="ghost" size="icon" asChild>
                <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer">
                  <Twitter className="h-5 w-5" />
                  <span className="sr-only">Twitter</span>
                </a>
              </Button> */}
              <Button variant="ghost" size="icon" asChild>
                <a href="mailto:devasfahim@gmail.com">
                  <Mail className="h-5 w-5" />
                  <span className="sr-only">Email</span>
                </a>
              </Button>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative flex justify-center"
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80 float">
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary to-secondary opacity-20 blur-2xl pulse" />
              <div className="absolute inset-4 rounded-full bg-gradient-to-r from-primary to-secondary" />
              <div className="absolute inset-5 rounded-full bg-background flex items-center justify-center">
                <div className="text-6xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  AS Fahim
                </div>
              </div>
            </div>

            <div
              className="absolute top-0 right-0 w-12 h-12 bg-muted rounded-full flex items-center justify-center float"
              style={{ animationDelay: "0.5s" }}
            >
              <span className="text-xl font-bold">Vue</span>
            </div>
            <div
              className="absolute bottom-10 right-0 w-14 h-14 bg-muted rounded-full flex items-center justify-center float"
              style={{ animationDelay: "1s" }}
            >
              <span className="text-xl font-bold">Next</span>
            </div>
            <div
              className="absolute bottom-0 left-10 w-12 h-12 bg-muted rounded-full flex items-center justify-center float"
              style={{ animationDelay: "1.5s" }}
            >
              <span className="text-xl font-bold">Node</span>
            </div>
            <div
              className="absolute top-10 left-0 w-14 h-14 bg-muted rounded-full flex items-center justify-center float"
              style={{ animationDelay: "2s" }}
            >
              <span className="text-xl font-bold">Mongo</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
