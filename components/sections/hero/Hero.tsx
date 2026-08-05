import Container from "@/components/layout/Container";

import HeroContent from "./HeroContent";
import HeroVisual from "./HeroVisual";

export default function Hero() {
  return (
    <section  id="home">
      <Container>
        <div className="grid min-h-screen items-center gap-16 lg:grid-cols-2">
          <HeroContent />
          <HeroVisual />
        </div>
      </Container>
    </section>
  );
}