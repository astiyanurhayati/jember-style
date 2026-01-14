import { useState } from "react";
import { Button } from "./ui/button";
import vid1 from "@/assets/vid1.mp4";

const services = [
  { name: "Paket Basic", description: "Konsultasi, Potong Rambut, Hairtonic, Styling", price: "35k", label: "POPULER" },
  { name: "Downperm + Rootlift", description: "Tampilan sleek, tanpa volume samping", price: "150k", label: "TRENDING" },
  { name: "Full Color Fashion", description: "Warna Vibrant & Fashion", price: "300k", label: "PREMIUM" },
  { name: "Hairlight Color", description: "Teknik Highlight", price: "300k", label: "FAVORIT" },
  { name: "CORNROW", description: "Teknik Highlight", price: "300k", label: "FAVORIT" },
  { name: "CORNROW EXTENSION", description: "Teknik Highlight", price: "400k", label: "FAVORIT" },
  { name: "PERMING", description: "Teknik Highlight", price: "200k", label: "FAVORIT" },
];

const featuredDefault = { 
  name: "Paket Regular", 
  description: "Pengalaman grooming lengkap: Konsultasi, Potong Rambut, Cuci, Hairtonic, Styling, dan Minuman segar.", 
  price: "35k",
  label: "BEST SELLER"
};

// Nomor WhatsApp bisnis (ganti dengan nomor yang sebenarnya)
const WHATSAPP_NUMBER = "6285604977129";

export const Services = () => {
  const [featuredService, setFeaturedService] = useState(featuredDefault);

  const handleWhatsAppBooking = (service: typeof featuredService) => {
    const message = `Halo, saya tertarik untuk booking *${service.name}* dengan harga ${service.price}.%0A%0ALayanan: ${service.description}%0A%0AMohon informasi jadwal yang tersedia. Terima kasih!`;
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleServiceClick = (service: typeof services[0]) => {
    setFeaturedService(service);
  };

  return (
    <section className="flex flex-col lg:flex-row min-h-[800px] border-b border-border">
      {/* List Side */}
      <div className="lg:w-1/2 bg-secondary">
        {/* Featured Item */}
        <div className="bg-accent text-accent-foreground p-12 flex flex-col justify-between min-h-[350px] transition-all duration-500">
          <div className="flex justify-between items-start mb-12">
            <span className="font-mono text-xs">{featuredService.label}</span>
            <div className="space-y-2">
              {[...Array(3)].map((_, i) => (
                <div key={i} className="w-4 h-[1px] bg-current"></div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-5xl md:text-6xl font-bold uppercase tracking-tighter mb-4 font-display">
              {featuredService.name}
            </h3>
            <p className="text-sm font-medium leading-relaxed max-w-md opacity-80 mb-6">
              {featuredService.description}
            </p>
            <div className="flex items-center justify-between border-t border-current/20 pt-6">
              <span className="text-3xl font-bold font-display">{featuredService.price}</span>
              <Button 
                variant="outline" 
                size="sm"
                onClick={() => handleWhatsAppBooking(featuredService)}
              >
                Booking
              </Button>
            </div>
          </div>
        </div>


 <div className="border-b border-border p-6 flex items-center justify-between hover:bg-muted/50 cursor-pointer transition-colors group
          ">
            <div className="flex flex-col gap-1">
              <span className="font-bold text-lg uppercase tracking-tight text-foreground group-hover:text-accent font-display">
              START FROM
              </span>
            </div>
          </div>

        {services.map((service, idx) => (
          <div
            key={idx}
            onClick={() => handleServiceClick(service)}
            className={`border-b border-border p-6 flex items-center justify-between hover:bg-muted/50 cursor-pointer transition-colors group ${
              featuredService.name === service.name 
                ? 'bg-accent/10 text-foreground' 
                : 'text-muted-foreground hover:text-foreground'
            }`}
          >
            <div className="flex flex-col gap-1">
              <span className="font-bold text-lg uppercase tracking-tight text-foreground group-hover:text-accent font-display">
                {service.name}
              </span>
              <span className="text-[10px] uppercase tracking-widest opacity-60">{service.description}</span>
            </div>
            <span className="font-mono text-lg text-foreground">{service.price}</span>
          </div>
        ))}

        <div className="p-6 flex items-center justify-between hover:bg-muted/50 cursor-pointer text-muted-foreground hover:text-foreground transition-colors">
          <div className="flex items-center gap-8">
            <span className="font-mono text-xs">**</span>
            <span className="font-mono text-sm uppercase tracking-widest">Lihat Semua Layanan →</span>
          </div>
        </div>
      </div>      {/* Video Side */}
      <div className="lg:w-1/2 bg-background min-h-[400px] lg:min-h-full relative overflow-hidden group">        <video
          src={vid1}
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover grayscale opacity-60 transition-transform duration-700 group-hover:scale-105"
          style={{ objectPosition: "center 75%" }}
        />
        <div className="absolute bottom-12 left-12">
          <div className="border border-border/30 backdrop-blur-md px-6 py-4 max-w-xs bg-card/50">
            <p className="text-xs uppercase tracking-widest text-foreground mb-2">Teknik</p>
            <p className="text-sm text-muted-foreground">
              Stylist kami menggunakan teknik pemotongan presisi yang disesuaikan dengan bentuk kepala dan tekstur rambut Anda.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
