import { Globe } from "lucide-react"

export const projects = [
  {
    id: 1,
    title: "Trust - E-Commerce Platform",
    description: "A modern e-commerce platform built with React and Node.js. Features include product listings, cart functionality, user authentication, and payment processing.",
    image: "https://ucarecdn.com/0fd1126c-f11c-40e9-89e4-30b4ac08c66f/Screenshotfrom20250427005152.png",
    tags: ["React", "Node.js", "Postgresql", "Stripe"],
    category: "web",
    icon: <Globe className="h-10 w-10 text-primary" />,
    link: "https://github.com/aan-cloud/trust-frontend",
    live: "https://trust.muhammad-farhan.com"
  },
  {
    id: 2,
    title: "Checkcafe",
    description: "A productivity app for managing cafe. Users can create a place of cafe, set features, and track location using interactive map.",
    image: "https://ucarecdn.com/10ba08dc-5f4d-4978-a554-95ce8e2c384a/Screenshotfrom20250427005207.png",
    tags: ["React", "Firebase", "Tailwind", "Hono.js"],
    category: "web",
    icon: <Globe className="h-10 w-10 text-primary" />,
    link: "https://github.com/checkcafe/checkcafe",
    live: "https://checkcafe.com"
  },
  {
    id: 3,
    title: "Watchall - Streaming film",
    description: "A streaming film platform designed using a robust microservices architecture and a complex streamlined system to ensure high performance and scalability. It offers features similar to Netflix, including seamless content delivery, personalized recommendations, and a highly efficient distribution network.",
    image: "https://ucarecdn.com/52777e04-28cf-425f-bd2c-013d1f660304/RedBlackModernBoldCinemaClubPresentation.png",
    tags: ["Kotlin", "Spring", "Junit", "AWS"],
    category: "web",
    icon: <Globe className="h-10 w-10 text-primary" />,
    link: "https://github.com/aan-cloud/watchall"
  },
  {
    id: 4,
    title: "Cheffest - Simple Food App",
    description: " We craft delicious burgers with extra toppings and premium ingredients imported from New Zealand.",
    image: "https://ucarecdn.com/05b3ed45-c439-4a55-8e2c-2e02be8b85d4/Screenshotfrom20250427005232.png",
    tags: ["React Router", "Render", "Tailwind", "Hono.js"],
    category: "web",
    icon: <Globe className="h-10 w-10 text-primary" />,
    link: "https://github.com/aan-cloud/cheffest-web",
    live: "https://cheffest-web.vercel.app/"
  },
]
