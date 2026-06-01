import { motion } from "framer-motion";

import {
  ArrowUpRight,
  Package,
} from "lucide-react";

import {
  useNavigate,
} from "react-router-dom";

import useProductStore from "../../store/useProductStore";

const DiscoverySection = () => {

  const navigate =
    useNavigate();

  // PRODUCTS
  const { products } =
    useProductStore();

  const discoveryCards = [
    {
      id: 1,

      title:
        "Sell Your Assets",

      description:
        "Office furniture, laptops, workstations & bulk commercial assets.",

      image:
        "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=1400&auto=format&fit=crop",

      dark: true,

      path: "/sell-assets",

      badge:
        "Commercial Resale",
    },

    {
      id: 2,

      title:
        "Discover Collection",

      description:
        "Curated refurbished office products & workspace essentials.",

      image:
        "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1400&auto=format&fit=crop",

      dark: false,

      path: "/discover",

      badge:
        `${products.length}+ Products`,
    },
  ];

  return (
    <section className="py-10 lg:py-16 bg-white overflow-hidden">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* HEADER */}
        <div className="flex items-end justify-between mb-10">

          <div>

            <p className="text-[11px] tracking-[0.28em] uppercase text-[#43C6B8] font-semibold mb-3">
              DISCOVER
            </p>

            <h2 className="text-3xl lg:text-5xl font-bold tracking-tight text-[#020B2D] leading-tight">
              Buy & Sell
              <br />
              Effortlessly
            </h2>
          </div>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

          {discoveryCards.map(
            (card, index) => (

              <motion.div
                key={card.id}
                initial={{
                  opacity: 0,
                  y: 40,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  delay:
                    index * 0.1,
                }}
                viewport={{
                  once: true,
                }}
                whileHover={{
                  y: -6,
                }}
                onClick={() =>
                  navigate(
                    card.path
                  )
                }
                className={`group relative overflow-hidden rounded-[36px] h-[320px] cursor-pointer ${
                  card.dark
                    ? "bg-[#020B2D]"
                    : "bg-[#F4F8FB]"
                }`}
              >

                {/* IMAGE */}
                <img
                  src={card.image}
                  alt={card.title}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-[1.08] transition-transform duration-700"
                />

                {/* OVERLAY */}
                <div
                  className={`absolute inset-0 ${
                    card.dark
                      ? "bg-gradient-to-r from-[#020B2D]/95 via-[#020B2D]/75 to-[#020B2D]/25"
                      : "bg-gradient-to-r from-white/95 via-white/85 to-white/35"
                  }`}
                />

                {/* GLOW */}
                <div className="absolute top-0 right-0 w-[240px] h-[240px] bg-cyan-400/10 blur-[100px] rounded-full opacity-0 group-hover:opacity-100 transition duration-500" />

                {/* CONTENT */}
                <div className="relative z-10 h-full flex flex-col justify-between p-8 lg:p-10">

                  {/* TOP */}
                  <div>

                    {/* BADGE */}
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-xl border border-white/10 mb-6">

                      <div className="w-2 h-2 rounded-full bg-[#43C6B8]" />

                      <span
                        className={`text-[11px] tracking-[0.25em] uppercase font-bold ${
                          card.dark
                            ? "text-[#43C6B8]"
                            : "text-[#020B2D]"
                        }`}
                      >

                        {card.badge}
                      </span>
                    </div>

                    {/* TITLE */}
                    <h3
                      className={`text-[40px] lg:text-[52px] leading-[1] tracking-tight mb-5 font-black max-w-md ${
                        card.dark
                          ? "text-white"
                          : "text-[#020B2D]"
                      }`}
                    >

                      {card.title}
                    </h3>

                    {/* DESCRIPTION */}
                    <p
                      className={`text-[16px] leading-relaxed max-w-lg ${
                        card.dark
                          ? "text-[#CBD5E1]"
                          : "text-[#64748B]"
                      }`}
                    >

                      {
                        card.description
                      }
                    </p>
                  </div>

                  {/* BOTTOM */}
                  <div className="flex items-center justify-between">

                    {/* CTA */}
                    <div className="flex items-center gap-3">

                      <div
                        className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-all duration-300 group-hover:translate-x-1 ${
                          card.dark
                            ? "bg-white text-[#020B2D]"
                            : "bg-[#020B2D] text-white"
                        }`}
                      >

                        <ArrowUpRight
                          size={20}
                          strokeWidth={
                            2.3
                          }
                        />
                      </div>

                      <span
                        className={`text-lg font-bold ${
                          card.dark
                            ? "text-white"
                            : "text-[#020B2D]"
                        }`}
                      >

                        Explore Now
                      </span>
                    </div>

                    {/* PRODUCT COUNT */}
                    {!card.dark && (

                      <div className="hidden md:flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-slate-200 shadow-sm">

                        <Package
                          size={16}
                          className="text-cyan-600"
                        />

                        <span className="text-sm font-semibold text-[#020B2D]">

                          {
                            products.length
                          }{" "}
                          Active Listings
                        </span>
                      </div>
                    )}
                  </div>
                </div>

                {/* BORDER */}
                <div className="absolute inset-0 rounded-[36px] border border-black/5 pointer-events-none" />
              </motion.div>
            )
          )}
        </div>
      </div>
    </section>
  );
};

export default DiscoverySection;