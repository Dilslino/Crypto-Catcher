import { BlogList } from "../components/blog/blog-list"
import { BlogHeader } from "../components/blog/blog-header"

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-[#0F172A] p-4">
      <div className="container mx-auto max-w-4xl">
        <BlogHeader />
        <BlogList />
      </div>
    </main>
  )
} 