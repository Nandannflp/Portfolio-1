import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { cn } from "../lib/utils";

const PROJECTS = [
  {
    title: "Automotive Motion",
    image: "https://images.unsplash.com/photo-1600132806370-bf17e65e942f?q=80&w=1000&auto=format&fit=crop",
    colSpan: "md:col-span-7",
  },
  {
    title: "Urban Architecture",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1000&auto=format&fit=crop",
    colSpan: "md:col-span-5",
  },
  {
    title: "Human Perspective",
    image: "https://images.unsplash.com/photo-1555169062-013468b47731?q=80&w=1000&auto=format&fit=crop",
    colSpan: "md:col-span-5",
  },
  {
    title: "Brand Identity",
    image: "https://images.unsplash.com/photo-1634986666676-ec8fd927c23d?q=80&w=1000&auto=format&fit=crop",
    colSpan: "md:col-span-7",
  },
];

export function SelectedWorks() {
  return (
    <section className="bg-bg py-12 md:py-16">
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
              <span className="text-xs text-muted uppercase tracking-[0.3em]">Selected Work</span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl text-text-primary tracking-tight mb-4">
              Featured <span className="font-display italic text-text-primary/90">projects</span>
            </h2>
            <p className="text-muted text-sm md:text-base">
              A selection of projects I've worked on, from concept to launch.
            </p>
          </div>

          <button className="hidden md:inline-flex group relative items-center gap-2 rounded-full px-6 py-3 border border-stroke bg-surface hover:border-transparent transition-all duration-300">
            <div className="absolute inset-[-1px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none gradient-border-ring" />
            <span className="relative z-10 text-sm font-medium text-text-primary">View all work</span>
            <ArrowRight className="relative z-10 w-4 h-4 text-text-primary group-hover:translate-x-1 transition-transform" />
          </button>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-5 md:gap-6">
          {PROJECTS.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: idx * 0.1, ease: "easeOut" }}
              className={cn(
                "group relative overflow-hidden bg-surface border border-stroke rounded-3xl aspect-[4/3] md:aspect-auto md:min-h-[400px] cursor-pointer",
                project.colSpan
              )}
            >
              {/* Background Image */}
              <div className="absolute inset-0 w-full h-full">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
              </div>

              {/* Halftone Overlay */}
              <div 
                className="absolute inset-0 opacity-20 mix-blend-multiply pointer-events-none"
                style={{
                  backgroundImage: "radial-gradient(circle, #000 1px, transparent 1px)",
                  backgroundSize: "4px 4px"
                }}
              />

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-bg/70 backdrop-blur-lg opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center">
                {/* Hover Label Pill */}
                <div className="relative transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 ease-out">
                  {/* The prompt says white bg for hover label */}
                  <div className="absolute inset-[-2px] rounded-full gradient-border-ring opacity-100" />
                  <div className="relative z-10 bg-white px-6 py-3 rounded-full flex items-center gap-2">
                    <span className="text-bg font-medium text-sm">View —</span>
                    <span className="text-bg font-display italic text-lg leading-none pt-0.5">{project.title}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mobile View All Button */}
        <div className="mt-8 flex justify-center md:hidden">
          <button className="group relative inline-flex items-center gap-2 rounded-full px-6 py-3 border border-stroke bg-surface hover:border-transparent transition-all duration-300">
            <div className="absolute inset-[-1px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none gradient-border-ring" />
            <span className="relative z-10 text-sm font-medium text-text-primary">View all work</span>
            <ArrowRight className="relative z-10 w-4 h-4 text-text-primary" />
          </button>
        </div>
      </div>
    </section>
  );
}
