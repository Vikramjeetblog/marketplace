
import React, {
  useEffect,
  useMemo,
} from "react";

import {
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Sparkles,
  Wallet,
} from "lucide-react";
import useSellStore from "../../../store/useSellStore";

const QuoteScreen = ({
  category,
}) => {

  const {
    selectedBrand,
    selectedModel,
    selectedCondition,
    estimatedPrice,
    setEstimatedPrice,
  } = useSellStore();

  // PRICE RULES
  const rules =
    category.priceRules || {};

  // BASE PRICE
  const basePrice =
    rules.basePrice || 0;

  // CALCULATE DEDUCTIONS
  const deductions =
    useMemo(() => {

      let total = 0;

      const breakdown = [];

      Object.entries(
        selectedCondition
      ).forEach(
        ([key, value]) => {

          const deduction =
            rules
              ?.deductions?.[
              key
            ]?.[value] || 0;

          total += deduction;

          breakdown.push({
            key,
            value,
            deduction,
          });
        }
      );

      return {
        total,
        breakdown,
      };
    }, [
      selectedCondition,
      rules,
    ]);

  // FINAL PRICE
  const finalPrice =
    Math.max(
      basePrice -
        deductions.total,
      0
    );

  // SAVE PRICE
  useEffect(() => {

    setEstimatedPrice(
      finalPrice
    );

  }, [finalPrice]);

  return (

    <div className="h-full flex flex-col">

      {/* HEADER */}
      <div className="mb-12">

        <div
          className="w-20 h-20 rounded-[28px] flex items-center justify-center mb-8"
          style={{
            background:
              `${category.accent}20`,
          }}
        >

          <Wallet
            size={36}
            style={{
              color:
                category.accent,
            }}
          />

        </div>

        <p className="text-sm uppercase tracking-[0.28em] text-white/40 mb-4">

          Instant Valuation

        </p>

        <h2 className="text-5xl font-light tracking-[-0.05em] text-white mb-5 leading-tight">

          Your Estimated Resale Value

        </h2>

        <p className="text-white/50 text-lg max-w-2xl leading-relaxed">

          Based on your selected device,
          condition and current market
          demand.

        </p>

      </div>

      {/* MAIN GRID */}
      <div className="grid lg:grid-cols-[1fr_320px] gap-8">

        {/* LEFT */}
        <div className="space-y-6">

          {/* DEVICE CARD */}
          <div className="rounded-[32px] border border-white/10 bg-white/[0.03] p-8">

            <div className="flex items-start justify-between gap-5">

              <div>

                <p className="text-white/40 text-sm uppercase tracking-[0.2em] mb-3">

                  Selected Device

                </p>

                <h3 className="text-4xl font-light text-white mb-3">

                  {selectedModel}

                </h3>

                <p
                  className="text-lg"
                  style={{
                    color:
                      category.accent,
                  }}
                >

                  {selectedBrand}

                </p>

              </div>

              <div
                className="w-16 h-16 rounded-3xl flex items-center justify-center"
                style={{
                  background:
                    `${category.accent}20`,
                }}
              >

                <Sparkles
                  size={28}
                  style={{
                    color:
                      category.accent,
                  }}
                />

              </div>

            </div>

          </div>

          {/* CONDITION SUMMARY */}
          <div className="rounded-[32px] border border-white/10 bg-white/[0.03] p-8">

            <div className="flex items-center gap-3 mb-8">

              <ShieldCheck
                size={24}
                style={{
                  color:
                    category.accent,
                }}
              />

              <h3 className="text-2xl font-light text-white">

                Condition Summary

              </h3>

            </div>

            <div className="space-y-4">

              {Object.entries(
                selectedCondition
              ).map(
                (
                  [key, value],
                  idx
                ) => (

                  <div
                    key={idx}
                    className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-4"
                  >

                    <div>

                      <p className="text-white/40 text-sm uppercase tracking-[0.18em] mb-1">

                        {key}

                      </p>

                      <h4 className="text-white text-lg">

                        {value}

                      </h4>

                    </div>

                    <CheckCircle2
                      size={22}
                      style={{
                        color:
                          category.accent,
                      }}
                    />

                  </div>
                )
              )}

            </div>

          </div>

          {/* PRICE BREAKDOWN */}
          <div className="rounded-[32px] border border-white/10 bg-white/[0.03] p-8">

            <h3 className="text-2xl font-light text-white mb-8">

              Price Breakdown

            </h3>

            <div className="space-y-5">

              {/* BASE */}
              <div className="flex items-center justify-between">

                <span className="text-white/60">

                  Base Market Price

                </span>

                <span className="text-white text-lg">

                  ₹
                  {basePrice.toLocaleString()}

                </span>

              </div>

              {/* DEDUCTIONS */}
              {deductions.breakdown.map(
                (
                  item,
                  idx
                ) => (

                  <div
                    key={idx}
                    className="flex items-center justify-between"
                  >

                    <span className="text-white/40">

                      {item.key} — {item.value}

                    </span>

                    <span className="text-red-400">

                      - ₹
                      {item.deduction.toLocaleString()}

                    </span>

                  </div>
                )
              )}

              {/* DIVIDER */}
              <div className="h-[1px] bg-white/10" />

              {/* FINAL */}
              <div className="flex items-center justify-between pt-2">

                <span className="text-white text-xl">

                  Final Offer

                </span>

                <span
                  className="text-3xl font-light"
                  style={{
                    color:
                      category.accent,
                  }}
                >

                  ₹
                  {finalPrice.toLocaleString()}

                </span>

              </div>

            </div>

          </div>

        </div>

        {/* RIGHT */}
        <div>

          <div className="sticky top-28 rounded-[36px] border border-white/10 bg-[#0D172A]/90 backdrop-blur-2xl overflow-hidden shadow-[0_20px_100px_rgba(0,0,0,0.35)]">

            {/* IMAGE */}
            <div className="relative h-[240px] overflow-hidden">

              <img
                src={
                  category.heroImage
                }
                alt={
                  category.title
                }
                className="w-full h-full object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#040B1A] via-black/20 to-transparent" />

            </div>

            {/* CONTENT */}
            <div className="p-8">

              <p className="text-sm uppercase tracking-[0.2em] text-white/40 mb-4">

                Final Estimated Offer

              </p>

              <h2
                className="text-6xl font-light tracking-[-0.06em] mb-6"
                style={{
                  color:
                    category.accent,
                }}
              >

                ₹
                {estimatedPrice.toLocaleString()}

              </h2>

              <p className="text-white/60 leading-relaxed mb-8">

                Instant resale estimation generated
                using your selected condition
                details and current resale demand.

              </p>

              {/* FEATURES */}
              <div className="space-y-4 mb-8">

                {[
                  "Free Doorstep Pickup",
                  "Instant UPI Payments",
                  "Secure Verification",
                  "Professional Inspection",
                ].map(
                  (
                    item,
                    idx
                  ) => (

                    <div
                      key={idx}
                      className="flex items-center gap-3 text-white/70"
                    >

                      <div
                        className="w-2 h-2 rounded-full"
                        style={{
                          background:
                            category.accent,
                        }}
                      />

                      {item}

                    </div>
                  )
                )}

              </div>

              {/* CTA */}
              <button
                className="w-full h-14 rounded-2xl flex items-center justify-center gap-2 text-[#040B1A] font-semibold transition-all hover:scale-[1.01]"
                style={{
                  background:
                    category.accent,
                }}
              >

                Schedule Pickup

                <ArrowRight
                  size={18}
                />

              </button>

            </div>

          </div>

        </div>

      </div>

    </div>

  );
};

export default QuoteScreen;

