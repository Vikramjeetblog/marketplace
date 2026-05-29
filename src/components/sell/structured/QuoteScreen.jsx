import React, { useEffect, useMemo } from "react";
import {
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Sparkles,
  Wallet,
} from "lucide-react";
import useSellStore from "../../../store/useSellStore";

const QuoteScreen = ({ category }) => {
  const {
    selectedBrand,
    selectedModel,
    selectedCondition,
    estimatedPrice,
    setEstimatedPrice,
  } = useSellStore();

  // Price Rules from category
  const rules = category.priceRules || {};
  const basePrice = rules.basePrice || 0;

  // Calculate deductions
  const deductions = useMemo(() => {
    let total = 0;
    const breakdown = [];

    Object.entries(selectedCondition).forEach(([key, value]) => {
      const deduction = rules?.deductions?.[key]?.[value] || 0;
      total += deduction;
      breakdown.push({ key, value, deduction });
    });

    return { total, breakdown };
  }, [selectedCondition, rules]);

  // Final Price
  const finalPrice = Math.max(basePrice - deductions.total, 0);

  // Save price to store
  useEffect(() => {
    setEstimatedPrice(finalPrice);
  }, [finalPrice, setEstimatedPrice]);

  return (
    <div className="h-full flex flex-col">
      {/* HEADER */}
      <div className="mb-12">
        <div
          className="w-20 h-20 rounded-3xl flex items-center justify-center mb-6"
          style={{ background: `${category.accent}20` }}
        >
          <Wallet size={42} style={{ color: category.accent }} />
        </div>

        <p className="text-sm uppercase tracking-[0.28em] text-white/40 mb-3">
          INSTANT VALUATION
        </p>
        <h2 className="text-5xl font-light tracking-[-0.05em] text-white leading-tight mb-4">
          Your Estimated Resale Value
        </h2>
        <p className="text-white/60 text-lg max-w-xl">
          Based on your selected device condition and current market rates.
        </p>
      </div>

      {/* MAIN CONTENT */}
      <div className="grid lg:grid-cols-[1fr_340px] gap-8">
        {/* LEFT SIDE - DETAILS */}
        <div className="space-y-6">
          {/* Selected Device */}
          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-8">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-white/40 text-sm uppercase tracking-widest mb-2">
                  SELECTED DEVICE
                </p>
                <h3 className="text-4xl font-light text-white mb-1">{selectedModel}</h3>
                <p className="text-xl" style={{ color: category.accent }}>
                  {selectedBrand}
                </p>
              </div>
              <div
                className="w-16 h-16 rounded-3xl flex items-center justify-center"
                style={{ background: `${category.accent}20` }}
              >
                <Sparkles size={32} style={{ color: category.accent }} />
              </div>
            </div>
          </div>

          {/* Condition Summary */}
          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-8">
            <div className="flex items-center gap-3 mb-6">
              <ShieldCheck size={26} style={{ color: category.accent }} />
              <h3 className="text-2xl font-light text-white">Condition Summary</h3>
            </div>

            <div className="space-y-4">
              {Object.entries(selectedCondition).map(([key, value], idx) => (
                <div
                  key={idx}
                  className="flex items-center justify-between rounded-2xl bg-white/[0.04] border border-white/10 px-6 py-5"
                >
                  <div>
                    <p className="text-white/40 text-sm uppercase tracking-widest">
                      {key}
                    </p>
                    <p className="text-white text-lg font-medium">{value}</p>
                  </div>
                  <CheckCircle2 size={26} style={{ color: category.accent }} />
                </div>
              ))}
            </div>
          </div>

          {/* Price Breakdown */}
          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-8">
            <h3 className="text-2xl font-light text-white mb-8">Price Breakdown</h3>

            <div className="space-y-6">
              <div className="flex justify-between text-lg">
                <span className="text-white/70">Base Market Price</span>
                <span className="text-white">₹{basePrice.toLocaleString()}</span>
              </div>

              {deductions.breakdown.map((item, idx) => (
                <div key={idx} className="flex justify-between">
                  <span className="text-white/60">
                    {item.key} — {item.value}
                  </span>
                  <span className="text-red-400">- ₹{item.deduction.toLocaleString()}</span>
                </div>
              ))}

              <div className="h-px bg-white/10 my-4" />

              <div className="flex justify-between items-end pt-2">
                <span className="text-xl text-white">Final Offer</span>
                <span
                  className="text-5xl font-light tracking-tighter"
                  style={{ color: category.accent }}
                >
                  ₹{finalPrice.toLocaleString()}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE - FINAL OFFER CARD */}
        <div>
          <div className="sticky top-28 rounded-[36px] border border-white/10 bg-[#0D172A]/90 backdrop-blur-2xl overflow-hidden shadow-[0_20px_100px_rgba(0,0,0,0.4)]">
            {/* Hero Image */}
            <div className="relative h-[260px] overflow-hidden">
              <img
                src={category.heroImage}
                alt={category.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#040B1A] to-transparent" />
            </div>

            {/* Offer Content */}
            <div className="p-9">
              <p className="text-sm uppercase tracking-[0.3em] text-white/40 mb-2">
                FINAL ESTIMATED OFFER
              </p>

              <h2
                className="text-6xl font-light tracking-[-0.06em] mb-8"
                style={{ color: category.accent }}
              >
                ₹{estimatedPrice.toLocaleString()}
              </h2>

              <p className="text-white/70 leading-relaxed mb-10">
                This is an instant estimated value based on your inputs and current market trends.
              </p>

              {/* Trust Points */}
              <div className="space-y-4 mb-10">
                {[
                  "Free Doorstep Pickup",
                  "Instant UPI / Bank Payment",
                  "Secure Device Verification",
                  "No Hidden Charges",
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3 text-white/80">
                    <div
                      className="w-2 h-2 rounded-full"
                      style={{ background: category.accent }}
                    />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              {/* CTA Button */}
              <button
                className="w-full h-14 rounded-2xl font-semibold text-lg flex items-center justify-center gap-3 hover:scale-[1.02] transition-all"
                style={{ background: category.accent, color: "#040B1A" }}
              >
                Schedule Free Pickup
                <ArrowRight size={22} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuoteScreen;