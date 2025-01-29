import { Card } from "@/components/ui/card"
import dynamic from 'next/dynamic'

const CryptoChart = dynamic(() => import('./crypto-chart'), {
  ssr: false,
  loading: () => (
    <div className="h-[60px] w-full mt-4 animate-pulse bg-[#1E293B] rounded" />
  )
})

async function getCryptoData(id: string) {
  try {
    // Simple price data
    const priceRes = await fetch(
      `https://api.coingecko.com/api/v3/simple/price?ids=${id}&vs_currencies=usd&include_24hr_change=true`,
      {
        next: { revalidate: 30 }, // Revalidate every 30 seconds
        headers: {
          'Accept': 'application/json',
        }
      }
    )

    if (!priceRes.ok) {
      throw new Error(`Price API error: ${priceRes.status}`)
    }

    const priceData = await priceRes.json()

    // Generate mock chart data since the chart API requires authentication
    const now = Date.now()
    const mockChartData = Array.from({ length: 24 }, (_, i) => {
      const timestamp = now - (23 - i) * 3600000 // Last 24 hours
      const basePrice = priceData[id].usd
      const randomChange = (Math.random() - 0.5) * 0.02 // ±1% variation
      const price = basePrice * (1 + randomChange)
      
      return {
        timestamp: new Date(timestamp).toISOString(),
        price,
      }
    })

    return {
      price: priceData[id],
      chart: mockChartData,
    }
  } catch (error) {
    console.error("Error fetching crypto data:", error)
    return null
  }
}

const CryptoLogos = {
  BTC: (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 32 32" width="32" height="32" {...props}>
      <g fill="none">
        <circle cx="16" cy="16" r="16" fill="#F7931A" />
        <path
          fill="#FFF"
          d="M23.2 14.2c.3-2.1-1.3-3.2-3.5-4l.7-2.8-1.7-.4-.7 2.8c-.4-.1-.9-.2-1.4-.3l.7-2.8-1.7-.4-.7 2.8c-.3-.1-.7-.2-1.1-.3l-2.4-.6-.5 1.9s1.3.3 1.3.3c.7.2.8.6.8 1l-.8 3.2c0 0 .1 0 .2.1l-.2-.1-1.1 4.5c-.1.2-.3.5-.8.4l-1.3-.3-.9 2 2.2.6c.4.1.8.2 1.2.3l-.7 2.9 1.7.4.7-2.8c.5.1.9.2 1.4.4l-.7 2.8 1.7.4.7-2.9c2.9.6 5.2.3 6.1-2.3.8-2.1 0-3.4-1.6-4.2 1.1-.2 2-1 2.2-2.5zm-4 5.5c-.5 2.1-4.1 1-5.3.7l.9-3.8c1.2.3 4.9.9 4.4 3.1zm.5-5.6c-.5 2-3.5 1-4.5.7l.9-3.5c1 .2 4.1.7 3.6 2.8z"
        />
      </g>
    </svg>
  ),
  ETH: (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 32 32" width="32" height="32" {...props}>
      <g fill="none">
        <circle cx="16" cy="16" r="16" fill="#627EEA" />
        <g fill="#FFF" fillRule="nonzero">
          <path fillOpacity=".6" d="M16.5 4v8.9l7.5 3.3z" />
          <path d="M16.5 4L9 16.2l7.5-3.3z" />
          <path fillOpacity=".6" d="M16.5 22v6L24 17.6z" />
          <path d="M16.5 28v-6L9 17.6z" />
          <path fillOpacity=".2" d="M16.5 20.6l7.5-4.4-7.5-3.3z" />
          <path fillOpacity=".6" d="M9 16.2l7.5 4.4v-7.7z" />
        </g>
      </g>
    </svg>
  ),
  BNB: (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 32 32" width="32" height="32" {...props}>
      <g fill="none">
        <circle cx="16" cy="16" r="16" fill="#F3BA2F" />
        <path
          fill="#FFF"
          d="M12.116 14.404L16 10.52l3.886 3.886 2.26-2.26L16 6l-6.144 6.144 2.26 2.26zM6 16l2.26-2.26L10.52 16l-2.26 2.26L6 16zm6.116 1.596L16 21.48l3.886-3.886 2.26 2.259L16 26l-6.144-6.144-.003-.003 2.263-2.257zM21.48 16l2.26-2.26L26 16l-2.26 2.26L21.48 16zm-3.188-.002h.002V16L16 18.294l-2.291-2.29-.004-.004.004-.003.401-.402.195-.195L16 13.706l2.293 2.293z"
        />
      </g>
    </svg>
  ),
}

const CHART_COLORS = {
  BTC: "#F7931A",
  ETH: "#627EEA",
  BNB: "#F3BA2F",
}

export default async function CryptoPrice({
  id,
  name,
  symbol,
}: {
  id: string
  name: string
  symbol: string
}) {
  const data = await getCryptoData(id)
  const Logo = CryptoLogos[symbol as keyof typeof CryptoLogos]
  const chartColor = CHART_COLORS[symbol as keyof typeof CHART_COLORS]

  if (!data) {
    return (
      <Card className="relative overflow-hidden bg-[#0F172A] border-[#2DD4BF]/30 border-2 rounded-xl p-6 group animate-fade-in">
        <div className="absolute inset-0 bg-gradient-to-br from-[#1E293B] to-[#0F172A] opacity-50" />
        <div className="relative">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              {Logo && <Logo className="w-8 h-8" />}
              <div>
                <h2 className="text-xl font-bold text-[#2DD4BF]">{name}</h2>
                <span className="text-sm font-medium text-[#94A3B8]">{symbol}</span>
              </div>
            </div>
          </div>
          <div className="text-xl font-bold mb-2 text-[#94A3B8]">Data unavailable</div>
          <div className="text-sm text-yellow-400/80">Unable to fetch price data</div>
        </div>
      </Card>
    )
  }

  const price = data.price.usd
  const change = data.price.usd_24h_change

  return (
    <Card className="relative overflow-hidden bg-[#0F172A] border-[#2DD4BF]/30 border-2 rounded-xl p-6 group hover:border-[#2DD4BF]/50 transition-all duration-500 animate-fade-in">
      <div className="absolute inset-0 bg-gradient-to-br from-[#1E293B] to-[#0F172A] opacity-50" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#2DD4BF] via-[#3B82F6] to-[#2DD4BF] opacity-10 group-hover:opacity-20 transition-opacity duration-700" />
      
      <div className="relative">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            {Logo && <Logo className="w-8 h-8" />}
            <div>
              <h2 className="text-xl font-bold text-[#2DD4BF]">{name}</h2>
              <span className="text-sm font-medium text-[#94A3B8]">{symbol}</span>
            </div>
          </div>
        </div>
        
        <div className="space-y-2">
          <div className="text-3xl font-bold text-[#E2E8F0]">
            ${price.toLocaleString()}
          </div>
          <div className={`flex items-center text-sm font-medium ${
            change >= 0 ? "text-emerald-400" : "text-red-400"
          }`}>
            <span className="mr-1">{change >= 0 ? "▲" : "▼"}</span>
            {Math.abs(change).toFixed(2)}%
          </div>
        </div>

        <CryptoChart 
          symbol={symbol}
          data={data.chart}
          color={chartColor}
        />
      </div>
    </Card>
  )
}

