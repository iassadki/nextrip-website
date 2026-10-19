import { FeaturesSection } from './sections/FeaturesSection'
import { HeroSection } from './sections/HeroSection'
import { ObjectivesSection } from './sections/ObjectivesSection'
import { PresentationSection } from './sections/PresentationSection'
import { ProblemSection } from './sections/ProblemSection'
import { SolutionSection } from './sections/SolutionSection'

export function LandingPage() {
  return (
    <>
      <HeroSection />
      <PresentationSection />
      <ProblemSection />
      <SolutionSection />
      <ObjectivesSection />
      <FeaturesSection />
    </>
  )
}
