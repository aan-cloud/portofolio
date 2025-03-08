import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Code,
  Database,
  PenTool,
  Server,
  Layers,
  Terminal,
  GitBranch,
  Cpu
} from "lucide-react";

const skills = {
  frontend: [
    { name: "React", level: 95, icon: <Code className="h-6 w-6" />, color: "bg-blue-500" },
    { name: "TypeScript", level: 90, icon: <Code className="h-6 w-6" />, color: "bg-blue-700" },
    { name: "Next.js", level: 85, icon: <Code className="h-6 w-6" />, color: "bg-black" },
    { name: "Tailwind CSS", level: 95, icon: <Code className="h-6 w-6" />, color: "bg-cyan-500" },
    { name: "HTML/CSS", level: 98, icon: <Code className="h-6 w-6" />, color: "bg-orange-500" },
    { name: "JavaScript", level: 95, icon: <Code className="h-6 w-6" />, color: "bg-yellow-500" },
    { name: "Redux", level: 85, icon: <Code className="h-6 w-6" />, color: "bg-purple-500" },
    { name: "GraphQL (Client)", level: 80, icon: <Code className="h-6 w-6" />, color: "bg-pink-600" },
  ],
  backend: [
    { name: "Node.js", level: 90, icon: <Server className="h-6 w-6" />, color: "bg-green-600" },
    { name: "Express", level: 85, icon: <Server className="h-6 w-6" />, color: "bg-gray-600" },
    { name: "MongoDB", level: 80, icon: <Database className="h-6 w-6" />, color: "bg-green-500" },
    { name: "PostgreSQL", level: 75, icon: <Database className="h-6 w-6" />, color: "bg-blue-600" },
    { name: "GraphQL (Server)", level: 80, icon: <Server className="h-6 w-6" />, color: "bg-pink-600" },
    { name: "REST API Design", level: 90, icon: <Layers className="h-6 w-6" />, color: "bg-indigo-500" },
    { name: "Firebase", level: 85, icon: <Database className="h-6 w-6" />, color: "bg-yellow-600" },
    { name: "AWS", level: 70, icon: <Server className="h-6 w-6" />, color: "bg-orange-600" },
  ],
  tools: [
    { name: "Git", level: 95, icon: <GitBranch className="h-6 w-6" />, color: "bg-red-500" },
    { name: "Docker", level: 80, icon: <Layers className="h-6 w-6" />, color: "bg-blue-600" },
    { name: "Webpack", level: 75, icon: <Layers className="h-6 w-6" />, color: "bg-blue-400" },
    { name: "Vite", level: 85, icon: <Terminal className="h-6 w-6" />, color: "bg-purple-600" },
    { name: "Jest", level: 80, icon: <Terminal className="h-6 w-6" />, color: "bg-red-600" },
    { name: "GitHub Actions", level: 75, icon: <GitBranch className="h-6 w-6" />, color: "bg-gray-700" },
    { name: "VS Code", level: 95, icon: <Terminal className="h-6 w-6" />, color: "bg-blue-500" },
    { name: "Figma", level: 80, icon: <PenTool className="h-6 w-6" />, color: "bg-purple-500" },
  ],
  other: [
    { name: "UI/UX Design", level: 85, icon: <PenTool className="h-6 w-6" />, color: "bg-pink-500" },
    { name: "Responsive Design", level: 95, icon: <Layers className="h-6 w-6" />, color: "bg-teal-500" },
    { name: "Performance Optimization", level: 85, icon: <Cpu className="h-6 w-6" />, color: "bg-green-600" },
    { name: "Accessibility", level: 80, icon: <Layers className="h-6 w-6" />, color: "bg-blue-500" },
    { name: "SEO", level: 75, icon: <Layers className="h-6 w-6" />, color: "bg-orange-500" },
    { name: "Technical Writing", level: 85, icon: <Terminal className="h-6 w-6" />, color: "bg-gray-600" },
    { name: "Agile/Scrum", level: 90, icon: <Layers className="h-6 w-6" />, color: "bg-blue-700" },
    { name: "Problem Solving", level: 95, icon: <Cpu className="h-6 w-6" />, color: "bg-red-500" },
  ]
};

export function SkillsPage() {
  return (
    <div className="flex sm:flex-col flex-col sm:px-20 px-4 py-12 space-y-8">
      <div className="space-y-2">
        <h1 className="text-4xl font-bold tracking-tight">My Skills</h1>
        <p className="text-muted-foreground">
          A comprehensive overview of my technical skills and expertise.
        </p>
      </div>

      <Tabs defaultValue="frontend" className="space-y-8">
        <TabsList className="grid grid-cols-2 md:grid-cols-4 w-full h-fit">
          <TabsTrigger value="frontend">Frontend</TabsTrigger>
          <TabsTrigger value="backend">Backend</TabsTrigger>
          <TabsTrigger value="tools">Tools</TabsTrigger>
          <TabsTrigger value="other">Other</TabsTrigger>
        </TabsList>

        {Object.entries(skills).map(([category, skillList]) => (
          <TabsContent key={category} value={category} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {skillList.map((skill, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 * index, duration: 0.5 }}
                >
                  <Card className="h-full">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-3 mb-4">
                        <div className={`${skill.color} p-2 rounded-md text-white`}>
                          {skill.icon}
                        </div>
                        <div>
                          <h3 className="font-medium">{skill.name}</h3>
                          <p className="text-sm text-muted-foreground">{skill.level}%</p>
                        </div>
                      </div>
                      <Progress value={skill.level} className="h-2" />
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </TabsContent>
        ))}
      </Tabs>

      <div className="space-y-6">
        <h2 className="text-2xl font-bold tracking-tight">Education & Certifications</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2">Bachelor of Science in Computer Science</h3>
              <p className="text-muted-foreground">Asian Cyber University, 2024-2027</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2">AWS Certified Developer</h3>
              <p className="text-muted-foreground">Amazon Web Services, 2024</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2">Professional Scrum Master I</h3>
              <p className="text-muted-foreground">Scrum.org, 2025</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2">Google UX Design Certificate</h3>
              <p className="text-muted-foreground">Google, 2023</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}