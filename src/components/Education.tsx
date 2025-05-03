"use client"

import { motion } from "framer-motion"
import { GraduationCap, Award, BookOpen } from "lucide-react"
import TimelineItem from "@/components/TimelineItem"

const educationData = [
  {
    degree: "Fazil (Pass)",
    institution: "Chhatak Jalalia Fazil Madrasah",
    location: "Chhatak, Shunamgonj, Bangladesh",
    period: "Completed",
    gpa: "3.83 GPA",
    field: "Degree",
    icon: <GraduationCap className="h-6 w-6" />,
  },
  {
    degree: "HSC",
    institution: "Hazrat Shahjalal D Y Kamil Madrasah",
    location: "Subhanighat, Sylhet, Bangladesh",
    period: "Completed",
    gpa: "4.19 GPA",
    field: "Science",
    icon: <BookOpen className="h-6 w-6" />,
  },
  {
    degree: "SSC",
    institution: "Chhatak Jalalia Fazil Madrasah",
    location: "Chhatak, Shunamgonj, Bangladesh",
    period: "Completed",
    gpa: "4.61 GPA",
    field: "Science",
    icon: <Award className="h-6 w-6" />,
  },
  {
    degree: "English Proficiency",
    institution: "IELTS",
    location: "",
    period: "Completed",
    gpa: "6.6 Score",
    field: "Language",
    icon: <BookOpen className="h-6 w-6" />,
  },
]

export default function Education() {
  return (
    <section id="education" className="py-16 md:py-24 relative">
      <div className="section-container">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="section-title"
        >
          Educational Background
        </motion.h2>

        <div className="space-y-6">
          {educationData.map((item, index) => (
            <TimelineItem
              key={index}
              title={item.degree}
              subtitle={item.institution}
              location={item.location}
              period={item.period}
              tags={[item.gpa, item.field]}
              icon={item.icon}
              delay={index * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
