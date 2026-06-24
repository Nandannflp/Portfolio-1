import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface LoadingScreenProps {
  onComplete: () => void;
}

const words = ["Design", "Create", "Inspire"];

export function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const [count, setCount] = useState(0);
  const [wordIndex, setWordIndex] = useState(0);

  useEffect(() => {
    let startTime: number;
    const duration = 2700; // 2.7s total duration

    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      
      setCount(Math.floor(progress * 100));

      if (progress < 1) {
        requestAnimationFrame(step);
      } else {
        setTimeout(onComplete, 400); // 400ms delay after 100
      }
    };

    requestAnimationFrame(step);

    // Rotate words every 900ms (2700ms / 3 words)
    const wordInterval = setInterval(() => {
      setWordIndex((prev) => (prev + 1) % words.length);
    }, 900);

    return () => clearInterval(wordInterval);
  }, [onComplete]);

  return (
    <motion.div 
      className="fixed inset-0 z-[9999] bg-bg flex flex-col justify-between p-6 md:p-10"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, y: -20, filter: "blur(10px)" }}
      transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
    >
      {/* Top Left */}
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <span className="text-xs text-muted uppercase tracking-[0.3em]">Portfolio</span>
      </motion.div>

      {/* Center Word */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 overflow-hidden h-[80px] md:h-[120px] flex items-center justify-center">
        <AnimatePresence mode="wait">
          <motion.h1
            key={wordIndex}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="text-4xl md:text-6xl lg:text-7xl font-display italic text-text-primary/80 m-0"
          >
            {words[wordIndex]}
          </motion.h1>
        </AnimatePresence>
      </div>

      {/* Bottom Container */}
      <div className="flex flex-col gap-4">
        <div className="flex justify-end">
          <span className="text-6xl md:text-8xl lg:text-9xl font-display text-text-primary tabular-nums leading-none">
            {String(count).padStart(3, "0")}
          </span>
        </div>
        
        {/* Progress Bar */}
        <div className="h-[3px] bg-stroke/50 w-full overflow-hidden rounded-full">
          <div 
            className="h-full accent-gradient origin-left transition-transform duration-75 ease-linear"
            style={{ 
              transform: `scaleX(${count / 100})`,
              boxShadow: "0 0 8px rgba(137, 170, 204, 0.35)"
            }}
          />
        </div>
      </div>
    </motion.div>
  );
}
