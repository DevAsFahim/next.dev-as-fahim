"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, Calendar, User, Tag } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { IBlog } from "@/types/types";
import Image from "next/image";
import { useParams } from "next/navigation";

const BlogDetails = () => {
  const [blogs, setBlogs] = useState<IBlog[]>([]);

  useState(() => {
    const fetchBlog = async () => {
      try {
        const response = await fetch("/blogs.json");
        const data = await response.json();
        setBlogs(data);
      } catch (error) {
        console.log("No Blogs found", error);
      }
    };
    fetchBlog();
  });

  const params = useParams();
  const id = typeof params.id === "string" ? Number(params.id) : params.id;

  const post = blogs.find((b) => b.id === id);

  if (!post) {
    return (
      <main className="min-h-screen bg-gradient-to-br from-background to-background/90 relative overflow-hidden">
        <Navbar />
        <div className="section-container pt-32 text-center">
          <h1 className="text-4xl font-bold mb-8">Blog Post Not Found</h1>
          <Button asChild>
            <Link href="/blog">
              <ArrowLeft className="mr-2 h-4 w-4" /> Back to Blog
            </Link>
          </Button>
        </div>
        <Footer />
      </main>
    );
  }

  return (
    <div>
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
            <Button asChild variant="outline" className="mb-8">
              <Link href="/blog">
                <ArrowLeft className="mr-2 h-4 w-4" /> Back to Blog
              </Link>
            </Button>

            <div className="max-w-4xl mx-auto">
              <div className="mb-8">
                <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
                <div className="flex flex-wrap items-center gap-4 text-foreground/60 text-sm mb-6">
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-1" />
                    {post.date}
                  </div>
                  <div className="flex items-center">
                    <User className="h-4 w-4 mr-1" />
                    {post.author}
                  </div>
                  <div className="flex items-center">
                    <Tag className="h-4 w-4 mr-1" />
                    {post.category}
                  </div>
                </div>
                <div className="relative overflow-hidden rounded-lg aspect-video mb-8">
                  <Image
                    width={1000}
                    height={500}
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div
                  className="prose prose-invert max-w-none"
                  dangerouslySetInnerHTML={{ __html: post.content }}
                />
              </div>

              <div className="mt-12 pt-8 border-t border-border">
                <h3 className="text-2xl font-bold mb-4">Tags</h3>
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag, index) => (
                    <Link
                      key={index}
                      href={`/blog/tag/${tag.toLowerCase()}`}
                      className="px-3 py-1 rounded-full text-sm font-medium bg-muted text-foreground/80 hover:bg-primary/10 hover:text-primary transition-colors"
                    >
                      {tag}
                    </Link>
                  ))}
                </div>
              </div>

              <div className="mt-12 pt-8 border-t border-border">
                <h3 className="text-2xl font-bold mb-6">Leave a Comment</h3>
                <Card>
                  <CardContent className="p-6">
                    <form className="space-y-4">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <input
                            type="text"
                            placeholder="Your Name"
                            className="w-full px-4 py-2 rounded-md bg-muted border border-muted focus:outline-none focus:ring-2 focus:ring-primary"
                          />
                        </div>
                        <div>
                          <input
                            type="email"
                            placeholder="Your Email"
                            className="w-full px-4 py-2 rounded-md bg-muted border border-muted focus:outline-none focus:ring-2 focus:ring-primary"
                          />
                        </div>
                      </div>
                      <div>
                        <textarea
                          placeholder="Your Comment"
                          rows={6}
                          className="w-full px-4 py-2 rounded-md bg-muted border border-muted focus:outline-none focus:ring-2 focus:ring-primary"
                        ></textarea>
                      </div>
                      <Button className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-opacity">
                        Submit Comment
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>

          <Footer />
        </div>
      </main>
    </div>
  );
};

export default BlogDetails;
