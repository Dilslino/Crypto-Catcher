import Link from "next/link"
import { Card } from "@/components/ui/card"
import { CalendarDays, Clock } from "lucide-react"

interface BlogCardProps {
  id: string
  title: string
  excerpt: string
  date: string
  readTime: string
  category: string
}

export function BlogCard({ id, title, excerpt, date, readTime, category }: BlogCardProps) {
  return (
    <Link href={`/blog/${id}`}>
      <Card className="relative overflow-hidden bg-[#0F172A] border-[#2DD4BF]/30 border-2 rounded-xl p-4 sm:p-6 group hover:border-[#2DD4BF]/50 transition-all duration-500">
        <div className="absolute inset-0 bg-gradient-to-br from-[#1E293B] to-[#0F172A] opacity-50" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#2DD4BF] via-[#3B82F6] to-[#2DD4BF] opacity-0 group-hover:opacity-10 transition-opacity duration-700" />
        
        <div className="relative">
          <div className="flex flex-wrap items-center gap-2 text-sm text-[#94A3B8] mb-2">
            <span className="px-3 py-1 rounded-full bg-[#1E293B] text-[#2DD4BF]">
              {category}
            </span>
            <div className="flex items-center gap-1">
              <CalendarDays className="w-4 h-4" />
              {date}
            </div>
            <div className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              {readTime}
            </div>
          </div>
          
          <h2 className="text-xl sm:text-2xl font-bold text-[#E2E8F0] group-hover:text-[#2DD4BF] transition-colors duration-300 line-clamp-2">
            {title}
          </h2>
          
          <p className="mt-2 sm:mt-3 text-sm sm:text-base text-[#94A3B8] line-clamp-2">
            {excerpt}
          </p>
          
          <div className="mt-3 sm:mt-4 text-[#2DD4BF] font-medium group-hover:translate-x-2 transition-transform duration-300">
            Read more →
          </div>
        </div>
      </Card>
    </Link>
  )
} 