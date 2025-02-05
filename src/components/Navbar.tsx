import { Button } from "@/components/ui/button";

const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center space-x-8">
          <span className="text-xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            EduInsight AI
          </span>
          <div className="hidden md:flex space-x-6">
            <a href="#features" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Features
            </a>
            <a href="#how-it-works" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              How it Works
            </a>
            <a href="#stats" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Stats
            </a>
          </div>
        </div>
        <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
          Get Started
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;