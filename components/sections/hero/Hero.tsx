import Container from "@/components/layout/Container";

import HeroContent from "./HeroContent";
import HeroVisual from "./HeroVisual";

export default function Hero() {
  return (
    <section id="home" className="scroll-mt-28 py-24 lg:py-15">
      <Container>
        <div className="
              grid
              min-w-0
              items-start
              gap-16
              lg:min-h-screen
              lg:items-center
              lg:grid-cols-[1.15fr_0.85fr]
            ">
          <div className="min-w-0">
            <HeroContent />
          </div>

          <div className="min-w-0">
            <HeroVisual />
          </div>
        </div>
      </Container>
    </section>
  );
}