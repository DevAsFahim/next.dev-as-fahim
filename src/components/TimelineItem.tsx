"use client"

import type React from "react"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"

interface TimelineItemProps {
  title: string
  subtitle: string
  location?: string
  period: string
  description?: string
  tags?: string[]
  icon?: React.ReactNode
  delay?: number
}

export default function TimelineItem({
  title,
  subtitle,
  location,
  period,
  description,
  tags,
  icon,
  delay = 0,
}: TimelineItemProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="mb-8"
    >
      <Card className="overflow-hidden border border-border hover:border-primary/50 transition-colors duration-300">
        <CardContent className="p-6">
          <div className="flex flex-col md:flex-row md:items-start gap-4">
            {icon && <div className="flex-shrink-0 rounded-full bg-primary/10 p-4 text-primary w-14">{icon}</div>}
            <div className="flex-grow">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                <h3 className="text-xl font-bold">{title}</h3>
                <div className="flex items-center text-sm text-foreground/60 mt-2 md:mt-0">{period}</div>
              </div>
              <p className="text-foreground/80 mt-1">
                {subtitle}
                {location && `, ${location}`}
              </p>
              {description && <p className="mt-4 text-foreground/70">{description}</p>}
              {tags && tags.length > 0 && (
                <div className="mt-4 flex flex-wrap gap-2">
                  {tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="inline-flex items-center rounded-full bg-muted px-3 py-1 text-xs font-medium text-foreground/80 hover:bg-primary/10 hover:text-primary transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}
