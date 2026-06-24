import { useEffect, useRef } from "react";
import Hls from "hls.js";
import gsap from "gsap";
import { ArrowUpRight } from "lucide-react";

export function Footer() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const marqueeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // HLS setup
    const videoSrc = "https://stream.mux.com/Aa02T7oM1wH5Mk5EEVDYhbZ1ChcdhRsS2m1NYyx4Ua1g.m3u8";
    if (videoRef.current) {
      if (Hls.isSupported()) {
        const hls = new Hls();
        hls.loadSource(videoSrc);
        hls.attachMedia(videoRef.current);
      } else if (videoRef.current.canPlayType("application/vnd.apple.mpegurl")) {
        videoRef.current.src = videoSrc;
      }
    }
  }, []);

  useEffect(() => {
    // GSAP Marquee
    if (marqueeRef.current) {
      gsap.to(marqueeRef.current, {
        xPercent: -50,
        ease: "none",
        duration: 40,
        repeat: -1,
      });
    }
  }, []);

  return (
    <footer className="relative bg-bg pt-16 md:pt-20 pb-8 md:pb-12 overflow-hidden flex flex-col min-h-[80vh] justify-between">
      {/* Background Video */}
      <div className="absolute inset-0 w-full h-full pointer-events-none">
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          className="absolute top-1/2 left-1/2 min-w-full min-h-full object-cover -translate-x-1/2 -translate-y-1/2 scale-y-[-1]"
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="absolute top-0 left-0 right-0 h-48 bg-gradient-to-b from-bg to-transparent" />
      </div>

      {/* Marquee */}
      <div className="relative z-10 w-full overflow-hidden mt-10 md:mt-20">
        <div 
          ref={marqueeRef}
          className="flex whitespace-nowrap will-change-transform"
        >
          {/* We duplicate the text to allow seamless looping of xPercent: -50 */}
          <div className="flex shrink-0">
            {Array.from({ length: 10 }).map((_, i) => (
              <span key={i} className="text-[10vw] font-display italic text-text-primary/10 tracking-tighter px-4">
                BUILDING THE FUTURE •
              </span>
            ))}
          </div>
          <div className="flex shrink-0">
            {Array.from({ length: 10 }).map((_, i) => (
              <span key={i} className="text-[10vw] font-display italic text-text-primary/10 tracking-tighter px-4">
                BUILDING THE FUTURE •
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center mt-12 md:mt-20 px-6">
        <h2 className="text-4xl md:text-6xl text-text-primary mb-8 font-light tracking-tight">
          Let's create something <span className="font-display italic text-text-primary/90">iconic.</span>
        </h2>
        
        <a 
          href="mailto:nandann.flp@gmail.com"
          className="group relative inline-flex items-center gap-3 rounded-full px-8 py-4 bg-surface border border-stroke hover:border-transparent transition-all duration-300"
        >
          <div className="absolute inset-[-2px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none gradient-border-ring" />
          <span className="relative z-10 text-lg font-medium text-text-primary">nandann.flp@gmail.com</span>
          <ArrowUpRight className="relative z-10 w-5 h-5 text-text-primary" />
        </a>
      </div>

      {/* Footer Bar */}
      <div className="relative z-10 mt-24 px-6 md:px-10 lg:px-16 w-full max-w-[1400px] mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pt-8 border-t border-stroke/50">
          
          {/* Availability */}
          <div className="flex items-center gap-3 bg-surface/50 backdrop-blur-md px-4 py-2 rounded-full border border-stroke">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
            </span>
            <span className="text-sm text-muted">Available for projects</span>
          </div>

          {/* Social Links */}
          <ul className="flex items-center gap-6">
            {["Twitter", "LinkedIn", "Instagram", "GitHub"].map((social) => (
              <li key={social}>
                <a 
                  href="#"
                  className="text-sm text-muted hover:text-text-primary transition-colors"
                >
                  {social}
                </a>
              </li>
            ))}
          </ul>
          
          <div className="text-sm text-muted text-center md:text-right">
            © 2026 Nandann Shetye.
          </div>
        </div>
      </div>
    </footer>
  );
}
