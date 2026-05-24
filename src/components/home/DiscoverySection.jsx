import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const discoveryCards = [
  {
    id: 1,
    title: "Sell Your Assets",
    description:
      "Office furniture, laptops, workstations & bulk commercial assets.",
    image:
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=1400&auto=format&fit=crop",
    dark: true,
    path: "/sell-assets",
  },
  {
    id: 2,
    title: "Discover Collection",
    description:
      "Curated refurbished office products & workspace essentials.",
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1400&auto=format&fit=crop",
    dark: false,
    path: "/discover",
  },
];

const DiscoverySection = () => {
  const navigate = useNavigate();

  return (
    <section className="py-10 lg:py-14 bg-white">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* SECTION HEADER */}
        <div className="flex items-end justify-between mb-8">

          <div>
            <p className="text-[11px] tracking-[0.28em] uppercase text-[#43C6B8] font-semibold mb-3">
              DISCOVER
            </p>

            <h2 className="text-3xl lg:text-4xl font-semibold tracking-tight text-[#020B2D]">
              Buy & Sell Effortlessly
            </h2>
          </div>
        </div>

        {/* CARDS */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">

          {discoveryCards.map((card) => (
            <motion.div
              key={card.id}
              whileHover={{ y: -3 }}
              transition={{ duration: 0.25 }}
              onClick={() => navigate(card.path)}
              className={`group relative overflow-hidden rounded-[28px] h-[240px] cursor-pointer ${
                card.dark
                  ? "bg-[#020B2D]"
                  : "bg-[#F4F8FB]"
              }`}
            >
              {/* IMAGE */}
              <img
                src={card.image}
                alt={card.title}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-700"
              />

              {/* OVERLAY */}
              <div
                className={`absolute inset-0 ${
                  card.dark
                    ? "bg-gradient-to-r from-[#020B2D]/90 via-[#020B2D]/70 to-[#020B2D]/20"
                    : "bg-gradient-to-r from-white/92 via-white/80 to-white/30"
                }`}
              />

              {/* CONTENT */}
              <div className="relative z-10 h-full flex flex-col justify-between p-8">

                {/* TOP */}
                <div className="pt-1">

                  <p
                    className={`text-[11px] tracking-[0.28em] uppercase mb-5 font-semibold ${
                      card.dark
                        ? "text-[#43C6B8]"
                        : "text-[#43C6B8]"
                    }`}
                  >
                    RUPANTAR
                  </p>

                  <h3
                    className={`text-[34px] lg:text-[38px] leading-[1.05] tracking-tight mb-4 font-bold max-w-sm ${
                      card.dark
                        ? "text-white"
                        : "text-[#020B2D]"
                    }`}
                  >
                    {card.title}
                  </h3>

                  <p
                    className={`text-[15px] leading-relaxed max-w-md ${
                      card.dark
                        ? "text-[#CBD5E1]"
                        : "text-[#64748B]"
                    }`}
                  >
                    {card.description}
                  </p>
                </div>

                {/* BOTTOM */}
                <div className="flex items-center justify-between">

                  <span
                    className={`text-sm font-semibold ${
                      card.dark
                        ? "text-white"
                        : "text-[#020B2D]"
                    }`}
                  >
                    Explore
                  </span>

                  <div
                    className={`w-11 h-11 rounded-full flex items-center justify-center transition-all duration-300 group-hover:translate-x-1 ${
                      card.dark
                        ? "bg-white text-[#020B2D]"
                        : "bg-[#020B2D] text-white"
                    }`}
                  >
                    <ArrowUpRight size={18} strokeWidth={2.3} />
                  </div>
                </div>
              </div>

              {/* BORDER */}
              <div className="absolute inset-0 rounded-[28px] border border-black/5 pointer-events-none" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DiscoverySection;