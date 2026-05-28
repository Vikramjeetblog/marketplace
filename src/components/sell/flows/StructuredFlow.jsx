
import React from "react";

import {
  Check,
} from "lucide-react";

import useSellStore from "../../../store/useSellStore";

// COMPONENTS
import BrandSelection from "../structured/BrandSelection";

import ModelSelection from "../structured/ModelSelection";

import ConditionSelection from "../structured/questions/ConditionSelection";

import QuoteScreen from "../structured/QuoteScreen";

const StructuredFlow = ({
  category,
}) => {

  const {
    currentStep,
  } = useSellStore();

  return (

    <div className="max-w-5xl mx-auto">

      {/* STEPPER */}
      <div className="flex items-center justify-between gap-3 overflow-x-auto pb-6 mb-8">

        {category.flowSteps.map(
          (step, idx) => {

            const active =
              currentStep ===
              step.id;

            const completed =
              currentStep >
              step.id;

            return (

              <div
                key={step.id}
                className="flex items-center gap-3 shrink-0"
              >

                {/* STEP */}
                <div className="flex items-center gap-3">

                  {/* CIRCLE */}
                  <div
                    className={`w-10 h-10 rounded-xl flex items-center justify-center border text-sm font-medium transition-all duration-300 ${
                      active
                        ? "border-transparent text-[#111]"
                        : completed
                        ? "bg-white border-white text-[#111]"
                        : "border-white/[0.08] bg-white/[0.02] text-white/40"
                    }`}
                    style={{
                      background:
                        active
                          ? category.accent
                          : completed
                          ? "#ffffff"
                          : "",
                    }}
                  >

                    {completed ? (
                      <Check
                        size={16}
                      />
                    ) : (
                      idx + 1
                    )}

                  </div>

                  {/* TEXT */}
                  <div>

                    <p className="text-[10px] uppercase tracking-[0.2em] text-white/25 mb-1">

                      Step {idx + 1}

                    </p>

                    <h3
                      className={`text-sm transition-all duration-300 ${
                        active
                          ? "text-white"
                          : "text-white/45"
                      }`}
                    >

                      {step.title}

                    </h3>

                  </div>

                </div>

                {/* LINE */}
                {idx !==
                  category.flowSteps
                    .length - 1 && (

                  <div
                    className="w-8 h-[1px]"
                    style={{
                      background:
                        completed
                          ? category.accent
                          : "rgba(255,255,255,0.08)",
                    }}
                  />

                )}

              </div>
            );
          }
        )}

      </div>

      {/* FLOW CONTAINER */}
      <div className="rounded-[32px] border border-white/[0.08] bg-[#121212] overflow-hidden shadow-[0_10px_40px_rgba(0,0,0,0.22)]">

        {/* MINIMAL TOP BORDER */}
        <div className="h-[1px] bg-white/[0.06]" />

        {/* CONTENT */}
        <div className="p-6 md:p-10 min-h-[560px]">

          {/* STEP 1 */}
          {currentStep ===
            1 && (

            <BrandSelection
              category={category}
            />

          )}

          {/* STEP 2 */}
          {currentStep ===
            2 && (

            <ModelSelection
              category={category}
            />

          )}

          {/* STEP 3 */}
          {currentStep ===
            3 && (

            <ConditionSelection
              category={category}
            />

          )}

          {/* STEP 4 */}
          {currentStep ===
            4 && (

            <QuoteScreen
              category={category}
            />

          )}

        </div>

      </div>

    </div>

  );
};

export default StructuredFlow;

