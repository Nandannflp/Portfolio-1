import { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";

import { LoadingScreen } from "./components/LoadingScreen";
import { Hero } from "./components/Hero";
import { SelectedWorks } from "./components/SelectedWorks";
import { Journal } from "./components/Journal";
import { Explorations } from "./components/Explorations";
import { Stats } from "./components/Stats";
import { Footer } from "./components/Footer";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Force smooth scroll globally
    document.documentElement.style.scrollBehavior = "smooth";
    return () => {
      document.documentElement.style.scrollBehavior = "auto";
    };
  }, []);

  return (
    <>
      <AnimatePresence>
        {isLoading && <LoadingScreen onComplete={() => setIsLoading(false)} />}
      </AnimatePresence>
      
      {!isLoading && (
        <main className="bg-bg min-h-screen text-text-primary overflow-hidden">
          <Hero />
          <SelectedWorks />
          <Journal />
          <Explorations />
          <Stats />
          <Footer />
        </main>
      )}
    </>
  );
}

export default App;
