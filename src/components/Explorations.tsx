import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight, X } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const EXPLORATIONS = [
  { id: 1, image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=600&auto=format&fit=crop", speed: 0.8 },
  { id: 2, image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=600&auto=format&fit=crop", speed: 1.2 },
  { id: 3, image: "https://images.unsplash.com/photo-1557683316-973673baf926?q=80&w=600&auto=format&fit=crop", speed: 0.9 },
  { id: 4, image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=600&auto=format&fit=crop", speed: 1.5 },
  { id: 5, image: "https://images.unsplash.com/photo-1600132806370-bf17e65e942f?q=80&w=600&auto=format&fit=crop", speed: 0.7 },
  { id: 6, image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=600&auto=format&fit=crop", speed: 1.1 },
];

export function Explorations() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const [lightboxImg, setLightboxImg] = useState<string | null>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Pin the center content
      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top top",
        end: "bottom bottom",
        pin: contentRef.current,
        pinSpacing: false,
      });

      // Parallax items
      const items = gsap.utils.toArray<HTMLElement>('.parallax-item');
      items.forEach((item, i) => {
        const speed = EXPLORATIONS[i].speed;
        
        gsap.to(item, {
          yPercent: -50 * speed,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          }
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <>
      <section ref={sectionRef} className="relative bg-bg min-h-[300vh] overflow-hidden">
        {/* Layer 1: Pinned Content */}
        <div 
          ref={contentRef} 
          className="absolute inset-0 h-screen w-full flex flex-col items-center justify-center text-center px-4 z-10 pointer-events-none"
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="w-8 h-px bg-stroke" />
            <span className="text-xs text-muted uppercase tracking-[0.3em]">Explorations</span>
            <div className="w-8 h-px bg-stroke" />
          </div>
          
          <h2 className="text-5xl md:text-7xl lg:text-8xl text-text-primary tracking-tight mb-6">
            Visual <span className="font-display italic text-text-primary/90">playground</span>
          </h2>
          
          <p className="text-muted text-sm md:text-base max-w-md mx-auto mb-10 pointer-events-auto">
            A collection of visual experiments, motion studies, and spontaneous UI thoughts.
          </p>

          <button className="pointer-events-auto group relative inline-flex items-center gap-2 rounded-full px-6 py-3 border border-stroke bg-surface hover:border-transparent transition-all duration-300">
            <div className="absolute inset-[-1px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none gradient-border-ring" />
            <span className="relative z-10 text-sm font-medium text-text-primary">More on Dribbble</span>
            <ArrowRight className="relative z-10 w-4 h-4 text-text-primary group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Layer 2: Parallax Grid */}
        <div className="absolute inset-0 pt-[50vh] z-20 pointer-events-none">
          <div 
            ref={gridRef}
            className="max-w-[1400px] mx-auto px-6 grid grid-cols-2 gap-12 md:gap-40"
          >
            {/* Column 1 */}
            <div className="flex flex-col gap-[30vh] pt-[20vh] items-end">
              {EXPLORATIONS.filter((_, i) => i % 2 === 0).map((item, i) => (
                <div 
                  key={item.id} 
                  className={`parallax-item w-full max-w-[320px] aspect-square pointer-events-auto cursor-pointer group`}
                  onClick={() => setLightboxImg(item.image)}
                  style={{ transform: `rotate(${i % 2 === 0 ? -4 : 2}deg)` }}
                >
                  <div className="w-full h-full rounded-2xl md:rounded-3xl overflow-hidden border border-stroke bg-surface shadow-2xl transition-transform duration-500 group-hover:scale-105 group-hover:-rotate-2 group-hover:shadow-[0_0_30px_rgba(137,170,204,0.15)]">
                    <img 
                      src={item.image} 
                      alt={`Exploration ${item.id}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* Column 2 */}
            <div className="flex flex-col gap-[40vh] items-start">
              {EXPLORATIONS.filter((_, i) => i % 2 !== 0).map((item, i) => (
                <div 
                  key={item.id} 
                  className={`parallax-item w-full max-w-[320px] aspect-square pointer-events-auto cursor-pointer group`}
                  onClick={() => setLightboxImg(item.image)}
                  style={{ transform: `rotate(${i % 2 === 0 ? 3 : -5}deg)` }}
                >
                  <div className="w-full h-full rounded-2xl md:rounded-3xl overflow-hidden border border-stroke bg-surface shadow-2xl transition-transform duration-500 group-hover:scale-105 group-hover:rotate-2 group-hover:shadow-[0_0_30px_rgba(137,170,204,0.15)]">
                    <img 
                      src={item.image} 
                      alt={`Exploration ${item.id}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightboxImg && (
        <div 
          className="fixed inset-0 z-[100] bg-bg/95 backdrop-blur-xl flex items-center justify-center p-4 md:p-10 cursor-zoom-out"
          onClick={() => setLightboxImg(null)}
        >
          <button 
            className="absolute top-6 right-6 w-12 h-12 rounded-full bg-surface border border-stroke flex items-center justify-center text-text-primary hover:bg-stroke/50 transition-colors"
            onClick={(e) => {
              e.stopPropagation();
              setLightboxImg(null);
            }}
          >
            <X className="w-6 h-6" />
          </button>
          <img 
            src={lightboxImg} 
            alt="Exploration Full" 
            className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
          />
        </div>
      )}
    </>
  );
}
