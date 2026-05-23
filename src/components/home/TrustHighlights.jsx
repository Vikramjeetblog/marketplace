import {trustFeatures} from "../../data/homedata";
import {motion} from "framer-motion";
const TrustHighlights = () => (
  <div className="py-20 bg-slate-50">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {trustFeatures.map((feature, idx) => (
          <motion.div
            key={idx}
            whileHover={{ y: -5 }}
            className="p-6 rounded-3xl bg-white border border-slate-100 shadow-sm flex items-start gap-4 transition-all hover:shadow-lg"
          >
            <div className="w-14 h-14 bg-emerald-50 text-emerald-600 rounded-2xl flex items-center justify-center flex-shrink-0">
              <feature.icon size={28} />
            </div>
            <div>
              <h3 className="text-lg font-bold text-slate-900 mb-1">
                {feature.title}
              </h3>
              <p className="text-slate-500 text-sm">{feature.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </div>
);
export default TrustHighlights;