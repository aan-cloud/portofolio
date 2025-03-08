import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  ArrowRight, 
  Globe, 
  Smartphone, 
  Cpu,
} from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Trust - E-Commerce Platform",
    description: "A modern e-commerce platform built with React and Node.js. Features include product listings, cart functionality, user authentication, and payment processing.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    tags: ["React", "Node.js", "Postgresql", "Stripe"],
    category: "web",
    icon: <Globe className="h-10 w-10 text-primary" />,
    link: "https://github.com/aan-cloud/trust-frontend"
  },
  {
    id: 2,
    title: "Checkcafe",
    description: "A productivity app for managing cafe. Users can create a place of cafe, set features, and track location using interactive map.",
    image: "https://www.proofhub.com/articles/wp-content/uploads/2020/02/Best-Task-Management-App-%E2%80%93-Keep-Your-Business-On-Track.jpg",
    tags: ["React", "Firebase", "Tailwind"],
    category: "web",
    icon: <Smartphone className="h-10 w-10 text-secondary" />,
    link: "https://github.com/checkcafe/checkcafe"
  },
  {
    id: 3,
    title: "Watchall - Streaming film",
    description: "A streaming film platform designed using a robust microservices architecture and a complex streamlined system to ensure high performance and scalability. It offers features similar to Netflix, including seamless content delivery, personalized recommendations, and a highly efficient distribution network. ",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8mq2cnidNUr0thrOpFo-bh1p_fCrLmxzXVQ&s",
    tags: ["Kotlin", "Spring", "Junit", "AWS"],
    category: "mobile",
    icon: <Cpu className="h-10 w-10 text-accent" />,
    link: "https://github.com/aan-cloud/watchall"
  },
];

export function ProjectsPage() {
  return (
    <div className="flex flex-row sm:flex-col sm:px-20 px-4 py-12 space-y-8">
      <div className="space-y-2">
        <h1 className="text-4xl font-bold tracking-tight">My Projects</h1>
        <p className="text-muted-foreground">
          A collection of my work across various domains and technologies.
        </p>
      </div>

      <Tabs defaultValue="all" className="space-y-8">
        <TabsList className="grid grid-cols-2 md:grid-cols-6 w-full">
          <TabsTrigger value="all">All</TabsTrigger>
          <TabsTrigger value="web">Web</TabsTrigger>
          <TabsTrigger value="mobile">Mobile</TabsTrigger>
          <TabsTrigger value="ai">AI</TabsTrigger>
          <TabsTrigger value="design">Design</TabsTrigger>
          <TabsTrigger value="backend">Backend</TabsTrigger>
        </TabsList>

        {["all", "web", "mobile", "ai", "design", "backend"].map((category) => (
          <TabsContent key={category} value={category} className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects
                .filter((project) => category === "all" || project.category === category)
                .map((project, index) => (
                  <motion.div
                    key={project.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 * index, duration: 0.5 }}
                  >
                    <Card className="overflow-hidden h-full glow">
                      <div className="relative h-48 w-full">
                        <img
                          src={project.image}
                          alt={project.title}
                          className="h-full w-full object-cover"
                        />
                        <div className="absolute top-4 right-4 bg-background/80 backdrop-blur-sm p-2 rounded-full">
                          {project.icon}
                        </div>
                      </div>
                      <CardContent className="p-6">
                        <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                        <p className="text-muted-foreground mb-4 line-clamp-3">{project.description}</p>
                        <div className="flex flex-wrap gap-2 mb-4">
                          {project.tags.map((tag, i) => (
                            <Badge key={i} variant="secondary">{tag}</Badge>
                          ))}
                        </div>
                        <Button asChild variant="outline" className="w-full">
                          <a href={project.link} target="_blank" rel="noopener noreferrer">
                            View Project
                            <ArrowRight className="ml-2 h-4 w-4" />
                          </a>
                        </Button>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
}