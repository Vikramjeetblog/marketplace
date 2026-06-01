import React from "react";
import useSellStore from "../../../store/useSellStore";

const BrandSelection = ({ category }) => {
  const { selectedBrand, setBrand, nextStep } = useSellStore();

  // Handle brand selection
  const handleBrandSelect = (brand) => {
    setBrand(brand.name);
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
          Select your device brand to continue with instant market valuation.
        </p>
      </div>

      {/* BRANDS GRID */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {category.brands.map((brand, index) => {
          const isActive = selectedBrand === brand.name;

          return (
            <button
              key={index}
              onClick={() => handleBrandSelect(brand)}
              className={`group relative overflow-hidden rounded-3xl border transition-all duration-300 p-8 text-left hover:scale-[1.02] ${
                isActive
                  ? "border-transparent scale-[1.02]"
                  : "border-white/10 bg-white/5 hover:bg-white/[0.07]"
              }`}
              style={{
                background: isActive ? `${category.accent}15` : "",
              }}
            >
              {/* Active Glow Effect */}
              {isActive && (
                <div
                  className="absolute inset-0 opacity-30"
                  style={{
                    background: `radial-gradient(circle at top right, ${category.accent}, transparent 60%)`,
                  }}
                />
              )}

              <div className="relative z-10">
                {/* Brand Logo / Icon */}
                <div
                  className="w-16 h-16 rounded-2xl flex items-center justify-center text-3xl font-semibold mb-6 transition-all"
                  style={{
                    background: isActive ? category.accent : "rgba(255,255,255,0.05)",
                    color: isActive ? "#040B1A" : "#fff",
                  }}
                >
                  {brand.name.charAt(0)}
                </div>

                {/* Brand Name */}
                <h3 className="text-2xl font-light tracking-[-0.03em] text-white mb-2">
                  {brand.name}
                </h3>

                {/* Models Count */}
                <p className="text-white/50 text-sm">
                  {brand.models.length} models available
                </p>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default BrandSelection;