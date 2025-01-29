import Image from "next/image"
import { Github, Instagram, Linkedin } from "lucide-react"
import Link from "next/link"

export default function Profile() {
  return (
    <div className="relative overflow-hidden bg-[#0F172A] border-[#2DD4BF]/30 border-2 rounded-xl p-8 mt-12 mb-8 group">
      {/* Gradient Background Effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#1E293B] to-[#0F172A] opacity-50" />
      
      {/* Animated Gradient Border */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#2DD4BF] via-[#3B82F6] to-[#2DD4BF] opacity-20 group-hover:opacity-30 transition-opacity duration-700" />
      
      <div className="relative flex flex-col items-center space-y-6 animate-fade-in">
        {/* Profile Image Container */}
        <div className="relative group/image">
          {/* Glow Effect */}
          <div className="absolute -inset-1 bg-gradient-to-r from-[#2DD4BF] to-[#3B82F6] rounded-full blur-md opacity-25 group-hover/image:opacity-50 transition-all duration-700" />
          
          {/* Image */}
          <div className="relative">
            <Image
              src="https://i.imgur.com/OEXmBOx.jpg"
              alt="Fadil Muhammad"
              width={130}
              height={130}
              className="rounded-full border-3 border-[#2DD4BF]/50 group-hover/image:border-[#2DD4BF] transition-all duration-500 object-cover transform group-hover/image:scale-105"
              style={{
                objectPosition: '50% 25%'
              }}
            />
            
            {/* Shine Effect */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-transparent via-white/10 to-transparent opacity-0 group-hover/image:opacity-100 transition-opacity duration-700" />
          </div>
        </div>
        
        {/* Text Content */}
        <div className="text-center space-y-3">
          <h2 className="text-3xl font-bold bg-gradient-to-r from-[#2DD4BF] to-[#3B82F6] bg-clip-text text-transparent hover:to-[#2DD4BF] transition-all duration-500">
            Fadil Muhammad
          </h2>
          <p className="text-[#94A3B8] text-lg font-medium tracking-wide">
            Crypto and Web3 enthusiast
          </p>
          
          {/* Social Links */}
          <div className="flex justify-center gap-6 pt-4">
            {[
              { icon: Instagram, href: "https://www.instagram.com/fadiill.mhmmd", label: "Instagram" },
              { icon: Linkedin, href: "https://www.linkedin.com/", label: "LinkedIn" },
              { icon: Github, href: "https://github.com/dilslino", label: "GitHub" }
            ].map((social, index) => (
              <Link
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group/icon relative p-2"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-[#2DD4BF]/20 to-[#3B82F6]/20 rounded-lg opacity-0 group-hover/icon:opacity-100 transition-all duration-300" />
                <social.icon className="w-6 h-6 text-[#94A3B8] group-hover/icon:text-[#2DD4BF] transition-all duration-300 transform group-hover/icon:scale-110" />
                <span className="sr-only">{social.label}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

// Tambahkan ini di globals.css
// @keyframes fade-in {
//   from { opacity: 0; transform: translateY(20px); }
//   to { opacity: 1; transform: translateY(0); }
// }
// .animate-fade-in {
//   animation: fade-in 0.6s ease-out forwards;
// }

