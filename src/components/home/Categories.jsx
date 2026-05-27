import { motion } from "framer-motion";

import {
  ArrowRight,
} from "lucide-react";

import {
  useNavigate,
} from "react-router-dom";

import useProductStore from "../../store/useProductStore";

const CategoriesSection = () => {

  const navigate =
    useNavigate();

  // PRODUCTS
  const { products } =
    useProductStore();

  // CREATE DYNAMIC CATEGORIES
  const categories =
    Object.values(

      products.reduce(
        (acc, product) => {

          const key =
            product.category;

          if (!acc[key]) {

            acc[key] = {

              id: key,

              title:
                product.category,

              image:
                product.images?.[0],

              count: 1,
            };

          } else {

            acc[key].count += 1;
          }

          return acc;

        },
        {}
      )
    );

  return (
    <section className="py-16 lg:py-20 bg-white overflow-hidden">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* HEADER */}
        <div className="flex items-end justify-between mb-12">

          <div>

            <p className="text-[11px] tracking-[0.28em] uppercase text-emerald-600 font-semibold mb-3">
              CATEGORIES
            </p>

            <h2 className="text-3xl lg:text-5xl font-semibold tracking-tight text-[#020B2D]">
              Browse Categories
            </h2>
          </div>

          {/* VIEW ALL */}
          <button
            onClick={() =>
              navigate("/discover")
            }
            className="hidden md:flex items-center gap-2 text-sm font-semibold text-emerald-600 hover:text-emerald-700 transition-colors"
          >

            View All

            <ArrowRight
              size={16}
            />
          </button>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

          {categories.map(
            (
              category,
              index
            ) => (

              <motion.div
                key={category.id}
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
                    index * 0.05,
                }}
                viewport={{
                  once: true,
                }}
                whileHover={{
                  y: -8,
                }}
                onClick={() =>
                  navigate(
                    `/discover?category=${encodeURIComponent(
                      category.title
                    )}`
                  )
                }
                className="group cursor-pointer"
              >

                <div className="relative rounded-[30px] overflow-hidden bg-white border border-slate-200 hover:border-emerald-200 hover:shadow-[0_20px_70px_rgba(2,19,59,0.10)] transition-all duration-500">

                  {/* IMAGE */}
                  <div className="relative h-[290px] overflow-hidden bg-gradient-to-br from-[#eef7f4] via-white to-[#f4f7fb]">

                    {/* TOP TAG */}
                    <div className="absolute top-4 left-4 z-20">

                      <div className="px-4 py-2 rounded-full bg-white/90 backdrop-blur-md border border-slate-200 shadow-sm">

                        <span className="text-[10px] font-bold tracking-[0.18em] uppercase text-emerald-700">

                          CATEGORY
                        </span>
                      </div>
                    </div>

                    {/* PRODUCT COUNT */}
                    <div className="absolute top-4 right-4 z-20">

                      <div className="px-3 py-2 rounded-full bg-[#02133B] text-white text-xs font-bold shadow-lg">

                        {
                          category.count
                        }{" "}
                        Products
                      </div>
                    </div>

                    {/* IMAGE */}
                    <img
                      src={
                        category.image
                      }
                      alt={
                        category.title
                      }
                      className="w-full h-full object-cover group-hover:scale-[1.08] transition-transform duration-700"
                    />

                    {/* OVERLAY */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#020B2D]/20 via-transparent to-transparent" />
                  </div>

                  {/* CONTENT */}
                  <div className="p-6">

                    <h3 className="text-[22px] font-bold tracking-tight text-[#020B2D] leading-snug">

                      {
                        category.title
                      }
                    </h3>

                    {/* FOOTER */}
                    <div className="mt-6 flex items-center justify-between">

                      <div className="flex items-center gap-2">

                        <div className="w-8 h-[2px] rounded-full bg-emerald-500" />

                        <span className="text-[11px] tracking-[0.18em] uppercase font-semibold text-emerald-600">

                          Explore Category
                        </span>
                      </div>

                      {/* CTA */}
                      <button
                        onClick={(
                          e
                        ) => {

                          e.preventDefault();

                          e.stopPropagation();

                          navigate(
                            `/discover?category=${encodeURIComponent(
                              category.title
                            )}`
                          );
                        }}
                        className="w-11 h-11 rounded-2xl bg-gradient-to-r from-[#02133B] to-[#0EA5E9] text-white flex items-center justify-center hover:scale-110 transition-all shadow-lg"
                      >

                        <ArrowRight
                          size={18}
                        />
                      </button>
                    </div>
                  </div>

                  {/* HOVER GLOW */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-[radial-gradient(circle_at_top_right,_rgba(16,185,129,0.08),transparent_45%)]" />
                </div>
              </motion.div>
            )
          )}
        </div>
      </div>
    </section>
  );
};

export default CategoriesSection;