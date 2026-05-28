
import React, {
  useState,
} from "react";

import {
  ArrowRight,
  Check,
  ChevronLeft,
} from "lucide-react";

import useSellStore from "../../../../store/useSellStore";

const ConditionSelection = ({
  category,
}) => {

  const {
    selectedCondition,
    setCondition,
    nextStep,
    prevStep,
  } = useSellStore();

  // QUESTIONS
  const questions =
    category.questions || [];

  // CURRENT QUESTION INDEX
  const [
    currentQuestionIndex,

    setCurrentQuestionIndex,
  ] = useState(0);

  // CURRENT QUESTION
  const currentQuestion =
    questions[
      currentQuestionIndex
    ];

  // HANDLE ANSWER
  const handleAnswer = (
    answer
  ) => {

    // SAVE ANSWER
    setCondition({
      [currentQuestion.key]:
        answer,
    });

    // NEXT QUESTION
    if (
      currentQuestionIndex <
      questions.length - 1
    ) {

      setCurrentQuestionIndex(
        (
          prev
        ) => prev + 1
      );

    } else {

      // GO NEXT STEP
      nextStep();
    }
  };

  // PREVIOUS QUESTION
  const handlePrevious = () => {

    if (
      currentQuestionIndex >
      0
    ) {

      setCurrentQuestionIndex(
        (
          prev
        ) => prev - 1
      );

    } else {

      prevStep();
    }
  };

  // EMPTY STATE
  if (
    questions.length === 0
  ) {

    return (

      <div className="h-full flex flex-col items-center justify-center text-center">

        <div
          className="w-24 h-24 rounded-[30px] flex items-center justify-center text-4xl font-light mb-8"
          style={{
            background:
              `${category.accent}20`,

            color:
              category.accent,
          }}
        >

          ?

        </div>

        <h2 className="text-5xl font-light tracking-[-0.05em] text-white mb-6">

          No Questions Added

        </h2>

        <p className="text-white/50 text-lg max-w-xl leading-relaxed">

          Condition questions are not configured
          for this category yet.

        </p>

      </div>

    );
  }

  return (

    <div className="h-full flex flex-col">

      {/* HEADER */}
      <div className="flex items-start justify-between gap-5 mb-12">

        <div>

          <p className="text-sm uppercase tracking-[0.28em] text-white/40 mb-4">

            Condition Evaluation

          </p>

          <h2 className="text-4xl font-light tracking-[-0.05em] text-white mb-4 leading-tight">

            {currentQuestion.title}

          </h2>

          <p className="text-white/50 text-lg">

            Question{" "}
            {currentQuestionIndex + 1}
            {" "}of{" "}
            {questions.length}

          </p>

        </div>

        {/* BACK */}
        <button
          onClick={
            handlePrevious
          }
          className="h-12 px-6 rounded-2xl border border-white/10 bg-white/5 hover:bg-white/[0.08] transition-all flex items-center gap-2 text-white/80"
        >

          <ChevronLeft
            size={18}
          />

          Back

        </button>

      </div>

      {/* PROGRESS */}
      <div className="w-full h-2 rounded-full bg-white/5 overflow-hidden mb-12">

        <div
          className="h-full rounded-full transition-all duration-500"
          style={{
            width: `${
              (
                (
                  currentQuestionIndex +
                  1
                ) /
                questions.length
              ) * 100
            }%`,

            background:
              category.accent,
          }}
        />

      </div>

      {/* OPTIONS */}
      <div className="grid sm:grid-cols-2 gap-5">

        {currentQuestion.options.map(
          (
            option,
            idx
          ) => {

            const active =
              selectedCondition[
                currentQuestion
                  .key
              ] === option;

            return (

              <button
                key={idx}
                onClick={() =>
                  handleAnswer(
                    option
                  )
                }
                className={`group relative overflow-hidden rounded-3xl border transition-all duration-300 p-7 text-left ${
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
                <div className="relative z-10 flex items-start justify-between gap-5">

                  <div>

                    <h3 className="text-2xl font-light tracking-[-0.03em] text-white mb-3">

                      {option}

                    </h3>

                    <p className="text-white/50 text-sm leading-relaxed">

                      Select this option to continue
                      your resale evaluation flow.

                    </p>

                  </div>

                  {/* CHECK */}
                  <div
                    className={`w-10 h-10 rounded-2xl border flex items-center justify-center transition-all ${
                      active
                        ? "border-transparent"
                        : "border-white/10 bg-white/5"
                    }`}
                    style={{
                      background:
                        active
                          ? category.accent
                          : "",
                    }}
                  >

                    {active && (

                      <Check
                        size={18}
                        color="#040B1A"
                      />

                    )}

                  </div>

                </div>

              </button>
            );
          }
        )}

      </div>

      {/* FOOTER */}
      <div className="mt-auto pt-12 flex items-center justify-between">

        <div>

          <p className="text-white/40 text-sm uppercase tracking-[0.2em] mb-2">

            Selected Device

          </p>

          <h3 className="text-white text-xl">

            {category.title}

          </h3>

        </div>

        <div className="flex items-center gap-3 text-white/40">

          <span>

            Instant Evaluation

          </span>

          <ArrowRight
            size={18}
          />

        </div>

      </div>

    </div>

  );
};

export default ConditionSelection;

