import { Suspense } from "react"
import CryptoPrice from "./components/crypto-price"
import Profile from "./components/profile"
import AirdropGroupLink from "./components/airdrop-group-link"
import Title from "./components/title"
import { AnimatedSection } from "./components/animated-section"

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0F172A] p-4">
      <div className="container mx-auto max-w-4xl">
        <Title />
        <Suspense fallback={
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 animate-pulse">
            {[1, 2, 3].map((i) => (
              <div key={i} className="h-40 bg-[#1E293B] rounded-xl" />
            ))}
          </div>
        }>
          <AnimatedSection>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              <CryptoPrice id="bitcoin" name="Bitcoin" symbol="BTC" />
              <CryptoPrice id="ethereum" name="Ethereum" symbol="ETH" />
              <CryptoPrice id="binancecoin" name="Binance Coin" symbol="BNB" />
            </div>
          </AnimatedSection>
        </Suspense>
        <AnimatedSection>
          <AirdropGroupLink />
        </AnimatedSection>
        <AnimatedSection>
          <Profile />
        </AnimatedSection>
      </div>
    </main>
  )
}

