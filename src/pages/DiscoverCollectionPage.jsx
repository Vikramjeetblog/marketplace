import React, {
  useEffect,
  useState,
} from "react";

import { motion } from "framer-motion";

import {
  ArrowRight,
  Flame,
  TrendingUp,
} from "lucide-react";

import {
  useNavigate,
  useSearchParams,
} from "react-router-dom";

import useProductStore from "../store/useProductStore";

const flashSale = [
  {
    id: 7,
    title: "MacBook Pro Refurbished",
    price: "₹54,999",
    image:
      "https://images.unsplash.com/photo-1517336714739-489689fd1ca8?q=80&w=1200&auto=format&fit=crop",
  },

  {
    id: 3,
    title: "Conference Office Chair",
    price: "₹5,499",
    image:
      "https://images.unsplash.com/photo-1582582621959-48d27397dc69?q=80&w=1200&auto=format&fit=crop",
  },

  {
    id: 6,
    title: "Dual Monitor Office Setup",
    price: "₹19,999",
    image:
      "https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=1200&auto=format&fit=crop",
  },
];

export default function DiscoverCollectionPage() {

  const navigate =
    useNavigate();

  // PRODUCTS FROM STORE
  const { products } =
    useProductStore();

  // URL PARAMS
  const [searchParams] =
    useSearchParams();

  const selectedCategory =
    searchParams.get(
      "category"
    );

  // FILTER PRODUCTS
  const filteredProducts =
    selectedCategory
      ? products.filter(
          (product) =>
            product.category ===
            selectedCategory
        )
      : products;

  // COUNTDOWN
  const [timeLeft, setTimeLeft] =
    useState(36000);

  useEffect(() => {

    const timer = setInterval(() => {

      setTimeLeft((prev) =>
        prev > 0
          ? prev - 1
          : 0
      );

    }, 1000);

    return () =>
      clearInterval(timer);

  }, []);

  const flashHours = Math.floor(
    timeLeft / 3600
  );

  const flashMinutes = Math.floor(
    (timeLeft % 3600) / 60
  );

  const flashSeconds =
    timeLeft % 60;

  return (
    <div className="min-h-screen bg-[#F4F7FB] overflow-hidden">

      {/* HERO */}
      <section className="px-4 md:px-8 lg:px-14 pt-6 lg:pt-10">

        <div className="relative overflow-hidden rounded-[42px] min-h-[720px] bg-[#02133B]">

          {/* BACKGROUND */}
          <div className="absolute inset-0">

            <img
              src="https://images.unsplash.com/photo-1497366412874-3415097a27e7?q=80&w=2000&auto=format&fit=crop"
              alt=""
              className="w-full h-full object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-r from-[#02133B]/95 via-[#02133B]/75 to-[#02133B]/30" />
          </div>

          {/* CONTENT */}
          <div className="relative z-10 grid lg:grid-cols-2 gap-14 items-center px-8 py-14 lg:px-16 lg:py-20">

            {/* LEFT */}
            <div className="max-w-2xl">

              <div className="inline-flex items-center gap-2 bg-white/10 border border-white/10 backdrop-blur-xl px-5 py-2 rounded-full mb-8">

                <div className="h-2 w-2 rounded-full bg-cyan-400 animate-pulse" />

                <span className="uppercase tracking-[0.25em] text-xs text-cyan-200 font-semibold">
                  Rupantar Collection
                </span>
              </div>

              <h1 className="text-white text-5xl sm:text-6xl lg:text-7xl font-black leading-[0.92] mb-8">
                Smart
                <br />
                Refurbished
                <br />
                Workspace
              </h1>

              <p className="text-slate-200 text-lg lg:text-xl leading-relaxed mb-10 max-w-xl">
                Premium refurbished laptops, desktops, office chairs &
                workspace essentials with warranty and unbeatable pricing.
              </p>

              {/* BUTTONS */}
              <div className="flex flex-wrap gap-4">

                <button
                  onClick={() =>
                    document
                      .getElementById(
                        "products-section"
                      )
                      ?.scrollIntoView({
                        behavior:
                          "smooth",
                      })
                  }
                  className="group bg-gradient-to-r from-cyan-400 to-blue-500 hover:scale-105 text-white px-8 py-4 rounded-2xl font-bold flex items-center gap-3 transition-all duration-300"
                >

                  Explore Products

                  <ArrowRight
                    size={18}
                  />
                </button>

                <button
                  onClick={() =>
                    document
                      .getElementById(
                        "flash-sale"
                      )
                      ?.scrollIntoView({
                        behavior:
                          "smooth",
                      })
                  }
                  className="bg-white/10 hover:bg-white/20 border border-white/10 backdrop-blur-xl text-white px-8 py-4 rounded-2xl font-semibold transition-all duration-300"
                >
                  Flash Sale
                </button>
              </div>
            </div>

            {/* RIGHT */}
            <div className="relative">

              <img
                src="https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=1600&auto=format&fit=crop"
                alt=""
                className="h-[560px] w-full object-cover rounded-[38px]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* PRODUCTS */}
      <section
        id="products-section"
        className="px-4 md:px-8 lg:px-14 py-20"
      >

        {/* HEADER */}
        <div className="flex items-center justify-between mb-12">

          <div>

            <div className="flex items-center gap-2 mb-2">

              <TrendingUp
                className="text-cyan-500"
                size={18}
              />

              <span className="uppercase text-sm tracking-[0.25em] text-cyan-500 font-semibold">

                {selectedCategory
                  ? selectedCategory
                  : "Top Selling"}
              </span>
            </div>

            <h2 className="text-4xl lg:text-5xl font-black text-[#02133B]">

              {selectedCategory
                ? `${selectedCategory} Collection`
                : "Office Products Collection"}
            </h2>
          </div>
        </div>

        {/* EMPTY */}
        {filteredProducts.length ===
          0 && (

          <div className="bg-white rounded-[36px] border border-slate-200 p-16 text-center">

            <h2 className="text-4xl font-black text-[#02133B]">
              No Products Found
            </h2>

            <p className="text-slate-500 mt-4">
              No products available in this category.
            </p>
          </div>
        )}

        {/* GRID */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-7">

          {filteredProducts.map(
            (
              product,
              index
            ) => (

              <motion.div
                key={product.id}
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
                onClick={() =>
                  navigate(
                    `/product/${product.id}`
                  )
                }
                className="group cursor-pointer bg-white rounded-[30px] overflow-hidden border border-slate-200 hover:-translate-y-2 hover:shadow-[0_20px_70px_rgba(2,19,59,0.12)] transition-all duration-500"
              >

                {/* IMAGE */}
                <div className="relative bg-gradient-to-br from-[#E0F2FE] via-[#ECFEFF] to-[#DCFCE7] p-7 flex items-center justify-center h-[280px] overflow-hidden">

                  <div className="absolute top-4 left-4 bg-[#02133B] text-white text-xs px-3 py-2 rounded-full font-semibold">

                    Refurbished
                  </div>

                  <div className="absolute top-4 right-4 bg-green-500 text-white text-xs px-3 py-2 rounded-full font-bold">

                    -{product.discount}%
                  </div>

                  <img
                    src={
                      product.images?.[0]
                    }
                    alt={
                      product.title
                    }
                    className="h-[210px] w-full object-contain group-hover:scale-110 transition duration-500"
                  />
                </div>

                {/* CONTENT */}
                <div className="p-5">

                  <span className="inline-flex bg-green-100 text-green-700 text-sm px-3 py-1 rounded-md mb-3 font-medium">

                    {product.save}
                  </span>

                  <h3 className="text-[22px] font-bold leading-snug mb-3 text-[#02133B] line-clamp-2">

                    {product.title}
                  </h3>

                  <p className="text-slate-500 text-sm mb-4">

                    {product.category}
                  </p>

                  {/* PRICE */}
                  <div className="flex items-end gap-3 flex-wrap mb-6">

                    <span className="text-3xl font-black text-[#02133B]">

                      ₹{product.price}
                    </span>

                    <span className="line-through text-slate-400 text-lg">

                      ₹
                      {
                        product.originalPrice
                      }
                    </span>
                  </div>

                  {/* BUTTON */}
                  <button
                    onClick={(e) => {

                      e.preventDefault();

                      e.stopPropagation();

                      navigate(
                        `/product/${product.id}`
                      );
                    }}
                    className="w-full bg-gradient-to-r from-[#02133B] to-[#0EA5E9] hover:scale-[1.02] transition-all text-white py-3.5 rounded-2xl font-semibold flex items-center justify-center gap-2 shadow-lg"
                  >

                    View Product

                    <ArrowRight
                      size={18}
                    />
                  </button>
                </div>
              </motion.div>
            )
          )}
        </div>
      </section>

      {/* FLASH SALE */}
      <section
        id="flash-sale"
        className="px-4 md:px-8 lg:px-14 pb-20"
      >

        <div className="bg-gradient-to-r from-[#02133B] via-[#0A254F] to-[#0EA5E9] rounded-[42px] overflow-hidden relative">

          <div className="relative p-8 lg:p-14">

            {/* HEADER */}
            <div className="flex flex-wrap items-center justify-between gap-6 mb-12">

              <div>

                <div className="flex items-center gap-2 mb-3">

                  <Flame
                    className="text-orange-400"
                    size={20}
                  />

                  <span className="uppercase text-sm tracking-[0.25em] text-orange-300 font-semibold">
                    Flash Deals
                  </span>
                </div>

                <h2 className="text-4xl lg:text-6xl font-black text-white leading-tight">
                  Limited Time
                  <br />
                  Offers
                </h2>
              </div>

              {/* TIMER */}
              <div className="bg-white/10 border border-white/10 backdrop-blur-xl rounded-[28px] px-8 py-6">

                <p className="text-cyan-100 text-sm uppercase tracking-[0.2em] mb-3">
                  Offer Ends In
                </p>

                <div className="flex items-center gap-4">

                  {[
                    flashHours,
                    flashMinutes,
                    flashSeconds,
                  ].map(
                    (
                      time,
                      index
                    ) => (

                      <div
                        key={index}
                        className="w-[78px] h-[78px] rounded-2xl bg-white text-[#02133B] flex items-center justify-center text-3xl font-black shadow-xl"
                      >

                        {String(
                          time
                        ).padStart(
                          2,
                          "0"
                        )}
                      </div>
                    )
                  )}
                </div>
              </div>
            </div>

            {/* FLASH GRID */}
            <div className="grid lg:grid-cols-3 gap-7">

              {flashSale.map(
                (item) => (

                  <div
                    key={item.id}
                    onClick={() =>
                      navigate(
                        `/product/${item.id}`
                      )
                    }
                    className="group bg-white rounded-[34px] overflow-hidden hover:-translate-y-2 hover:shadow-[0_25px_70px_rgba(0,0,0,0.35)] transition-all duration-500 cursor-pointer"
                  >

                    <div className="h-[300px] overflow-hidden">

                      <img
                        src={
                          item.image
                        }
                        alt=""
                        className="h-full w-full object-cover group-hover:scale-110 transition duration-700"
                      />
                    </div>

                    <div className="p-7">

                      <h3 className="text-3xl font-black mb-4 text-[#02133B]">

                        {item.title}
                      </h3>

                      <span className="text-4xl font-black text-[#02133B]">

                        {item.price}
                      </span>

                      <button className="w-full h-14 mt-6 rounded-2xl bg-gradient-to-r from-[#02133B] to-[#0EA5E9] text-white font-semibold flex items-center justify-center gap-3">

                        View Product

                        <ArrowRight
                          size={18}
                        />
                      </button>
                    </div>
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}