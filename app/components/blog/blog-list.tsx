import { BlogCard } from "./blog-card"
import { blogPosts } from "./blog-data"

export function BlogList() {
  return (
    <div className="grid grid-cols-1 gap-8 animate-fade-in">
      {blogPosts.map((post) => (
        <BlogCard key={post.id} {...post} />
      ))}
    </div>
  )
} 