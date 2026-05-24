import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useState } from "react";

const slides = [
  {
    id: 1,
    title: "Premium Refurbished Office Furniture",
    subtitle:
      "Trusted pre-owned office assets for modern businesses across North Bengal.",
    image:
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=1600&auto=format&fit=crop",
  },
  {
    id: 2,
    title: "Verified Laptops & Workstations",
    subtitle:
      "Curated desktops, laptops and office electronics with quality evaluation.",
    image:
      "https://images.unsplash.com/photo-1496171367470-9ed9a91ea931?q=80&w=1600&auto=format&fit=crop",
  },
  {
    id: 3,
    title: "Bulk Office Liquidation Solutions",
    subtitle:
      "Helping businesses buy and sell office assets effortlessly.",
    image:
      "https://images.unsplash.com/photo-1497366412874-3415097a27e7?q=80&w=1600&auto=format&fit=crop",
  },
];

const Hero = () => {
  const [current, setCurrent] = useState(0);

  // AUTO SLIDE
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) =>
        prev === slides.length - 1 ? 0 : prev + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrent((prev) =>
      prev === slides.length - 1 ? 0 : prev + 1
    );
  };

  const prevSlide = () => {
    setCurrent((prev) =>
      prev === 0 ? slides.length - 1 : prev - 1
    );
  };

  return (
    <section className="w-full bg-white pt-6">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="relative overflow-hidden rounded-[32px] h-[240px] sm:h-[320px] lg:h-[420px]">

          {/* SLIDES */}
          {slides.map((slide, index) => (
            <motion.div
              key={slide.id}
              initial={{ opacity: 0 }}
              animate={{
                opacity: current === index ? 1 : 0,
                scale: current === index ? 1 : 1.05,
              }}
              transition={{ duration: 0.7 }}
              className={`absolute inset-0 ${
                current === index
                  ? "z-10"
                  : "z-0 pointer-events-none"
              }`}
            >
              {/* IMAGE */}
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full h-full object-cover"
              />

              {/* OVERLAY */}
              <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/40 to-transparent" />

              {/* CONTENT */}
              <div className="absolute inset-0 flex items-center">
                
                <div className="max-w-2xl px-8 lg:px-14">
                  
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{
                      opacity: current === index ? 1 : 0,
                      y: current === index ? 0 : 20,
                    }}
                    transition={{ delay: 0.2 }}
                  >
                    <p className="text-emerald-400 text-xs sm:text-sm font-semibold tracking-[0.25em] uppercase mb-4">
                      RUPANTAR
                    </p>

                    <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold leading-tight text-white mb-4">
                      {slide.title}
                    </h1>

                    <p className="text-sm sm:text-lg text-slate-200 max-w-xl leading-relaxed">
                      {slide.subtitle}
                    </p>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}

          {/* LEFT BUTTON */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-white/90 hover:bg-white flex items-center justify-center shadow-lg transition-all"
          >
            <ChevronLeft size={22} className="text-slate-700" />
          </button>

          {/* RIGHT BUTTON */}
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-white/90 hover:bg-white flex items-center justify-center shadow-lg transition-all"
          >
            <ChevronRight size={22} className="text-slate-700" />
          </button>

          {/* DOTS */}
          <div className="absolute bottom-5 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2">
            
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrent(index)}
                className={`transition-all rounded-full ${
                  current === index
                    ? "w-8 h-2 bg-white"
                    : "w-2 h-2 bg-white/50"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;