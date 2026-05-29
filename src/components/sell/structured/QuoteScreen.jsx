import React, { useEffect, useMemo } from "react";
import {
  ArrowRight,
  CheckCircle2,
  ShieldCheck,
  Truck,
  CreditCard,
  Lock,
  BadgeCheck,
} from "lucide-react";
import useSellStore from "../../../store/useSellStore";
import { useNavigate } from "react-router-dom";
const QuoteScreen = ({ category }) => {
  const {
    selectedBrand,
    selectedModel,
    selectedCondition,
    setEstimatedPrice,
  } = useSellStore();
   const navigate = useNavigate();


  const rules = category.priceRules || {};
  const basePrice = rules.basePrice || 0;

  const deductions = useMemo(() => {
    let total = 0;
    const breakdown = [];

    Object.entries(selectedCondition).forEach(([key, value]) => {
      const deduction = rules?.deductions?.[key]?.[value] || 0;

      total += deduction;

      breakdown.push({
        key,
        value,
        deduction,
      });
    });

    return { total, breakdown };
  }, [selectedCondition, rules]);

  const finalPrice = Math.max(basePrice - deductions.total, 0);

  useEffect(() => {
    setEstimatedPrice(finalPrice);
  }, [finalPrice, setEstimatedPrice]);

  return (
    <div className="max-w-6xl mx-auto px-4">
      <div className="grid lg:grid-cols-2 gap-8">

        {/* LEFT SECTION */}
        <div className="bg-white rounded-3xl border border-gray-100 shadow-sm p-8">

          {/* DEVICE INFO */}
          <div className="flex flex-col sm:flex-row gap-5 mb-8">
            <div className="w-24 h-24 bg-gradient-to-br from-emerald-50 to-emerald-100 rounded-3xl flex items-center justify-center flex-shrink-0">
              <span className="text-5xl">📱</span>
            </div>

            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                {selectedModel}
              </h2>

              <p className="text-gray-500 mt-1 text-lg">
                {selectedBrand}
              </p>

              <div className="mt-5">
                <p className="text-sm text-gray-500">
                  Estimated Offer
                </p>

                <p className="text-4xl font-bold text-emerald-600 mt-1">
                  ₹{finalPrice.toLocaleString()}
                </p>
              </div>
            </div>
          </div>

          {/* CONDITION SUMMARY */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <ShieldCheck
                size={24}
                className="text-emerald-600"
              />

              <h3 className="text-xl font-semibold text-gray-900">
                Device Condition
              </h3>
            </div>

            <div className="space-y-4">
              {Object.entries(selectedCondition).map(([key, value]) => (
                <div
                  key={key}
                  className="flex items-center justify-between bg-gray-50 rounded-2xl px-5 py-4 border border-gray-100"
                >
                  <div>
                    <p className="text-xs uppercase tracking-wide text-gray-400">
                      {key.replace(/([A-Z])/g, " $1")}
                    </p>

                    <p className="font-medium text-gray-900 mt-1">
                      {value}
                    </p>
                  </div>

                  <CheckCircle2
                    size={24}
                    className="text-emerald-500"
                  />
                </div>
              ))}
            </div>

            {/* PRICE BREAKDOWN */}
            {deductions.total > 0 && (
              <div className="mt-8 border-t border-gray-100 pt-6">
                <h4 className="font-semibold text-gray-900 mb-4">
                  Price Breakdown
                </h4>

                <div className="space-y-3">
                  <div className="flex justify-between text-gray-600">
                    <span>Base Price</span>
                    <span>₹{basePrice.toLocaleString()}</span>
                  </div>

                  <div className="flex justify-between text-red-500">
                    <span>Total Deductions</span>
                    <span>
                      -₹{deductions.total.toLocaleString()}
                    </span>
                  </div>

                  <div className="border-t border-gray-200 pt-3 flex justify-between font-bold text-lg text-gray-900">
                    <span>Final Offer</span>
                    <span className="text-emerald-600">
                      ₹{finalPrice.toLocaleString()}
                    </span>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* RIGHT SECTION */}
        <div className="bg-white rounded-3xl border border-gray-100 shadow-sm p-8 h-fit sticky top-8">

          <div className="text-center">
            <div className="inline-flex items-center gap-2 bg-emerald-50 text-emerald-700 px-4 py-2 rounded-full text-sm font-medium mb-5">
              <BadgeCheck size={16} />
              Instant Quote Generated
            </div>

            <h3 className="text-2xl font-bold text-gray-900">
              Your Final Offer
            </h3>

            <p className="text-gray-500 mt-2">
              Based on your device condition
            </p>

            <div className="my-8">
              <p className="text-sm text-gray-500 mb-2">
                Estimated Resale Value
              </p>

              <p className="text-6xl font-bold text-emerald-600">
                ₹{finalPrice.toLocaleString()}
              </p>
            </div>
          </div>

          {/* CTA */}
         
   <button
  onClick={() =>
    navigate("/sell/pickup", {
      state: {
        product: {
          brand: selectedBrand,
          model: selectedModel,
          estimatedPrice: finalPrice,
          condition: selectedCondition,
        },
      },
    })
  }
  className="
    w-full
    h-14
    bg-emerald-600
    hover:bg-emerald-700
    rounded-2xl
    text-white
    font-semibold
    transition-all
    flex
    items-center
    justify-center
    gap-3
    shadow-lg
    shadow-emerald-100
  "
>
  Sell Now
  <ArrowRight size={20} />
</button>
    

          {/* HIGHLIGHTED NOTICE */}
          <div className="mt-6 flex items-start gap-3 bg-gradient-to-r from-amber-50 to-orange-50 border border-amber-200 rounded-2xl p-4">
            <div className="w-9 h-9 rounded-full bg-amber-100 flex items-center justify-center flex-shrink-0">
              <ShieldCheck
                size={18}
                className="text-amber-700"
              />
            </div>

            <div>
              <p className="text-sm font-semibold text-gray-900">
                Inspection Required
              </p>

              <p className="text-sm text-gray-600 mt-1 leading-relaxed">
                Final value will be confirmed after physical
                inspection of the device.
              </p>
            </div>
          </div>

          {/* TRUST FEATURES */}
          <div className="grid grid-cols-3 gap-4 mt-8 pt-8 border-t border-gray-100">

            <div className="text-center">
              <div className="w-12 h-12 mx-auto rounded-2xl bg-emerald-50 flex items-center justify-center mb-3">
                <Lock
                  size={20}
                  className="text-emerald-600"
                />
              </div>

              <p className="text-sm font-medium text-gray-800">
                Secure
              </p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 mx-auto rounded-2xl bg-emerald-50 flex items-center justify-center mb-3">
                <Truck
                  size={20}
                  className="text-emerald-600"
                />
              </div>

              <p className="text-sm font-medium text-gray-800">
                Free Pickup
              </p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 mx-auto rounded-2xl bg-emerald-50 flex items-center justify-center mb-3">
                <CreditCard
                  size={20}
                  className="text-emerald-600"
                />
              </div>

              <p className="text-sm font-medium text-gray-800">
                Instant Pay
              </p>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
};

export default QuoteScreen;