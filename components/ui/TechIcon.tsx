import {
  SiNextdotjs,
  SiReact,
  SiTypescript,
  SiTailwindcss,
  SiNodedotjs,
  SiFramer,
} from "react-icons/si";

interface TechIconProps {
  tech: string;
}

export default function TechIcon({
  tech,
}: TechIconProps) {
  switch (tech) {
    case "Next.js":
      return <SiNextdotjs />;

    case "React":
      return <SiReact />;

    case "TypeScript":
      return <SiTypescript />;

    case "Tailwind CSS":
      return <SiTailwindcss />;

    case "Node.js":
      return <SiNodedotjs />;

    case "Framer Motion":
      return <SiFramer />;

    default:
      return null;
  }
}