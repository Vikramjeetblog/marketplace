import {
  UploadCloud,
  SearchCheck,
  BadgeIndianRupee,
  Truck,
} from "lucide-react";

import { motion } from "framer-motion";

const steps = [
  {
    step: "01",
    title: "Submit Product",
    desc: "Share office asset details with photos and specifications.",
    icon: UploadCloud,
    color: "from-emerald-500 to-emerald-600",
    bg: "bg-emerald-50",
  },
  {
    step: "02",
    title: "Team Evaluation",
    desc: "Our experts inspect and evaluate the best market value.",
    icon: SearchCheck,
    color: "from-sky-500 to-blue-600",
    bg: "bg-sky-50",
  },
  {
    step: "03",
    title: "Get Best Offer",
    desc: "Receive a transparent commercial offer from RUPANTAR.",
    icon: BadgeIndianRupee,
    color: "from-amber-400 to-orange-500",
    bg: "bg-amber-50",
  },
  {
    step: "04",
    title: "Pickup & Payment",
    desc: "We arrange pickup and process secure instant payment.",
    icon: Truck,
    color: "from-violet-500 to-indigo-600",
    bg: "bg-violet-50",
  },
];

const HowItWorks = () => {
  return (
    <section className="py-16 lg:py-20 bg-[#020B2D] overflow-hidden">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* HEADER */}
        <div className="text-center mb-14">

          <p className="text-[11px] tracking-[0.28em] uppercase text-emerald-400 font-semibold mb-3">
            PROCESS
          </p>

          <h2 className="text-3xl lg:text-5xl font-semibold tracking-tight text-white mb-5">
            How RUPANTAR Works
          </h2>

          <p className="text-sm lg:text-base text-slate-400 max-w-2xl mx-auto leading-relaxed">
            A smooth and transparent resale process built for businesses,
            offices and commercial asset owners.
          </p>
        </div>

        {/* PROCESS FLOW */}
        <div className="relative">

          {/* CONNECTING LINE */}
          <div className="hidden lg:block absolute top-20 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-slate-700 to-transparent" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">

            {steps.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.12 }}
                whileHover={{ y: -5 }}
                className="group relative"
              >
                {/* CARD */}
                <div className="relative h-full rounded-[30px] bg-white/5 backdrop-blur-xl border border-white/10 p-7 overflow-hidden hover:border-white/20 transition-all duration-300">

                  {/* GLOW */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-[radial-gradient(circle_at_top_right,_rgba(16,185,129,0.12),transparent_55%)]" />

                  {/* STEP NUMBER */}
                  <div className="absolute top-5 right-5 text-[12px] font-semibold tracking-[0.22em] text-white/20">
                    {item.step}
                  </div>

                  {/* ICON */}
                  <div
                    className={`relative z-10 w-16 h-16 rounded-2xl ${item.bg} flex items-center justify-center mb-7 shadow-lg`}
                  >
                    <div
                      className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${item.color} opacity-10`}
                    />

                    <item.icon
                      size={30}
                      strokeWidth={1.9}
                      className="text-slate-900"
                    />
                  </div>

                  {/* CONTENT */}
                  <div className="relative z-10">

                    <h3 className="text-[22px] font-semibold tracking-tight text-white mb-3">
                      {item.title}
                    </h3>

                    <p className="text-sm leading-relaxed text-slate-400">
                      {item.desc}
                    </p>

                    {/* FOOTER */}
                    <div className="mt-7 flex items-center gap-3">

                      <div
                        className={`w-9 h-[2px] rounded-full bg-gradient-to-r ${item.color}`}
                      />

                      <span className="text-[11px] tracking-[0.18em] uppercase font-semibold text-white/40">
                        Simple Process
                      </span>
                    </div>
                  </div>

                  {/* HOVER SHADOW */}
                  <div className="absolute inset-0 rounded-[30px] shadow-[0_0_80px_rgba(16,185,129,0.04)] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;