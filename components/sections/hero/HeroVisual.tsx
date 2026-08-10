import AnimatedGlow from "./AnimatedGlow";
import DeveloperWorkspace from "./developerWorkspace/DeveloperWorkspace";
export default function HeroVisual() {
  return (
<div className="relative flex items-center justify-center py-10 lg:py-0">
  <AnimatedGlow />
  <DeveloperWorkspace />
</div>
  );
}