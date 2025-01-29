export default function Title() {
  return (
    <div className="relative py-8 mb-12 animate-fade-in">
      <h1 className="text-center text-5xl md:text-6xl font-bold">
        <span className="inline-block bg-gradient-to-r from-[#2DD4BF] via-[#3B82F6] to-[#2DD4BF] bg-clip-text text-transparent 
          animate-gradient-x hover:scale-105 transition-transform duration-500">
          Crypto Catcher
        </span>
      </h1>
      <div className="absolute -inset-1 bg-gradient-to-r from-[#2DD4BF]/20 via-[#3B82F6]/20 to-[#2DD4BF]/20 blur-3xl opacity-20 -z-10" />
    </div>
  )
} 