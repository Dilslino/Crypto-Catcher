import { blogPosts } from "@/app/components/blog/blog-data"
import { CalendarDays, Clock, ArrowLeft } from "lucide-react"
import Link from "next/link"
import Markdown from "react-markdown"

export default function BlogPost({ params }: { params: { id: string } }) {
  const post = blogPosts.find((p) => p.id === params.id)

  if (!post) {
    return <div>Post not found</div>
  }

  return (
    <main className="min-h-screen bg-[#0F172A] px-4 py-6 sm:p-8">
      <div className="container mx-auto max-w-3xl">
        <Link 
          href="/blog"
          className="inline-flex items-center text-[#2DD4BF] hover:text-[#3B82F6] transition-colors duration-300 mb-6 sm:mb-8 group"
        >
          <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform duration-300" />
          Back to blog
        </Link>

        <article className="relative overflow-hidden bg-[#1E293B]/50 rounded-xl p-4 sm:p-8 border-2 border-[#2DD4BF]/20">
          {/* Gradient Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#1E293B]/50 to-[#0F172A]/50 opacity-50" />
          
          {/* Content */}
          <div className="relative">
            {/* Metadata */}
            <div className="flex flex-wrap items-center gap-3 text-sm text-[#94A3B8] mb-4 sm:mb-6">
              <span className="px-3 py-1 rounded-full bg-[#2DD4BF]/10 text-[#2DD4BF] border border-[#2DD4BF]/20">
                {post.category}
              </span>
              <div className="flex items-center gap-1">
                <CalendarDays className="w-4 h-4" />
                {post.date}
              </div>
              <div className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                {post.readTime}
              </div>
            </div>

            {/* Title */}
            <h1 className="text-2xl sm:text-4xl font-bold bg-gradient-to-r from-[#2DD4BF] to-[#3B82F6] bg-clip-text text-transparent mb-6 sm:mb-8 leading-tight">
              {post.title}
            </h1>

            {/* Content */}
            <div className="prose prose-sm sm:prose-lg prose-invert max-w-none overflow-x-hidden">
              <Markdown
                components={{
                  h2: ({ children }) => (
                    <h2 className="text-xl sm:text-3xl font-bold text-[#2DD4BF] mt-8 sm:mt-12 mb-4 sm:mb-6 leading-tight">
                      {children}
                    </h2>
                  ),
                  h3: ({ children }) => (
                    <h3 className="text-lg sm:text-2xl font-semibold text-[#3B82F6] mt-6 sm:mt-8 mb-3 sm:mb-4">
                      {children}
                    </h3>
                  ),
                  p: ({ children }) => (
                    <p className="text-base sm:text-lg text-[#E2E8F0] leading-relaxed mb-4 sm:mb-6 font-normal break-words">
                      {children}
                    </p>
                  ),
                  ul: ({ children }) => (
                    <ul className="space-y-2 sm:space-y-3 my-4 sm:my-6 ml-4 sm:ml-6">
                      {children}
                    </ul>
                  ),
                  li: ({ children }) => (
                    <li className="text-[#94A3B8] flex items-start text-base sm:text-lg break-words">
                      <span className="text-[#2DD4BF] mr-2 sm:mr-3 font-bold">•</span>
                      <span className="flex-1">{children}</span>
                    </li>
                  ),
                  strong: ({ children }) => (
                    <strong className="font-semibold text-[#2DD4BF] break-words">
                      {children}
                    </strong>
                  ),
                  a: ({ children, href }) => (
                    <a 
                      href={href}
                      className="text-[#3B82F6] hover:text-[#2DD4BF] transition-colors duration-300 underline underline-offset-4 break-words"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {children}
                    </a>
                  ),
                  blockquote: ({ children }) => (
                    <blockquote className="border-l-4 border-[#2DD4BF] pl-4 sm:pl-6 my-4 sm:my-6 italic text-[#94A3B8] break-words">
                      {children}
                    </blockquote>
                  ),
                  code: ({ children }) => (
                    <code className="bg-[#1E293B] text-[#2DD4BF] px-1.5 py-0.5 rounded-md font-mono text-sm break-words">
                      {children}
                    </code>
                  ),
                }}
              >
                {post.content}
              </Markdown>
            </div>
          </div>
        </article>
      </div>
    </main>
  )
} 