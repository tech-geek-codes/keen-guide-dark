
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center space-x-8">
          <Link to="/" className="text-xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            EduInsight AI
          </Link>
          <div className="hidden md:flex space-x-6">
            <Link to="/" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Home
            </Link>
            <a href="#features" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Features
            </a>
            <Link to="/tests" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Tests
            </Link>
            <Link to="/predictions" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Predictions
            </Link>
          </div>
        </div>
        <Link to="/login">
          <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
            Login
          </Button>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
