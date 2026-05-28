
import React from "react";

import useSellStore from "../../../store/useSellStore";

const BrandSelection = ({
  category,
}) => {

  const {
    selectedBrand,
    setBrand,
    nextStep,
  } = useSellStore();

  // HANDLE BRAND
  const handleBrandSelect = (
    brand
  ) => {

    setBrand(
      brand.name
    );

    nextStep();
  };

  return (

    <div>

      {/* HEADER */}
      <div className="mb-10">

        <p className="text-sm uppercase tracking-[0.28em] text-white/40 mb-4">

          Brand Selection

        </p>

        <h2 className="text-4xl font-light tracking-[-0.05em] text-white mb-4">

          Choose Your Brand

        </h2>

        <p className="text-white/60 text-lg max-w-2xl">

          Select your device brand to continue
          with instant market valuation.

        </p>

      </div>

      {/* BRANDS GRID */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">

        {category.brands.map(
          (brand, idx) => {

            const active =
              selectedBrand ===
              brand.name;

            return (

              <button
                key={idx}
                onClick={() =>
                  handleBrandSelect(
                    brand
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
                    className="w-14 h-14 rounded-2xl flex items-center justify-center text-xl font-semibold mb-6"
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

                    {brand.name.charAt(
                      0
                    )}

                  </div>

                  {/* BRAND */}
                  <h3 className="text-2xl font-light tracking-[-0.03em] text-white mb-3">

                    {brand.name}

                  </h3>

                  {/* SUBTEXT */}
                  <p className="text-white/50 text-sm leading-relaxed">

                    {brand.models.length} models available for evaluation.

                  </p>

                </div>

              </button>
            );
          }
        )}

      </div>

    </div>

  );
};

export default BrandSelection;
