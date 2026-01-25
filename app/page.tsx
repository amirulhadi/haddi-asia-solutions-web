import Hero from '@/components/Hero'
import ExecutiveSummary from '@/components/ExecutiveSummary'
import MissionVision from '@/components/MissionVision'
import Services from '@/components/Services'
import ValueProposition from '@/components/ValueProposition'
import TechnologyStack from '@/components/TechnologyStack'
import CaseStudies from '@/components/CaseStudies'
import ContactCTA from '@/components/ContactCTA'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <ExecutiveSummary />
      <MissionVision />
      <Services />
      <ValueProposition />
      <TechnologyStack />
      <CaseStudies />
      <ContactCTA />
    </main>
  )
}

