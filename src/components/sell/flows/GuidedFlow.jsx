
import React from "react";

import {
  ArrowRight,
  Upload,
  MapPin,
  Package,
  Check,
} from "lucide-react";

import useSellStore from "../../../store/useSellStore";

const GuidedFlow = ({
  category,
}) => {

  const {
    uploadedImages,
    setUploadedImages,
  } = useSellStore();

  // HANDLE IMAGE
  const handleImageUpload = (
    e
  ) => {

    const files = Array.from(
      e.target.files
    );

    const imageUrls =
      files.map((file) =>
        URL.createObjectURL(
          file
        )
      );

    setUploadedImages(
      imageUrls
    );
  };

  return (

    <div className="grid lg:grid-cols-[1fr_380px] gap-8">

      {/* LEFT SIDE */}
      <div>

        {/* STEPPER */}
        <div className="flex items-center gap-4 mb-10 overflow-x-auto pb-2">

          {category.flowSteps.map(
            (step, idx) => (

              <div
                key={step.id}
                className="flex items-center gap-4 shrink-0"
              >

                {/* STEP */}
                <div className="flex items-center gap-3">

                  <div
                    className={`w-12 h-12 rounded-2xl flex items-center justify-center text-sm font-semibold border transition-all ${
                      idx === 0
                        ? "text-black border-transparent"
                        : "bg-white/5 border-white/10 text-white/40"
                    }`}
                    style={{
                      background:
                        idx === 0
                          ? category.accent
                          : "",
                    }}
                  >

                    {idx === 0 ? (
                      <Check size={18} />
                    ) : (
                      idx + 1
                    )}

                  </div>

                  <div>

                    <p className="text-xs uppercase tracking-[0.2em] text-white/40 mb-1">

                      Step {idx + 1}

                    </p>

                    <h3 className="text-white/80">

                      {step.title}

                    </h3>

                  </div>

                </div>

                {/* LINE */}
                {idx !==
                  category.flowSteps
                    .length - 1 && (

                  <div className="w-10 h-[1px] bg-white/10" />

                )}

              </div>
            )
          )}

        </div>

        {/* MAIN CARD */}
        <div className="rounded-[40px] border border-white/10 bg-[#0D172A]/80 backdrop-blur-2xl p-8 lg:p-10 shadow-[0_20px_100px_rgba(0,0,0,0.35)]">

          {/* HEADER */}
          <div className="mb-10">

            <p className="text-sm uppercase tracking-[0.28em] text-white/40 mb-4">

              Asset Submission

            </p>

            <h2 className="text-4xl font-light tracking-[-0.05em] text-white mb-4">

              Upload Your Assets

            </h2>

            <p className="text-white/60 text-lg max-w-2xl">

              Share photos and basic details to
              receive a professional resale
              evaluation from our team.

            </p>

          </div>

          {/* UPLOAD BOX */}
          <label className="group relative flex flex-col items-center justify-center rounded-[32px] border-2 border-dashed border-white/10 bg-white/[0.03] hover:bg-white/[0.05] transition-all duration-300 p-12 cursor-pointer overflow-hidden">

            {/* GLOW */}
            <div
              className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-all duration-500"
              style={{
                background: `radial-gradient(circle at top right, ${category.accent}, transparent 60%)`,
              }}
            />

            <input
              type="file"
              multiple
              onChange={
                handleImageUpload
              }
              className="hidden"
            />

            {/* ICON */}
            <div
              className="relative z-10 w-20 h-20 rounded-3xl flex items-center justify-center mb-6"
              style={{
                background:
                  `${category.accent}20`,
              }}
            >

              <Upload
                size={36}
                style={{
                  color:
                    category.accent,
                }}
              />

            </div>

            <h3 className="relative z-10 text-2xl font-light text-white mb-3">

              Drag & Drop Images

            </h3>

            <p className="relative z-10 text-white/50 text-center max-w-md leading-relaxed">

              Upload clear photos of your assets
              for accurate valuation and faster
              approval process.

            </p>

          </label>

        </div>

      </div>

      {/* RIGHT SIDE */}
      <div>

        <div className="sticky top-28 rounded-[36px] border border-white/10 bg-[#0D172A]/90 backdrop-blur-2xl overflow-hidden shadow-[0_20px_100px_rgba(0,0,0,0.35)]">

          <div className="relative h-[260px] overflow-hidden">

            <img
              src={category.heroImage}
              alt={category.title}
              className="w-full h-full object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-[#040B1A] via-black/20 to-transparent" />

          </div>

          <div className="p-8">

            <p className="text-sm uppercase tracking-[0.2em] text-white/40 mb-4">

              Professional Evaluation

            </p>

            <h2 className="text-4xl font-light tracking-[-0.05em] text-white mb-5">

              Expert Review

            </h2>

            <p className="text-white/60 leading-relaxed mb-8">

              Our evaluation team reviews your
              submitted assets to provide the best
              resale market estimate.

            </p>

            <button
              className="w-full h-14 rounded-2xl flex items-center justify-center gap-2 text-[#040B1A] font-semibold transition-all hover:scale-[1.01]"
              style={{
                background:
                  category.accent,
              }}
            >

              Continue Submission

              <ArrowRight size={18} />

            </button>

          </div>

        </div>

      </div>

    </div>

  );
};

export default GuidedFlow;

