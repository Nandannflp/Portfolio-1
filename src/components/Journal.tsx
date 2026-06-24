import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const JOURNAL_ENTRIES = [
  {
    title: "The Art of Digital Nuance",
    date: "Oct 12, 2026",
    readTime: "4 min read",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=200&auto=format&fit=crop",
  },
  {
    title: "Why Typography Matters More Than Ever",
    date: "Sep 28, 2026",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1557683316-973673baf926?q=80&w=200&auto=format&fit=crop",
  },
  {
    title: "Systemizing Creativity in UI Design",
    date: "Sep 15, 2026",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=200&auto=format&fit=crop",
  },
  {
    title: "Animations that Don't Annoy",
    date: "Aug 30, 2026",
    readTime: "3 min read",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=200&auto=format&fit=crop",
  },
];

export function Journal() {
  return (
    <section className="bg-bg py-16 md:py-24">
      <div className="max-w-[1200px] mx-auto px-6 md:px-10 lg:px-16">
        {/* Header */}
        <motion.div 
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 md:mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <div className="max-w-2xl">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-8 h-px bg-stroke" />
              <span className="text-xs text-muted uppercase tracking-[0.3em]">Journal</span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl text-text-primary tracking-tight mb-4">
              Recent <span className="font-display italic text-text-primary/90">thoughts</span>
            </h2>
            <p className="text-muted text-sm md:text-base">
              Ramblings on design, code, and everything in between.
            </p>
          </div>

          <button className="hidden md:inline-flex group relative items-center gap-2 rounded-full px-6 py-3 border border-stroke bg-surface hover:border-transparent transition-all duration-300">
            <div className="absolute inset-[-1px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none gradient-border-ring" />
            <span className="relative z-10 text-sm font-medium text-text-primary">View all</span>
            <ArrowRight className="relative z-10 w-4 h-4 text-text-primary group-hover:translate-x-1 transition-transform" />
          </button>
        </motion.div>

        {/* Entries */}
        <div className="flex flex-col gap-4">
          {JOURNAL_ENTRIES.map((entry, idx) => (
            <motion.a
              href="#"
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: idx * 0.1, ease: "easeOut" }}
              className="group flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6 p-4 bg-surface/30 hover:bg-surface border border-stroke rounded-[40px] sm:rounded-full transition-colors duration-300 cursor-pointer"
            >
              <div className="w-full sm:w-[120px] shrink-0 aspect-[2/1] sm:aspect-square sm:rounded-full rounded-3xl overflow-hidden bg-bg">
                <img 
                  src={entry.image} 
                  alt={entry.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              
              <div className="flex-1 flex flex-col sm:flex-row sm:items-center justify-between gap-4 px-2 sm:px-0 sm:pr-6">
                <div>
                  <h3 className="text-lg md:text-xl text-text-primary font-medium mb-1 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-[#89AACC] group-hover:to-[#4E85BF] transition-all duration-300">
                    {entry.title}
                  </h3>
                  <div className="flex items-center gap-3 text-xs md:text-sm text-muted">
                    <span>{entry.date}</span>
                    <span className="w-1 h-1 rounded-full bg-stroke" />
                    <span>{entry.readTime}</span>
                  </div>
                </div>
                
                <div className="hidden sm:flex shrink-0 w-10 h-10 rounded-full border border-stroke items-center justify-center group-hover:bg-text-primary group-hover:text-bg transition-colors duration-300">
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
