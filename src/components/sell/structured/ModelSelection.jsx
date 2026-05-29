import React from "react";
import { ArrowRight, Smartphone } from "lucide-react";
import useSellStore from "../../../store/useSellStore";

const ModelSelection = ({ category }) => {
  const { selectedBrand, selectedModel, setModel, nextStep, prevStep } = useSellStore();

  const brandData = category.brands.find((brand) => brand.name === selectedBrand);
  const models = brandData?.models || [];

  const handleModelSelect = (model) => {
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
          <p className="text-white/60 text-lg">
            Showing available models for{" "}
            <span className="font-medium" style={{ color: category.accent }}>
              {selectedBrand}
            </span>
          </p>
        </div>

        <button
          onClick={prevStep}
          className="h-12 px-6 rounded-2xl border border-white/10 bg-white/5 hover:bg-white/[0.08] transition-all text-white/80"
        >
          ← Back
        </button>
      </div>

      {/* COMPACT MODELS GRID */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {models.map((model, index) => {
          const isActive = selectedModel === model;

          return (
            <button
              key={index}
              onClick={() => handleModelSelect(model)}
              className={`group relative overflow-hidden rounded-3xl border p-7 text-left transition-all duration-300 hover:-translate-y-1 ${
                isActive
                  ? "border-transparent scale-[1.02] shadow-xl"
                  : "border-white/10 bg-white/5 hover:bg-white/[0.07] hover:border-white/20"
              }`}
              style={{
                background: isActive ? `${category.accent}15` : "",
              }}
            >
              {/* Active Glow */}
              {isActive && (
                <div
                  className="absolute inset-0 opacity-30"
                  style={{
                    background: `radial-gradient(circle at top right, ${category.accent}, transparent 70%)`,
                  }}
                />
              )}

              <div className="relative z-10">
                {/* Icon */}
                <div
                  className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 transition-all"
                  style={{
                    background: isActive ? category.accent : "rgba(255,255,255,0.05)",
                    color: isActive ? "#040B1A" : "#fff",
                  }}
                >
                  <Smartphone size={32} />
                </div>

                {/* Model Name */}
                <h3 className="text-xl font-medium text-white mb-4">
                  {model}
                </h3>

                {/* Compact CTA */}
                <div className="flex items-center gap-2 text-sm font-medium pt-3 border-t border-white/10">
                  <span style={{ color: category.accent }}>Select Model</span>
                  <ArrowRight size={16} style={{ color: category.accent }} />
                </div>
              </div>
            </button>
          );
        })}
      </div>

      {/* EMPTY STATE */}
      {models.length === 0 && (
        <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-12 text-center">
          <div
            className="w-20 h-20 rounded-3xl mx-auto flex items-center justify-center mb-6"
            style={{ background: `${category.accent}20` }}
          >
            <Smartphone size={40} style={{ color: category.accent }} />
          </div>
          <h3 className="text-2xl font-light text-white mb-3">No Models Found</h3>
          <p className="text-white/50">Please select another brand.</p>
        </div>
      )}
    </div>
  );
};

export default ModelSelection;