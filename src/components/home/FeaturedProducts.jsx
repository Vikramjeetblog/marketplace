import {ArrowRight,ShieldCheck,Heart,MapPin} from "lucide-react";
import {products} from "../../data/homeData";
import {motion} from "framer-motion";
const FeaturedProducts = () => (
  <div  id="products"className="bg-slate-50 py-24">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
        <div>
          <h2 className="text-3xl font-bold text-slate-900 mb-2">
            Featured Products
          </h2>
          <p className="text-slate-500">
            Premium pre-owned items strictly evaluated and curated for you.
          </p>
        </div>
        <a
          href="#"
          className="flex text-emerald-600 font-semibold hover:text-emerald-700 items-center gap-1"
        >
          Explore All <ArrowRight size={18} />
        </a>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((product, idx) => (
          <motion.div
            key={product.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            className="bg-white rounded-3xl overflow-hidden shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] hover:shadow-2xl transition-all border border-slate-100 group relative"
          >
            <div className="relative h-64 overflow-hidden bg-slate-100">
              <img
                src={product.img}
                alt={product.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute top-4 left-4 bg-slate-900/90 backdrop-blur px-3 py-1.5 rounded-full flex items-center gap-1.5 shadow-sm border border-slate-700">
                <ShieldCheck size={14} className="text-emerald-400" />
                <span className="text-[10px] sm:text-xs font-bold text-white tracking-wide uppercase">
                  Curated by RUPANTAR
                </span>
              </div>
              <button className="absolute top-4 right-4 bg-white/90 backdrop-blur p-2.5 rounded-full text-slate-400 hover:text-red-500 hover:bg-white transition-all shadow-sm">
                <Heart size={20} />
              </button>
            </div>
            <div className="p-6">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-lg font-bold text-slate-900 line-clamp-1 flex-1 pr-2">
                  {product.title}
                </h3>
                <span className="bg-slate-100 text-slate-600 text-xs font-bold px-2 py-1 rounded-md whitespace-nowrap">
                  {product.condition}
                </span>
              </div>
              <div className="flex items-end gap-3 mb-5">
                <span className="text-2xl font-black text-emerald-600">
                  {product.price}
                </span>
                <span className="text-sm text-slate-400 line-through mb-1">
                  {product.oldPrice}
                </span>
              </div>
              <div className="flex items-center justify-between pt-5 border-t border-slate-100 text-sm">
                <div className="flex items-center gap-1.5 text-slate-500 font-medium">
                  <MapPin size={16} className="text-slate-400" />{" "}
                  {product.location}
                </div>
                <div className="text-emerald-600 font-semibold flex items-center gap-1">
                  Buy Now <ArrowRight size={14} />
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </div>
);
export default FeaturedProducts;