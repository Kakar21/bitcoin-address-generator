"use client"

import { Bitcoin } from "lucide-react"
import { Switch } from "@/components/ui/switch"
import { useState } from "react"

export function Header() {
  const [isDark, setIsDark] = useState(true)

  const handleThemeToggle = (checked: boolean) => {
    setIsDark(checked)
    // TODO: Implement actual theme switching logic
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#111827]/80 backdrop-blur-sm border-b border-neutral-800">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full border-2 border-[#F7931A] flex items-center justify-center">
            <Bitcoin className="w-4 h-4 text-[#F7931A]" />
          </div>
          <span className="font-semibold tracking-tight text-neutral-100">Bitcoin Address Generator</span>
        </div>

        <div className="flex items-center gap-2">
          <span className="text-sm text-neutral-400">Dark</span>
          <Switch checked={isDark} onCheckedChange={handleThemeToggle} className="data-[state=checked]:bg-[#F7931A]" />
          <span className="text-sm text-neutral-400">Light</span>
        </div>
      </div>
    </header>
  )
}
