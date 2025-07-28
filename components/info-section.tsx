import { Shield, Code, Github } from "lucide-react"

export function InfoSection() {
  return (
    <section className="px-4 py-20">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="flex justify-center">
            <div className="relative">
              <div className="w-80 h-80 rounded-full bg-gradient-to-br from-[#F7931A]/20 to-[#F7931A]/5 flex items-center justify-center">
                <div className="w-64 h-64 rounded-full bg-gradient-to-br from-[#F7931A]/30 to-[#F7931A]/10 flex items-center justify-center">
                  <div className="w-48 h-48 rounded-full bg-[#F7931A]/20 flex items-center justify-center">
                    <svg className="w-24 h-24 text-[#F7931A]" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23.638 14.904c-1.602 6.43-8.113 10.34-14.542 8.736C2.67 22.05-1.244 15.525.362 9.105 1.962 2.67 8.475-1.243 14.9.358c6.43 1.605 10.342 8.115 8.738 14.546z" />
                      <path
                        fill="#111827"
                        d="M17.45 11.35c.2-1.4-.85-2.15-2.3-2.65l.47-1.88-1.15-.29-.46 1.83c-.3-.075-.61-.145-.92-.22l.46-1.85-1.15-.29-.47 1.88c-.25-.06-.49-.11-.73-.17l0-.01-1.59-.4-.31 1.23s.85.195.83.21c.46.115.55.42.53.66l-.53 2.12c.03.008.07.02.11.038l-.11-.028-.74 2.96c-.06.14-.2.35-.52.27.01.015-.83-.21-.83-.21l-.58 1.32 1.5.375c.28.07.55.143.82.21l-.48 1.91 1.15.29.47-1.88c.31.085.61.16.9.23l-.47 1.87 1.15.29.48-1.9c1.98.375 3.47.22 4.1-1.57.5-1.44-.025-2.27-1.07-2.81.76-.18 1.33-.68 1.48-1.72zm-2.65 3.72c-.36 1.44-2.8.66-3.59.47l.64-2.57c.79.2 3.33.59 2.95 2.1zm.36-3.74c-.33 1.31-2.37.64-3.03.48l.58-2.33c.66.165 2.8.47 2.45 1.85z"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <div>
              <h2 className="text-4xl font-bold tracking-tight text-neutral-100 mb-6">Secure & Open Source</h2>
              <p className="text-xl text-neutral-300 leading-relaxed">
                Built with security and transparency in mind. Your keys are generated using cryptographically secure
                randomness and never leave your browser.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#F7931A]/10 flex items-center justify-center flex-shrink-0">
                  <Shield className="w-6 h-6 text-[#F7931A]" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-neutral-100 mb-2">Client-side entropy</h3>
                  <p className="text-neutral-400">
                    All randomness is generated in your browser using secure cryptographic functions.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#F7931A]/10 flex items-center justify-center flex-shrink-0">
                  <Code className="w-6 h-6 text-[#F7931A]" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-neutral-100 mb-2">bitcoinjs-lib under the hood</h3>
                  <p className="text-neutral-400">
                    Powered by the most trusted Bitcoin JavaScript library in the ecosystem.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#F7931A]/10 flex items-center justify-center flex-shrink-0">
                  <Github className="w-6 h-6 text-[#F7931A]" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-neutral-100 mb-2">100% open source</h3>
                  <p className="text-neutral-400">
                    Inspect the code, verify the implementation, and contribute to the project.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
