"use client"

import { Github, ExternalLink } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t border-neutral-800 py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <p className="text-neutral-400 text-sm mb-2">
              <strong className="text-red-400">Disclaimer:</strong> Use at your own risk. Always verify addresses before
              sending Bitcoin.
            </p>
            <p className="text-neutral-500 text-xs">
              This tool generates Bitcoin addresses locally in your browser. No data is transmitted to external servers.
            </p>
          </div>

          <div className="flex items-center gap-6">
            <a
              href="#"
              className="flex items-center gap-2 text-neutral-400 hover:text-[#F7931A] transition-colors"
              onClick={() => {
                window.open('https://github.com/Kakar21/bitcoin-address-generator', '_blank');
              }}
            >
              <Github className="w-5 h-5" />
              <span className="text-sm font-medium">GitHub</span>
            </a>

            <a
              href="#"
              className="flex items-center gap-2 text-neutral-400 hover:text-[#F7931A] transition-colors"
              onClick={() => {
                window.open('https://github.com/Kakar21/bitcoin-address-generator/blob/main/LICENSE', '_blank');
              }}
            >
              <ExternalLink className="w-4 h-4" />
              <span className="text-sm font-medium">MIT License</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
