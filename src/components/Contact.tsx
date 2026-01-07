import { Phone, Mail, MapPin } from "lucide-react";
import { Button } from "./ui/button";

export const Contact = () => {
  return (
    <section id="contact" className="flex flex-col lg:flex-row min-h-[600px] border-b border-border">
      {/* Left Content */}
      <div className="lg:w-1/2 p-12 lg:p-24 flex flex-col justify-center bg-secondary relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full flex justify-between px-12 opacity-5 pointer-events-none h-full">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="h-full w-[1px] bg-foreground"></div>
          ))}
        </div>

        <h2 className="text-5xl md:text-7xl font-bold uppercase tracking-tighter text-accent mb-8 relative z-10 font-display">
          Kunjungi
          <br />
          Studio Kami
        </h2>
        <div className="space-y-6 mb-12 relative z-10">
          <p className="text-foreground text-lg font-light">
            Jl. Teuku Umar No.2, Tegal Besar Wetan,
            <br />
            Tegal Besar, Kec. Kaliwates, Jember
          </p>
          <div className="flex flex-col gap-2">
            <a
              href="tel:085604977129"
              className="text-muted-foreground hover:text-foreground transition-colors flex items-center gap-2 text-sm uppercase tracking-widest font-bold"
            >
              <Phone className="w-4 h-4" /> 0856-0497-7129
            </a>
            <a
              href="mailto:contact@newway.com"
              className="text-muted-foreground hover:text-foreground transition-colors flex items-center gap-2 text-sm uppercase tracking-widest font-bold"
            >
              <Mail className="w-4 h-4" /> contact@newway.com
            </a>
          </div>
        </div>

        <Button asChild variant="outline" className="w-max relative z-10">
          <a
            href="https://maps.google.com/?q=Jl.+Teuku+Umar+No.2,+Tegal+Besar+Wetan,+Tegal+Besar,+Kec.+Kaliwates,+Kabupaten+Jember,+Jawa+Timur+68131"
            target="_blank"
            rel="noopener noreferrer"
          >
            Petunjuk Arah
          </a>
        </Button>
      </div>

      {/* Right Map */}
      <div className="lg:w-1/2 relative bg-muted h-[500px] lg:h-auto overflow-hidden group">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3949.424155102559!2d113.6967663!3d-8.1819584!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd695f7c3275981%3A0x6331908b8964e59f!2sJl.%20Teuku%20Umar%20No.2%2C%20Tegal%20Besar%20Wetan%2C%20Tegal%20Besar%2C%20Kec.%20Kaliwates%2C%20Kabupaten%20Jember%2C%20Jawa%20Timur%2068131!5e0!3m2!1sen!2sid!4v1709228392102!5m2!1sen!2sid"
          width="100%"
          height="100%"
          style={{ border: 0, filter: "grayscale(100%) invert(92%) contrast(83%)" }}
          allowFullScreen
          loading="lazy"
          className="absolute inset-0 w-full h-full"
        />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 -mt-12 pointer-events-none">
          <div className="w-24 h-24 bg-accent rounded-full flex items-center justify-center animate-bounce shadow-xl">
            <MapPin className="w-8 h-8 text-accent-foreground fill-current" />
          </div>
        </div>
      </div>
    </section>
  );
};
