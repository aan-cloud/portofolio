import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";
import { Menu, X, Code, Briefcase, User, Mail } from "lucide-react";

const navItems = [
  { path: "/", label: "Home", icon: <User className="h-4 w-4 mr-2" /> },
  { path: "/projects", label: "Projects", icon: <Briefcase className="h-4 w-4 mr-2" /> },
  { path: "/skills", label: "Skills", icon: <Code className="h-4 w-4 mr-2" /> },
  { path: "/contact", label: "Contact", icon: <Mail className="h-4 w-4 mr-2" /> },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="sticky top-0 sm:px-20 px-4 z-50 w-full border-b bg-background/80 backdrop-blur-md">
      <div className="container flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <span className="text-xl font-bold tracking-tight text-gradient">Farhan</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex md:items-center md:gap-6">
          <div className="flex gap-4">
            {navItems.map((item) => (
              <Link key={item.path} to={item.path}>
                <Button
                  variant={location.pathname === item.path ? "default" : "ghost"}
                  className={cn(
                    "transition-all duration-200",
                    location.pathname === item.path && "rgb-border"
                  )}
                >
                  {item.icon}
                  {item.label}
                </Button>
              </Link>
            ))}
            <ThemeToggle />
          </div>
        </div>

        {/* Mobile Navigation Toggle */}
        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="container pb-4 md:hidden">
          <div className="flex flex-col gap-2">
            {navItems.map((item) => (
              <Link key={item.path} to={item.path} onClick={() => setIsOpen(false)}>
                <Button
                  variant={location.pathname === item.path ? "default" : "ghost"}
                  className="w-full justify-start"
                >
                  {item.icon}
                  {item.label}
                </Button>
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
