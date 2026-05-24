import { motion } from "framer-motion";

const categories = [
  {
    id: 1,
    title: "Office Chairs",
    tag: "Furniture",
    image:
      "https://images.unsplash.com/photo-1505797149-43f89335d7b4?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 2,
    title: "Office Tables",
    tag: "Workspace",
    image:
      "https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 3,
    title: "Desktops",
    tag: "Electronics",
    image:
      "https://images.unsplash.com/photo-1496171367470-9ed9a91ea931?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 4,
    title: "Laptops",
    tag: "Refurbished",
    image:
      "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 5,
    title: "Workstations",
    tag: "Commercial",
    image:
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 6,
    title: "Office Storage",
    tag: "Storage",
    image:
      "https://images.unsplash.com/photo-1486946255434-2466348c2166?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 7,
    title: "Printers",
    tag: "Equipment",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 8,
    title: "Conference Setup",
    tag: "Corporate",
    image:
      "https://images.unsplash.com/photo-1497366412874-3415097a27e7?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 9,
    title: "Office Essentials",
    tag: "Essentials",
    image:
      "https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 10,
    title: "Bulk Assets",
    tag: "Liquidation",
    image:
      "https://images.unsplash.com/photo-1556740749-887f6717d7e4?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 11,
    title: "Accessories",
    tag: "Workspace",
    image:
      "https://images.unsplash.com/photo-1517336714739-489689fd1ca8?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 12,
    title: "Office Furniture",
    tag: "Premium",
    image:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1200&auto=format&fit=crop",
  },
];

const CategoriesSection = () => {
  return (
    <section className="py-16 lg:py-20 bg-white overflow-hidden">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* HEADER */}
        <div className="flex items-end justify-between mb-10">

          <div>

            <p className="text-[11px] tracking-[0.28em] uppercase text-emerald-600 font-semibold mb-3">
              CATEGORIES
            </p>

            <h2 className="text-3xl lg:text-5xl font-semibold tracking-tight text-[#020B2D]">
              Browse Categories
            </h2>
          </div>

          <div className="hidden lg:block max-w-sm">
           
          </div>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

          {categories.map((category) => (
            <motion.div
              key={category.id}
              whileHover={{ y: -5 }}
              transition={{ duration: 0.25 }}
              className="group cursor-pointer"
            >
              <div className="relative rounded-[28px] overflow-hidden bg-white border border-slate-200 hover:border-emerald-200 hover:shadow-2xl hover:shadow-slate-200/60 transition-all duration-500">

                {/* IMAGE */}
                <div className="relative aspect-[1.15/1] overflow-hidden bg-gradient-to-br from-[#eef7f4] via-white to-[#f4f7fb]">

                  {/* TOP TAG */}
                  <div className="absolute top-4 left-4 z-20">

                    <div className="px-3 py-1 rounded-full bg-white/90 backdrop-blur-md border border-slate-200 shadow-sm">

                      <span className="text-[10px] font-bold tracking-[0.18em] uppercase text-emerald-700">
                        {category.tag}
                      </span>
                    </div>
                  </div>

                  {/* IMAGE */}
                  <img
                    src={category.image}
                    alt={category.title}
                    className="w-full h-full object-cover group-hover:scale-[1.06] transition-transform duration-700"
                  />

                  {/* OVERLAY */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#020B2D]/10 via-transparent to-transparent" />
                </div>

                {/* CONTENT */}
                <div className="p-5">

                  <h3 className="text-[18px] lg:text-[19px] font-semibold tracking-tight text-[#020B2D] leading-snug">
                    {category.title}
                  </h3>

                  {/* FOOTER */}
                  <div className="mt-5 flex items-center gap-2">

                    <div className="w-8 h-[2px] rounded-full bg-emerald-500" />

                    <span className="text-[11px] tracking-[0.18em] uppercase font-semibold text-emerald-600">
                      Explore
                    </span>
                  </div>
                </div>

                {/* HOVER GLOW */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-[radial-gradient(circle_at_top_right,_rgba(16,185,129,0.08),transparent_45%)]" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoriesSection;