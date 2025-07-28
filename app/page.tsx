import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { ResultCard } from "@/components/result-card"
import { InfoSection } from "@/components/info-section"
import { Footer } from "@/components/footer"

export default function Page() {
  return (
    <div className="min-h-screen bg-[#111827] text-neutral-200">
      <Header />
      <main>
        <Hero />
        <ResultCard />
        <InfoSection />
      </main>
      <Footer />
    </div>
  )
}
