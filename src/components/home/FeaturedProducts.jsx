import { motion } from "framer-motion";
import { ArrowRight, Star } from "lucide-react";

const featuredProducts = [
  {
    id: 1,
    title: "Executive Office Chair",
    category: "OFFICE CHAIR",
    price: "₹7,500",
    oldPrice: "₹12,000",
    discount: "-38%",
    tag: "Best Deal",
    rating: "4.8",
    image:
      "https://images.unsplash.com/photo-1505797149-43f89335d7b4?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 2,
    title: "Dell Business Laptop",
    category: "BUSINESS LAPTOP",
    price: "₹28,000",
    oldPrice: "₹39,000",
    discount: "-29%",
    tag: "Top Rated",
    rating: "4.7",
    image:
      "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 3,
    title: "Workspace Monitor Setup",
    category: "WORKSPACE",
    price: "₹11,500",
    oldPrice: "₹18,000",
    discount: "-35%",
    tag: "Premium",
    rating: "4.9",
    image:
      "https://images.unsplash.com/photo-1527443154391-507e9dc6c5cc?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 4,
    title: "Office Workstation",
    category: "WORKSTATION",
    price: "₹16,000",
    oldPrice: "₹24,000",
    discount: "-33%",
    tag: "Hot Deal",
    rating: "4.6",
    image:
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=1200&auto=format&fit=crop",
  },
];

const FeaturedProductsSection = () => {
  return (
    <section className="py-16 lg:py-20 bg-[#f8fafc] overflow-hidden">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* HEADER */}
        <div className="flex items-end justify-between mb-10">

          <div>

            <p className="text-[11px] tracking-[0.28em] uppercase text-emerald-600 font-semibold mb-3">
              CURATED INVENTORY
            </p>

            <h2 className="text-3xl lg:text-5xl font-semibold tracking-tight text-[#020B2D]">
              Featured Products
            </h2>
          </div>

          <button className="hidden md:flex items-center gap-2 text-sm font-semibold text-emerald-600 hover:text-emerald-700 transition-colors">
            View All
            <ArrowRight size={16} />
          </button>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">

          {featuredProducts.map((product) => (
            <motion.div
              key={product.id}
              whileHover={{ y: -6 }}
              transition={{ duration: 0.25 }}
              className="group cursor-pointer"
            >
              <div className="relative rounded-[28px] overflow-hidden border border-slate-200 bg-white hover:shadow-2xl hover:shadow-slate-200/70 transition-all duration-500">

                {/* IMAGE AREA */}
                <div className="relative h-[260px] overflow-hidden bg-gradient-to-br from-[#eef7f4] via-white to-[#f4f7fb]">

                  {/* TOP BAR */}
                  <div className="absolute top-4 left-4 right-4 z-20 flex items-center justify-between">

                    {/* BRAND */}
                    <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/90 backdrop-blur-md border border-slate-200 shadow-sm">

                      <div className="w-2 h-2 rounded-full bg-emerald-500" />

                      <span className="text-[9px] font-bold tracking-[0.22em] uppercase text-[#020B2D]">
                        Rupantar
                      </span>
                    </div>

                    {/* RATING */}
                    <div className="flex items-center gap-1 px-2.5 py-1 rounded-full bg-[#020B2D] text-white text-[11px] font-medium shadow-lg">

                      <Star
                        size={11}
                        className="fill-[#f59e0b] text-[#f59e0b]"
                      />

                      {product.rating}
                    </div>
                  </div>

                  {/* PRODUCT IMAGE */}
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-full object-cover group-hover:scale-[1.06] transition-transform duration-700"
                  />

                  {/* OVERLAY */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#020B2D]/10 via-transparent to-transparent" />

                  {/* DISCOUNT */}
                  <div className="absolute bottom-4 left-4 z-20">

                    <div className="px-3 py-1.5 rounded-full bg-emerald-500 text-white text-xs font-semibold shadow-lg shadow-emerald-500/20">
                      {product.discount} OFF
                    </div>
                  </div>
                </div>

                {/* CONTENT */}
                <div className="p-5">

                  {/* CATEGORY */}
                  <div className="flex items-center justify-between mb-3">

                    <p className="text-[11px] tracking-[0.18em] uppercase font-semibold text-slate-400">
                      {product.category}
                    </p>

                    <div className="px-2 py-1 rounded-md bg-amber-50 text-[10px] font-semibold uppercase tracking-wide text-amber-700 border border-amber-100">
                      {product.tag}
                    </div>
                  </div>

                  {/* TITLE */}
                  <h3 className="text-[18px] leading-snug font-semibold tracking-tight text-[#020B2D] min-h-[52px]">
                    {product.title}
                  </h3>

                  {/* PRICE */}
                  <div className="mt-5 flex items-end gap-3 flex-wrap">

                    <span className="text-[32px] leading-none font-bold tracking-tight text-[#020B2D]">
                      {product.price}
                    </span>

                    <span className="text-sm text-slate-400 line-through mb-[4px]">
                      {product.oldPrice}
                    </span>
                  </div>

                  {/* FOOTER */}
                  <div className="mt-5 flex items-center gap-2">

                    <div className="w-8 h-[2px] bg-emerald-500 rounded-full" />

                    <span className="text-[11px] tracking-[0.18em] uppercase font-semibold text-emerald-600">
                      Curated Product
                    </span>
                  </div>
                </div>

                {/* HOVER GLOW */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-[radial-gradient(circle_at_top_right,_rgba(16,185,129,0.08),transparent_40%)]" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProductsSection;