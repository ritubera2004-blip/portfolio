import { ScrollProgress } from "@/components/portfolio/scroll-progress";
import { Navbar } from "@/components/portfolio/navbar";
import { Hero } from "@/components/portfolio/hero";
import { About } from "@/components/portfolio/about";
import { Education } from "@/components/portfolio/education";
import { Silvat } from "@/components/portfolio/silvat";
import { Skills } from "@/components/portfolio/skills";
import { Certifications } from "@/components/portfolio/certifications";
import { CareerInterests } from "@/components/portfolio/career-interests";
import { Personality } from "@/components/portfolio/personality";
import { Contact } from "@/components/portfolio/contact";
import { Footer } from "@/components/portfolio/footer";
import { StructuredData } from "@/components/portfolio/structured-data";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <StructuredData />
      <ScrollProgress />
      <Navbar />
      <main className="flex-1">
        <Hero />
        <About />
        <Education />
        <Silvat />
        <Skills />
        <Certifications />
        <CareerInterests />
        <Personality />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
