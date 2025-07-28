"use client"

import { Button } from "@/components/ui/button"
import { useState } from "react"

interface HeroProps {
  onGenerate?: () => void
}

export function Hero({ onGenerate }: HeroProps) {
  const [isGenerating, setIsGenerating] = useState(false)

  const handleGenerate = async () => {
    setIsGenerating(true)
    // TODO: Implement actual address generation logic
    setTimeout(() => {
      setIsGenerating(false)
      onGenerate?.()
    }, 1000)
  }

  return (
    <section className="min-h-screen flex items-center justify-center px-4 pt-16">
      <div className="text-center max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-neutral-100 mb-6">
          Generate a fresh <span className="text-[#F7931A]">Bitcoin address</span> in one click.
        </h1>

        <p className="text-xl md:text-2xl text-neutral-300 mb-12 max-w-2xl mx-auto leading-relaxed">
          Runs entirely in your browser. Keys never leave your device.
        </p>

        <Button
          size="lg"
          onClick={handleGenerate}
          disabled={isGenerating}
          className="bg-[#F7931A] hover:bg-[#F7931A]/90 text-black font-semibold px-8 py-4 text-lg rounded-2xl shadow-lg hover:shadow-xl transition-all duration-200 focus:ring-2 focus:ring-[#F7931A] focus:ring-offset-2 focus:ring-offset-[#111827]"
        >
          {isGenerating ? "Generating..." : "Generate Address"}
        </Button>
      </div>
    </section>
  )
}
