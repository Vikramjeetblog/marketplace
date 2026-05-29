import React from "react";
import { Check } from "lucide-react";
import useSellStore from "../../../store/useSellStore";

// Import Step Components
import BrandSelection from "../structured/BrandSelection";
import ModelSelection from "../structured/ModelSelection";
import ConditionSelection from "../structured/questions/ConditionSelection";
import QuoteScreen from "../structured/QuoteScreen";

const StructuredFlow = ({ category }) => {
  const { currentStep } = useSellStore();

  return (
    <div className="max-w-5xl mx-auto">
      {/* ==================== STEPPER ==================== */}
      <div className="mb-10">
        <div 
          className="flex items-center min-w-max gap-4 overflow-x-auto pb-4"
          style={{
            scrollbarWidth: 'none',           // Firefox
            msOverflowStyle: 'none',          // IE & Edge
          }}
        >
          {category.flowSteps.map((step, index) => {
            const isActive = currentStep === step.id;
            const isCompleted = currentStep > step.id;

            return (
              <React.Fragment key={step.id}>
                <div className="flex items-center gap-3 shrink-0">
                  {/* Step Circle */}
                  <div
                    className={`w-11 h-11 rounded-2xl flex items-center justify-center border text-base font-semibold transition-all duration-300 ${
                      isActive
                        ? "border-transparent text-black shadow-md"
                        : isCompleted
                        ? "bg-white border-white text-black"
                        : "border-white/20 bg-white/10 text-white/70"
                    }`}
                    style={{
                      background: isActive ? category.accent : isCompleted ? "#ffffff" : "",
                    }}
                  >
                    {isCompleted ? <Check size={20} /> : String(index + 1).padStart(2, "0")}
                  </div>

                  {/* Step Title */}
                  <div>
                    <p
                      className={`text-xs uppercase tracking-widest transition-all ${
                        isActive ? "text-white" : "text-white/50"
                      }`}
                    >
                      {step.title}
                    </p>
                  </div>
                </div>

                {/* Connecting Line */}
                {index !== category.flowSteps.length - 1 && (
                  <div
                    className="w-12 h-[3px] mt-5 transition-all"
                    style={{
                      background: isCompleted ? category.accent : "rgba(255,255,255,0.12)",
                    }}
                  />
                )}
              </React.Fragment>
            );
          })}
        </div>
      </div>

      {/* ==================== MAIN CONTENT AREA ==================== */}
      <div className="rounded-[32px] border border-white/[0.08] bg-[#121212] overflow-hidden shadow-[0_10px_40px_rgba(0,0,0,0.22)]">
        <div className="h-[1px] bg-white/[0.06]" />
        
        <div className="p-6 md:p-10 min-h-[560px]">
          {currentStep === 1 && <BrandSelection category={category} />}
          {currentStep === 2 && <ModelSelection category={category} />}
          {currentStep === 3 && <ConditionSelection category={category} />}
          {currentStep === 4 && <QuoteScreen category={category} />}
          
          {currentStep === 5 && (
            <div className="text-center py-20 text-white/60">
              <h2 className="text-3xl font-light">Specifications Step</h2>
              <p className="mt-4">This step is under development</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default StructuredFlow;