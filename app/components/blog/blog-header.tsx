import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export function BlogHeader() {
  return (
    <div className="relative py-8 mb-12 animate-fade-in">
      <Link 
        href="/"
        className="inline-flex items-center text-[#2DD4BF] hover:text-[#3B82F6] transition-colors duration-300 mb-8 group"
      >
        <ArrowLeft className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform duration-300" />
        Back to Home
      </Link>

      <h1 className="text-center text-4xl md:text-5xl font-bold">
        <span className="inline-block bg-gradient-to-r from-[#2DD4BF] via-[#3B82F6] to-[#2DD4BF] bg-clip-text text-transparent 
          animate-gradient-x">
          Latest Crypto Insights
        </span>
      </h1>
      <p className="text-center mt-4 text-[#94A3B8] text-lg">
        Stay updated with the latest trends and developments in crypto
      </p>
      <div className="absolute -inset-1 bg-gradient-to-r from-[#2DD4BF]/20 via-[#3B82F6]/20 to-[#2DD4BF]/20 blur-3xl opacity-20 -z-10" />
    </div>
  )
} 