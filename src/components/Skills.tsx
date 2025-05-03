"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Code, Database, Layout, Server, Sparkles, Layers } from "lucide-react"

const skillCategories = [
  {
    name: "Frontend",
    icon: <Layout className="h-6 w-6" />,
    skills: ["JavaScript", "React", "Vue.js", "Next.js", "Nuxt", "HTML", "CSS", "SCSS", "Tailwind CSS", "Bootstrap"],
  },
  {
    name: "Backend",
    icon: <Server className="h-6 w-6" />,
    skills: ["Node.js", "Next.js API Routes", "RESTful APIs", "Authentication", "Authorization"],
  },
  {
    name: "Database",
    icon: <Database className="h-6 w-6" />,
    skills: ["MongoDB", "Mongoose", "Firebase"],
  },
  {
    name: "Tools & Others",
    icon: <Sparkles className="h-6 w-6" />,
    skills: ["Git", "GitHub", "VS Code", "Responsive Design", "Performance Optimization"],
  },
  {
    name: "Languages",
    icon: <Code className="h-6 w-6" />,
    skills: ["JavaScript", "TypeScript", "HTML", "CSS"],
  },
  {
    name: "Soft Skills",
    icon: <Layers className="h-6 w-6" />,
    skills: ["English Communication", "Leadership", "Problem Solving", "Team Collaboration", "Time Management"],
  },
]

export default function Skills() {
  return (
    <section id="skills" className="py-16 md:py-24 relative">
      <div className="section-container">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="section-title"
        >
          Skills & Expertise
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full border-border hover:border-primary/50 transition-colors duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="mr-3 rounded-full bg-primary/10 p-2 text-primary">{category.icon}</div>
                    <h3 className="text-xl font-bold">{category.name}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.span
                        key={skillIndex}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: 0.1 + skillIndex * 0.05 }}
                        className="skill-badge"
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
