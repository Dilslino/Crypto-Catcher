'use client'

import { Line, LineChart, ResponsiveContainer, Tooltip } from "recharts"

interface CryptoChartProps {
  symbol: string
  data: { price: number; timestamp: string }[]
  color: string
}

export default function CryptoChart({ symbol, data, color }: CryptoChartProps) {
  return (
    <div className="h-[60px] w-full mt-4">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data}>
          <Line
            type="monotone"
            dataKey="price"
            stroke={color}
            strokeWidth={2}
            dot={false}
            isAnimationActive={true}
            animationDuration={1000}
          />
          <Tooltip
            content={({ active, payload }) => {
              if (active && payload && payload.length) {
                return (
                  <div className="rounded-lg border border-[#2DD4BF]/20 bg-[#0F172A] p-2 shadow-md">
                    <p className="text-[#E2E8F0] font-medium">
                      ${payload[0].value?.toLocaleString()}
                    </p>
                    <p className="text-[#94A3B8] text-xs">
                      {new Date(payload[0].payload.timestamp).toLocaleString()}
                    </p>
                  </div>
                )
              }
              return null
            }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
} 