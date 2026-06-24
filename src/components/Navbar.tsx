import { useState, useEffect } from "react";
import { ArrowUpRight } from "lucide-react";
import { cn } from "../lib/utils";

const NAV_LINKS = ["Home", "Work", "Resume"];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("Home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-4 md:pt-6 px-4">
      <div 
        className={cn(
          "inline-flex items-center rounded-full backdrop-blur-md border border-white/10 bg-surface/80 px-2 py-2 transition-shadow duration-300",
          scrolled ? "shadow-md shadow-black/20" : ""
        )}
      >
        {/* Logo */}
        <a 
          href="#"
          className="group relative flex items-center justify-center w-9 h-9 rounded-full transition-transform duration-300 hover:scale-110 shrink-0"
        >
          <div className="absolute inset-0 rounded-full accent-gradient bg-[length:200%_200%] animate-gradient-shift group-hover:bg-[length:100%_100%] transition-all" />
          <div className="absolute inset-[1.5px] rounded-full bg-bg flex items-center justify-center">
            <span className="font-display italic text-[13px] text-text-primary leading-none mt-0.5">NS</span>
          </div>
        </a>

        <div className="hidden sm:block w-px h-5 bg-stroke mx-3" />

        {/* Links */}
        <ul className="flex items-center gap-1 sm:gap-2 px-2 sm:px-0">
          {NAV_LINKS.map((link) => (
            <li key={link}>
              <button
                onClick={() => setActive(link)}
                className={cn(
                  "text-xs sm:text-sm rounded-full px-3 sm:px-4 py-1.5 sm:py-2 transition-colors",
                  active === link 
                    ? "text-text-primary bg-stroke/50" 
                    : "text-muted hover:text-text-primary hover:bg-stroke/50"
                )}
              >
                {link}
              </button>
            </li>
          ))}
        </ul>

        <div className="hidden sm:block w-px h-5 bg-stroke mx-3" />

        {/* Say Hi Button */}
        <button className="group relative ml-2 sm:ml-0 text-xs sm:text-sm rounded-full">
          <div className="absolute inset-[-2px] rounded-full accent-gradient bg-[length:200%_200%] animate-gradient-shift opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
          <div className="flex items-center gap-1.5 px-3 sm:px-4 py-1.5 sm:py-2 bg-surface rounded-full backdrop-blur-md">
            <span className="text-text-primary">Say hi</span>
            <ArrowUpRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-text-primary" />
          </div>
        </button>
      </div>
    </nav>
  );
}
