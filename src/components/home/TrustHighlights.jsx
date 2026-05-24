import { trustFeatures } from "../../data/homedata";
import { motion } from "framer-motion";

const TrustHighlights = () => {
  return (
    <section className="py-16 lg:py-20 bg-white overflow-hidden">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* HEADER */}
        <div className="text-center mb-12">

          <p className="text-[11px] tracking-[0.28em] uppercase text-emerald-600 font-semibold mb-3">
            TRUST & SUPPORT
          </p>

          <h2 className="text-3xl lg:text-5xl font-semibold tracking-tight text-[#020B2D] mb-5">
            Built Around Trust
          </h2>

          <p className="text-sm lg:text-base text-slate-500 max-w-2xl mx-auto leading-relaxed">
            A trusted resale ecosystem designed for offices, businesses and
            modern workspace asset management.
          </p>
        </div>

        {/* FEATURE GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

          {trustFeatures.map((feature, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -6 }}
              transition={{ duration: 0.25 }}
              className="group relative"
            >
              <div className="relative h-full rounded-[30px] overflow-hidden border border-slate-200 bg-white hover:border-emerald-200 hover:shadow-2xl hover:shadow-slate-200/60 transition-all duration-500">

                {/* TOP AREA */}
                <div className="relative p-7 pb-0">

                  {/* ICON WRAPPER */}
                  <div className="relative w-16 h-16 rounded-2xl bg-gradient-to-br from-emerald-50 via-white to-sky-50 border border-slate-200 flex items-center justify-center shadow-sm mb-7">

                    {/* GLOW */}
                    <div className="absolute inset-0 rounded-2xl bg-emerald-500/5" />

                    <feature.icon
                      size={30}
                      className="text-emerald-600 relative z-10"
                    />
                  </div>

                  {/* TAG */}
                  <div className="absolute top-6 right-6">

                    <div className="px-3 py-1 rounded-full bg-[#020B2D] text-white text-[10px] font-semibold tracking-[0.18em] uppercase shadow-lg">
                      Rupantar
                    </div>
                  </div>

                  {/* TITLE */}
                  <h3 className="text-[24px] leading-tight font-semibold tracking-tight text-[#020B2D] mb-3">
                    {feature.title}
                  </h3>

                  {/* DESCRIPTION */}
                  <p className="text-sm lg:text-[15px] text-slate-500 leading-relaxed">
                    {feature.desc}
                  </p>
                </div>

                {/* BOTTOM BAR */}
                <div className="mt-8 px-7 pb-7 flex items-center justify-between">

                  <div className="flex items-center gap-2">

                    <div className="w-8 h-[2px] rounded-full bg-emerald-500" />

                    <span className="text-[11px] tracking-[0.18em] uppercase font-semibold text-emerald-600">
                      Trusted
                    </span>
                  </div>

                  <div className="w-10 h-10 rounded-full bg-amber-50 border border-amber-100 flex items-center justify-center">

                    <div className="w-2 h-2 rounded-full bg-amber-400" />
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

export default TrustHighlights;