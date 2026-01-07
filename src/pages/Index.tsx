import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { SectionHeader } from "@/components/SectionHeader";
import { About } from "@/components/About";
import { Services } from "@/components/Services";
import { Gallery } from "@/components/Gallery";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navigation />
      <Hero />
      
      <SectionHeader title="Pengalaman Studio" linkText="Tentang Kami" linkHref="#about" />
      <About />
      
      <SectionHeader title="Layanan & Harga" linkText="Konsultasi Gratis" linkHref="https://wa.me/6285604977129" />
      <Services />
      
      <SectionHeader title="Karya Terbaru" linkText="Instagram" linkHref="https://instagram.com/NEW_WAY.JBR" />
      <Gallery />
      
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
