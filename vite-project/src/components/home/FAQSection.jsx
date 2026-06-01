import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: "How does RUPANTAR buy products?",
    answer:
      "Our team evaluates your office furniture, electronics or workspace assets and provides a transparent market-based offer before purchase.",
  },
  {
    question: "Do you provide pickup service?",
    answer:
      "Yes. RUPANTAR offers pickup support for commercial assets, office furniture and bulk resale requirements.",
  },
  {
    question: "What kind of products can I sell?",
    answer:
      "You can sell office chairs, workstations, laptops, desktops, conference setups, office furniture and bulk commercial assets.",
  },
  {
    question: "Is RUPANTAR a marketplace like OLX?",
    answer:
      "No. RUPANTAR directly purchases and curates products instead of connecting buyers and sellers through peer-to-peer listings.",
  },
  {
    question: "How long does the evaluation process take?",
    answer:
      "Most evaluations are completed within a short timeframe after product details and images are submitted.",
  },
  {
    question: "Do you support bulk office liquidation?",
    answer:
      "Yes. We specialize in office asset clearance and bulk liquidation support for businesses and commercial spaces.",
  },
];

const FAQSection = () => {
  const [active, setActive] = useState(0);

  const toggleFAQ = (index) => {
    setActive(active === index ? null : index);
  };

  return (
    <section className="py-16 lg:py-20 bg-[#020B2D] overflow-hidden">

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* HEADER */}
        <div className="text-center mb-12">

          <p className="text-[11px] tracking-[0.28em] uppercase text-emerald-400 font-semibold mb-3">
            FAQ
          </p>

          <h2 className="text-3xl lg:text-5xl font-semibold tracking-tight text-white mb-5">
            Frequently Asked Questions
          </h2>

          <p className="text-sm lg:text-base text-slate-400 leading-relaxed max-w-2xl mx-auto">
            Everything you need to know about selling and buying office assets with RUPANTAR.
          </p>
        </div>

        {/* FAQ LIST */}
        <div className="space-y-4">

          {faqs.map((faq, index) => {
            const isOpen = active === index;

            return (
              <motion.div
                key={index}
                layout
                transition={{ duration: 0.25 }}
                className="group rounded-[28px] border border-white/10 bg-white/5 backdrop-blur-xl overflow-hidden hover:border-emerald-500/20 transition-all duration-300"
              >
                {/* QUESTION */}
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex items-center justify-between gap-5 text-left p-6 lg:p-7"
                >
                  <h3 className="text-[17px] lg:text-[20px] font-semibold tracking-tight text-white pr-4">
                    {faq.question}
                  </h3>

                  <div
                    className={`w-11 h-11 rounded-2xl flex items-center justify-center shrink-0 transition-all duration-300 ${
                      isOpen
                        ? "bg-emerald-500 text-white"
                        : "bg-white/10 text-white"
                    }`}
                  >
                    {isOpen ? (
                      <Minus size={18} />
                    ) : (
                      <Plus size={18} />
                    )}
                  </div>
                </button>

                {/* ANSWER */}
                <AnimatePresence>

                  {isOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.25 }}
                    >
                      <div className="px-6 lg:px-7 pb-7">

                        <div className="w-full h-[1px] bg-white/10 mb-6" />

                        <p className="text-sm lg:text-base text-slate-400 leading-relaxed max-w-3xl">
                          {faq.answer}
                        </p>

                        {/* BOTTOM TAG */}
                        <div className="mt-6 flex items-center gap-2">

                          <div className="w-8 h-[2px] rounded-full bg-emerald-400" />

                          <span className="text-[11px] tracking-[0.18em] uppercase font-semibold text-emerald-300">
                            RUPANTAR Support
                          </span>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* HOVER GLOW */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none bg-[radial-gradient(circle_at_top_right,_rgba(16,185,129,0.08),transparent_40%)]" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;