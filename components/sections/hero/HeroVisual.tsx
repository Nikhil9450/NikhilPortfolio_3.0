import AnimatedGlow from "./AnimatedGlow";
import DeveloperCard from "./developer-card/DeveloperCard";

export default function HeroVisual() {
  return (
    <div className="relative flex items-center justify-center">
      <AnimatedGlow />

      <DeveloperCard />
    </div>
  );
}