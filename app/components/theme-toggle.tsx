'use client'

import { Moon, Sun } from "lucide-react"

export function ThemeToggle() {
  return (
    <button
      className="fixed top-4 right-4 p-2 rounded-full bg-[#1E293B] border border-[#2DD4BF]/30 hover:border-[#2DD4BF]/50 transition-all duration-300"
    >
      <Sun className="h-5 w-5 text-[#2DD4BF] hidden dark:block" />
      <Moon className="h-5 w-5 text-[#2DD4BF] block dark:hidden" />
      <span className="sr-only">Toggle theme</span>
    </button>
  )
} 