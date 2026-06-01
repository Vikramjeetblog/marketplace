import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Ankit Sharma",
    role: "Startup Founder",
    review:
      "RUPANTAR helped us liquidate our old office assets smoothly. The process was professional, transparent and extremely fast.",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 2,
    name: "Priya Das",
    role: "Office Administrator",
    review:
      "We purchased refurbished workstations from RUPANTAR and the quality exceeded expectations. Everything looked professionally curated.",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 3,
    name: "Rahul Verma",
    role: "Business Owner",
    review:
      "Unlike random marketplaces, RUPANTAR feels trustworthy and organized. Their evaluation and pickup support saved us a lot of time.",
    image:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1200&auto=format&fit=crop",
  },
];

const TestimonialsSection = () => {
  return (
    <section className="py-16 lg:py-20 bg-[#f8fafc] overflow-hidden">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* HEADER */}
        <div className="text-center mb-12">

          <p className="text-[11px] tracking-[0.28em] uppercase text-emerald-600 font-semibold mb-3">
            TESTIMONIALS
          </p>

          <h2 className="text-3xl lg:text-5xl font-semibold tracking-tight text-[#020B2D] mb-5">
            What Our Clients Say
          </h2>

          <p className="text-sm lg:text-base text-slate-500 max-w-2xl mx-auto leading-relaxed">
            Trusted by businesses, offices and professionals across North Bengal.
          </p>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

          {testimonials.map((item) => (
            <motion.div
              key={item.id}
              whileHover={{ y: -6 }}
              transition={{ duration: 0.25 }}
              className="group relative"
            >
              <div className="relative h-full rounded-[32px] overflow-hidden bg-white border border-slate-200 hover:border-emerald-200 hover:shadow-2xl hover:shadow-slate-200/60 transition-all duration-500 p-7">

                {/* TOP */}
                <div className="flex items-center justify-between mb-7">

                  {/* USER */}
                  <div className="flex items-center gap-4">

                    <div className="relative">

                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-16 h-16 rounded-2xl object-cover"
                      />

                      <div className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full bg-emerald-500 border-2 border-white" />
                    </div>

                    <div>

                      <h3 className="text-[18px] font-semibold tracking-tight text-[#020B2D]">
                        {item.name}
                      </h3>

                      <p className="text-sm text-slate-500">
                        {item.role}
                      </p>
                    </div>
                  </div>

                  {/* BRAND */}
                  <div className="hidden sm:flex px-3 py-1 rounded-full bg-[#020B2D] text-white text-[10px] font-semibold tracking-[0.18em] uppercase">
                    Rupantar
                  </div>
                </div>

                {/* STARS */}
                <div className="flex items-center gap-1 mb-6">

                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={16}
                      className="fill-[#f59e0b] text-[#f59e0b]"
                    />
                  ))}
                </div>

                {/* REVIEW */}
                <p className="text-[15px] leading-relaxed text-slate-600">
                  “{item.review}”
                </p>

                {/* FOOTER */}
                <div className="mt-8 flex items-center gap-2">

                  <div className="w-8 h-[2px] rounded-full bg-emerald-500" />

                  <span className="text-[11px] tracking-[0.18em] uppercase font-semibold text-emerald-600">
                    Verified Client
                  </span>
                </div>

                {/* HOVER GLOW */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none bg-[radial-gradient(circle_at_top_right,_rgba(16,185,129,0.08),transparent_40%)]" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;