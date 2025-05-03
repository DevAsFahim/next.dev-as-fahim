"use client"

import { motion } from "framer-motion"
import { Briefcase } from "lucide-react"
import TimelineItem from "@/components/TimelineItem"

const experienceData = [
  {
    position: "Next.js Developer",
    company: "Freelance",
    location: "Remote",
    period: "Sep 2024 - Present",
    description:
      "Working with Next.js to build modern, responsive web applications. Focusing on server-side rendering, static site generation, and API routes to create performant web experiences.",
    skills: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
  },
  {
    position: "Frontend Developer",
    company: "Besnik",
    location: "Sylhet, Bangladesh",
    period: "Feb 2023 - Mar 2024",
    description:
      "Worked with Vue.js and Nuxt in a Laravel environment to build responsive and interactive user interfaces. Collaborated with designers and backend developers to implement new features and improve existing ones.",
    skills: ["Vue.js", "Nuxt", "JavaScript", "Tailwind CSS", "Laravel"],
  },
  {
    position: "Junior Frontend Developer",
    company: "DelwarIT",
    location: "Sylhet, Bangladesh",
    period: "Dec 2021 - Apr 2022",
    description:
      "Started as an intern and was promoted to Junior Frontend Developer. Worked on various projects using HTML, CSS, React, and JavaScript. Gained experience in responsive design and frontend development best practices.",
    skills: ["HTML", "CSS", "React", "JavaScript", "Bootstrap"],
  },
]

export default function Experience() {
  return (
    <section id="experience" className="py-16 md:py-24 relative">
      <div className="section-container">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="section-title"
        >
          Work Experience
        </motion.h2>

        <div className="space-y-8">
          {experienceData.map((item, index) => (
            <TimelineItem
              key={index}
              title={item.position}
              subtitle={item.company}
              location={item.location}
              period={item.period}
              description={item.description}
              tags={item.skills}
              icon={<Briefcase className="h-6 w-6" />}
              delay={index * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
