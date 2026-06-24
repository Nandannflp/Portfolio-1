import { motion } from "framer-motion";

const STATS = [
  { value: "2+", label: "Years Experience" },
  { value: "95+", label: "Projects Done" },
  { value: "200%", label: "Satisfied Clients" },
];

export function Stats() {
  return (
    <section className="bg-bg py-16 md:py-24 border-y border-stroke">
      <div className="max-w-[1200px] mx-auto px-6 md:px-10 lg:px-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 divide-y md:divide-y-0 md:divide-x divide-stroke">
          {STATS.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: idx * 0.2, ease: "easeOut" }}
              className={`flex flex-col items-center justify-center text-center ${idx !== 0 ? 'pt-12 md:pt-0' : ''}`}
            >
              <h3 className="text-6xl md:text-7xl lg:text-8xl font-display italic text-text-primary mb-4">
                {stat.value}
              </h3>
              <p className="text-sm md:text-base text-muted uppercase tracking-[0.2em]">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
