import { Scissors } from "lucide-react";
import { Button } from "./ui/button";
import heroBg from "@/assets/bg.jpeg";

export const Hero = () => {
  return (
    <header
      id="home"
      className="min-h-screen flex flex-col overflow-hidden bg-background w-full pt-20 relative items-center justify-center"
    >
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroBg}
          alt="New Way Hair Studio Interior"
          className="w-full h-full object-cover opacity-40 grayscale contrast-125"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-transparent to-background"></div>
        <div className="grainy-texture absolute inset-0 opacity-20 mix-blend-overlay"></div>
      </div>

      {/* Content */}
      <div className="z-20 flex flex-col text-center w-full max-w-6xl mx-auto px-6 relative items-center">
        {/* Icon */}
        <div className="opacity-90 mb-8 text-accent">
          <Scissors className="w-12 h-12" />
        </div>

        <h1 className="text-5xl md:text-8xl lg:text-9xl uppercase leading-[0.85] font-semibold text-foreground tracking-tighter mb-8 font-display">
          Your Fresh Look
          <br />
          Starts Here
        </h1>

        <p className="max-w-xl mx-auto text-muted-foreground text-sm md:text-base leading-relaxed mb-10 font-light">
          Fresh. Modern. Confident. We are the premier hair studio in Jember offering professional cuts, styling, and
          coloring to bring out the best version of you.{" "}
          <span className="font-semibold text-foreground">Step inside.</span>
        </p>

        <div className="flex flex-col sm:flex-row gap-4">
          <Button asChild variant="default" size="lg">
            <a href="#services">Explore Services</a>
          </Button>
          <Button asChild variant="outline" size="lg">
            <a href="https://wa.me/6285604977129">WhatsApp Booking</a>
          </Button>
        </div>
      </div>

      {/* Bottom Left Widget */}
      <div className="absolute bottom-12 left-6 md:left-12 z-20 hidden md:block">
        <div className="flex border border-border bg-card/60 backdrop-blur-md max-w-xs">
          <div className="p-4 flex flex-col justify-center min-w-[200px]">
            <div className="flex justify-between items-center text-[9px] uppercase tracking-widest text-muted-foreground mb-2 border-b border-border pb-2">
              <span>Status</span>
              <span className="text-accent animate-pulse">● Live</span>
            </div>
            <div className="flex justify-between items-center text-[10px] uppercase font-mono text-foreground">
              <span>Open Today</span>
              <span>09:00 - 21:00</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
