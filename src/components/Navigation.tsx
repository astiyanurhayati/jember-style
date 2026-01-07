import { useState, useEffect } from "react";
import { Menu, CalendarCheck } from "lucide-react";
import { Button } from "./ui/button";

export const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-border/50 ${
        scrolled ? "bg-background/95 backdrop-blur-sm" : "bg-gradient-to-b from-background/90 to-transparent backdrop-blur-[2px]"
      }`}
    >
      <div className="flex h-20 max-w-[1500px] mx-auto px-6 items-center justify-between">        {/* Logo */}
        <a href="#" className="flex items-center gap-2 group">
          <img 
            src="/src/assets/logo.jpeg" 
            alt="New Way Hair Studio Logo" 
            className="w-8 h-8 object-contain rounded-sm group-hover:opacity-80 transition-opacity"
          />
          <span className="font-semibold text-lg tracking-tight uppercase font-display">
            New Way
            <span className="text-muted-foreground text-xs ml-1 font-normal normal-case hidden sm:inline-block font-body">
              Hair Studio
            </span>
          </span>
        </a>

        {/* Center Links */}
        <div className="hidden md:flex items-center gap-8 text-[11px] font-bold tracking-widest uppercase text-muted-foreground">
          <a href="#about" className="hover:text-foreground transition-colors">
            Studio
          </a>
          <a href="#services" className="hover:text-foreground transition-colors">
            Layanan
          </a>
          <a href="#gallery" className="hover:text-foreground transition-colors">
            Galeri
          </a>
          <a href="#contact" className="hover:text-foreground transition-colors">
            Kontak
          </a>
        </div>

        {/* Right Actions */}
        <div className="flex items-center gap-4">
          <Button asChild variant="default" size="sm" className="hidden sm:flex">
            <a href="tel:085604977129" className="gap-2">
              <CalendarCheck className="w-4 h-4" />
              BOOKING
            </a>
          </Button>
          <Button variant="outline" size="icon" className="md:hidden">
            <Menu className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </nav>
  );
};
