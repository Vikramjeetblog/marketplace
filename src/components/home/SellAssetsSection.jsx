import { motion } from "framer-motion";

const sellCategories = [
  {
    id: 1,
    title: "Sell Office Chairs",
    subtitle: "Executive & ergonomic seating",
    image:
      "https://images.unsplash.com/photo-1505797149-43f89335d7b4?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 2,
    title: "Sell Laptops",
    subtitle: "Business laptops & MacBooks",
    image:
      "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 3,
    title: "Sell Workstations",
    subtitle: "Office setups & desks",
    image:
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 4,
    title: "Sell Desktops",
    subtitle: "Commercial desktop systems",
    image:
      "https://images.unsplash.com/photo-1527443154391-507e9dc6c5cc?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 5,
    title: "Office Furniture",
    subtitle: "Tables, storage & cabinets",
    image:
      "https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 6,
    title: "Bulk Liquidation",
    subtitle: "Complete office asset clearance",
    image:
      "https://images.unsplash.com/photo-1556740749-887f6717d7e4?q=80&w=1200&auto=format&fit=crop",
  },
];

const SellAssetsSection = () => {
  return (
    <section className="py-16 lg:py-20 bg-[#020B2D] overflow-hidden">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* HEADER */}
        <div className="mb-10 lg:mb-12">

          <p className="text-[11px] tracking-[0.28em] uppercase text-emerald-400 font-semibold mb-3">
            SELL WITH RUPANTAR
          </p>

          <h2 className="text-3xl lg:text-5xl font-semibold tracking-tight text-white mb-4">
            Sell Your Products
          </h2>

          <p className="text-sm lg:text-base text-slate-400 max-w-2xl leading-relaxed">
            Get the best value for your office furniture, electronics and
            commercial workspace assets with expert evaluation.
          </p>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-6">

          {sellCategories.map((item) => (
            <motion.div
              key={item.id}
              whileHover={{ y: -5 }}
              transition={{ duration: 0.25 }}
              className="group cursor-pointer"
            >
              <div className="relative rounded-[28px] overflow-hidden border border-white/10 bg-white/5 backdrop-blur-xl hover:border-emerald-500/30 hover:shadow-[0_0_40px_rgba(16,185,129,0.08)] transition-all duration-500">

                {/* IMAGE */}
                <div className="relative h-[240px] overflow-hidden">

                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-[1.06] transition-transform duration-700"
                  />

                  {/* OVERLAY */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#020B2D] via-[#020B2D]/10 to-transparent" />

                  {/* TOP TAG */}
                  <div className="absolute top-4 left-4 z-10">

                    <div className="px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/10 text-[10px] font-semibold tracking-[0.2em] uppercase text-emerald-300">
                      Rupantar
                    </div>
                  </div>

                  {/* STEP TEXT */}
                  <div className="absolute top-4 right-4 z-10">

                    <div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md border border-white/10 flex items-center justify-center text-white text-sm font-semibold">
                      0{item.id}
                    </div>
                  </div>
                </div>

                {/* CONTENT */}
                <div className="p-6">

                  {/* CATEGORY */}
                  <p className="text-[11px] tracking-[0.18em] uppercase text-amber-400 font-semibold mb-3">
                    Commercial Assets
                  </p>

                  {/* TITLE */}
                  <h3 className="text-[22px] leading-tight font-semibold tracking-tight text-white mb-3">
                    {item.title}
                  </h3>

                  {/* SUBTITLE */}
                  <p className="text-sm leading-relaxed text-slate-400">
                    {item.subtitle}
                  </p>

                  {/* FOOTER */}
                  <div className="mt-6 flex items-center gap-3">

                    <div className="w-8 h-[2px] bg-emerald-400 rounded-full" />

                    <span className="text-[11px] tracking-[0.18em] uppercase font-semibold text-emerald-300">
                      Get Evaluation
                    </span>
                  </div>
                </div>

                {/* GLOW */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-[radial-gradient(circle_at_top_right,_rgba(16,185,129,0.12),transparent_45%)]" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SellAssetsSection;