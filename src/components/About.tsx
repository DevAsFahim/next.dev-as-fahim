"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Download } from "lucide-react"
import myImg from '@/images/me.png'
import Image from "next/image"

export default function About() {
  return (
    <section id="about" className="py-16 md:py-24 relative">
      <div className="section-container">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="section-title"
        >
          About Me
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative"
          >
            <div className="w-full h-80 md:h-96 rounded-lg overflow-hidden">
              <div className="w-full h-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                <Image
                  src={myImg}
                  width={256}
                  height={256}
                  alt="Profile"
                  className="w-64 h-64 object-cover rounded-full border-4 border-background"
                />
              </div>
            </div>
            <div className="absolute -bottom-6 -right-6 bg-card p-4 rounded-lg shadow-lg border border-[#aaa]">
              <p className="text-lg font-bold">3+ Years</p>
              <p className="text-sm text-foreground/70">Experience</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h3 className="text-2xl font-bold mb-4">
              MERN Stack Developer with a passion for creating exceptional web experiences
            </h3>
            <p className="text-foreground/80 mb-6">
              I am a dedicated web developer with over 3 years of experience in the web development sector. My journey
              in tech has equipped me with a strong foundation in JavaScript and its ecosystem, particularly the MERN
              stack (MongoDB, Express.js, React, Node.js).
            </p>
            <p className="text-foreground/80 mb-6">
              I specialize in building responsive, user-friendly applications that deliver exceptional user experiences.
              My approach combines technical expertise with creative problem-solving to develop solutions that meet both
              user needs and business objectives.
            </p>
            <p className="text-foreground/80 mb-8">
              When I'm not coding, I enjoy staying updated with the latest tech trends, contributing to open-source
              projects, and sharing my knowledge through my blog.
            </p>

            <Button asChild variant="outline" className="border-primary hover:bg-primary/10">
              <a target="_blank" href="https://drive.google.com/file/d/1Fp2ns3k96wpAZFY5-EVZAQ2hmGmIDvRc/view?pli=1" download>
                Download Resume <Download className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
