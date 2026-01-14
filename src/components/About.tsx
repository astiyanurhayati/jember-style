import heroBg from "@/assets/bg.jpeg";
import { useState } from "react";
import { Sparkles, Users, Wrench } from "lucide-react";

interface TabContent {
  label: string;
  number: string;
  icon: typeof Sparkles;
  title: string;
  description: string;
  image: string;
}

const tabsData: TabContent[] = [
  {
    label: "Teknologi Modern",
    number: "02",
    icon: Sparkles,
    title: "Teknologi Terkini",
    description: "Menggunakan peralatan modern dan teknik cutting-edge untuk hasil maksimal. Kami terus update dengan tren dan teknologi terbaru di industri hair styling.",
    image: heroBg
  },
  {
    label: "Stylist Profesional",
    number: "03",
    icon: Users,
    title: "Tim Berpengalaman",
    description: "Stylist kami adalah profesional terlatih dengan pengalaman bertahun-tahun. Setiap potongan dirancang khusus sesuai karakter dan gaya hidup Anda.",
    image: heroBg
  },
  {
    label: "Konsep Industrial",
    number: "04",
    icon: Wrench,
    title: "Desain Industrial",
    description: "Suasana studio dengan konsep industrial modern yang nyaman dan stylish. Pengalaman grooming yang tidak hanya soal hasil, tapi juga journey-nya.",
    image: heroBg
  }
];

export const About = () => {
  const [activeTab, setActiveTab] = useState(0);
  const currentTab = tabsData[activeTab];

  return (
    <section id="about" className="w-full bg-studio-light text-[#111111] overflow-hidden">
      <div className="flex flex-col lg:flex-row h-auto lg:h-[700px]">
        {/* Main Content Area */}
        <div className="flex-1 relative flex flex-col">
          {/* Image Top Half */}
          <div className="h-[50%] overflow-hidden relative border-b border-[#111111]/10">            <img 
              key={activeTab}
              src={currentTab.image} 
              alt={currentTab.label} 
              className="w-full h-full object-cover grayscale animate-fade-in"
              style={{ objectPosition: "center 30%" }}
            />
            <div className="absolute bottom-0 left-0 w-full flex justify-between px-12 opacity-20">
              {[...Array(6)].map((_, i) => (
                <div key={i} className="h-4 w-[1px] bg-black"></div>
              ))}
            </div>
            {/* Tab Icon Overlay */}
            <div className="absolute top-8 left-8 animate-scale-in">
              <div className="w-16 h-16 bg-[#FFD600] rounded-full flex items-center justify-center">
                <currentTab.icon className="w-8 h-8 text-black" />
              </div>
            </div>
          </div>

          {/* Text Bottom Half */}
          <div className="p-8 md:p-16 flex flex-col h-[50%] relative justify-between bg-studio-beige">
            <div className="flex flex-col gap-6">
              <h2 
                key={`title-${activeTab}`}
                className="text-4xl md:text-6xl lg:text-7xl font-bold uppercase tracking-tighter leading-[0.85] max-w-2xl font-display animate-fade-in"
              >
                {currentTab.title}
              </h2>
              <p 
                key={`desc-${activeTab}`}
                className="max-w-xl text-sm md:text-base font-medium leading-relaxed opacity-80 animate-fade-in"
              >
                {currentTab.description}
              </p>
            </div>
            <div className="absolute bottom-8 right-8 text-6xl md:text-8xl font-bold opacity-10 font-display">
              {currentTab.number}
            </div>
          </div>
        </div>

        {/* Vertical Tabs */}
        <div className="lg:w-64 flex flex-row lg:flex-col border-t lg:border-t-0 lg:border-l border-[#111111]/10 bg-accent text-accent-foreground">
          {tabsData.map((tab, idx) => {
            const Icon = tab.icon;
            const isActive = activeTab === idx;
            
            return (
              <button
                key={idx}
                onClick={() => setActiveTab(idx)}
                className={`flex-1 border-r last:border-r-0 lg:border-r lg:border-b lg:last:border-b-0 border-black/10 relative group cursor-pointer transition-all duration-300 ${
                  isActive 
                    ? 'bg-white text-black shadow-lg' 
                    : 'hover:bg-white/10'
                }`}
                aria-label={`Tab ${tab.label}`}
              >
                {/* Active Indicator */}
                {isActive && (
                  <div className="absolute left-0 top-0 lg:left-auto lg:right-0 w-full lg:w-1 h-1 lg:h-full bg-black animate-scale-in" />
                )}
                
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 lg:gap-3 py-6 lg:py-8 px-3">
                  <Icon className={`w-5 h-5 md:w-6 md:h-6 transition-transform duration-300 ${
                    isActive ? 'scale-110' : 'group-hover:scale-105'
                  }`} />
                  <span className={`text-xs md:text-sm lg:text-base font-bold uppercase tracking-wider text-center font-display leading-tight transition-all ${
                    isActive ? 'opacity-100' : 'opacity-70 group-hover:opacity-100'
                  }`}>
                    {tab.label}
                  </span>
                  <span className={`font-mono text-xs md:text-sm transition-opacity ${
                    isActive ? 'opacity-100' : 'opacity-50 group-hover:opacity-70'
                  }`}>
                    {tab.number}
                  </span>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
};
