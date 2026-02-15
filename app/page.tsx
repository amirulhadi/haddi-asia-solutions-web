import { HeroSection } from '@/components/sections/HeroSection'
import { ProblemSection } from '@/components/sections/ProblemSection'
import { ServicesSection } from '@/components/sections/ServicesSection'
import { SignatureOfferSection } from '@/components/sections/SignatureOfferSection'
import { PortfolioSection } from '@/components/sections/PortfolioSection'
import { ExpertiseSection } from '@/components/sections/ExpertiseSection'
import { CTABanner } from '@/components/sections/CTABanner'

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <ProblemSection />
      <ServicesSection />
      <SignatureOfferSection />
      <PortfolioSection />
      <ExpertiseSection />
      <CTABanner />
    </main>
  )
}

