export const projectsData = {
  label: "PROJECTS",

  title: "Selected work",

  description:
    "A few projects where I explored product design, frontend engineering, and modern web architecture.",

  projects: [
    {
        number: "01",
        title: "NailArt Portfolio",

        description:
            "A premium portfolio experience designed for a nail artist, focused on visual presentation, smooth interactions, and a polished browsing experience.",

        technologies: [
            "Next.js",
            "TypeScript",
            "Tailwind CSS",
            "Framer Motion",
        ],

        category: "Portfolio",

        image: "/projects/nailart.png",
        liveUrl: "https://blushandbloomnails.vercel.app/",
        githubUrl: "https://github.com/Nikhil9450/NailArt_Portfolio.git",
        featured: true,
    },
    {
        number: "02",
        title: "Meal Mastermind",
        description:
            "A recipe discovery platform that helps users search, save, and manage recipes with authentication, filtering, and personalized favorites.",

        technologies: [
            "React",
            "Redux Toolkit",
            "Firebase",
            "Spoonacular API",
        ],
        image: "/projects/mealmastermind.png",
        category: "Web Application",
        liveUrl: "https://mealmastermind-4e4c7.web.app",
        githubUrl: "https://github.com/Nikhil9450/Meal_Mastermind",
        featured: false,
    },

    {
        number: "03",
        title: "Splitwise Clone",
        description:
            "A full-stack expense management application for creating groups, tracking shared expenses, splitting costs, and keeping balances between members.",

        technologies: [
            "MongoDB",
            "Express",
            "React",
            "Node.js",
        ],
        image: "/projects/splitwise.png",
        category: " MERN Full Stack Application",

        liveUrl: "https://splitwise0-2.vercel.app/signin",
        githubUrl: "https://github.com/Nikhil9450/Splitwise0.2",
        featured: false,
    },
  ],
};