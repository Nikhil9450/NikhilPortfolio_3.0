import Container from "@/components/layout/Container";

import HeroContent from "./HeroContent";
import HeroVisual from "./HeroVisual";

export default function Hero() {
  return (
    <section  id="home">
      <Container>
        <div className="grid min-h-screen items-center gap-16 lg:grid-cols-[1.15fr_0.85fr]">
          <HeroContent />
          <HeroVisual />
        </div>
      </Container>
    </section>
  );
}