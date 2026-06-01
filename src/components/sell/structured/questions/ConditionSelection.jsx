import React, { useState } from "react";
import { ArrowRight, Check, ChevronLeft } from "lucide-react";
import useSellStore from "../../../../store/useSellStore";

const ConditionSelection = ({ category }) => {
  const { selectedCondition, setCondition, nextStep, prevStep } = useSellStore();

  const questions = category.conditionQuestions || category.questions || [];
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  const currentQuestion = questions[currentQuestionIndex];

  const handleAnswer = (answer) => {
    setCondition({
      [currentQuestion.key]: answer,
    });

    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex((prev) => prev + 1);
    } else {
      nextStep();
    }
  };

  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex((prev) => prev - 1);
    } else {
      prevStep();
    }
  };

  if (questions.length === 0) {
    return (
      <div className="h-full flex flex-col items-center justify-center text-center py-20">
        <div
          className="w-28 h-28 rounded-3xl flex items-center justify-center text-6xl mb-8"
          style={{ background: `${category.accent}20`, color: category.accent }}
        >
          ?
        </div>
        <h2 className="text-4xl font-light text-white mb-4">No Questions Yet</h2>
        <p className="text-white/50 text-lg">Condition questions are not configured for this category.</p>
      </div>
    );
  }

  return (
    <div className="h-full flex flex-col">
      {/* HEADER */}
      <div className="flex items-start justify-between gap-6 mb-12">
        <div>
          <p className="text-sm uppercase tracking-[0.28em] text-white/40 mb-3">
            Condition Evaluation
          </p>
          <h2 className="text-4xl font-light tracking-[-0.04em] text-white leading-tight mb-2">
            {currentQuestion.title}
          </h2>
          <p className="text-white/50">
            Question {currentQuestionIndex + 1} of {questions.length}
          </p>
        </div>

        <button
          onClick={handlePrevious}
          className="h-12 px-6 rounded-2xl border border-white/10 bg-white/5 hover:bg-white/[0.08] transition-all flex items-center gap-2 text-white/80"
        >
          <ChevronLeft size={18} />
          Back
        </button>
      </div>

      {/* Progress Bar */}
      <div className="w-full h-2.5 bg-white/10 rounded-full overflow-hidden mb-12">
        <div
          className="h-full rounded-full transition-all duration-500"
          style={{
            width: `${((currentQuestionIndex + 1) / questions.length) * 100}%`,
            background: category.accent,
          }}
        />
      </div>

      {/* OPTIONS */}
      <div className="grid sm:grid-cols-2 gap-6">
        {currentQuestion.options.map((option, idx) => {
          const isActive = selectedCondition[currentQuestion.key] === option;

          return (
            <button
              key={idx}
              onClick={() => handleAnswer(option)}
              className={`group relative overflow-hidden rounded-3xl border p-8 text-left transition-all duration-300 hover:-translate-y-1 ${
                isActive
                  ? "border-transparent scale-[1.02] shadow-2xl"
                  : "border-white/10 bg-white/5 hover:bg-white/[0.08]"
              }`}
              style={{
                background: isActive ? `${category.accent}15` : "",
              }}
            >
              {/* Glow Effect */}
              {isActive && (
                <div
                  className="absolute inset-0 opacity-25"
                  style={{
                    background: `radial-gradient(circle at top right, ${category.accent}, transparent 70%)`,
                  }}
                />
              )}

              <div className="relative z-10 flex items-start justify-between gap-6">
                <div>
                  <h3 className="text-2xl font-light text-white mb-3">{option}</h3>
                  <p className="text-white/60 text-[15px]">
                    Choose this if it best describes your device condition.
                  </p>
                </div>

                {/* Selection Circle */}
                <div
                  className={`w-11 h-11 rounded-2xl border-2 flex items-center justify-center transition-all flex-shrink-0 mt-1 ${
                    isActive ? "border-transparent" : "border-white/30"
                  }`}
                  style={{
                    background: isActive ? category.accent : "transparent",
                  }}
                >
                  {isActive && <Check size={24} color="#040B1A" />}
                </div>
              </div>
            </button>
          );
        })}
      </div>

      {/* FOOTER */}
      <div className="mt-auto pt-12 flex items-center justify-between text-sm">
        <div>
          <p className="text-white/40 uppercase tracking-widest text-xs mb-1">CURRENT DEVICE</p>
          <h4 className="text-white font-medium">{category.title}</h4>
        </div>
        <div className="flex items-center gap-2 text-white/50">
          <span>Instant Valuation</span>
          <ArrowRight size={18} />
        </div>
      </div>
    </div>
  );
};

export default ConditionSelection;