import {Search} from "lucide-react";
import {categories} from "../../data/homeData";
import {motion} from "framer-motion";
const SearchAndCategories = () => (
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
    <div className="bg-white rounded-3xl p-6 sm:p-10 shadow-xl border border-slate-100">
      <div className="relative mb-10 max-w-4xl mx-auto">
        <input
          type="text"
          placeholder="Search products, brands, categories..."
          className="w-full bg-slate-50 border border-slate-200 text-slate-800 rounded-full py-5 pl-14 pr-6 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent text-lg transition-all shadow-inner"
        />
        <Search
          className="absolute left-6 top-1/2 transform -translate-y-1/2 text-slate-400"
          size={24}
        />
      </div>

      <div className="flex flex-wrap justify-center gap-6 sm:gap-10">
        {categories.map((cat, idx) => (
          <motion.div
            key={idx}
            whileHover={{ scale: 1.05, y: -5 }}
            className="flex flex-col items-center gap-3 cursor-pointer group w-20 sm:w-24"
          >
            <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center group-hover:bg-emerald-50 group-hover:border-emerald-200 group-hover:text-emerald-600 transition-all shadow-sm">
              <cat.icon
                size={32}
                className="text-slate-500 group-hover:text-emerald-600 transition-colors"
              />
            </div>
            <span className="text-xs sm:text-sm font-semibold text-slate-700 group-hover:text-emerald-700 text-center">
              {cat.name}
            </span>
          </motion.div>
        ))}
      </div>
    </div>
  </div>
);
export default SearchAndCategories;