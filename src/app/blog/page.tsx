"use client"

import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, Calendar, Search } from "lucide-react"
import Link from "next/link"
import { Input } from "@/components/ui/input"
import { useEffect, useState } from "react"
import { IBlog } from "@/types/types"
import Image from "next/image"


export default function BlogPage() {
  const [blogs, setBlogs] = useState<IBlog[]>([])

useEffect(() => {
  const fetchBlog = async () => {
    try{
      const response = await fetch("/blogs.json");
    const data = await response.json()
    setBlogs(data)
    }catch(error){
      console.log("No Blogs found", error)
    }
  }
  fetchBlog()
})

  
const categories = Array.from(new Set(blogs.map((post) => post.category)))

const tags = Array.from(new Set(blogs.flatMap((post) => post.tags)))
  
  return (
    <main className="min-h-screen bg-gradient-to-br from-background to-background/90 relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-violet-500/5 rounded-full blur-3xl" />

        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8884_1px,transparent_1px),linear-gradient(to_bottom,#8884_1px,transparent_1px)] bg-[size:50px_50px]" />

        <div className="stars absolute inset-0" />
      </div>

      <div className="relative z-10">
        <Navbar />

        <div className="section-container pt-32">
          <h1 className="text-4xl font-bold mb-8 text-center">Blog</h1>

          <div className="flex justify-center mb-12">
            <div className="relative w-full max-w-md">
              <Input type="text" placeholder="Search blog posts..." className="pl-10 bg-muted border-muted" />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-foreground/60" />
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            <div className="lg:col-span-3">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {blogs.map((post) => (
                  <Card
                    key={post.id}
                    className="overflow-hidden h-full flex flex-col hover:shadow-lg hover:shadow-primary/20 transition-all duration-300 hover:-translate-y-1"
                  >
                    <div className="relative overflow-hidden aspect-video">
                      <Image
                        width={1000}
                        height={500}
                        src={post.image}
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
                      <Button
                        asChild
                        variant="ghost"
                        className="justify-start p-0 hover:bg-transparent hover:text-primary"
                      >
                        <Link href={`/blog/${post.id}`}>
                          Read More <ArrowRight className="ml-1 h-4 w-4" />
                        </Link>
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            <div className="space-y-8">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4">Categories</h3>
                  <ul className="space-y-2">
                    {categories.map((category, index) => (
                      <li key={index}>
                        <Link
                          href={`/blog/category/${category.toLowerCase()}`}
                          className="text-foreground/80 hover:text-primary transition-colors"
                        >
                          {category}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4">Popular Tags</h3>
                  <div className="flex flex-wrap gap-2">
                    {tags.map((tag, index) => (
                      <Link
                        key={index}
                        href={`/blog/tag/${tag.toLowerCase()}`}
                        className="px-3 py-1 rounded-full text-xs font-medium bg-muted text-foreground/80 hover:bg-primary/10 hover:text-primary transition-colors"
                      >
                        {tag}
                      </Link>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4">Subscribe</h3>
                  <p className="text-foreground/70 mb-4">Get notified when I publish new blog posts.</p>
                  <div className="space-y-4">
                    <Input type="email" placeholder="Your email" className="bg-muted border-muted" />
                    <Button className="w-full bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-opacity">
                      Subscribe
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </main>
  )
}
