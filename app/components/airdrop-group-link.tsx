import Link from "next/link"

export default function AirdropGroupLink() {
  return (
    <div className="text-center my-12 animate-fade-in">
      <Link
        href="https://chat.whatsapp.com/DmSKtLW0ZH4IHlPh78H0xl"
        className="relative inline-flex items-center px-8 py-4 rounded-full group overflow-hidden"
      >
        <span className="absolute inset-0 bg-gradient-to-r from-[#2DD4BF] via-[#3B82F6] to-[#2DD4BF] opacity-70 group-hover:opacity-100 transition-opacity duration-500"></span>
        <span className="absolute inset-0 bg-gradient-to-r from-[#2DD4BF] via-[#3B82F6] to-[#2DD4BF] opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500"></span>
        <span className="relative text-lg font-semibold text-white">
          Join Our Whatsapp Group Crypto Catcher
        </span>
      </Link>
    </div>
  )
}

