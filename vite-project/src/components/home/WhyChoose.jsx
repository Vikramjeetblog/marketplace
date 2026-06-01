import { advantages } from "../../data/homedata";
import {
  CheckCircle2,
  ShieldCheck,
  BadgeIndianRupee,
  Truck,
  Building2,
} from "lucide-react";

import { motion } from "framer-motion";

const WhyChooseRupantar = () => {
  return (
    <section className="py-16 lg:py-20 bg-[#f8fafc] overflow-hidden">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* HEADER */}
        <div className="text-center mb-12">

          <p className="text-[11px] tracking-[0.28em] uppercase text-emerald-600 font-semibold mb-3">
            WHY RUPANTAR
          </p>

          <h2 className="text-3xl lg:text-5xl font-semibold tracking-tight text-[#020B2D] mb-5">
            The RUPANTAR Difference
          </h2>

          <p className="text-sm lg:text-base text-slate-500 max-w-2xl mx-auto leading-relaxed">
            A trusted modern resale ecosystem built with transparency,
            commercial expertise and 23 years of regional legacy.
          </p>
        </div>

        {/* MAIN CARD */}
        <div className="relative rounded-[36px] overflow-hidden bg-[#020B2D] border border-white/10">

          {/* BACKGROUND GLOW */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(16,185,129,0.12),transparent_35%)]" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2">

            {/* LEFT */}
            <div className="p-8 lg:p-12 border-b lg:border-b-0 lg:border-r border-white/10">

              {/* BADGE */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/10 mb-8">

                <Building2 size={16} className="text-emerald-400" />

                <span className="text-[11px] tracking-[0.22em] uppercase font-semibold text-emerald-300">
                  23 Years Legacy
                </span>
              </div>

              {/* TITLE */}
              <h3 className="text-4xl lg:text-5xl leading-tight font-semibold tracking-tight text-white mb-6">
                Built for Modern
                <br />
                Recommerce.
              </h3>

              {/* DESCRIPTION */}
              <p className="text-slate-400 text-base leading-relaxed max-w-lg mb-10">
                Unlike peer-to-peer marketplaces, RUPANTAR directly evaluates,
                purchases and curates office furniture, electronics and
                commercial assets for a safer and more reliable resale
                experience.
              </p>

              {/* FEATURED POINTS */}
              <div className="space-y-4">

                <div className="flex items-start gap-4">

                  <div className="w-11 h-11 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 shrink-0">
                    <ShieldCheck size={20} />
                  </div>

                  <div>
                    <h4 className="text-white font-semibold mb-1">
                      Trusted Evaluation
                    </h4>

                    <p className="text-sm text-slate-400 leading-relaxed">
                      Professional commercial asset assessment by experienced specialists.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">

                  <div className="w-11 h-11 rounded-2xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 shrink-0">
                    <BadgeIndianRupee size={20} />
                  </div>

                  <div>
                    <h4 className="text-white font-semibold mb-1">
                      Transparent Pricing
                    </h4>

                    <p className="text-sm text-slate-400 leading-relaxed">
                      Fair market-based offers with secure and hassle-free transactions.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">

                  <div className="w-11 h-11 rounded-2xl bg-sky-500/10 border border-sky-500/20 flex items-center justify-center text-sky-400 shrink-0">
                    <Truck size={20} />
                  </div>

                  <div>
                    <h4 className="text-white font-semibold mb-1">
                      Pickup Support
                    </h4>

                    <p className="text-sm text-slate-400 leading-relaxed">
                      Seamless pickup and logistics support for offices and businesses.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT */}
            <div className="p-8 lg:p-12">

              {/* TOP */}
              <div className="flex items-center justify-between mb-8">

                <div>
                  <p className="text-[11px] tracking-[0.22em] uppercase text-emerald-300 font-semibold mb-2">
                    Advantages
                  </p>

                  <h4 className="text-2xl font-semibold text-white">
                    Why Businesses Trust Us
                  </h4>
                </div>

                <div className="hidden lg:flex w-16 h-16 rounded-3xl bg-white/5 border border-white/10 items-center justify-center">

                  <span className="text-2xl font-bold text-white">
                    R
                  </span>
                </div>
              </div>

              {/* ADVANTAGES GRID */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

                {advantages.map((adv, idx) => (
                  <motion.div
                    key={idx}
                    whileHover={{ y: -3 }}
                    transition={{ duration: 0.2 }}
                    className="group rounded-2xl bg-white/5 border border-white/10 p-5 hover:bg-white/[0.07] hover:border-emerald-500/20 transition-all duration-300"
                  >
                    <div className="flex items-start gap-3">

                      <div className="w-9 h-9 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 shrink-0">

                        <CheckCircle2 size={18} />
                      </div>

                      <div>

                        <p className="text-sm font-medium leading-relaxed text-white">
                          {adv}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* BOTTOM BAR */}
              <div className="mt-10 flex items-center gap-3">

                <div className="w-10 h-[2px] rounded-full bg-emerald-400" />

                <span className="text-[11px] tracking-[0.18em] uppercase font-semibold text-emerald-300">
                  Trusted Across North Bengal
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseRupantar;