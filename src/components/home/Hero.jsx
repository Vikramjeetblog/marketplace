import { motion } from "framer-motion";
import {Award,ShieldCheck, DollarSign} from "lucide-react";
const Hero = () => (

  <div className="relative bg-slate-900 overflow-hidden text-white pt-16 pb-24 lg:pt-28 lg:pb-36">
    <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-emerald-700 via-slate-900 to-slate-950"></div>
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col lg:flex-row items-center gap-12">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="flex-1 text-center lg:text-left"
      >
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-sm font-bold mb-6 tracking-wide shadow-sm">
          <Award size={16} /> Serving Smart Buyers & Sellers Since 2002
        </div>
        <h1 className="text-5xl lg:text-6xl font-extrabold leading-tight mb-4">
          North Bengal’s <span className="text-emerald-500">Trusted</span>{" "}
          Recommerce Platform
        </h1>
        <h2 className="text-2xl lg:text-3xl font-semibold text-slate-300 mb-6">
          23 Years of Trust & Value.
        </h2>
        <p className="text-lg text-slate-400 mb-10 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
          Sell your pre-owned products hassle-free and explore curated deals at
          the best value. We evaluate, we buy, and we curate for you.
        </p>
        <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
          <a
            href="#sell"
            className="w-full sm:w-auto bg-emerald-600 hover:bg-emerald-500 text-white px-8 py-4 rounded-full font-bold text-lg shadow-xl shadow-emerald-600/20 transition-all transform hover:-translate-y-1 text-center cursor-pointer"
          >
            Sell Your Product
          </a>
          <a
  href="#products"
  className="w-full sm:w-auto bg-white text-slate-900 hover:bg-slate-100 px-8 py-4 rounded-full font-bold text-lg shadow-xl transition-all transform hover:-translate-y-1 flex items-center justify-center gap-2 text-center"
>
  Explore Products
</a>
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="flex-1 w-full relative"
      >
        <img
          src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1000&q=80"
          alt="Trusted Recommerce"
          className="rounded-3xl shadow-2xl border-4 border-slate-800 object-cover h-[450px] w-full"
        />
        {/* Floating UI Cards */}
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ repeat: Infinity, duration: 4 }}
          className="absolute -top-6 -left-6 bg-white text-slate-900 p-4 rounded-2xl shadow-xl flex items-center gap-3 border border-slate-100 hidden md:flex"
        >
          <div className="w-10 h-10 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center">
            <ShieldCheck size={20} />
          </div>
          <div>
            <p className="text-xs text-slate-500 font-semibold">
              Quality Check
            </p>
            <p className="font-bold text-sm">Curated by RUPANTAR</p>
          </div>
        </motion.div>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 5 }}
          className="absolute -bottom-6 -right-6 bg-slate-900 text-white p-4 rounded-2xl shadow-2xl flex items-center gap-3 border border-slate-700 hidden md:flex"
        >
          <div className="w-10 h-10 bg-amber-500/20 text-amber-400 rounded-full flex items-center justify-center">
            <DollarSign size={20} />
          </div>
          <div>
            <p className="text-xs text-slate-400 font-semibold">Evaluation</p>
            <p className="font-bold text-sm">Best Value Offered</p>
          </div>
        </motion.div>
      </motion.div>
    </div>
  </div>
);

export default Hero