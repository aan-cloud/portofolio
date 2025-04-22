import { Globe, Smartphone, Cpu } from "lucide-react"

export const projects = [
  {
    id: 1,
    title: "Trust - E-Commerce Platform",
    description: "A modern e-commerce platform built with React and Node.js. Features include product listings, cart functionality, user authentication, and payment processing.",
    image: "https://ucarecdn.com/295403de-bab1-45d6-a8a7-54bfd0b59197/BlueYellowMinimalistFastFoodBannerPromotion.png",
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
    image: "https://ucarecdn.com/00d4b066-9ac4-4115-88a5-b7755896b3fc/BrownandWhiteOrganicCafeFacebookCover.png",
    tags: ["React", "Firebase", "Tailwind", "Hono.js"],
    category: "web",
    icon: <Smartphone className="h-10 w-10 text-secondary" />,
    link: "https://github.com/checkcafe/checkcafe",
    live: "https://checkcafe.com"
  },
  {
    id: 3,
    title: "Watchall - Streaming film",
    description: "A streaming film platform designed using a robust microservices architecture and a complex streamlined system to ensure high performance and scalability. It offers features similar to Netflix, including seamless content delivery, personalized recommendations, and a highly efficient distribution network.",
    image: "https://ucarecdn.com/52777e04-28cf-425f-bd2c-013d1f660304/RedBlackModernBoldCinemaClubPresentation.png",
    tags: ["Kotlin", "Spring", "Junit", "AWS"],
    category: "mobile",
    icon: <Cpu className="h-10 w-10 text-accent" />,
    link: "https://github.com/aan-cloud/watchall"
  },
  {
    id: 4,
    title: "Cheffest - Simple Food App",
    description: " We craft delicious burgers with extra toppings and premium ingredients imported from New Zealand.",
    image: "https://ucarecdn.com/fbbdd175-70e0-407a-83af-7d34351c4251/BlackandYellowSimpleMinimalistBurgerPromotionBanner.png",
    tags: ["React Router", "Render", "Tailwind", "Hono.js"],
    category: "web",
    icon: <Smartphone className="h-10 w-10 text-secondary" />,
    link: "https://github.com/aan-cloud/cheffest-web",
    live: "https://cheffest-web.vercel.app/"
  },
]
