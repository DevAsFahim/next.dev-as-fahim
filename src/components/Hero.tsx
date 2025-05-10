"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight, Download, Github, Linkedin, Mail } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-16 overflow-hidden"
    >
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
              With over 3 years of experience in web development, I specialize
              in creating responsive, user-friendly applications using modern
              technologies.
            </p>
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
              <Button
                asChild
                className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-opacity"
              >
                <Link href="/projects">
                  View My Work <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                className="border-primary hover:bg-primary/10"
              >
                <a
                  target="_blank"
                  href="https://drive.google.com/file/d/1Fp2ns3k96wpAZFY5-EVZAQ2hmGmIDvRc/view?pli=1"
                  download
                >
                  Download CV <Download className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </div>
            <div className="mt-8 flex gap-4 justify-center lg:justify-start">
              <Button variant="ghost" size="icon" asChild>
                <a
                  href="https://github.com/DevAsFahim"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="h-5 w-5" />
                  <span className="sr-only">GitHub</span>
                </a>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <a
                  href="https://linkedin.com/in/dev-as-fahim"
                  target="_blank"
                  rel="noopener noreferrer"
                >
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
            className="relative flex justify-center items-center"
          >
            {/* 3D Layered Tech Stack Visualization */}
            <div className="relative w-full h-[400px] perspective-1000">
              {/* Animated code editor */}
              <div className="absolute inset-0 code-editor-container rounded-lg overflow-hidden shadow-2xl border border-border">
                <div className="bg-card/80 backdrop-blur-sm p-2 border-b border-border flex items-center">
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  </div>
                  <div className="ml-4 text-xs text-foreground/60 font-mono">
                    portfolio.jsx
                  </div>
                </div>
                <div className="p-4 font-mono text-sm overflow-hidden h-[calc(100%-40px)]">
                  <div className="code-line">
                    <span className="text-blue-400">import</span>
                    <span className="text-foreground/80"> React </span>
                    <span className="text-blue-400">from</span>
                    <span className="text-foreground/80"> </span>
                    <span className="text-green-400">&apos;react&apos;</span>
                    <span className="text-foreground/80">;</span>
                  </div>
                  <div className="code-line">
                    <span className="text-blue-400">import</span>
                    <span className="text-foreground/80"> </span>
                    <span className="text-foreground/80">{"{ "}</span>
                    <span className="text-foreground/80">
                      useState, useEffect
                    </span>
                    <span className="text-foreground/80">{" }"}</span>
                    <span className="text-blue-400"> from</span>
                    <span className="text-foreground/80"> </span>
                    <span className="text-green-400">&apos;react &apos;</span>
                    <span className="text-foreground/80">;</span>
                  </div>
                  <div className="code-line mt-2">
                    <span className="text-purple-400">const</span>
                    <span className="text-foreground/80"> </span>
                    <span className="text-yellow-300">Portfolio</span>
                    <span className="text-foreground/80"> = () </span>
                    <span className="text-purple-400">{"=>"}</span>
                    <span className="text-foreground/80"> {"{}"}</span>
                  </div>
                  <div className="code-line ml-4">
                    <span className="text-purple-400">const</span>
                    <span className="text-foreground/80"> [</span>
                    <span className="text-yellow-300">projects</span>
                    <span className="text-foreground/80">, </span>
                    <span className="text-yellow-300">setProjects</span>
                    <span className="text-foreground/80">] = </span>
                    <span className="text-yellow-300">useState</span>
                    <span className="text-foreground/80">([])</span>
                    <span className="text-foreground/80">;</span>
                  </div>
                  <div className="code-line ml-4 mt-2">
                    <span className="text-yellow-300">useEffect</span>
                    <span className="text-foreground/80">{"(() => {"}</span>
                  </div>
                  <div className="code-line ml-8">
                    <span className="text-purple-400">const</span>
                    <span className="text-foreground/80"> </span>
                    <span className="text-yellow-300">fetchProjects</span>
                    <span className="text-foreground/80"> = </span>
                    <span className="text-purple-400">async</span>
                    <span className="text-foreground/80"> () </span>
                    <span className="text-purple-400">{"=>"}</span>
                    <span className="text-foreground/80"> {"{}"}</span>
                  </div>
                  <div className="code-line ml-12 typing-animation">
                    <span className="text-purple-400">const</span>
                    <span className="text-foreground/80"> data = </span>
                    <span className="text-purple-400">await</span>
                    <span className="text-foreground/80"> </span>
                    <span className="text-yellow-300">fetch</span>
                    <span className="text-foreground/80">
                      (&apos;/api/projects&apos;)
                    </span>
                    <span className="text-foreground/80">;</span>
                  </div>
                  <div className="code-line ml-12">
                    <span className="text-purple-400">const</span>
                    <span className="text-foreground/80"> projects = </span>
                    <span className="text-purple-400">await</span>
                    <span className="text-foreground/80"> data.</span>
                    <span className="text-yellow-300">json</span>
                    <span className="text-foreground/80">()</span>
                    <span className="text-foreground/80">;</span>
                  </div>
                  <div className="code-line ml-12">
                    <span className="text-yellow-300">setProjects</span>
                    <span className="text-foreground/80">(projects)</span>
                    <span className="text-foreground/80">;</span>
                  </div>
                  <div className="code-line ml-8">
                    <span className="text-foreground/80">{"}"};</span>
                  </div>
                  <div className="code-line ml-8">
                    <span className="text-yellow-300">fetchProjects</span>
                    <span className="text-foreground/80">()</span>
                    <span className="text-foreground/80">;</span>
                  </div>
                  <div className="code-line ml-4">
                    <span className="text-foreground/80">{"}, []);"}</span>
                  </div>
                  <div className="code-line mt-2 ml-4">
                    <span className="text-purple-400">return</span>
                    <span className="text-foreground/80"> (</span>
                  </div>
                  <div className="code-line ml-8">
                    <span className="text-blue-400">{"<div "}</span>
                    <span className="text-green-400">className</span>
                    <span className="text-foreground/80">=</span>
                    <span className="text-yellow-300">
                      &ldquo;portfolio-container&ldquo;
                    </span>
                    <span className="text-blue-400">{">"}</span>
                  </div>
                  <div className="code-line ml-12 cursor-animation">
                    <span className="text-blue-400">{"<h1>"}</span>
                    <span className="text-foreground/80">My Projects</span>
                    <span className="text-blue-400">{"</h1>"}</span>
                  </div>
                </div>
              </div>

              <div
                className="tech-icon-mongodb absolute -top-4 -left-4 transform rotate-12 float-animation"
                style={{ animationDelay: "0.1s" }}
              >
                <Image
                  height={100}
                  width={100}
                  src="/images/hero-mongo.svg"
                  alt="MongoDB"
                  className="w-16 h-16 rounded-lg shadow-lg"
                />
              </div>

              <div
                className="tech-icon-express absolute top-20 -right-6 transform -rotate-6 float-animation"
                style={{ animationDelay: "0.3s" }}
              >
                <Image
                  height={100}
                  width={100}
                  src="/images/hero-next.png"
                  alt="Next.js"
                  className="w-16 h-16 rounded-lg shadow-lg"
                />
              </div>

              <div
                className="tech-icon-react absolute bottom-20 -left-8 transform rotate-6 float-animation"
                style={{ animationDelay: "0.5s" }}
              >
                <Image
                  height={100}
                  width={100}
                  src="/images/hero-react.png"
                  alt="React"
                  className="w-16 h-16 rounded-lg shadow-lg"
                />
              </div>

              <div
                className="tech-icon-node absolute -bottom-4 right-10 transform -rotate-12 float-animation"
                style={{ animationDelay: "0.7s" }}
              >
                <Image
                  height={100}
                  width={100}
                  src="/images/hero-node.png"
                  alt="Node.js"
                  className="w-16 h-16 rounded-lg shadow-lg"
                />
              </div>

              <div className="absolute -z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] rounded-full bg-gradient-to-br from-primary/10 to-secondary/10 blur-3xl pulse-slow"></div>

              <div className="absolute -z-10 top-1/2 left-1/2 transform w-[80%] h-[80%] border-2 border-dashed border-primary/20 rounded-full animate-spin-slow"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
