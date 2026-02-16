import { HeroSection } from "@/components/hero-section"
import { StorySection } from "@/components/story-section"
import { PotionsSection } from "@/components/potions-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { ValuesSection } from "@/components/values-section"
import { CtaSection } from "@/components/cta-section"
import { Footer } from "@/components/footer"
import { Navbar } from "@/components/navbar"

export default function Page() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <StorySection />
      <PotionsSection />
      <TestimonialsSection />
      <ValuesSection />
      <CtaSection />
      <Footer />
    </main>
  )
}
