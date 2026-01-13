import f1 from "@/assets/f1.jpeg";
import f2 from "@/assets/f2.jpeg";
import f3 from "@/assets/f3.jpeg";
import f4 from "@/assets/f4.jpeg";

const galleryItems = [
  { image: f1, title: "QUIFF", category: "Paket Regular", bgColor: "bg-card/90" },
  { image: f2, title: "CORNROW", category: "Warna Fashion", bgColor: "bg-accent/90" },
  { image: f3, title: "DESIGN CORNROW", category: "Styling", bgColor: "bg-foreground/90 text-background" },
  { image: f4, title: "SKIN FADE X HAIR TATTO", category: "Potongan Klasik", bgColor: "bg-card/90" },
];

export const Gallery = () => {
  return (
    <section className="bg-secondary py-12 overflow-hidden">
      <div className="flex md:px-12 overflow-x-auto no-scrollbar snap-x pr-6 pl-6 gap-6">
        {galleryItems.map((item, idx) => (
          <div
            key={idx}
            className="snap-start min-w-[300px] md:min-w-[400px] h-[500px] relative group overflow-hidden bg-background"
          >
            <img
              src={item.image}
              alt={item.title}
              className="absolute inset-0 w-full h-full object-cover opacity-70 group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 flex items-center justify-center p-6">
              <div
                className={`${item.bgColor} backdrop-blur border border-border/20 p-8 text-center w-full max-w-xs transform transition-all duration-300 translate-y-4 opacity-0 group-hover:-translate-y-2 group-hover:opacity-100`}
              >
                <h3 className="text-2xl font-bold uppercase tracking-tight mb-4 leading-none font-display">
                  {item.title}
                </h3>
                <p className="text-[10px] font-mono uppercase opacity-70">{item.category}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
