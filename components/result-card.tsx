"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Copy, ChevronDown, ChevronUp, AlertTriangle } from "lucide-react"
import { Alert, AlertDescription } from "@/components/ui/alert"

export function ResultCard() {
  const [isVisible, setIsVisible] = useState(false)
  const [showPrivateKey, setShowPrivateKey] = useState(false)
  const [copied, setCopied] = useState(false)

  // TODO: Replace with actual generated address
  const dummyAddress = "bc1qxy2kgdygjrsqtzq2n0yrf2493p83kkfjhx0wlh"
  const dummyPrivateKey = "L1aW4aubDFB7yfras2S1mN3bqg9nwySY8nkoLmJebSLD5BWv3ENZ"

  const handleCopy = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      // TODO: Handle clipboard error
      console.error("Failed to copy:", err)
    }
  }

  const handleAddressClick = () => {
    const textarea = document.getElementById("address-textarea") as HTMLTextAreaElement
    textarea?.select()
  }

  if (!isVisible) {
    // TODO: Show this card when generate button is clicked
    return null
  }

  return (
    <section className="px-4 py-12">
      <div className="max-w-2xl mx-auto">
        <div className="bg-neutral-900/50 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-neutral-800">
          <h2 className="text-2xl font-semibold text-neutral-100 mb-6 tracking-tight">Your new address</h2>

          <div className="space-y-4">
            <div className="relative">
              <Textarea
                id="address-textarea"
                value={dummyAddress}
                readOnly
                onClick={handleAddressClick}
                className="font-mono text-lg bg-neutral-800 border-neutral-700 text-neutral-100 resize-none cursor-pointer focus:ring-2 focus:ring-[#F7931A] focus:border-transparent rounded-xl"
                rows={2}
              />
              <Button
                size="sm"
                variant="ghost"
                onClick={() => handleCopy(dummyAddress)}
                className="absolute top-2 right-2 text-neutral-400 hover:text-[#F7931A] hover:bg-neutral-700"
              >
                <Copy className="w-4 h-4" />
              </Button>
            </div>

            {copied && <p className="text-sm text-[#F7931A] font-medium">Copied to clipboard!</p>}

            <div className="border-t border-neutral-800 pt-6">
              <Button
                variant="ghost"
                onClick={() => setShowPrivateKey(!showPrivateKey)}
                className="flex items-center gap-2 text-neutral-300 hover:text-neutral-100 p-0 h-auto font-medium"
              >
                {showPrivateKey ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                Show private key (WIF)
              </Button>

              {showPrivateKey && (
                <div className="mt-4 space-y-4">
                  <Alert className="border-red-500/50 bg-red-500/10">
                    <AlertTriangle className="h-4 w-4 text-red-500" />
                    <AlertDescription className="text-red-200">
                      <strong>Warning:</strong> Never share your private key with anyone. Anyone with access to this key
                      can spend your Bitcoin.
                    </AlertDescription>
                  </Alert>

                  <div className="relative">
                    <Textarea
                      value={dummyPrivateKey}
                      readOnly
                      className="font-mono text-sm bg-neutral-800 border-neutral-700 text-neutral-100 resize-none cursor-pointer focus:ring-2 focus:ring-[#F7931A] focus:border-transparent rounded-xl"
                      rows={2}
                      onClick={(e) => (e.target as HTMLTextAreaElement).select()}
                    />
                    <Button
                      size="sm"
                      variant="ghost"
                      onClick={() => handleCopy(dummyPrivateKey)}
                      className="absolute top-2 right-2 text-neutral-400 hover:text-[#F7931A] hover:bg-neutral-700"
                    >
                      <Copy className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
