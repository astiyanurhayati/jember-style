import { Instagram, Facebook, Twitter, ArrowRight } from "lucide-react";
import { Button } from "./ui/button";

export const Footer = () => {
  return (
    <footer className="bg-secondary pt-24 pb-12 border-t border-border text-muted-foreground">
      <div className="max-w-[1500px] mx-auto px-6 md:px-12">
        {/* Newsletter Row */}
        <div className="flex flex-col lg:flex-row justify-between items-end mb-20 border-b border-border pb-16">
          <div className="mb-8 lg:mb-0">
            <h3 className="text-3xl font-bold text-foreground uppercase tracking-tight mb-2 font-display">
              Booking Sekarang
            </h3>
            <p className="text-sm max-w-md">Siap untuk tampilan baru? Booking langsung via WhatsApp untuk respon tercepat.</p>
          </div>
          <div className="w-full lg:w-auto">
            <Button asChild variant="default" size="lg">
              <a href="https://wa.me/6285604977129" className="gap-2">
                Booking via WhatsApp <ArrowRight className="w-4 h-4" />
              </a>
            </Button>
          </div>
        </div>

        {/* Links Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-12 mb-24">
          <div className="col-span-2 lg:col-span-2">
            <a href="#" className="flex items-center gap-2 mb-6 opacity-80">
              <div className="w-6 h-6 bg-foreground text-background flex items-center justify-center font-bold text-sm rounded-sm">
                N
              </div>
              <span className="font-bold text-xl tracking-tight text-foreground uppercase font-display">NEW WAY</span>
            </a>
            <p className="text-xs uppercase tracking-wide leading-relaxed max-w-xs">
              Mendefinisikan gaya di Jember sejak 2023. <br />
              Potongan presisi, warna berani, tampilan abadi.
            </p>
          </div>

          <div>
            <h4 className="text-foreground text-[11px] font-bold uppercase tracking-widest mb-6">Jelajahi</h4>
            <ul className="space-y-3 text-[11px] uppercase tracking-wide">
              <li>
                <a href="#home" className="hover:text-foreground transition-colors">
                  Beranda
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-foreground transition-colors">
                  Tentang
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-foreground transition-colors">
                  Layanan
                </a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-foreground transition-colors">
                  Galeri
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-foreground text-[11px] font-bold uppercase tracking-widest mb-6">Layanan</h4>
            <ul className="space-y-3 text-[11px] uppercase tracking-wide">
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  Potong Rambut
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  Pewarnaan
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  Perming
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  Styling
                </a>
              </li>
            </ul>
          </div>

          <div className="col-span-2 lg:col-span-2">
            <h4 className="text-foreground text-[11px] font-bold uppercase tracking-widest mb-6">Sosial Media</h4>
            <div className="flex gap-4">
              <a href="https://instagram.com/NEW_WAY.JBR" className="hover:text-foreground transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-foreground transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-foreground transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center text-[10px] uppercase font-mono text-muted-foreground/60 border-t border-border pt-8">
          <div className="flex items-center gap-4 mb-4 md:mb-0">
            <span>New Way Hair Studio © 2024</span>
          </div>

          <div className="flex gap-6">
            <a href="#" className="hover:text-muted-foreground transition-colors">
              Kebijakan Privasi
            </a>
            <a href="#" className="hover:text-muted-foreground transition-colors">
              Syarat Layanan
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
