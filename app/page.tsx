import Hero from "@/components/sections/hero/Hero";
import About from "@/components/sections/about/About";
import Experience from "@/components/sections/experience/Experience";
import Projects from "@/components/sections/projects/Projects";
import Contact from "@/components/sections/contact/Contact";
import Footer from "@/components/sections/footer/Footer";
export default function HomePage() {
  return (
    <main>
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Contact />
      <Footer />
    </main>
  );
}