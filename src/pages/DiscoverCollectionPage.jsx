import { motion } from "framer-motion";
import {
  ArrowRight,
  Flame,
  TrendingUp,
  ShoppingCart,
  Laptop,
  Monitor,
  Sofa,
  BadgeCheck,
} from "lucide-react";

// IMPORT LAYOUT COMPONENTS
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const products = [
  {
    id: 1,
    title: "Dell OptiPlex Desktop Set",
    category: "Refurbished Desktop",
    rating: 4.7,
    reviews: 324,
    discount: "-42%",
    save: "₹12,500 OFF",
    price: "₹17,999",
    oldPrice: "₹30,499",
    image:
      "https://images.unsplash.com/photo-1593642702821-c8da6771f0c6?q=80&w=1200&auto=format&fit=crop",
    icon: <Monitor size={16} />,
  },
  {
    id: 2,
    title: "HP EliteBook Office Laptop",
    category: "Business Laptop",
    rating: 4.9,
    reviews: 198,
    discount: "-35%",
    save: "₹18,000 OFF",
    price: "₹33,999",
    oldPrice: "₹51,999",
    image:
      "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?q=80&w=1200&auto=format&fit=crop",
    icon: <Laptop size={16} />,
  },
  {
    id: 3,
    title: "Ergonomic Office Chair",
    category: "Office Furniture",
    rating: 4.8,
    reviews: 421,
    discount: "-27%",
    save: "₹2,996 OFF",
    price: "₹7,999",
    oldPrice: "₹10,995",
    image:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1200&auto=format&fit=crop",
    icon: <Sofa size={16} />,
  },
  {
    id: 4,
    title: "Premium Workspace Table",
    category: "Office Desk",
    rating: 4.6,
    reviews: 122,
    discount: "-31%",
    save: "₹5,100 OFF",
    price: "₹10,499",
    oldPrice: "₹15,599",
    image:
      "https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?q=80&w=1200&auto=format&fit=crop",
    icon: <Monitor size={16} />,
  },
  {
    id: 5,
    title: "Executive Visitor Chair",
    category: "Reception Furniture",
    rating: 4.5,
    reviews: 82,
    discount: "-22%",
    save: "₹1,850 OFF",
    price: "₹6,499",
    oldPrice: "₹8,349",
    image:
      "https://images.unsplash.com/photo-1497366811353-6870744d04b2?q=80&w=1200&auto=format&fit=crop",
    icon: <Sofa size={16} />,
  },
  {
    id: 6,
    title: "Lenovo ThinkCentre Setup",
    category: "Office Computer",
    rating: 4.8,
    reviews: 276,
    discount: "-39%",
    save: "₹9,200 OFF",
    price: "₹13,999",
    oldPrice: "₹23,199",
    image:
      "https://images.unsplash.com/photo-1547082299-de196ea013d6?q=80&w=1200&auto=format&fit=crop",
    icon: <Monitor size={16} />,
  },
  {
    id: 7,
    title: "Apple MacBook Air M1",
    category: "Refurbished Laptop",
    rating: 4.9,
    reviews: 510,
    discount: "-25%",
    save: "₹21,000 OFF",
    price: "₹59,999",
    oldPrice: "₹80,999",
    image:
      "https://images.unsplash.com/photo-1517336714739-489689fd1ca8?q=80&w=1200&auto=format&fit=crop",
    icon: <Laptop size={16} />,
  },
  {
    id: 8,
    title: "Premium Gaming Chair",
    category: "Office Chair",
    rating: 4.7,
    reviews: 219,
    discount: "-29%",
    save: "₹4,200 OFF",
    price: "₹9,499",
    oldPrice: "₹13,699",
    image:
      "https://images.unsplash.com/photo-1580480055273-228ff5388ef8?q=80&w=1200&auto=format&fit=crop",
    icon: <Sofa size={16} />,
  },
];

const flashSale = [
  {
    id: 1,
    title: "MacBook Pro Refurbished",
    price: "₹54,999",
    image:
      "https://images.unsplash.com/photo-1517336714739-489689fd1ca8?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 2,
    title: "Conference Office Chair",
    price: "₹5,499",
    image:
      "https://images.unsplash.com/photo-1582582621959-48d27397dc69?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 3,
    title: "Dual Monitor Office Setup",
    price: "₹19,999",
    image:
      "https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=1200&auto=format&fit=crop",
  },
];

export default function DiscoverCollectionPage() {
  return (
    <>
      {/* NAVBAR */}
      <Navbar />

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

            {/* GLOW EFFECTS */}
            <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-cyan-500/20 blur-[140px] rounded-full" />
            <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-green-500/20 blur-[120px] rounded-full" />

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
                  workspace essentials with warranty, quality checks and
                  unbeatable pricing for modern offices.
                </p>

                {/* BUTTONS */}
                <div className="flex flex-wrap gap-4 mb-12">

                  <button
                    onClick={() =>
                      document
                        .getElementById("products-section")
                        ?.scrollIntoView({ behavior: "smooth" })
                    }
                    className="group bg-gradient-to-r from-cyan-400 to-blue-500 hover:scale-105 text-white px-8 py-4 rounded-2xl font-bold flex items-center gap-3 transition-all duration-300 shadow-[0_15px_40px_rgba(34,211,238,0.35)]"
                  >
                    Explore Products

                    <ArrowRight
                      size={18}
                      className="group-hover:translate-x-1 transition"
                    />
                  </button>

                  <button
                    onClick={() =>
                      document
                        .getElementById("flash-sale")
                        ?.scrollIntoView({ behavior: "smooth" })
                    }
                    className="bg-white/10 hover:bg-white/20 border border-white/10 backdrop-blur-xl text-white px-8 py-4 rounded-2xl font-semibold transition-all duration-300"
                  >
                    Flash Sale
                  </button>
                </div>

                {/* TAGS */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                  {[
                    {
                      title: "Warranty",
                      color: "from-cyan-400 to-blue-500",
                    },
                    {
                      title: "Quality Check",
                      color: "from-green-400 to-emerald-500",
                    },
                    {
                      title: "Eco Friendly",
                      color: "from-yellow-400 to-orange-500",
                    },
                    {
                      title: "Top Rated",
                      color: "from-pink-400 to-purple-500",
                    },
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="bg-white/10 border border-white/10 backdrop-blur-xl rounded-2xl p-4"
                    >
                      <div
                        className={`h-2 w-16 rounded-full bg-gradient-to-r ${item.color} mb-3`}
                      />

                      <p className="text-white text-sm font-medium">
                        {item.title}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* RIGHT */}
              <div className="relative flex justify-center lg:justify-end">

                <div className="absolute inset-0 bg-cyan-500/20 blur-[120px] rounded-full" />

                <div className="relative w-full max-w-[620px]">

                  <img
                    src="https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=1600&auto=format&fit=crop"
                    alt=""
                    className="relative z-10 h-[560px] w-full object-cover rounded-[38px] border border-white/10 shadow-[0_25px_80px_rgba(0,0,0,0.45)]"
                  />

                  {/* FLOATING CARD */}
                  <div className="absolute -bottom-8 left-6 bg-white rounded-[30px] p-6 shadow-[0_20px_60px_rgba(0,0,0,0.25)] z-20 max-w-[320px]">

                    <div className="flex items-center gap-2 mb-3">
                      <div className="h-3 w-3 rounded-full bg-green-500" />

                      <span className="text-slate-500 text-sm font-medium">
                        Verified Refurbished
                      </span>
                    </div>

                    <h3 className="text-4xl font-black text-[#02133B] leading-tight">
                      Up to 70% OFF
                    </h3>

                    <p className="text-slate-500 mt-2">
                      Certified office products with warranty included.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* PRODUCTS */}
        <section
          id="products-section"
          className="px-4 md:px-8 lg:px-14 py-20"
        >

          <div className="flex items-center justify-between mb-12">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <TrendingUp className="text-cyan-500" size={18} />

                <span className="uppercase text-sm tracking-[0.25em] text-cyan-500 font-semibold">
                  Top Selling
                </span>
              </div>

              <h2 className="text-4xl lg:text-5xl font-black text-[#02133B]">
                Office Products Collection
              </h2>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-7">
            {products.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                viewport={{ once: true }}
                className="group bg-white rounded-[30px] overflow-hidden border border-slate-200 hover:shadow-[0_20px_70px_rgba(2,19,59,0.12)] transition-all duration-500"
              >

                <div className="relative bg-gradient-to-br from-[#E0F2FE] via-[#ECFEFF] to-[#DCFCE7] p-7 flex items-center justify-center h-[280px] overflow-hidden">

                  <div className="absolute top-4 left-4 bg-[#02133B] text-white text-xs px-3 py-2 rounded-full flex items-center gap-1 font-semibold">
                    {product.icon}
                    Refurbished
                  </div>

                  <div className="absolute top-4 right-4 bg-green-500 text-white text-xs px-3 py-2 rounded-full font-bold">
                    {product.discount}
                  </div>

                  <img
                    src={product.image}
                    alt={product.title}
                    className="h-[210px] w-full object-contain group-hover:scale-110 transition duration-500"
                  />
                </div>

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

                  <div className="flex items-center gap-2 mb-5">
                    <div className="bg-[#FFF7ED] border border-orange-200 px-2 py-1 rounded-md flex items-center gap-1">
                      <span className="text-sm font-bold">
                        {product.rating}
                      </span>

                      <span className="text-yellow-500">★</span>
                    </div>

                    <span className="text-sm text-slate-500">
                      ({product.reviews} reviews)
                    </span>
                  </div>

                  <div className="flex items-end gap-3 flex-wrap mb-6">
                    <span className="text-3xl font-black text-[#02133B]">
                      {product.price}
                    </span>

                    <span className="line-through text-slate-400 text-lg">
                      {product.oldPrice}
                    </span>
                  </div>

                  <button className="w-full bg-gradient-to-r from-[#02133B] to-[#0EA5E9] hover:scale-[1.02] transition-all text-white py-3.5 rounded-2xl font-semibold flex items-center justify-center gap-2 shadow-lg">
                    <ShoppingCart size={18} />
                    Add To Cart
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* FLASH SALE */}
        <section
          id="flash-sale"
          className="px-4 md:px-8 lg:px-14 pb-20"
        >
          <div className="bg-gradient-to-r from-[#02133B] via-[#0A254F] to-[#0EA5E9] rounded-[42px] overflow-hidden relative">

            <div className="relative p-8 lg:p-14">

              <div className="flex flex-wrap items-center justify-between gap-5 mb-10">

                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <Flame className="text-orange-400" size={20} />

                    <span className="uppercase text-sm tracking-[0.25em] text-orange-300 font-semibold">
                      Flash Deals
                    </span>
                  </div>

                  <h2 className="text-4xl lg:text-5xl font-black text-black">
                    Limited Time Offers
                  </h2>
                </div>

                <div className="bg-green/10 border border-green/10 backdrop-blur-xl px-6 py-4 rounded-2xl text-green font-semibold">
                  Ends In : 09h : 22m : 10s
                </div>
              </div>

              <div className="grid lg:grid-cols-3 gap-6">
                {flashSale.map((item) => (
                  <div
                    key={item.id}
                    className="bg-white rounded-[30px] overflow-hidden group hover:-translate-y-2 transition duration-500"
                  >
                    <div className="overflow-hidden bg-gradient-to-br from-cyan-100 to-green-100">
                      <img
                        src={item.image}
                        alt=""
                        className="h-[260px] w-full object-cover group-hover:scale-110 transition duration-700"
                      />
                    </div>

                    <div className="p-6">
                      <h3 className="text-2xl font-bold mb-4 text-[#02133B]">
                        {item.title}
                      </h3>

                      <div className="flex items-center justify-between">
                        <span className="text-3xl font-black text-[#02133B]">
                          {item.price}
                        </span>

                        <button className="h-12 w-12 rounded-full bg-gradient-to-r from-[#02133B] to-[#0EA5E9] text-white flex items-center justify-center hover:rotate-45 transition">
                          <ArrowRight size={18} />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

      
      </div>

      {/* FOOTER */}
      <Footer />
    </>
  );
}