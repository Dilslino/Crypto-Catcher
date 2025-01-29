'use client'

import { Moon, Sun, BookText } from "lucide-react"
import Link from "next/link"

export function HeaderButtons() {
  return (
    <div className="fixed top-4 right-4 flex gap-2">
      {/* Blog Button */}
      <Link
        href="/blog"
        className="p-2 rounded-full bg-[#1E293B] border border-[#2DD4BF]/30 hover:border-[#2DD4BF]/50 transition-all duration-300 group"
      >
        <BookText className="h-5 w-5 text-[#2DD4BF] group-hover:scale-110 transition-transform duration-300" />
        <span className="sr-only">Blog</span>
      </Link>

      {/* Theme Toggle Button */}
      <button className="p-2 rounded-full bg-[#1E293B] border border-[#2DD4BF]/30 hover:border-[#2DD4BF]/50 transition-all duration-300">
        <Sun className="h-5 w-5 text-[#2DD4BF] hidden dark:block" />
        <Moon className="h-5 w-5 text-[#2DD4BF] block dark:hidden" />
        <span className="sr-only">Toggle theme</span>
      </button>
    </div>
  )
} 