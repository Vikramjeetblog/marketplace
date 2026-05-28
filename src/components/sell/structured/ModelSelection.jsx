
import React from "react";

import {
  ArrowRight,
  Smartphone,
} from "lucide-react";

import useSellStore from "../../../store/useSellStore";

const ModelSelection = ({
  category,
}) => {

  const {
    selectedBrand,
    selectedModel,
    setModel,
    nextStep,
    prevStep,
  } = useSellStore();

  // FIND BRAND DATA
  const brandData =
    category.brands.find(
      (brand) =>
        brand.name ===
        selectedBrand
    );

  // MODELS
  const models =
    brandData?.models || [];

  // HANDLE MODEL
  const handleModelSelect = (
    model
  ) => {

    setModel(model);

    nextStep();
  };

  return (

    <div>

      {/* HEADER */}
      <div className="flex items-center justify-between gap-5 mb-10">

        <div>

          <p className="text-sm uppercase tracking-[0.28em] text-white/40 mb-4">

            Model Selection

          </p>

          <h2 className="text-4xl font-light tracking-[-0.05em] text-white mb-4">

            Choose Your Model

          </h2>

          <p className="text-white/60 text-lg max-w-2xl">

            Showing available models for{" "}

            <span
              className="font-medium"
              style={{
                color:
                  category.accent,
              }}
            >

              {selectedBrand}

            </span>

          </p>

        </div>

        {/* BACK BUTTON */}
        <button
          onClick={prevStep}
          className="h-12 px-6 rounded-2xl border border-white/10 bg-white/5 hover:bg-white/[0.08] transition-all text-white/80"
        >

          Back

        </button>

      </div>

      {/* MODELS GRID */}
      <div className="grid sm:grid-cols-2 gap-5">

        {models.map(
          (model, idx) => {

            const active =
              selectedModel ===
              model;

            return (

              <button
                key={idx}
                onClick={() =>
                  handleModelSelect(
                    model
                  )
                }
                className={`group relative overflow-hidden rounded-3xl border transition-all duration-300 p-6 text-left ${
                  active
                    ? "border-transparent scale-[1.02]"
                    : "border-white/10 bg-white/5 hover:bg-white/[0.07]"
                }`}
                style={{
                  background:
                    active
                      ? `${category.accent}15`
                      : "",
                }}
              >

                {/* ACTIVE GLOW */}
                {active && (

                  <div
                    className="absolute inset-0 opacity-30"
                    style={{
                      background: `radial-gradient(circle at top right, ${category.accent}, transparent 60%)`,
                    }}
                  />

                )}

                {/* CONTENT */}
                <div className="relative z-10">

                  {/* ICON */}
                  <div
                    className="w-16 h-16 rounded-3xl flex items-center justify-center mb-6"
                    style={{
                      background:
                        active
                          ? category.accent
                          : "rgba(255,255,255,0.05)",

                      color:
                        active
                          ? "#040B1A"
                          : "#fff",
                    }}
                  >

                    <Smartphone
                      size={28}
                    />

                  </div>

                  {/* MODEL */}
                  <h3 className="text-2xl font-light tracking-[-0.03em] text-white mb-3">

                    {model}

                  </h3>

                  {/* SUBTEXT */}
                  <p className="text-white/50 text-sm leading-relaxed mb-6">

                    Continue evaluation for{" "}
                    {model} and receive
                    instant market valuation.

                  </p>

                  {/* CTA */}
                  <div className="flex items-center gap-2 text-sm font-medium">

                    <span
                      style={{
                        color:
                          category.accent,
                      }}
                    >

                      Continue

                    </span>

                    <ArrowRight
                      size={16}
                      style={{
                        color:
                          category.accent,
                      }}
                    />

                  </div>

                </div>

              </button>
            );
          }
        )}

      </div>

      {/* EMPTY STATE */}
      {models.length ===
        0 && (

        <div className="rounded-[32px] border border-white/10 bg-white/[0.03] p-12 text-center">

          <div
            className="w-20 h-20 rounded-3xl mx-auto flex items-center justify-center mb-6"
            style={{
              background:
                `${category.accent}20`,
            }}
          >

            <Smartphone
              size={34}
              style={{
                color:
                  category.accent,
              }}
            />

          </div>

          <h3 className="text-3xl font-light text-white mb-4">

            No Models Found

          </h3>

          <p className="text-white/50 max-w-lg mx-auto leading-relaxed">

            We couldn't find models for the
            selected brand. Please try another
            brand or continue later.

          </p>

        </div>

      )}

    </div>

  );
};

export default ModelSelection;

